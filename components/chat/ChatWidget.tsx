"use client";

import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle, Send, Sparkles, X } from "lucide-react";
import Image from "next/image";
import { FormEvent, KeyboardEvent, useEffect, useRef, useState } from "react";
import ChatMessage from "@/components/chat/ChatMessage";
import { Button } from "@/components/ui/button";
import { useChatStore } from "@/store/chatStore";
import { EASE_EXPO } from "@/lib/motion";

const prompts = [
  "What does a modular kitchen cost in Hyderabad?",
  "How long does a full home interior take?",
  "Show me luxury living room ideas",
  "How do I book a free site visit?"
];

function id() {
  return crypto.randomUUID();
}

export default function ChatWidget() {
  const { isOpen, messages, toggle, close, addMessage, updateMessage, contextPrompt, setContextPrompt } =
    useChatStore();
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, loading]);

  useEffect(() => {
    if (contextPrompt) {
      void send(contextPrompt);
      setContextPrompt(null);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [contextPrompt]);

  useEffect(() => {
    const onKey = (event: globalThis.KeyboardEvent) => {
      if (event.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [close]);

  async function send(text: string) {
    const trimmed = text.trim();
    if (!trimmed || loading) return;
    setInput("");
    const userMessage = { id: id(), role: "user" as const, content: trimmed };
    const assistantId = id();
    addMessage(userMessage);
    addMessage({ id: assistantId, role: "assistant", content: "" });
    setLoading(true);
    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: [...messages, userMessage] })
      });
      if (!response.ok || !response.body) throw new Error("Chat request failed");
      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let content = "";
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        content += decoder.decode(value, { stream: true });
        updateMessage(assistantId, content);
      }
    } catch {
      updateMessage(
        assistantId,
        "I can help with ENR's modular kitchens, full home interiors, commercial fit-outs, budgets, timelines, and free site visits. The live AI endpoint is not configured yet — but our team is ready to help. Call us at +91 98765 43210."
      );
    } finally {
      setLoading(false);
    }
  }

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    void send(input);
  }

  function keyDown(event: KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      void send(input);
    }
  }

  return (
    <>
      {/* Floating Button */}
      <motion.button
        onClick={toggle}
        data-cursor-label="Chat"
        className="fixed bottom-6 right-6 z-[95] grid h-16 w-16 place-items-center bg-[var(--enr-accent-gold)] text-[var(--color-obsidian)] shadow-gold-glow transition-shadow hover:shadow-gold-subtle"
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.96 }}
        aria-label="Open ENR Design Assistant chat"
      >
        <Sparkles size={22} />
      </motion.button>

      {/* Chat Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.section
            role="dialog"
            aria-label="ENR Design Assistant"
            className="fixed bottom-0 right-0 top-0 z-[96] flex w-[calc(100vw-1rem)] max-w-[460px] flex-col border-l border-[var(--enr-border)] bg-[var(--color-obsidian)] text-[var(--enr-text-primary)] shadow-luxury"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.8, ease: EASE_EXPO }}
          >
            {/* Header */}
            <header className="flex items-center justify-between border-b border-[var(--enr-border)] bg-[var(--color-obsidian)] p-5">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center border border-[var(--enr-accent-gold)]/30 bg-[var(--color-charcoal)]">
                  <Image src="/logo/enr-logo.png" alt="ENR" width={24} height={24} className="h-6 w-6 object-contain" />
                </div>
                <div>
                  <p className="caption-label text-[var(--enr-accent-gold)]">Powered by AI</p>
                  <h2 className="font-display text-xl">ENR Design Assistant</h2>
                </div>
              </div>
              <button
                onClick={close}
                className="grid h-10 w-10 place-items-center border border-[var(--enr-border)] transition-colors hover:border-[var(--enr-accent-gold)] hover:text-[var(--enr-accent-gold)]"
              >
                <X size={16} />
                <span className="sr-only">Close chat</span>
              </button>
            </header>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto p-5">
              {messages.length === 0 && (
                <div className="space-y-3">
                  <p className="text-sm text-[var(--enr-text-muted)]">
                    Ask about kitchen costs, timelines, luxury living room ideas, or booking a site visit.
                  </p>
                  <div className="space-y-2">
                    {prompts.map((prompt) => (
                      <button
                        key={prompt}
                        onClick={() => void send(prompt)}
                        className="block w-full border border-[var(--enr-border)] px-4 py-3 text-left text-sm transition-all hover:border-[var(--enr-accent-gold)] hover:text-[var(--enr-accent-gold)]"
                      >
                        {prompt}
                      </button>
                    ))}
                  </div>
                </div>
              )}
              {messages.map((message) => (
                <ChatMessage key={message.id} message={message} />
              ))}
              {loading && (
                <div className="flex gap-1.5 px-2 py-2">
                  {[0, 1, 2].map((dot) => (
                    <motion.span
                      key={dot}
                      className="h-2 w-2 bg-[var(--enr-accent-gold)]"
                      animate={{ opacity: [0.25, 1, 0.25], y: [0, -4, 0] }}
                      transition={{ duration: 0.9, repeat: Infinity, delay: dot * 0.12 }}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Input */}
            <form onSubmit={submit} className="flex gap-2 border-t border-[var(--enr-border)] p-4">
              <input
                value={input}
                onChange={(event) => setInput(event.target.value)}
                onKeyDown={keyDown}
                placeholder="Ask ENR..."
                className="min-w-0 flex-1 border border-[var(--enr-border)] bg-transparent px-4 py-3 text-sm outline-none transition-colors focus:border-[var(--enr-accent-gold)]"
              />
              <Button
                type="submit"
                size="sm"
                disabled={loading || !input.trim()}
                aria-label="Send message"
                className="bg-[var(--enr-accent-gold)] text-[var(--color-obsidian)] hover:bg-[var(--enr-accent-glow)]"
              >
                <Send size={15} />
              </Button>
            </form>
          </motion.section>
        )}
      </AnimatePresence>
    </>
  );
}
