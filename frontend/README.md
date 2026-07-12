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

By default the frontend calls the backend at `http://127.0.0.1:8000` during local
development. On Vercel, it automatically uses the same deployed domain
(`/api/chat`) — no extra setup needed.

To point the frontend at a different backend (e.g. a separately deployed API),
create a `.env.local` file in this directory:

```bash
NEXT_PUBLIC_API_URL=https://your-backend.example.com
```

## Deploying to Vercel (with the FastAPI backend)

This repo is set up for a **single Vercel project** at the repository root
(not the `frontend/` folder). The root `vercel.json` uses **Vercel Services**
to build and route both apps on one domain:

- `frontend/` → Next.js app (pages, static assets)
- `api/index.py` → FastAPI backend (`/api/chat`, etc.), with a 60s timeout
  for story generation

From the **repository root**, run:

```bash
npm install -g vercel   # first time only
vercel                  # follow prompts; keep Root Directory as `.`
```

In the Vercel dashboard, set **Root Directory** to `.` (leave blank / repo root).
Do **not** set it to `frontend/` — that would skip the Python API.

### Environment variables (Vercel dashboard → Settings → Environment Variables)

| Variable | Required? | Purpose |
| --- | --- | --- |
| `OPENAI_API_KEY` | **Yes** | Your OpenAI API key; used by `api/index.py` at runtime |
| `NEXT_PUBLIC_API_URL` | No | Only if the API lives on a different domain. Leave unset for the default single-deployment setup |

Apply `OPENAI_API_KEY` to **Production**, **Preview**, and **Development** so
preview deploys work too.

## Project structure

- `app/page.tsx` — the single chat page (messages, input, loading/error states)
- `app/page.module.css` — styles for the page
- `app/layout.tsx` — fonts, page metadata, and the HTML shell
- `app/globals.css` — the night-sky color palette and base styles
