"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Bot, Send, X } from "lucide-react";
import { FormEvent, KeyboardEvent, useEffect, useRef, useState } from "react";
import ChatMessage from "@/components/chat/ChatMessage";
import { Button } from "@/components/ui/button";
import { useChatStore } from "@/store/chatStore";

const prompts = [
  "What design styles do you specialize in?",
  "Show me living room inspirations",
  "How do I book a consultation?"
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
        "I can help with styles, catalog ideas, and consultation planning. The live AI endpoint is not configured yet, but the studio brief is ready."
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
        className="fixed bottom-6 right-6 z-[95] grid h-16 w-16 place-items-center rounded-full border border-gold bg-obsidian text-gold shadow-luxury"
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.96 }}
        aria-label="Open LUMI chat"
      >
        <Bot size={24} />
      </motion.button>
      <AnimatePresence>
        {isOpen && (
          <motion.section
            role="dialog"
            aria-label="LUMI design consultant"
            className="fixed bottom-24 right-4 z-[96] flex h-[min(680px,calc(100vh-8rem))] w-[calc(100vw-2rem)] flex-col bg-obsidian text-ivory shadow-luxury sm:right-6 sm:w-[420px]"
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.96 }}
            transition={{ type: "spring", stiffness: 180, damping: 24 }}
          >
            <header className="flex items-center justify-between border-b border-ivory/10 p-5">
              <div>
                <p className="caption-label text-gold">LUMI</p>
                <h2 className="font-display text-3xl">Design Consultant</h2>
              </div>
              <button onClick={close} className="grid h-10 w-10 place-items-center border border-ivory/15">
                <X size={18} />
                <span className="sr-only">Close chat</span>
              </button>
            </header>
            <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto p-5">
              {messages.length === 0 && (
                <div className="space-y-3">
                  <p className="text-sm text-mist">Ask about styles, services, catalog concepts, or booking a consultation.</p>
                  {prompts.map((prompt) => (
                    <button
                      key={prompt}
                      onClick={() => void send(prompt)}
                      className="block w-full border border-ivory/10 px-4 py-3 text-left text-sm transition hover:border-gold hover:text-gold"
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
                      className="h-2 w-2 rounded-full bg-gold"
                      animate={{ opacity: [0.25, 1, 0.25], y: [0, -4, 0] }}
                      transition={{ duration: 0.9, repeat: Infinity, delay: dot * 0.12 }}
                    />
                  ))}
                </div>
              )}
            </div>
            <form onSubmit={submit} className="flex gap-2 border-t border-ivory/10 p-4">
              <input
                value={input}
                onChange={(event) => setInput(event.target.value)}
                onKeyDown={keyDown}
                placeholder="Ask LUMI..."
                className="min-w-0 flex-1 rounded-sm border border-ivory/15 bg-transparent px-4 text-sm outline-none focus:border-gold"
              />
              <Button type="submit" size="sm" disabled={loading || !input.trim()} aria-label="Send message">
                <Send size={15} />
              </Button>
            </form>
          </motion.section>
        )}
      </AnimatePresence>
    </>
  );
}
