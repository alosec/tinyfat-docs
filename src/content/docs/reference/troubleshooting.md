---
title: Troubleshooting
description: Common issues and how to fix them.
---

import { Aside } from '@astrojs/starlight/components';

## Email issues

### My email to the agent bounced

**Cause:** Email address doesn't exist or is misspelled.

**Fix:** Verify the agent name matches exactly: `yourname@tinyfat.com`

### Agent never responded

**Possible causes:**
1. Your email isn't in allowed senders
2. Container failed to start
3. Anthropic API key is missing or invalid

**Fixes:**
1. Check allowed senders in dashboard
2. Check agent status in dashboard
3. Verify API key in Settings → API Keys

### Response went to spam

**Fix:** Add `yourname@tinyfat.com` to your contacts or mark as "not spam".

### Emails not threading properly

**Cause:** Agent's reply missing threading headers.

**Fix:** This is usually automatic. If broken, check `/data/outbox/sent/` to see if `in_reply_to` was included.

## Dashboard issues

### Can't log in

**Cause:** Session expired or password incorrect.

**Fixes:**
1. Try "Forgot Password" to reset
2. Clear browser cookies for tinyfat.com
3. Try incognito/private window

### Dashboard shows agent as stopped

**This is normal.** Agents sleep when idle. They wake automatically on:
- Incoming email
- Dashboard chat message
- Manual start button

### Files not loading

**Possible causes:**
1. Agent is sleeping (starting up)
2. Network issues
3. Large file taking time to load

**Fixes:**
1. Wait for agent to start (status turns green)
2. Refresh the page
3. Check browser console for errors

### Chat not working

**Possible causes:**
1. Agent needs to start
2. WebSocket connection failed
3. API key not configured

**Fixes:**
1. Click "Start" to wake agent
2. Refresh the page
3. Check Settings → API Keys

## Agent issues

### Agent says it can't access the API

**Cause:** Anthropic API key is missing, invalid, or out of credits.

**Fixes:**
1. Check Settings → API Keys
2. Verify key at [console.anthropic.com](https://console.anthropic.com)
3. Check your Anthropic account balance

### Agent takes forever to respond

**Possible causes:**
1. Cold start (container booting)
2. Complex request processing
3. Rate limiting

**Normal times:**
- Cold start: 30-60 seconds
- Warm response: 10-30 seconds
- Complex tasks: 1-5 minutes

### Agent says a skill is missing

**Cause:** Skill wasn't installed or was deleted.

**Fix:** Ask the agent to reinstall:
```
Clone https://github.com/alosec/tiny-skills to /data/skills/tiny-skills
```

### Agent forgot something

**Cause:** Context was compacted or information wasn't in MEMORY.md.

**Fixes:**
1. Add important info to MEMORY.md explicitly
2. Ask agent to re-read MEMORY.md
3. Provide context again in your message

## Outbox issues

### Email stuck in pending

**Possible causes:**
1. Invalid JSON format
2. Router not processing
3. File permissions

**Fixes:**
1. Validate JSON syntax
2. Check `"status": "pending"` is set
3. Look for file in `/data/outbox/failed/`

### Email in failed folder

**Cause:** Sending failed. Check the `error` field in the file.

**Common errors:**
- "Invalid recipient" — Check `to` field format
- "Rate limit" — Wait and retry
- "Authentication failed" — Platform issue, contact support

## Provisioning issues

### Agent creation failed

**Possible causes:**
1. Name already taken
2. Platform error
3. Fly.io capacity issue

**Fixes:**
1. Try a different name
2. Refresh and retry
3. Contact support if persistent

### Magic link expired

**Cause:** Links expire after 1 hour.

**Fix:** Request a new link from the signup page.

## Getting help

If you're still stuck:

1. **Email:** [support@tinyfat.com](mailto:support@tinyfat.com)
2. **Include:**
   - Agent name
   - What you tried
   - Any error messages
   - Screenshots if relevant

<Aside type="tip">
  When contacting support, check the dashboard activity log first. Copy any error messages you see.
</Aside>
