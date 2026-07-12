"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./page.module.css";

// Where the FastAPI backend lives. Locally this is http://127.0.0.1:8000.
// When deployed, you can override it by setting NEXT_PUBLIC_API_URL.
const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://127.0.0.1:8000";

// A kind, in-character message shown if the backend can't be reached
// or returns an error.
const GENTLE_ERROR =
  "Oh dear... the storyteller's candle flickered out for a moment, and your " +
  "tale was lost on the night wind. Tuck yourself in, take a breath, and " +
  "try asking once more.";

type Message = {
  role: "user" | "storyteller" | "error";
  text: string;
};

export default function Home() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // An invisible marker at the bottom of the message list; we scroll it
  // into view whenever a new message arrives so the latest story is visible.
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    const message = input.trim();
    if (!message || isLoading) return;

    // Build the conversation history to send along, so the storyteller
    // remembers earlier turns. Error cards are skipped (they're only
    // shown locally), and we keep just the most recent 10 messages so
    // the request stays small.
    const history = messages
      .filter((msg) => msg.role !== "error")
      .map((msg) => ({
        role: msg.role === "user" ? ("user" as const) : ("assistant" as const),
        content: msg.text,
      }))
      .slice(-10);

    // Show the user's request right away, then ask the backend for a story.
    setMessages((prev) => [...prev, { role: "user", text: message }]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch(`${API_URL}/api/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message, history }),
      });

      if (!response.ok) {
        throw new Error(`Backend responded with status ${response.status}`);
      }

      const data: { reply: string } = await response.json();
      setMessages((prev) => [...prev, { role: "storyteller", text: data.reply }]);
    } catch {
      setMessages((prev) => [...prev, { role: "error", text: GENTLE_ERROR }]);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <span className={styles.moon} aria-hidden="true">
          🌙<span className={styles.stars}>✦ ˚ ✧</span>
        </span>
        <h1 className={styles.title}>Once Upon a Prompt</h1>
        <p className={styles.subtitle}>a bedtime storyteller</p>
      </header>

      <main className={styles.conversation}>
        {messages.length === 0 && !isLoading && (
          <p className={styles.emptyState}>
            The night is quiet, the quilts are warm, and the storyteller is
            listening. Whisper a wish for a tale below.
          </p>
        )}

        {messages.map((msg, i) => (
          <article
            key={i}
            className={
              msg.role === "user"
                ? styles.userCard
                : msg.role === "error"
                  ? styles.errorCard
                  : styles.storyCard
            }
          >
            {msg.text}
          </article>
        ))}

        {isLoading && (
          <p className={styles.dreaming}>
            The storyteller is dreaming up your tale…
          </p>
        )}

        <div ref={bottomRef} />
      </main>

      <form className={styles.inputBar} onSubmit={handleSubmit}>
        <input
          className={styles.input}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="What shall tonight's story be about?"
          aria-label="Story request"
          disabled={isLoading}
        />
        <button
          className={styles.sendButton}
          type="submit"
          disabled={isLoading || input.trim() === ""}
        >
          Send
        </button>
      </form>
    </div>
  );
}
