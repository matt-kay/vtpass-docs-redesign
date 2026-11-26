---
sidebar_position: 1
description: What the VTpass API does, who this documentation is for, and how it's organized.
---
# About this API document
The VTpass API lets you sell bill payments and digital services from your own app or website. With one integration, your customers can buy airtime, data, TV subscriptions, electricity, education PINs, and insurance, and VTpass charges your VTpass wallet for each purchase.

This documentation shows you how to integrate the VTpass RESTful API, test it in sandbox, and take it live.

## Who this documentation is for
This documentation is for developers who build VTpass payments into an app, website, or backend service. It assumes you know how to:

- Send HTTP requests and read JSON responses.
- Store API keys securely on a server.
- Write code in a language that can call a web API. The examples use curl and JavaScript.

## What you can do with the API
The following table lists the services you can sell with the VTpass API:

| Service | What your customers can buy | Reference |
| :--- | :--- | :--- |
| Airtime | Airtime top-ups on MTN, Glo, Airtel, and 9mobile, and international airtime | [Airtime recharge](/docs/reference/services/airtime) |
| Data | Data plans on Nigerian networks, Smile, and Spectranet | [Data subscription](/docs/reference/services/data) |
| Electricity | Prepaid tokens and postpaid bill payments for 12 electricity companies | [Electricity bill](/docs/reference/services/electricity) |
| TV | DStv, GOtv, StarTimes, and Showmax subscriptions | [TV subscription](/docs/reference/services/tv-subscription) |
| Education | WAEC registration, WAEC result checker, and JAMB PINs | [Education](/docs/reference/services/education) |
| Insurance | Third-party motor insurance | [Insurance](/docs/reference/services/insurance) |

## Sections of this documentation
The documentation has five sections, so you can go straight to what you need. The following table describes each section:

| Section | Use it to | Start with |
| :--- | :--- | :--- |
| Overview | Learn what the API does and what's changed | This page and [What's new](./whats-new.md) |
| Tutorials | Set up your account and make your first purchase, step by step | [Create a sandbox account](/docs/tutorials/getting-started/create-sandbox-account) |
| How-to guides | Complete a specific task, such as handling pending transactions, receiving webhooks, or going live | [Handle pending transactions](/docs/how-to/handle-pending-transactions) |
| API reference | Look up authentication, endpoints, request fields, responses, and response codes | [Authentication](/docs/reference/authentication) |
| Concepts | Understand how the API works, such as the transaction lifecycle, request IDs, and commission | [Transaction lifecycle](/docs/explanation/transaction-lifecycle) |

## Where to start
Pick the starting point that matches what you're doing:

- **New to the VTpass API**: follow the [Get started](/docs/tutorials/getting-started/create-sandbox-account) tutorials, ending with [Make your first purchase](/docs/tutorials/getting-started/make-first-purchase).
- **Adding a service**: open its page under [Services](/docs/reference/services/airtime). Each page covers every provider for that service, and lists sandbox test values for every result.
- **Handling real-world results**: read [Transaction lifecycle](/docs/explanation/transaction-lifecycle), then [handle pending transactions](/docs/how-to/handle-pending-transactions) and [receive webhooks](/docs/how-to/webhooks/set-up-callback-url).
- **Ready for real customers**: [go live](/docs/how-to/go-live).

## Environments
VTpass has two environments. Build and test in sandbox, then switch to live when you're ready to take real payments. The following table lists the base URL for each environment:

| Environment | Base URL | Use it to |
| :--- | :--- | :--- |
| Sandbox | `https://sandbox.vtpass.com/api` | Build and test your integration. Purchases don't cost real money |
| Live | `https://vtpass.com/api` | Sell to real customers. VTpass charges each purchase to your VTpass wallet |

Sandbox and live have separate accounts and separate API keys.

## Conventions in this documentation
This documentation uses the following conventions:

- **Sandbox and Live switch**: use the switch in the navigation bar to choose an environment. Code samples and endpoint tables update to show that environment's URLs. The switch starts on Sandbox.
- **Code samples**: most requests have a curl example and a JavaScript example. Select the tab for the language you want.
- **Placeholders**: replace values such as `YOUR_API_KEY`, `YOUR_SECRET_KEY`, and `YOUR_PUBLIC_KEY` with your own values.
- **Required fields**: request field tables have a **Required** column. `Yes` means you must send the field. `No` means it's optional. Some fields apply only to certain products, for example `Spectranet only`.
- **Field names**: field names appear exactly as the API uses them, including the API's own spellings, such as `convinience_fee` and `Chasis_Number`.

## Get help
If you need help with your integration, contact VTpass technical support:

- Send an email to `support@vtpass.com` with your question.
- Contact `vtpass.techsupport` on Skype.
