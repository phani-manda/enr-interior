"use client";

import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle, Send, X } from "lucide-react";
import Image from "next/image";
import { FormEvent, KeyboardEvent, useEffect, useRef, useState } from "react";
import ChatMessage from "@/components/chat/ChatMessage";
import { Button } from "@/components/ui/button";
import { useChatStore } from "@/store/chatStore";

const prompts = [
  "What does a modular kitchen cost in Hyderabad?",
  "How long does a full home interior take?",
  "Show me contemporary living room ideas",
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
        "I can help with ENR's modular kitchens, full home interiors, commercial fit-outs, budgets, timelines, and free site visits. The live AI endpoint is not configured yet."
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
      <motion.button
        onClick={toggle}
        data-cursor-label="Open"
        className="fixed bottom-6 right-6 z-[95] grid h-16 w-16 place-items-center rounded-full bg-[var(--enr-accent-gold)] text-black shadow-luxury"
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.96 }}
        aria-label="Open ENR Design Assistant chat"
      >
        <MessageCircle size={24} />
      </motion.button>
      <AnimatePresence>
        {isOpen && (
          <motion.section
            role="dialog"
            aria-label="ENR Design Assistant"
            className="fixed bottom-0 right-0 top-0 z-[96] flex w-[calc(100vw-1.5rem)] max-w-[460px] flex-col border-l border-[var(--enr-border)] bg-[var(--enr-bg-secondary)] text-[var(--enr-text-primary)] shadow-luxury"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          >
            <header className="flex items-center justify-between border-b border-[var(--enr-border)] bg-[var(--enr-bg-secondary)] p-5">
              <div className="flex items-center gap-3">
                <Image src="/logo/enr-logo.png" alt="ENR" width={32} height={32} className="h-8 w-8 object-contain" />
                <div>
                  <p className="caption-label text-[var(--enr-accent-gold)]">Powered by AI</p>
                  <h2 className="font-display text-2xl">ENR Design Assistant</h2>
                </div>
              </div>
              <button onClick={close} className="grid h-10 w-10 place-items-center border border-[var(--enr-border)]">
                <X size={18} />
                <span className="sr-only">Close chat</span>
              </button>
            </header>
            <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto p-5">
              {messages.length === 0 && (
                <div className="space-y-3">
                  <p className="text-sm text-[var(--enr-text-muted)]">Ask about modular kitchens, wardrobes, false ceilings, or booking a site visit.</p>
                  {prompts.map((prompt) => (
                    <button
                      key={prompt}
                      onClick={() => void send(prompt)}
                      className="block w-full border border-[var(--enr-border)] px-4 py-3 text-left text-sm transition hover:border-[var(--enr-accent-gold)] hover:text-[var(--enr-accent-gold)]"
                    >
                      {prompt}
                    </button>
                  ))}
                </div>
              )}
              {messages.map((message) => (
                <ChatMessage key={message.id} message={message} />
              ))}
              {loading && (
                <div className="flex gap-1 px-2">
                  {[0, 1, 2].map((dot) => (
                    <motion.span
                      key={dot}
                      className="h-2 w-2 rounded-full bg-[var(--enr-accent-gold)]"
                      animate={{ opacity: [0.25, 1, 0.25], y: [0, -4, 0] }}
                      transition={{ duration: 0.9, repeat: Infinity, delay: dot * 0.12 }}
                    />
                  ))}
                </div>
              )}
            </div>
            <form onSubmit={submit} className="flex gap-2 border-t border-[var(--enr-border)] p-4">
              <input
                value={input}
                onChange={(event) => setInput(event.target.value)}
                onKeyDown={keyDown}
                placeholder="Ask ENR..."
                className="min-w-0 flex-1 border border-[var(--enr-border)] bg-transparent px-4 text-sm outline-none focus:border-[var(--enr-accent-gold)]"
              />
              <Button type="submit" size="sm" disabled={loading || !input.trim()} aria-label="Send message" className="bg-[var(--enr-accent-gold)] text-black hover:bg-[var(--enr-accent-glow)]">
                <Send size={15} />
              </Button>
            </form>
          </motion.section>
        )}
      </AnimatePresence>
    </>
  );
}
