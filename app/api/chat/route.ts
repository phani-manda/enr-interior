import { NextRequest } from "next/server";
import type { ChatMessage } from "@/store/chatStore";

const systemPrompt =
  "You are ENR Interiors' AI assistant. Guide users on Modular Kitchens, Wardrobes, and False Ceilings. Push users gently toward booking a free site visit. You know the address is 7-949, Adarsh Nagar, Hyderabad.";

interface ChatPayload {
  messages: ChatMessage[];
}

export async function POST(request: NextRequest) {
  const body = (await request.json()) as ChatPayload;
  const endpoint = process.env.NEXT_PUBLIC_AI_API_URL;

  if (!endpoint) {
    return streamText("ENR Design Assistant is ready. Ask about modular kitchens, wardrobes, false ceilings, or booking a free site visit.");
  }

  try {
    const upstream = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(process.env.AI_API_KEY ? { Authorization: `Bearer ${process.env.AI_API_KEY}` } : {})
      },
      body: JSON.stringify({
        model: process.env.AI_MODEL ?? "gpt-4o-mini",
        stream: true,
        messages: [
          { role: "system", content: systemPrompt },
          ...(body.messages ?? []).map(({ role, content }) => ({ role, content }))
        ]
      })
    });

    if (!upstream.ok || !upstream.body) throw new Error("Upstream chat failed");
    return new Response(upstream.body, {
      headers: { "Content-Type": "text/plain; charset=utf-8" }
    });
  } catch {
    return streamText("I can guide you through ENR's modular kitchens, wardrobes, false ceilings, materials, and free site visits. The live AI endpoint needs a valid OpenAI-compatible URL.");
  }
}

function streamText(text: string) {
  const encoder = new TextEncoder();
  const stream = new ReadableStream<Uint8Array>({
    async start(controller) {
      for (const token of text.split(" ")) {
        controller.enqueue(encoder.encode(`${token} `));
        await new Promise((resolve) => setTimeout(resolve, 22));
      }
      controller.close();
    }
  });
  return new Response(stream, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
