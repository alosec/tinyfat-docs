---
title: Memory Bank Pattern
description: Organize project knowledge for AI agent collaboration.
---

import { FileTree, Aside, Steps } from '@astrojs/starlight/components';

The Memory Bank is a structured directory pattern for maintaining project context across agent sessions. It's how your agent (and you) keep track of what's happening, what's been decided, and what to do next.

## Why Memory Bank?

AI agents have no memory between sessions. Every conversation starts fresh. The Memory Bank solves this by:

1. **Persisting context** — Important decisions and state survive restarts
2. **Structuring knowledge** — Clear locations for different types of information
3. **Enabling handoffs** — Multiple agents (or humans) can pick up where others left off
4. **Reducing repetition** — Don't re-explain the same context every session

## Two types of memory banks

### Global Memory Bank

Personal context spanning all projects. Lives at `~/global-memory-bank/`:

<FileTree>
- global-memory-bank/
  - 00-core/ — Identity, systems (stable)
    - identity.md — Who you are, goals, working style
    - systems.md — Tools, environments, key paths
  - 01-active/ — Current work (**start here**)
    - currentWork.md — What's happening NOW
    - nextUp.md — Prioritized cross-project backlog
    - blockers.md — Active obstacles
  - 02-patterns/ — Reusable patterns across projects
  - 03-guides/ — Cross-project how-tos
  - 04-contacts/ — People, orgs, relationships
  - 05-ideas/ — Ideas, explorations
  - 06-learnings/ — Technical learnings (dated)
  - 07-projects/ — Cross-project summaries
  - 08-sessions/ — Archived session logs (dated)
  - 09-research/ — Deep dives, explorations
</FileTree>

### Project Memory Bank

Project-specific context. Lives at `project/memory-bank/`:

## Directory structure

<FileTree>
- memory-bank/
  - 00-core/ — Identity, constraints, tech stack
    - CORE.md — **Read this first** — architecture constraints
    - README.md — Project overview
    - techStack.md — Technologies used
  - 01-architecture/ — System design
    - architecture.md — Full system overview
    - decisions.md — Architectural decision records (ADRs)
  - 02-active/ — Current state (**check first**)
    - activeWork.md — What's happening NOW
    - blockers.md — What's stuck
    - nextUp.md — Prioritized next actions
  - 03-patterns/ — Reusable approaches
  - 04-business/ — Product & positioning
  - 05-sessions/ — Session logs (dated)
  - 06-learnings/ — Technical discoveries
  - 07-reference/ — Imported docs, specs
  - 08-history/ — Milestones, retrospectives
  - 09-research/ — Competitor analysis, explorations
  - 10-archive/ — Deprecated/superseded docs
  - README.md — Quick start guide
</FileTree>

## The numbered prefix system

Directories are numbered for reading order and priority:

| Prefix | Purpose | Read when... |
|--------|---------|--------------|
| `00-` | Core identity & constraints | Starting any work |
| `01-` | Architecture | Touching system design |
| `02-` | Active state | Every session start |
| `03-` | Patterns | Implementing something similar |
| `04+` | Reference material | As needed |

## Key files

### 00-core/CORE.md

The most important file. Contains non-negotiable constraints:
- Architecture decisions that can't be reversed
- Security boundaries
- Integration patterns

<Aside type="caution">
  Always read CORE.md before proposing architectural changes. It exists to prevent breaking things.
</Aside>

### 02-active/ directory

Check this every session. Three files:

**activeWork.md** — What's happening right now
- Current focus
- Recent changes
- Quick commands

**blockers.md** — What's stuck
- Blocked issues
- Waiting on external factors
- Known bugs

**nextUp.md** — What to do next
- Prioritized task list
- Immediate vs. later items

## Session workflow

<Steps>

1. **Start a session**
   
   Read `02-active/` files to understand current state.
   
   ```
   Read 02-active/activeWork.md
   Read 02-active/blockers.md
   Read 02-active/nextUp.md
   ```

2. **Check constraints**
   
   If touching architecture, read `00-core/CORE.md`.

3. **Do work**
   
   Reference patterns in `03-patterns/` if implementing something similar.

4. **Update state**
   
   Before ending, update `02-active/activeWork.md` with:
   - What you did
   - What changed
   - Any new blockers

5. **Log significant sessions**
   
   Create `05-sessions/YYYY-MM-DD-topic.md` for major work.

</Steps>

## Creating a memory bank

For a new project:

```bash
mkdir -p memory-bank/{00-core,01-architecture,02-active,03-patterns,04-business,05-sessions,06-learnings,07-reference,08-history,09-research,10-archive}
```

Create the essential files:

```bash
touch memory-bank/README.md
touch memory-bank/00-core/{CORE.md,README.md,techStack.md}
touch memory-bank/02-active/{activeWork.md,blockers.md,nextUp.md}
```

## Best practices

### Keep 02-active/ current

This is the most-read directory. Stale information here wastes everyone's time.

### Be concise

Memory bank files should be scannable. Use:
- Bullet points over paragraphs
- Tables for structured data
- Code blocks for commands

### Date session logs

Use `YYYY-MM-DD-topic.md` format:
- `2024-12-28-auth-refactor.md`
- `2024-12-27-fly-migration.md`

### Archive, don't delete

Move outdated docs to `10-archive/` rather than deleting. Context is valuable.

### Link between files

Cross-reference related docs:
```markdown
See [architecture decisions](../01-architecture/decisions.md) for background.
```

## Example: activeWork.md

```markdown
# Active Work

**Last Updated:** 2024-12-28 04:30 UTC

## Current Focus

Migrating from CF Containers to Fly.io.

### What's Done
- ✅ Fly account setup
- ✅ Base image deployed
- ✅ Test machine running

### In Progress
- 🔄 Router integration with Fly Machines API
- 🔄 Provisioning endpoint update

### Next
- Email flow end-to-end test
- User migration script

## Quick Commands

\`\`\`bash
# Check Fly machines
fly machines list -a tinyfat-test

# Deploy base image
fly deploy --app fat-mom-base
\`\`\`
```

## Integration with MEMORY.md

Your agent's `/data/MEMORY.md` is personal context. Memory banks are shared context.

| File | Scope | Updates |
|------|-------|---------|
| `/data/MEMORY.md` | Agent identity, preferences | Per-agent |
| `~/global-memory-bank/` | Cross-project personal context | Per-person |
| `project/memory-bank/` | Project state, architecture | Per-project, shared |

For projects, point your agent to the memory bank:
```
Read memory-bank/02-active/ to understand current project state.
```

## Global vs Project

| Aspect | Global | Project |
|--------|--------|---------|
| Location | `~/global-memory-bank/` | `project/memory-bank/` |
| Scope | All your work | Single project |
| Shared | No (personal) | Yes (team) |
| Identity | Who you are | What the project is |
| `00-core/` | identity.md, systems.md | CORE.md, techStack.md |
| `01-*` | active/ (current work) | architecture/ |
| Focus | Cross-project context | Deep project context |

## Next steps

- [Beads Issue Tracking](/guides/beads/) — Pair memory bank with issue tracking
- [Agent Workspace](/guides/workspace/) — Your agent's filesystem
