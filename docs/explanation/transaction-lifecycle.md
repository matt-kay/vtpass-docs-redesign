---
sidebar_position: 1
description: How a VTpass transaction moves from request to final status, and how to know when it's complete.
---
# Transaction lifecycle
This page explains what happens to a VTpass transaction after you send it, why a successful response doesn't always mean the purchase is complete, and how to find out when it's complete.

## Why transactions aren't always instant
When you buy a product, VTpass passes your request to a service provider, such as a mobile network, an electricity company, or a TV provider. Most providers respond in seconds, but some are slow, busy, or briefly unavailable. VTpass doesn't make you wait for them. Instead, it responds straight away with the transaction's current status, which might not be final yet.

## Response code and status
Every purchase response has two values that tell you what happened:

- `code` is the result of your request. For example, `000` means VTpass accepted and processed the request, and `016` means the transaction failed.
- `content.transactions.status` is the state of the transaction itself.

A `000` code doesn't mean the customer got what they paid for. It means VTpass processed your request. Always check the status as well.

## Statuses
The following table describes each status and whether it's final:

| Status | What it means | Final |
| :--- | :--- | :--- |
| `initiated` | VTpass has started the transaction | No |
| `pending` | The service provider hasn't confirmed the transaction yet | No |
| `delivered` | The service provider confirmed the transaction, and the customer has the product | Yes |
| `reversed` | The service provider rejected the transaction, and VTpass returned the money to your wallet | Yes |

A transaction moves from `initiated` or `pending` to a final status: `delivered` or `reversed`.

Some problems end the transaction without a status at all. For example, code `016` means the transaction failed, and code `091` means VTpass didn't process it. See [Response codes](/docs/reference/response-codes).

## When to give value
Only give your customer value, such as crediting their account or showing a token, when the status is `delivered`. If you give value earlier and the transaction is later reversed, you lose the money.

## Unknown results
Sometimes you don't get a clear answer: your request times out, you get no response, or the response doesn't match the documentation. In each case, the transaction might still succeed, so treat it as pending. Don't send the purchase again with a new request ID, or VTpass might charge the customer twice.

## Finding out the final status
You have two ways to learn when a pending transaction reaches its final status:

- **Requery**: ask VTpass for the transaction's current status, using its request ID. See [Handle pending transactions](/docs/how-to/handle-pending-transactions).
- **Webhooks**: VTpass sends the final status to your callback URL when it's ready. See [Handle transaction update webhooks](/docs/how-to/webhooks/transaction-update-webhook).

Use both: webhooks tell you quickly without polling, and requery is your fallback if a webhook doesn't arrive.

## The request ID
Every transaction has a request ID that you create and send with the purchase. It's how you match a requery or a webhook to the transaction in your system, and how VTpass detects duplicate requests. See [Request ID](/docs/explanation/request-id).
