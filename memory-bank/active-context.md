# Active Context - TinyFat Docs

## Current State
- Collapsible sidebars implemented for both left and right
- Both toggles work independently with localStorage persistence
- Content left-margin properly hugs left sidebar regardless of right sidebar state
- Right sidebar position/width independent of left sidebar state

## Open Issue
**tf-docs-50n**: Sidebar toggle overlap on tablet/half-screen
- At narrower widths, left sidebar toggle overlaps mobile "On this page" header
- Attempted fix (72rem breakpoint) removed toggles entirely - reverted
- Need clarification from Alex on exact scenario/viewport to fix properly

## Recent Commits
- `c710def` Revert breakpoint change
- `594586f` Fix content left margin to hug left sidebar
- `f8722bd` Fix right sidebar fixed positioning
- `cc9d260` Fix right sidebar content shifting

## Tech Notes
- Left sidebar toggle: appears at 50rem (CSS), JS checks 1152px
- Right sidebar/desktop TOC: appears at 72rem
- Mobile TOC bar: visible between 50-72rem range
- Mismatch between CSS breakpoints may be the root cause
