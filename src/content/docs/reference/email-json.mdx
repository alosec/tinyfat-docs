---
title: Email JSON Reference
description: Complete reference for outbox email format.
---

This is the complete reference for the email JSON format used in the outbox pattern.

## Full schema

```json
{
  "to": ["recipient@example.com"],
  "cc": ["cc@example.com"],
  "bcc": ["bcc@example.com"],
  "subject": "Email subject line",
  "body": "Plain text email body",
  "in_reply_to": "<message-id@example.com>",
  "references": "<msg1@example.com> <msg2@example.com>",
  "status": "pending"
}
```

## Field reference

### to (required)

Array of recipient email addresses.

```json
"to": ["one@example.com", "two@example.com"]
```

### subject (required)

Email subject line. String.

```json
"subject": "Re: Your question about the project"
```

### body (required)

Plain text email body. Supports newlines with `\n`.

```json
"body": "Hello,\n\nThis is the first paragraph.\n\nThis is the second.\n\nBest,\nYour Agent"
```

### status (required)

Must be `"pending"` for the outbox watcher to pick it up.

```json
"status": "pending"
```

After processing:
- Sent emails: `"status": "sent"`
- Failed emails: `"status": "failed"` with `"error"` field

### cc (optional)

Array of CC recipients.

```json
"cc": ["manager@example.com"]
```

### bcc (optional)

Array of BCC recipients.

```json
"bcc": ["archive@example.com"]
```

### in_reply_to (optional)

Message-ID of the email being replied to. Enables threading.

```json
"in_reply_to": "<CABx123abc456@mail.gmail.com>"
```

### references (optional)

Space-separated list of Message-IDs in the thread chain.

```json
"references": "<CABx111@mail.gmail.com> <CABx222@mail.gmail.com>"
```

## Examples

### Simple email

```json
{
  "to": ["friend@example.com"],
  "subject": "Quick update",
  "body": "Just wanted to let you know the task is complete.",
  "status": "pending"
}
```

### Reply with threading

```json
{
  "to": ["boss@example.com"],
  "subject": "Re: Project status",
  "body": "The project is on track. Here's the summary:\n\n- Task 1: Complete\n- Task 2: In progress\n- Task 3: Starting tomorrow",
  "in_reply_to": "<original-message-id@mail.example.com>",
  "status": "pending"
}
```

### Multiple recipients with CC

```json
{
  "to": ["team-lead@example.com"],
  "cc": ["team@example.com", "manager@example.com"],
  "subject": "Weekly report",
  "body": "Here's the weekly update...",
  "status": "pending"
}
```

## File naming

Any `.json` filename works. Recommended pattern:

```
{timestamp}-{description}.json
```

Examples:
- `1703808000-reply.json`
- `1703808001-status-update.json`
- `response-to-john.json`

## Processing order

Files are processed in alphabetical order. Use timestamp prefixes for predictable ordering.

## Error handling

Failed emails are moved to `/data/outbox/failed/` with an error field:

```json
{
  "to": ["invalid@"],
  "subject": "Test",
  "body": "Test body",
  "status": "failed",
  "error": "Invalid recipient email address"
}
```

## Limits

- **Recipients:** Max 50 per email
- **Subject:** Max 998 characters
- **Body:** Max 10MB (plain text)
- **Rate:** ~100 emails/hour per agent
