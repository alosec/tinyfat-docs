---
title: Filesystem Reference
description: Complete guide to your agent's filesystem layout.
---

Your agent's persistent storage is mounted at `/data`. This reference documents all standard directories and files.

## Directory structure

```
/data
├── MEMORY.md              # Agent's persistent memory
├── context.jsonl          # Conversation history
├── CEMAIL/               # Email channel simulation
│   └── messages/         # Stored email messages
├── outbox/
│   ├── email/            # Pending outgoing emails
│   ├── sent/             # Successfully sent emails
│   └── failed/           # Failed email attempts
└── skills/
    ├── pi-skills/        # Core pi-mono skills
    └── tiny-skills/      # TinyFat platform skills
```

## Core files

### MEMORY.md

Your agent's persistent memory bank. Read on every session start.

**Location:** `/data/MEMORY.md`

**Format:** Markdown

**Sections:**
- Identity — Who the agent is
- Communication — Outbox pattern instructions
- Skills — What's installed
- Working Notes — Session logs and context

### context.jsonl

Conversation history in JSON Lines format.

**Location:** `/data/context.jsonl`

**Format:** JSONL (one JSON object per line)

**Content:** Messages, tool calls, tool results

**Note:** Managed automatically by pi-mono. Manual editing not recommended.

## Outbox directories

### /data/outbox/email/

Drop pending emails here as JSON files.

**Watched by:** Router outbox watcher

**Processing:** Files with `"status": "pending"` are sent

**After send:** Moved to `sent/` or `failed/`

### /data/outbox/sent/

Successfully sent emails.

**Retention:** Kept indefinitely

**Status field:** Changed to `"sent"`

### /data/outbox/failed/

Emails that failed to send.

**Error field:** Added with failure reason

**Status field:** Changed to `"failed"`

## Email channel

### /data/CEMAIL/

Simulated Slack channel for email mode.

**Purpose:** Stores incoming emails in Slack-compatible format

**Used by:** pi-mono's Slack adapter in email mode

## Skills

### /data/skills/pi-skills/

Core skills from pi-mono maintainer.

**Source:** [github.com/badlogic/pi-skills](https://github.com/badlogic/pi-skills)

**Contents:**
- Browser automation
- Google CLIs
- Brave search
- Beads issue tracking

### /data/skills/tiny-skills/

TinyFat platform skills.

**Source:** [github.com/alosec/tiny-skills](https://github.com/alosec/tiny-skills)

**Contents:**
- Firecrawl web scraping
- Linear integration
- Notion integration
- Slack API

## User directories

You can create any directories under `/data`. Common patterns:

```
/data/projects/          # Project files
/data/references/        # Documentation
/data/scripts/           # Automation scripts
/data/archive/           # Old files
```

## System directories

These exist but are ephemeral (don't persist):

| Path | Purpose | Persists |
|------|---------|----------|
| `/app` | Application code | ❌ |
| `/tmp` | Temporary files | ❌ |
| `/home` | Home directory | ❌ |
| `/data` | Agent storage | ✅ |

## File permissions

All files in `/data` are owned by the agent process:
- Read/write access to everything in `/data`
- Execute permission for scripts
- No sudo/root access needed

## Storage limits

- **Volume size:** 1GB
- **No per-file limits** (within volume size)
- **No inode limits** (practical use)

## Best practices

### Organize by purpose

```
/data
├── MEMORY.md
├── projects/
│   ├── website/
│   └── api/
├── references/
│   └── api-docs.md
└── scripts/
    └── setup.sh
```

### Use setup.sh for repeatable installs

```bash
#!/bin/sh
# /data/setup.sh - Run on boot for tools

# Install project dependencies
pip install requests beautifulsoup4

# Set up aliases
echo "alias ll='ls -la'" >> ~/.bashrc
```

### Archive old content

Don't delete — move to archive:

```
/data/archive/
├── 2024-11/
│   └── old-project/
└── 2024-12/
    └── notes.md
```
