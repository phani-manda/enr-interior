"use client";

import { create } from "zustand";

export type ChatRole = "user" | "assistant" | "system";

export interface ChatMessage {
  id: string;
  role: ChatRole;
  content: string;
}

interface ChatStore {
  isOpen: boolean;
  messages: ChatMessage[];
  contextPrompt: string | null;
  open: () => void;
  close: () => void;
  toggle: () => void;
  addMessage: (message: ChatMessage) => void;
  updateMessage: (id: string, content: string) => void;
  setContextPrompt: (prompt: string | null) => void;
}

export const useChatStore = create<ChatStore>((set) => ({
  isOpen: false,
  messages: [],
  contextPrompt: null,
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),
  toggle: () => set((state) => ({ isOpen: !state.isOpen })),
  addMessage: (message) => set((state) => ({ messages: [...state.messages, message] })),
  updateMessage: (id, content) =>
    set((state) => ({
      messages: state.messages.map((message) =>
        message.id === id ? { ...message, content } : message
      )
    })),
  setContextPrompt: (prompt) => set({ contextPrompt: prompt, isOpen: true })
}));
