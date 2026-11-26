---
sidebar_position: 3
description: History of updates to the VTpass API documentation.
---
# What's new
This page lists changes to the VTpass API documentation, with the newest changes first.

## November 26, 2026
This release redesigns the documentation so you can find what you need faster.

### New
- **Make your first purchase**: a new [tutorial](/docs/tutorials/getting-started/make-first-purchase) walks you through buying airtime in sandbox and confirming it with a requery.
- **Core endpoint reference**: new reference pages for [Authentication](/docs/reference/authentication), [Wallet balance](/docs/reference/wallet-balance), and [Requery](/docs/reference/requery).
- **Transaction lifecycle**: a new [concept page](/docs/explanation/transaction-lifecycle) explains transaction statuses, and when a purchase is complete.
- **Commission**: a new [concept page](/docs/explanation/commission) explains how VTpass calculates your commission.
- **Go live guide**: a new [guide](/docs/how-to/go-live) covers moving from sandbox to live, including IP whitelisting.
- **Sandbox and Live switch**: a switch in the navigation bar changes the URLs in every code sample and endpoint table between sandbox and live. See [Environments](./about-this-doc.md#environments).
- **One reference page for each service**: the separate pages for each network, electricity company, and TV provider are now one page for each service: [airtime](/docs/reference/services/airtime), [data](/docs/reference/services/data), [electricity](/docs/reference/services/electricity), [TV](/docs/reference/services/tv-subscription), [education](/docs/reference/services/education), and [insurance](/docs/reference/services/insurance). Each page shows how the providers differ in one table.
- **Webhook guides**: new guides to [set up your callback URL](/docs/how-to/webhooks/set-up-callback-url) and handle [transaction update](/docs/how-to/webhooks/transaction-update-webhook) and [variation codes update](/docs/how-to/webhooks/variation-codes-update-webhook) webhooks, with example handler code.
- **Pending transactions guide**: a new [guide to pending transactions](/docs/how-to/handle-pending-transactions) explains what to do for each transaction status.
- **Product options API**: new reference page for the [Product options API](/docs/reference/service-discovery/product-options).
- **Request ID**: new concept page that explains the [request ID format](/docs/explanation/request-id), with a JavaScript function that generates valid IDs.

### Changed
- **Documentation structure**: pages are now grouped into Overview, Tutorials, How-to guides, API reference, and Concepts. The service lookup endpoints moved from Tutorials to API reference, under Service discovery. These are available services, service IDs, variation codes, and product options. The Highlights page is now part of About this API document. See [Sections of this documentation](./about-this-doc.md#sections-of-this-documentation).
- **Response codes**: the [response codes](/docs/reference/response-codes) are now grouped by what to do next, and include the meaning of each transaction status.
- **Response fields**: the service tutorials and reference pages now describe each response field.
- **Code samples**: requests now have curl and JavaScript examples.
- **Tables**: tables now follow one format, with a **Required** column that shows `Yes` or `No` instead of `M` or `O`.
