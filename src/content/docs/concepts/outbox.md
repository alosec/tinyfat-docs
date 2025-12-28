---
title: The Outbox Pattern
description: How your agent sends email through the filesystem.
---

import { Aside, Code } from '@astrojs/starlight/components';

Your agent doesn't send email directly. Instead, it writes files to an outbox directory, and the platform picks them up and sends them.

## Why an outbox?

### Reliability

If the email API fails, the file stays in the outbox. The platform retries.

### Auditability

Every outgoing email is a file you can inspect. Nothing hidden.

### Simplicity

The agent doesn't need email credentials or API access. Just write a file.

## How it works

```
Agent writes JSON → /data/outbox/email/
                        ↓
           Router polls outbox directory
                        ↓
           Picks up pending files
                        ↓
           Sends via Resend API
                        ↓
           Moves to /data/outbox/sent/ or /data/outbox/failed/
```

## Email JSON format

To send an email, your agent creates a file like this:

```json
{
  "to": ["recipient@example.com"],
  "subject": "Hello from your agent",
  "body": "This is the email body.\n\nIt supports multiple paragraphs.",
  "status": "pending"
}
```

### Required fields

| Field | Type | Description |
|-------|------|-------------|
| `to` | string[] | Array of recipient emails |
| `subject` | string | Email subject line |
| `body` | string | Plain text email body |
| `status` | string | Must be `"pending"` |

### Optional fields

| Field | Type | Description |
|-------|------|-------------|
| `in_reply_to` | string | Message-ID for threading |
| `references` | string | Email thread chain |
| `cc` | string[] | CC recipients |
| `bcc` | string[] | BCC recipients |

## Threading

To reply to an email and maintain threading:

```json
{
  "to": ["original-sender@example.com"],
  "subject": "Re: Original Subject",
  "body": "Your reply here...",
  "in_reply_to": "<original-message-id@mail.example.com>",
  "status": "pending"
}
```

The `in_reply_to` field should contain the Message-ID from the original email's headers.

## File naming

Name your files with a timestamp prefix to ensure ordering:

```
1703808000-response.json
1703808001-followup.json
```

Or use any unique name — the platform processes all `*.json` files with `"status": "pending"`.

## Outbox directories

| Directory | Purpose |
|-----------|---------|
| `/data/outbox/email/` | Drop pending emails here |
| `/data/outbox/sent/` | Successfully sent (moved here) |
| `/data/outbox/failed/` | Failed to send (moved here) |

<Aside type="tip">
  Check `/data/outbox/failed/` if an email didn't arrive. The error will be in the file.
</Aside>

## Example: Agent sends a reply

When you email your agent, it receives the message with metadata including the Message-ID. To reply:

```bash
cat > /data/outbox/email/$(date +%s)-reply.json << 'EOF'
{
  "to": ["you@example.com"],
  "subject": "Re: Your question",
  "body": "Here's my answer to your question.\n\nLet me know if you need anything else.",
  "in_reply_to": "<CAB123abc@mail.gmail.com>",
  "status": "pending"
}
EOF
```

The platform picks this up and sends via Resend within seconds.

## Watching the outbox

The Router polls the outbox directory regularly:
- Checks for new files
- Validates JSON structure
- Sends via Resend API
- Moves file to `sent/` or `failed/`

Poll interval is approximately 5 seconds.

## Common issues

### Email not sending

1. Check the file is valid JSON
2. Ensure `status` is `"pending"`
3. Verify `to` is an array, not a string
4. Look in `/data/outbox/failed/` for errors

### Wrong recipient

The `to` field must be an array:

```json
// ❌ Wrong
"to": "user@example.com"

// ✅ Correct
"to": ["user@example.com"]
```

### Missing email

If an email seems lost:
1. Check `/data/outbox/sent/` — it may have sent
2. Check `/data/outbox/failed/` — it may have failed
3. Check spam folder on recipient's end

## Next steps

- [Memory & persistence](/concepts/memory/) — How your agent remembers
- [Architecture](/concepts/architecture/) — Full system overview
