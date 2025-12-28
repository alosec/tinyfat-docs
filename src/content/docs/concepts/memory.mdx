---
title: Memory & Persistence
description: How your agent remembers context across sessions.
---

import { Aside } from '@astrojs/starlight/components';

Your agent has both short-term and long-term memory. Understanding how these work helps you get the most out of your agent.

## Short-term memory: Context

During a conversation, your agent maintains context in `context.jsonl`. This includes:
- Your messages
- Agent responses
- Tool calls and results

This context persists within a session but may be compacted or cleared between sessions to manage token limits.

## Long-term memory: MEMORY.md

`/data/MEMORY.md` is your agent's persistent memory. It survives:
- Container restarts
- Sleep/wake cycles
- Platform updates

### What goes in MEMORY.md

The default MEMORY.md includes:
- Agent identity
- Owner information
- Outbox pattern instructions
- Session notes

You (and your agent) should add:
- Preferences and working style
- Project context
- Important information to remember
- Links and references

### Updating MEMORY.md

**Via email:**
```
Remember that I prefer responses in bullet points, not paragraphs.
```

**Via dashboard:**
Edit the file directly in the file editor.

**Agent self-update:**
```
Update your MEMORY.md with notes from our conversation.
```

## Persistence model

### What persists

Everything in `/data`:
- MEMORY.md
- Files you create
- Skills and configurations
- Conversation history
- Outbox contents

### What doesn't persist

- Installed system packages (reinstall on boot)
- Files outside `/data` (like `/tmp`)
- Running processes (stop on sleep)

<Aside type="tip">
  For tools you need repeatedly, ask your agent to create a setup script at `/data/setup.sh` and run it on boot.
</Aside>

## Token management

Claude has context limits. Your agent manages this by:
1. Keeping recent context in memory
2. Compacting older context when limits approach
3. Using MEMORY.md for critical persistent info

### Best practices

- Keep MEMORY.md focused and concise
- Use specific file references instead of copying content
- Ask your agent to summarize long conversations
- Clear old context files if they grow too large

## Session continuity

When your agent wakes up:
1. Reads MEMORY.md for context
2. Loads recent conversation from context.jsonl
3. Resumes where it left off

When sleeping:
1. Context is preserved in context.jsonl
2. All files saved to volume
3. Next wake restores state

## Practical examples

### Teaching preferences

```
Add to your memory: When I ask for code, always include comments 
explaining the key parts. I prefer Python over JavaScript when either works.
```

### Maintaining project context

```
Update MEMORY.md with this project context:
- Project: Website redesign
- Stack: Next.js, Tailwind, Supabase
- Current phase: Building dashboard
- Key decision: Using server components
```

### Creating reference documents

Instead of loading everything into MEMORY.md:

```
Create a file at /data/references/api-docs.md with the API documentation 
for our project. Reference this file when I ask about the API.
```

## Troubleshooting

### Agent forgot something

1. Check if it's in MEMORY.md
2. Ask the agent to re-read MEMORY.md
3. Add the missing info explicitly

### Context seems stale

```
Read your MEMORY.md and context.jsonl. What do you remember about our project?
```

### Memory getting cluttered

```
Clean up your MEMORY.md. Keep only:
- Your identity section
- My key preferences  
- Current project context

Archive old notes to /data/archive/notes-2024-12.md
```

## Next steps

- [Agent workspace](/guides/workspace/) — Full filesystem guide
- [Architecture](/concepts/architecture/) — How it all connects
