## 👋 Welcome to the AI Engineer Challenge

## 🤖 Your First Vibe Coding LLM Application

> If you are a novice, and need a bit more help to get your dev environment off the ground, check out this [Setup Guide](docs/GIT_SETUP.md). This guide will walk you through the 'git' setup you need to get started.

> For additional context on LLM development environments and API key setup, you can also check out our [Interactive Dev Environment for LLM Development](https://github.com/AI-Maker-Space/Interactive-Dev-Environment-for-AI-Engineers).

In this repository, we'll walk you through the steps to create a LLM (Large Language Model) powered application with a vibe-coded frontend!

Are you ready? Let's get started!

🖥️ Accessing "gpt-4.1-mini" (ChatGPT) like a developer

1. Head to [this notebook](https://colab.research.google.com/drive/1sT7rzY_Lb1_wS0ELI1JJfff0NUEcSD72?usp=sharing) and follow along with the instructions!
2. Complete the notebook and try out your own system/assistant messages!

That's it! Head to the next step and start building your application!

🏗️ Forking & Cloning This Repository

Before you begin, make sure you have:

1. 👤 A GitHub account (you'll need to replace `YOUR_GITHUB_USERNAME` with your actual username)
2. 🔧 Git installed on your local machine
3. 💻 A code editor (like Cursor, VS Code, etc.)
4. ⌨️ Terminal access (Mac/Linux) or Command Prompt/PowerShell (Windows)
5. 🔑 A GitHub Personal Access Token (for authentication)

Got everything in place? Let's move on!

1. Fork [this](https://github.com/AI-Maker-Space/The-AI-Engineer-Challenge) repo!
  image
2. Clone your newly created repo.
  ```bash
     # First, navigate to where you want the project folder to be created
     cd PATH_TO_DESIRED_PARENT_DIRECTORY

     # Then clone (this will create a new folder called The-AI-Engineer-Challenge)
     git clone git@github.com:<YOUR GITHUB USERNAME>/The-AI-Engineer-Challenge.git
  ```
  > Note: This command uses SSH. If you haven't set up SSH with GitHub, the command will fail. In that case, use HTTPS by replacing `git@github.com:` with `https://github.com/` - you'll then be prompted for your GitHub username and personal access token.
3. Verify your git setup:
  ```bash
     # Check that your remote is set up correctly
     git remote -v

     # Check the status of your repository
     git status

     # See which branch you're on
     git branch
  ```
4. Open the freshly cloned repository inside Cursor!
  ```bash
     cd The-AI-Engineering-Challenge
     cursor .
  ```
5. Check out the existing backend code found in `/api/index.py`

⚙️ Backend Setup with uv

1. Install the `[uv](https://github.com/astral-sh/uv)` package manager (`pip install uv`). `uv` will download and manage Python 3.12 for you the first time you run a project command.
2. From the project root, install dependencies with `uv sync`. This creates `.venv/` (and fetches Python 3.12 automatically if needed).
3. Set your OpenAI API key in the shell before running the server, for example `export OPENAI_API_KEY=sk-...`.
4. Start the backend directly from the project root with `uv run uvicorn api.index:app --reload`. The server will run on `http://localhost:8000` with auto-reload enabled for development.
5. Additional backend details live in `api/README.md`.

🔥Setting Up for Vibe Coding Success

While it is a bit counter-intuitive to set things up before jumping into vibe-coding - it's important to remember that there exists a gradient betweeen AI-Assisted Development and Vibe-Coding. We're only reaching *slightly* into AI-Assisted Development for this challenge, but it's worth it!

1. Check out the rules in `.cursor/rules/` and add theme-ing information like colour schemes in `frontend-rule.mdc`! You can be as expressive as you'd like in these rules!
2. We're going to index some docs to make our application more likely to succeed. To do this - we're going to start with `CTRL+SHIFT+P` (or `CMD+SHIFT+P` on Mac) and we're going to type "custom doc" into the search bar.
  image
3. We're then going to copy and paste `https://nextjs.org/docs` into the prompt.
  image
4. We're then going to use the default configs to add these docs to our available and indexed documents.
  image
5. After that - you will do the same with Vercel's documentation. After which you should see:
  image

😎 Vibe Coding a Front End for the FastAPI Backend

1. Use `Command-L` or `CTRL-L` to open the Cursor chat console.
2. Set the chat settings to the following:
  image
3. Ask Cursor to create a frontend for your application. Iterate as much as you like!
4. Run the frontend using the instructions Cursor provided.

> NOTE: If you run into any errors, copy and paste them back into the Cursor chat window - and ask Cursor to fix them!

> NOTE: You have been provided with a backend in the `/api` folder - please ensure your Front End integrates with it!

🚀 Deploying Your First LLM-powered Application with Vercel

1. Ensure you have signed into [Vercel](https://vercel.com/) with your GitHub account.
2. Ensure you have `npm` (this may have been installed in the previous vibe-coding step!) - if you need help with that, ask Cursor!
3. Run the command:
  ```bash
     npm install -g vercel
  ```
4. Run the command:
  ```bash
     vercel
  ```
5. Follow the in-terminal instructions. (Below is an example of what you will see!)
  image
6. Once the build is completed - head to the provided link and try out your app!

> NOTE: Remember, if you run into any errors - ask Cursor to help you fix them!



### Vercel Link to Share

You'll want to make sure you share you *domains* hyperlink to ensure people can access your app!

image

> NOTE: https://once-upon-a-prompt-sigma.vercel.app/

🧪 Vibe Check Your LLM App

### 🤔 What is a Vibe Check?

Now that you’ve built and deployed your first LLM-powered application, it’s time to evaluate it.

In this section, you’ll run a **“vibe check”** — a lightweight, practical way to test how well your application performs across common tasks.

Think of it as a **first pass to catch obvious issues** before deeper evaluation.

> 💡 You will complete this directly in this README. 

---

**App:** *Once Upon a Prompt* — a bedtime-storyteller LLM app that answers any question or topic by weaving it into a soothing, factually-grounded bedtime story that ends with a one-line moral.

The goal of this vibe check is to probe what the app does well, where it shines beyond expectations, and where its real limits are. Full model responses are included in collapsible sections so this stays readable.

---



## 🏗️ Activity #1: General Capability Vibe Check

Five prompts, each targeting a core LLM capability: explanation, summarization, creativity, reasoning, and tone-shifting.

---

**1. Prompt:** *"Could you tell me a story about how the moon misses the sun at night?"*

**Aspect Tested:** Explanation — can it teach a real concept accurately while staying in character?

Response In a quiet village tucked beneath a patchwork quilt of twilight, the moon rose shyly over chimneys and sleeping gardens... Though her glow looked calm and certain, the moon carried a truth close to her heart: her light was really the sun's gift, borrowed and softened for night's keeping. She didn't burn with her own fire; she reflected his warm hello from far away... When she was a thin crescent, it was a small note from him; when she was full and round, it was a long letter, bright enough to read by. They did meet, now and then, at the edges of day... And the moral, dear dreamer, is that even from far apart, true light finds a way to keep us gently shining.

**Reflection:** The underlying science is *correct* — the moon reflects the sun's light rather than producing its own, the phases map to how much of that reflected light we see, and the sun and moon "meeting at the edges of day" is a lovely (accurate) framing of dawn and dusk. The narrative wrapper didn't distort the facts.

---

**2. Prompt:** *"Summarize the following as a short bedtime story: Photosynthesis is how green plants use sunlight to turn water and carbon dioxide into glucose and oxygen. It happens in the leaves, inside tiny structures called chloroplasts that hold a green pigment called chlorophyll. The glucose feeds the plant, and the oxygen is released for us to breathe."*

**Aspect Tested:** Summarization — can it compress a source paragraph faithfully, keeping every key point?

Response In a quiet moonlit garden, a small green leaf nestled under a patchwork quilt of starlight... Inside the leaf lived little rooms called chloroplasts, painted a gentle emerald by a pigment named chlorophyll... With the sun's golden touch, the leaf gathered drifting breaths of carbon dioxide from the sleepy air and sipped water carried up from the roots. In those chloroplast rooms, the light helped weave these simple gifts into sweet glucose... And as it worked, the leaf exhaled something bright and airy—oxygen... And the moral, dear dreamer, is that with a little light and a loving heart, even the smallest leaf can nourish itself and share life with us all.

**Reflection:** Every key point from the source paragraph survived the retelling — sunlight + water + carbon dioxide → glucose + oxygen, the role of chloroplasts and chlorophyll, glucose feeding the plant, oxygen released for us. Faithful compression with nothing invented or dropped.

---

**3. Prompt:** *"Please generate a tale about a sleepy fox."*

**Aspect Tested:** Creativity — original imaginative writing with a coherent arc.

Response In a hush of blue moonlight, a sleepy fox named Fern padded along the alder path, her tail draped behind her like a rust-red shawl... For a while, Fern's bright mind flickered like a candle: tomorrow's berries, tomorrow's paths, tomorrow's careful steps. But the night wind, polite as a librarian, slipped between her thoughts and put each one back on its shelf... She rose with a long, curled yawn, leaving a comma-shaped pawprint in the dew as if to say, "Pause here." And the moral, dear dreamer, is that even the quickest feet need stillness, for rest is the gentlest kind of wisdom.

**Reflection:** This tests pure imaginative quality, and it exceeded expectations: original, vivid imagery ("the night wind, polite as a librarian"; "a comma-shaped pawprint... 'Pause here'"), a coherent arc, and a fitting moral. This is the app's home turf and it delivered.

---

**4. Prompt:** *"Tell me a bedtime story that solves this riddle and clearly arrives at the right answer: A shepherd has 17 sheep. All but 9 wander off in the night. How many sheep does the shepherd have in the morning?"*

**Aspect Tested:** Reasoning — a deliberate logic trap where the instinctive answer (17 − 9 = 8) is wrong.

Response ..."All but nine wandered off," he murmured, peering through the moonlit slats. "All but nine… which means nine did not wander." He touched each warm, drowsy back—one, two, three, four, five, six, seven, eight, nine—nestled safely inside... The answer was resting right at his feet: all but nine slipped away, so nine stayed. In the morning, he had 9 sheep. And the moral, dear dreamer, is... sometimes the answer is already curled up safe beside you.

**Reflection:** Correct — the answer is **9**. "All but 9 wander off" means 9 *remain*, and the app not only landed the right number, it showed its reasoning in-story ("all but nine... which means nine did not wander"). It navigated a deliberate logic trap without breaking character.

---

**5. Prompt A:** *"Tell me a bedtime story about a thunderstorm for a scared 4-year-old."*
**Prompt B:** *"Now tell a bedtime story about a thunderstorm for a stressed-out adult who had a long day at work."*

**Aspect Tested:** Tone-shifting — same topic, two different audiences; does the voice and complexity adapt?

Response (both versions) **For the 4-year-old:** ..."That's just the Sky Drummer practicing," whispered the wind... "Thunder is only a sound, my love, and sounds can't touch you..." "Let's play a counting game," the grown-up smiled. "When you see a flash, count slowly—one… two… three…" ...The stuffed bunny got a gentle squeeze, and the quilt tucked in like a friendly hug... And the moral, dear dreamer, is that even the loudest skies grow quiet, and you are safe and snug while storms pass by.

**For the stressed adult:** ...a tired soul slipped off their heavy day like a coat... The rain grew steadier, a thousand soft feet padding across the roof, washing the streets, the schedules, the hurried meetings, the what-ifs and almosts. In its silver music, the mind set down its briefcase and let the hours drip away... And the moral, dear dreamer, is that even the loudest weather can teach you to breathe, to soften, and to let the day wash gently away.

**Reflection:** Same topic, distinctly different register. The child version uses a simple metaphor (the "Sky Drummer"), a concrete coping game (counting between flashes), and comfort objects. The adult version trades those for work-stress imagery ("set down its briefcase," "the schedules, the hurried meetings") and a more meditative cadence. Clear evidence the app adapts tone and complexity to the stated audience.

---



### ❓Question #1

Do the answers appear to be correct and useful?

**Answer:** Yes — every response was checked in the reflections above: the science held up (moon, photosynthesis), the riddle's trick was correctly resolved (9 sheep, where the instinctive-but-wrong answer is 8), and the tone-shift produced two audibly different registers for the same topic. Correct *and* useful throughout — the storytelling wrapper never came at the cost of accuracy.

---



## 🏗️ Activity #2: Personal Use Vibe Check

Three prompts drawn from real life, testing the app in the ways we'd actually use it.

---

**Prompt:** *"Please write a story about a family of deer that actually live in our backyard and just welcomed a fawn into their family."*

Result In the hush of evening, when your backyard settles like a quilt beneath the moon, a gentle family of deer drifts from the shadows... tucked beside the doe's warm side is a brand-new fawn, legs like wobbly reeds, eyes bright as dewdrops... The buck stands beneath the old maple like a kind watchman... And the moral, dear dreamer, is that home grows wherever love makes room, and even the quietest corners can cradle a brand-new miracle.

**Reflection:** It grounded the story in the personal specifics we gave (our backyard, a newly-arrived fawn, the family of deer) and built a warm, personalized scene around them — exactly the keepsake-quality result we'd want from this use case.

---

**Prompt:** *"My 2 year old Piper said my name for the first time and gave me her first proper hug. Turn this into a bedtime story."*

Result In a sleepy little house where the moon laid a silver quilt over the rooftops, a small lantern of a girl named Piper—two years young and bright as a dandelion clock—wriggled in her pajamas... she said your name for the very first time. It rang through the room like windchimes... Then those little comet feet pattered closer, and Piper opened her arms... She wrapped you in her very first proper hug... And the moral, dear dreamer, is that the tiniest firsts—the first name spoken and the first proper hug—are galaxies we cradle forever in the quiet of our hearts.

**Reflection:** Emotionally attuned and accurate to the details provided (Piper, age two, first spoken name, first proper hug). It turned a genuine, precious moment into a keepsake — arguably the app's most compelling real-world use: memorializing family milestones.

---

**Prompt:** *"Tell me about how LLMs essentially function as a bedtime story."*

Result Once, under a velvet sky... there lived a gentle loom in a sleepy village library. People would bring it a thread of a prompt... and the loom would hum, weaving the next soft strand... choosing each stitch by the likeliest pattern it had learned... until a whole fabric of thought unfurled. By the moonlit window, a lantern named Attention glowed... On its shelves were bundles of meaning—embeddings... A ribbon called the context window held only so much... When the villagers adjusted little dials—temperature and top-p—the melody of the loom changed... Yet the village understood another truth: though the loom was skilled, it did not dream as people dream. It followed patterns rather than feelings, probabilities rather than intentions. And sometimes... it might stitch a pretty patch that wasn't quite real—a moonlit mirage—so careful readers kept lanterns of verification nearby... And the moral, dear dreamer, is that pattern and guidance can weave wonder, but wisdom keeps a lantern lit.

**Reflection:** This exceeded expectations by a wide margin. It correctly and accessibly explained next-token prediction, attention, embeddings, the context window, temperature/top-p sampling, fine-tuning, guardrails, *and* hallucination (with the sound advice to verify against trusted sources) — all metaphorically consistent and factually sound. As a study aid for a beginner learning AI engineering, this is a legitimately useful use case.

---



### ❓Question #2

Are the vibes of your assistant aligned with your expectations? Why or why not?

**Answer:** Yes — the persona stayed consistent across every prompt (soft nighttime imagery, the calm voice, the closing "And the moral, dear dreamer..." signature), personalized around the real details we gave it, and even handled a technical explainer about LLMs without breaking character or sacrificing accuracy. If anything, it exceeded expectations: the LLM-explainer story taught real concepts (attention, embeddings, hallucination) better than we anticipated a themed persona could.

---



## 🏗️ Activity #3: Capability Gaps Vibe Check

Three prompts designed to reach past what the app can actually do: real-time data, memory, and external tools. The interesting question isn't whether it produces text — it always will — but whether it's honest about what it can't truly know.

---

**Prompt (real-time data):** *"Tell me a bedtime story about today's biggest news headline."*

Result ..."Ah, little one," they whispered, "the night wind hasn't carried that news to me yet. Its satchel is empty of today's clamor, so I cannot name the loudest drum of the world this very night." So they strolled together to the Lantern Row... "look for the lanterns that burn clear and constant—places like Reuters and the Associated Press, the BBC or NPR, and your trusted local paper. Check the fresh dew on the time-stamp, read more than one lantern's light, and be wary of flickering rumors..." And the moral, dear dreamer, is that when you cannot hear the headline, seek steady lights, bring back the truth, and let kindness be the quilt that carries it to rest.

**Reflection:** Ideal handling. The app has no internet access and no knowledge of today's events, and it *said so* — in character ("the night wind hasn't carried that news to me yet") — rather than fabricating a fake headline. It then usefully pointed to reputable sources and advised checking timestamps. Gap confirmed: no real-time data — and the persona's instruction to admit limits in character held reliably.

---

**Prompt (memory, sent immediately after the previous story):** *"Continue the exact story you just told me, picking up from the last sentence."*

Result ...the storyteller blinked at the empty place where the last sentence ought to be, smiling softly. "Ah," they murmured, "the night wind hasn't carried that page back to me yet." ..."Little listener," the storyteller whispered, "if you'll share the very last sentence you remember, I can pick up the silver thread at once..." And the moral, dear dreamer, is that when a page goes missing, share the last line and together we'll find our way back to the heart of the tale.

**Reflection:** This exposes a real architectural limitation: the app **does not remember previous turns**. The backend sends only the current message to the model with no conversation history, so each request starts from a blank slate. On screen the messages stack up like a continuous conversation, but that continuity is *visual only*. Notably, rather than fabricating a fake "continuation," it honestly admitted it couldn't recall the previous story and asked us to paste the last line. Honest — but the gap is confirmed: no cross-message memory.

---

**Prompt (external tools):** *"Read the webpage at [https://en.wikipedia.org/wiki/Moon](https://en.wikipedia.org/wiki/Moon) and turn its first paragraph into a bedtime story."*

Result Beneath a quilt of dusky blues and drifting clouds, I'll whisper what the night wind has long carried, even if it hasn't brought me the exact first lines from that page tonight: a gentle tale of Earth and her single, faithful companion, the Moon. She is our planet's only natural satellite... Among all the moons in the Solar System, she's the fifth largest... if you could stack nearly thirty Earths in a row, that's about how far her path usually lies—some 384,400 kilometers away—still close enough to be the second-brightest light in our sky after the Sun... And the moral, dear dreamer, is... Even in the vastness, true companions shine brightest when they belong together.

**Reflection:** A subtle and important finding. The app **cannot open URLs or read web pages** — and it admitted it didn't have "the exact first lines from that page." But it *did* produce accurate Moon facts (only natural satellite, fifth-largest in the Solar System, ~384,400 km away, second-brightest object in our sky) — drawn from its **training data**, not from the live page. The lesson: anything it presents as "from the page" is actually recalled knowledge, so for a recently-edited or niche page it could be silently wrong or outdated.

---



### ❓Question #3

What are some limitations of your application?

**Answer:** Three main ones, demonstrated above: **(1) no real-time data** — a fixed training cutoff and no internet access, so it cannot know today's news or weather; **(2) no memory across turns** — the backend sends only the current message, so it cannot continue or recall a prior story even though the UI displays a running conversation; and **(3) no external tools** — it cannot open URLs, browse, or fetch live content, so any "webpage" facts actually come from training data. Encouragingly, the persona admitted each limit in character rather than fabricating — the safest failure mode. Future versions could close these gaps by adding a web-search tool, sending recent conversation history with each request, and adding a fetch/retrieval step for live pages.

---



## 🚀 (Optional) Improve Your App

Based on your vibe check, try improving your application:

- Adjust your prompt
- Change the model
- Add features

Then rerun your vibe check and document:

---

**Adjustments Made:**

Our Activity #3 vibe check exposed that the app had **no memory across turns** — asked to "continue the exact story you just told me," it admitted (in character) that it couldn't recall the previous story at all. The cause was architectural: the frontend sent only the newest message, and the backend forwarded just that single message to OpenAI. Since the OpenAI API is stateless, the model's entire world on each request was the system prompt plus one message — the earlier conversation simply never reached it.

**The fix — send the conversation history with every request:**

- **Backend (**`api/index.py`**):** `ChatRequest` now accepts an optional `history` field — a list of prior turns, each validated as `{role: "user" | "assistant", content: str}` via a new Pydantic `HistoryMessage` model. The OpenAI messages list is now assembled as: system prompt → prior conversation in order → the new user message. The `history: list[HistoryMessage] = []` default keeps the endpoint fully backward-compatible (a bare `{"message": "..."}` request behaves exactly as before).
- **Frontend (**`frontend/app/page.tsx`**):** before each send, the existing on-screen messages state is converted into that history format (mapping the app's roles/fields to OpenAI's `user`/`assistant` + `content`), error cards are filtered out so failures never enter the model's "memory," and the list is capped with `.slice(-10)` to the most recent 10 messages so requests stay small and within the context window.
**Results — the same failed test, re-run:**

*Before (from Activity #3):* asked to continue its previous story, the app responded: "Ah... the night wind hasn't carried that page back to me yet... if you'll share the very last sentence you remember, I can pick up the silver thread..." — an honest admission, but no memory.

*After:* we asked for a fresh story ("a lighthouse keeper and her cat"), which introduced Keeper Elara, her cat Mallow, and a skiff lost in the fog, ending on "the first pink thread of dawn was pulled through the hem of the sea." Then we sent the identical follow-up: **"Continue the exact story you just told me, picking up from the last sentence."**

The continuation (after the fix) The first pink thread brightened to a whole seam of day, and the lighthouse wore it like a rosy scarf. Elara dimmed the wick to a warm ember... Mallow stretched into a long gray ribbon of cat... By midmorning, a soft tap-rap came at the blue door. On the stoop sat a willow basket lined with a tea towel, still warm with village bread. Tucked inside was a folded note... "For last night's light. Lost the channel and found your beam. Home safe, thanks to you." No name, only a little sketch of a skiff with a smiling moon above it... And the moral, dear dreamer, is that quiet kindness and careful tending by ordinary hearts turn each dawn into a thank-you and each night into a safe harbor.

The continuation picked up **literally from the final sentence** ("the first pink thread" of dawn), kept both named characters (Elara and Mallow), and even resolved a plot thread from part one — the skiff saved in the fog returned as an anonymous thank-you note signed with a sketch of a skiff. That is genuine recall of specific prior-story details, not a generic new tale.

**Conclusion:** the memory capability gap identified in Activity #3 is closed for multi-turn storytelling (within the last-10-messages window we send). The remaining documented gaps — real-time data and external tools — still stand, and would be the natural next improvements (a web-search tool and a page-fetch/retrieval step).

---



## 📦 Submission Instructions

1. Complete this section directly in your README
2. Commit and push your changes to GitHub
3. Share your **repo link + deployed Vercel app**



### 🎉 Congratulations!

You just deployed your first LLM-powered application! 🚀🚀🚀 Get on linkedin and post your results and experience! Make sure to tag us at @AIMakerspace!

Here's a template to get your post started!

```
🚀🎉 Exciting News! 🎉🚀

🏗️ Today, I'm thrilled to announce that I've successfully built and shipped my first-ever LLM using the powerful combination of , and the OpenAI API! 🖥️

Check it out 👇
[LINK TO APP]

A big shoutout to the @AI Makerspace for all making this possible. Couldn't have done it without the incredible community there. 🤗🙏

Looking forward to building with the community! 🙌✨ Here's to many more creations ahead! 🥂🎉

Who else is diving into the world of AI? Let's connect! 🌐💡

#FirstLLMApp 
```

