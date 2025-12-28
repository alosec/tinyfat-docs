---
title: Beads Issue Tracking
description: Lightweight issue tracking with dependency support, designed for AI agents.
---

import { Aside, Steps, Code } from '@astrojs/starlight/components';

Beads (`bd`) is a Git-native issue tracker that lives in your repository. Issues are stored as files, synced with Git, and designed for AI agent workflows.

## Why Beads?

Traditional issue trackers (GitHub Issues, Linear, Jira) are external services. Beads keeps issues in your repo:

- **Git-native** — Issues sync with your code
- **Dependency-aware** — Track what blocks what
- **Agent-friendly** — `bd ready` shows unblocked work
- **Offline-first** — Works without network
- **Simple** — SQLite database, JSONL export

## Installation

Beads comes pre-installed in TinyFat containers. For local use:

```bash
# Download latest release
curl -sL https://github.com/steveyegge/beads/releases/latest/download/bd-linux-amd64 -o /usr/local/bin/bd
chmod +x /usr/local/bin/bd
```

## Quick start

<Steps>

1. **Initialize in your project**
   
   ```bash
   cd your-project
   bd init
   ```
   
   This creates `.beads/` with your database. Prefix auto-detects from directory name.

2. **Create an issue**
   
   ```bash
   bd create "Add user authentication"
   ```
   
   Output: `✓ Created issue: proj-a1b2`

3. **List issues**
   
   ```bash
   bd list
   ```

4. **See ready work**
   
   ```bash
   bd ready
   ```
   
   Shows issues with no blockers — perfect for picking next task.

</Steps>

## Core commands

### Creating issues

```bash
# Basic
bd create "Fix login bug"

# With priority (0=highest, 4=lowest)
bd create "Critical security fix" -p 0

# With type
bd create "Add OAuth support" -t feature

# With description
bd create "Refactor auth" -d "Split into smaller modules"

# With assignee
bd create "Write tests" --assignee alice
```

### Viewing issues

```bash
# List all
bd list

# Filter by status
bd list --status open
bd list --status in_progress
bd list --status closed

# Filter by priority
bd list --priority 0

# Show specific issue
bd show proj-a1b2
```

### Updating issues

```bash
# Change status
bd update proj-a1b2 --status in_progress

# Change priority
bd update proj-a1b2 --priority 1

# Assign
bd update proj-a1b2 --assignee bob
```

### Closing issues

```bash
# Simple close
bd close proj-a1b2

# With reason
bd close proj-a1b2 --reason "Fixed in commit abc123"

# Multiple issues
bd close proj-a1b2 proj-c3d4
```

## Dependencies

The killer feature. Track what blocks what.

### Adding dependencies

```bash
# proj-b blocks proj-a (must finish b before a)
bd dep add proj-a proj-b
```

### Viewing dependencies

```bash
# Show dependency tree
bd dep tree proj-a

# Find circular dependencies
bd dep cycles

# Show blocked issues
bd blocked
```

### Dependency types

| Type | Meaning |
|------|---------|
| `blocks` | Must complete before dependent |
| `related` | Soft connection, doesn't block |
| `parent-child` | Epic/subtask hierarchy |

## Ready work

`bd ready` is designed for agents picking up work:

```bash
bd ready
```

Shows issues that are:
- Status: `open` or `in_progress`
- No blocking dependencies
- Ready to work on right now

<Aside type="tip">
  Teach your agent to run `bd ready` when starting work. It shows exactly what can be done next.
</Aside>

## Issue prefixes

Each project has a unique prefix:

```bash
# Auto-detect from directory name
bd init
# myproject/ → myproject-a1b2

# Custom prefix
bd init --prefix api
# → api-a1b2
```

Prefixes use hash-based IDs (like `a1b2`) for uniqueness across repos.

## Git integration

Beads syncs automatically with Git:

1. **After changes** — Exports to `.beads/issues.jsonl`
2. **After git pull** — Imports if JSONL is newer
3. **No manual sync** — Just commit and push

The `.beads/` directory should be committed:

```bash
git add .beads/
git commit -m "Add beads issue tracking"
```

## Agent workflow

For AI agents, Beads enables a structured workflow:

<Steps>

1. **Check ready work**
   
   ```bash
   bd ready
   ```

2. **Claim an issue**
   
   ```bash
   bd update proj-a1b2 --status in_progress
   ```

3. **Do the work**

4. **Close when done**
   
   ```bash
   bd close proj-a1b2 --reason "Implemented in this session"
   ```

5. **Create discovered work**
   
   If you find new issues while working:
   ```bash
   bd create "Found: need to handle edge case X" -t bug
   ```

</Steps>

## Epics and subtasks

Group related issues:

```bash
# Create epic
bd create "User authentication system" -t epic

# Create subtasks with parent
bd create "Login form" --parent proj-epic1
bd create "Password reset" --parent proj-epic1
bd create "OAuth integration" --parent proj-epic1

# View epic with children
bd show proj-epic1
```

## Comments

Add notes to issues:

```bash
# Add comment
bd comment proj-a1b2 "Started working on this, found complexity in X"

# View comments
bd comments proj-a1b2
```

## Database location

Beads auto-discovers the database:

1. `--db /path/to/db` flag
2. `$BEADS_DB` environment variable
3. `.beads/*.db` in current or parent directories
4. `~/.beads/default.db` fallback

## Pairing with Memory Bank

Beads tracks issues. Memory Bank tracks context. Use both:

```
memory-bank/02-active/nextUp.md  → High-level priorities
.beads/                          → Specific actionable issues
```

Reference beads in memory bank:
```markdown
## Next Up

Priority work from `bd ready`:
- proj-a1b2: Fix authentication timeout
- proj-c3d4: Add rate limiting
```

## Command reference

| Command | Description |
|---------|-------------|
| `bd init` | Initialize in current directory |
| `bd create` | Create new issue |
| `bd list` | List issues |
| `bd show` | Show issue details |
| `bd update` | Update issue fields |
| `bd close` | Close issue(s) |
| `bd ready` | Show unblocked issues |
| `bd blocked` | Show blocked issues |
| `bd dep add` | Add dependency |
| `bd dep tree` | Show dependency tree |
| `bd comment` | Add comment |
| `bd stats` | Show statistics |

Use `bd --help` or `bd <command> --help` for full options.

## Next steps

- [Memory Bank Pattern](/guides/memory-bank/) — Project context structure
- [Agent Workspace](/guides/workspace/) — Your agent's filesystem
