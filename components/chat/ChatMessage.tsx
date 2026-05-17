"use client";

import { motion } from "framer-motion";
import type { ChatMessage as Message } from "@/store/chatStore";
import { cn } from "@/lib/utils";

export default function ChatMessage({ message }: { message: Message }) {
  const isUser = message.role === "user";
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className={cn("flex", isUser ? "justify-end" : "justify-start")}
    >
      <div
        className={cn(
          "max-w-[82%] rounded-sm px-4 py-3 text-sm leading-relaxed",
          isUser ? "bg-gold text-obsidian" : "bg-ivory/10 text-ivory"
        )}
      >
        {message.content}
      </div>
    </motion.div>
  );
}
