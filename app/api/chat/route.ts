import { NextRequest } from "next/server";
import type { ChatMessage } from "@/store/chatStore";

const systemPrompt =
  "You are LUMI, the AI design consultant for LUMINE Studio. Help visitors explore design styles, understand services, browse the catalog, and book consultations. Be elegant, knowledgeable, and concise.";

interface ChatPayload {
  messages: ChatMessage[];
}

export async function POST(request: NextRequest) {
  const body = (await request.json()) as ChatPayload;
  const endpoint = process.env.NEXT_PUBLIC_AI_API_URL;

  if (!endpoint) {
    return streamText(
      "LUMI is ready. Configure NEXT_PUBLIC_AI_API_URL with an OpenAI-compatible chat endpoint to enable live streaming responses."
    );
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
    return streamText(
      "I can guide you through LUMINE Studio's styles, services, catalog concepts, and consultation process. The live AI endpoint needs a valid OpenAI-compatible URL."
    );
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
