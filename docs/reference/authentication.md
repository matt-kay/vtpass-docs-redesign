---
sidebar_position: 1
description: Base URLs, authentication headers, and API keys for the VTpass API.
---
# Authentication
Every VTpass API request needs your API keys in its headers. This page lists the base URLs, the headers for each request type, and the errors you get when authentication fails.

To create your keys, see [Generate your API keys](/docs/tutorials/getting-started/generate-api-keys).

## Base URLs
The following table lists the base URL for each environment:

| Environment | Base URL | Account |
| :--- | :--- | :--- |
| Sandbox | `https://sandbox.vtpass.com/api` | Your sandbox account, at `https://sandbox.vtpass.com` |
| Live | `https://vtpass.com/api` | Your live account, at `https://vtpass.com` |

Sandbox and live have separate accounts, so each environment has its own API keys. Keys from one environment don't work in the other.

## Keys
VTpass gives you three keys. The following table describes each key:

| Key | Format | Used for |
| :--- | :--- | :--- |
| API key | `xxxxxxxxxxxxxxxxxxxx` | Every request |
| Public key | Starts with `PK_` | `GET` requests |
| Secret key | Starts with `SK_` | `POST` requests |

:::warning

Keep your secret key on your server. Don't put it in a mobile app, browser code, or a public repository. Anyone with your API key and secret key can make purchases from your wallet.

:::

## Headers
The headers you send depend on the request method. The following table lists the headers for each method:

| Method | Headers |
| :--- | :--- |
| `GET` | `api-key` and `public-key` |
| `POST` | `api-key`, `secret-key`, and `Content-Type: application/json` |

For example, a `GET` request sends these headers:

```text
api-key: xxxxxxxxxxxxxxxxxxxx
public-key: PK_xxxxxxxxxxxxxxxxx
```

A `POST` request sends these headers:

```text
api-key: xxxxxxxxxxxxxxxxxxxx
secret-key: SK_xxxxxxxxxxxxxxxxx
Content-Type: application/json
```

## Authentication errors
The following table lists the response codes for authentication and access problems:

| Code | What it means | What to do |
| :--- | :--- | :--- |
| `023` | API access isn't turned on for your account | Ask VTpass support to turn it on. See [Go live with the VTpass API](/docs/how-to/go-live) |
| `027` | Your server's IP address isn't whitelisted | Send VTpass support your server's IP address. See [Go live with the VTpass API](/docs/how-to/go-live) |
| `087` | Your credentials are invalid | Check your keys, and that they match the environment's base URL |

For every code, see [Response codes](/docs/reference/response-codes).
