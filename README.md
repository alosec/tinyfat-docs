# TinyFat Documentation

Documentation site for [TinyFat](https://tinyfat.com) — your AI agent in the cloud.

**Live site:** [docs.tinyfat.com](https://docs.tinyfat.com)

## What is TinyFat?

TinyFat gives you a personal AI agent that runs 24/7 in the cloud. You email it, it thinks, it replies. No apps to install, no complex setup — just email.

- **Email-first** — Send to `yourname@tinyfat.com`, get a response
- **Persistent** — Files and memory survive between conversations
- **Open source runtime** — Built on [pi-mono](https://github.com/badlogic/pi-mono)
- **$1 free credits** — No API key required to start

## Tech Stack

- [Astro](https://astro.build) — Static site generator
- [Starlight](https://starlight.astro.build) — Documentation theme
- [Cloudflare Pages](https://pages.cloudflare.com) — Hosting

## Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment

Deploys automatically on push to `main` via Cloudflare Pages, or manually:

```bash
npm run build
npx wrangler pages deploy dist --project-name tf-docs-tinyfat
```

## Structure

```
src/content/docs/
├── getting-started/     # Quick start, first email
├── guides/              # Workspace, email, skills, dashboard
├── interfaces/          # Email, Slack, web app
├── concepts/            # Architecture, memory, outbox
└── reference/           # Filesystem, email JSON, troubleshooting
```

## Contributing

Found an error? Want to improve the docs? PRs welcome.

## License

MIT
