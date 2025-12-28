# Decisions Log

## Content Decisions

### FileTree → Code Blocks (Dec 28)
**Decision:** Use markdown code blocks instead of Starlight FileTree component
**Why:** FileTree component was rendering raw in some contexts; code blocks more reliable and readable

### Memory Bank as Guide, Not Concept (Dec 28)
**Decision:** Put memory-bank docs in `/guides/` not `/concepts/`
**Why:** Memory bank is actionable - users create and edit files. Guides are for "how to do X"

### Beads as Separate Guide (Dec 28)
**Decision:** Dedicated beads.mdx page rather than brief mention
**Why:** Beads is a unique differentiator; deserves full explanation with examples

## Technical Decisions

### No Auto-Deploy from GitHub
**Decision:** Manual wrangler deploys only
**Why:** Consistent with fat-agents pattern; prefer explicit control over deploys

### Starlight over Custom
**Decision:** Use Starlight template rather than building custom docs
**Why:** Fast to ship, good defaults, maintained by Astro team
