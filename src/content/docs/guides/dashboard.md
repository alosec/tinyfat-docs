---
title: Dashboard
description: Managing your agent through the TinyFat dashboard.
---

import { Aside, Steps } from '@astrojs/starlight/components';

The dashboard at [tinyfat.com/dashboard](https://tinyfat.com/dashboard) is your control center for managing your agent.

## Overview

The dashboard shows:
- **Agent status** — Running, sleeping, or stopped
- **File browser** — Your agent's workspace
- **Chat interface** — Talk to your agent directly
- **Settings** — API keys, allowed senders, and more

## Agent status

### Status indicators

- 🟢 **Running** — Container is active, agent is responsive
- 🟡 **Starting** — Container is booting up
- 🔴 **Stopped** — Container is sleeping (wakes on email)

### Start/Stop controls

You can manually start or stop your agent from the dashboard. Stopping releases compute resources but preserves all data.

<Aside type="note">
  Agents automatically sleep after ~15 minutes of inactivity. This is normal and saves resources.
</Aside>

## File browser

The left sidebar shows your agent's filesystem.

### Viewing files

Click any file to view its contents. Text files open in the editor panel.

### Editing files

1. Click a file to open it
2. Make changes in the editor
3. Click **Save** (or Cmd/Ctrl+S)

<Aside type="tip">
  MEMORY.md is the most important file. Edit it to give your agent persistent instructions.
</Aside>

### Supported files

- Text files (`.md`, `.txt`, `.json`, etc.)
- Code files (syntax highlighting)
- JSON files (formatted view)

## Chat interface

Talk to your agent directly from the dashboard, without email.

### How it works

The chat uses the same underlying system as email:
1. Your message goes to the container
2. Agent processes and responds
3. Response appears in the chat

### Activity drawer

Expand the activity drawer to see:
- Tool calls the agent is making
- File operations
- Command execution

## Settings tabs

### API Keys

Configure your Anthropic API key here. Without it, your agent can't think.

<Steps>
1. Get your key from [console.anthropic.com](https://console.anthropic.com/)
2. Paste it in the API Keys tab
3. Click **Save**
</Steps>

### Allowed Senders

Control who can email your agent.

- Your signup email is always allowed
- Add others by email address
- Use `@domain.com` for domain wildcards

### Config

Agent configuration options:
- Agent name display
- Other platform settings

### Slack (optional)

Connect Slack for hybrid mode:
- Agent appears in Slack channels
- Can respond to @mentions
- Email still works alongside Slack

## Logs and activity

### Activity monitor

Real-time view of agent activity:
- Incoming messages
- Tool executions
- Outgoing responses

### Error messages

If something fails, error details appear in the activity log. Common issues:
- API key invalid or expired
- Rate limits hit
- Tool execution failed

## Keyboard shortcuts

| Shortcut | Action |
|----------|--------|
| `Cmd/Ctrl + S` | Save current file |
| `Cmd/Ctrl + K` | Focus chat input |
| `Esc` | Close panels |

## Mobile access

The dashboard works on mobile browsers, but the full experience is better on desktop. For quick checks, mobile works fine.

## Next steps

- [Agent workspace](/guides/workspace/) — Understanding the filesystem
- [Skills & tools](/guides/skills/) — What your agent can do
