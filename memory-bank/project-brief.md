# TinyFat Documentation - Project Brief

## Overview

Public documentation site for tinyfat.com - the AI agent platform. Built with Astro Starlight, hosted on Cloudflare Pages at docs.tinyfat.com.

## Purpose

Help users understand and use TinyFat agents:
- What TinyFat is and how it works
- Getting started (signup, first email)
- Core concepts (memory, outbox, architecture)
- Guides (workspace, beads, email, skills, dashboard)
- Reference material

## Tech Stack

- **Framework:** Astro 5.x + Starlight 0.37
- **Hosting:** Cloudflare Pages
- **Domain:** docs.tinyfat.com

## Key Commands

```bash
npm run dev      # Local dev at localhost:4321
npm run build    # Build to ./dist/
npm run preview  # Preview production build
```

## Deployment

Manual deploy via wrangler:
```bash
npm run build
CLOUDFLARE_API_TOKEN=$(cat ~/.config/cloudflare/pages-token) npx wrangler pages deploy dist --project-name tinyfat-docs
```

## Content Structure

```
src/content/docs/
├── index.mdx              # Landing page with card grid
├── getting-started/       # Onboarding flow
│   ├── what-is-tinyfat.mdx
│   ├── quick-start.mdx
│   └── first-email.mdx
├── concepts/              # Mental models
│   ├── architecture.mdx
│   ├── memory.mdx
│   └── outbox.mdx
├── guides/                # How-to content
│   ├── beads.mdx
│   ├── dashboard.mdx
│   ├── email.mdx
│   ├── memory-bank.mdx
│   ├── skills.mdx
│   └── workspace.mdx
└── reference/             # Technical details
    ├── email-json.mdx
    ├── filesystem.mdx
    └── troubleshooting.mdx
```

## Related Projects

- `~/code/fat-agents` - Main platform (landing + dashboard)
- `~/code/fat-agent-container` - Container runtime
- tinyfat.com - Production site
