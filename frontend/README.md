# Once Upon a Prompt — Frontend

A cozy, nighttime-themed bedtime storyteller UI built with [Next.js](https://nextjs.org).
It talks to the FastAPI backend in `../api`, which wraps OpenAI in a
storyteller persona.

## Prerequisites

- Node.js 18+ (check with `node --version`)
- The FastAPI backend running at `http://127.0.0.1:8000` (see below)

## Running the app locally

You need **two terminals** — one for the backend, one for the frontend.

### Terminal 1 — start the backend

From the **repository root**:

```bash
uv run uvicorn api.index:app --reload --port 8000
```

(Requires an `OPENAI_API_KEY` in your environment or a `.env` file.)

### Terminal 2 — start the frontend

From the **`frontend/` directory**:

```bash
npm install   # first time only — downloads dependencies
npm run dev   # starts the dev server
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.
Type what you'd like tonight's story to be about and press **Send**.

## Configuration

By default the frontend calls the backend at `http://127.0.0.1:8000`.
To point it somewhere else (e.g. a deployed backend), create a
`.env.local` file in this directory:

```bash
NEXT_PUBLIC_API_URL=https://your-backend.example.com
```

## Project structure

- `app/page.tsx` — the single chat page (messages, input, loading/error states)
- `app/page.module.css` — styles for the page
- `app/layout.tsx` — fonts, page metadata, and the HTML shell
- `app/globals.css` — the night-sky color palette and base styles
