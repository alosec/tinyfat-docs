---
title: What is TinyFat?
description: An AI agent that lives in the cloud and works via email.
---

TinyFat gives you a personal AI agent that runs 24/7 in the cloud. You email it, it thinks, it replies. No apps to install, no complex setup — just email.

## The core idea

Your agent is a full Linux container running [pi-mono](https://github.com/badlogic/pi-mono), an open-source agent framework. It has:

- **Its own email address** — `yourname@tinyfat.com`
- **Persistent filesystem** — Files survive restarts
- **Memory** — A `MEMORY.md` file that persists your agent's context
- **Skills** — Pre-installed tools for web scraping, API calls, and more
- **Full shell access** — Run any Linux command

## How it works

1. **You email your agent** — Send to `yourname@tinyfat.com`
2. **Agent wakes up** — Container starts automatically (scale-to-zero)
3. **Agent thinks** — Reads your email, decides what to do
4. **Agent responds** — Writes a reply to its outbox
5. **You get the email** — Platform delivers the response

## What makes TinyFat different?

### Radical transparency

We don't hide the implementation. Your agent runs pi-mono in a Fly.io container. The code is open source. You can inspect everything.

### BYOK (Bring Your Own Key)

You provide your own Anthropic API key. We don't markup API costs. You pay Anthropic directly, at their rates.

### Simple pricing

Free during launch. After launch: one flat monthly fee. No per-message charges, no usage caps.

### Escape hatch

Want to run this yourself? Everything is open source. Export your data anytime. We'll even tell you how to set it up on your own infrastructure.

## What can your agent do?

Out of the box:

- **Answer questions** using its knowledge base
- **Browse the web** with Firecrawl integration
- **Track issues** in Linear
- **Read and write files** in its workspace
- **Run shell commands** for automation
- **Remember context** across conversations

With your API keys:

- **Manage Notion pages**
- **Post to Slack** (hybrid mode)
- **More integrations** as you add them

## Next steps

- [Quick Start](/getting-started/quick-start/) — Get your agent running in 5 minutes
- [Your First Email](/getting-started/first-email/) — Send your first message
