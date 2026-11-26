---
sidebar_position: 1
---
# Response codes
Every VTpass API response includes a `code` field that tells you the result of your request.
This page lists each code, what it means, and what to do when you get it.

:::warning

If you get a response that doesn't match this page, a timeout, or no response at all, treat the transaction as pending and [requery it](/docs/how-to/handle-pending-transactions-and-requery) to confirm its status.

:::

## Verification response codes
These codes are returned when you verify a smartcard number (DSTV, GOtv, StarTimes) or an electricity meter number.

:::note

If you get any of these codes when you make a purchase, treat the transaction as failed.

:::

The following table lists the verification response codes:

| Code | Response description | Meaning |
| :--- | :--- | :--- |
| `020` | `BILLER CONFIRMED` | The smartcard or meter number was verified |
| `011` | `INVALID ARGUMENTS` | One or more required request arguments are missing |
| `012` | `PRODUCT DOES NOT EXIST` | The product doesn't exist |
| `030` | `BILLER NOT REACHABLE AT THIS POINT` | The biller for the product or service can't be reached |

## Transaction and requery response codes
These codes are returned when you make a purchase or requery a transaction.

### Processed or in progress
For these codes, the transaction may still succeed. Check the status before you give value to your customer.

The following table lists the codes for transactions that are processed or still in progress:

| Code | Response description | Meaning |
| :--- | :--- | :--- |
| `000` | `TRANSACTION PROCESSED` | The transaction was processed. Check `content.transactions.status` for its actual state. See [Transaction status](#transaction-status) |
| `099` | `TRANSACTION IS PROCESSING` | The transaction is still processing. Requery with your request ID to get its current status |
| `001` | `TRANSACTION QUERY` | The current status of a transaction on the platform |
| `044` | `TRANSACTION RESOLVED` | The transaction has been resolved. Contact VTpass for more information |
| `089` | `REQUEST IS PROCESSING, PLEASE WAIT BEFORE MAKING ANOTHER REQUEST` | Your previous request is still processing. Wait before you send another request |

### Failed or reversed

The following table lists the codes for transactions that failed or were reversed:

| Code | Response description | Meaning |
| :--- | :--- | :--- |
| `016` | `TRANSACTION FAILED` | The transaction failed |
| `040` | `TRANSACTION REVERSAL` | The transaction was reversed to your wallet |
| `091` | `TRANSACTION NOT PROCESSED` | The transaction wasn't processed, and you weren't charged |

### Request errors

The following table lists the codes for errors in the request:

| Code | Response description | Meaning |
| :--- | :--- | :--- |
| `010` | `VARIATION CODE DOES NOT EXIST` | The variation code is invalid. Use the [Variation codes API](/docs/tutorials/services/variation-codes) to get valid codes |
| `011` | `INVALID ARGUMENTS` | One or more required request arguments are missing |
| `012` | `PRODUCT DOES NOT EXIST` | The product doesn't exist |
| `013` | `BELOW MINIMUM AMOUNT ALLOWED` | The amount is below the minimum for the product or service |
| `017` | `ABOVE MAXIMUM AMOUNT ALLOWED` | The amount is higher than the maximum for the product or service |
| `019` | `LIKELY DUPLICATE TRANSACTION` | You bought the same service for the same `biller_code` more than once within 30 seconds |
| `025` | `RECIPIENT BANK INVALID` | The bank code for a bank transfer is invalid |
| `026` | `RECIPIENT ACCOUNT COULD NOT BE VERIFIED` | The bank account number couldn't be verified |
| `031` | `BELOW MINIMUM QUANTITY ALLOWED` | The quantity is below the minimum allowed per purchase |
| `032` | `ABOVE MINIMUM QUANTITY ALLOWED` | The quantity is higher than the maximum allowed per purchase |

### Request ID errors
See [Request ID](/docs/explanation/request-id-format-and-lagos-time) for the required format.

The following table lists the codes for request ID errors:

| Code | Response description | Meaning |
| :--- | :--- | :--- |
| `014` | `REQUEST ID ALREADY EXIST` | The request ID was already used for another transaction |
| `015` | `INVALID REQUEST ID` | Returned on requery. The request ID wasn't used on the platform |
| `085` | `IMPROPER REQUEST ID: DOES NOT CONTAIN DATE` | The request ID doesn't contain a valid date |
| `085` | `IMPROPER REQUEST ID: NOT PROPER DATE FORMAT, FIRST 8 CHARACTERS MUST BE DATE (TODAY'S DATE, YYYYMMDD)` | The first 8 characters must be a date in `YYYYMMDD` format |
| `085` | `IMPROPER REQUEST ID: DATE NOT TODAY'S DATE, FIRST 8 CHARACTERS MUST BE TODAY'S DATE IN THIS FORMAT: YYYYMMDD` | The date in the request ID must be today's date |

### Account and access errors

The following table lists the codes for account and access errors:

| Code | Response description | Meaning |
| :--- | :--- | :--- |
| `018` | `LOW WALLET BALANCE` | Your wallet doesn't have enough funds for the transaction |
| `021` | `ACCOUNT LOCKED` | Your account is locked |
| `022` | `ACCOUNT SUSPENDED` | Your account is suspended |
| `023` | `API ACCESS NOT ENABLE FOR USER` | API access isn't enabled on your account. Contact VTpass to activate it |
| `024` | `ACCOUNT INACTIVE` | Your account is inactive |
| `027` | `IP NOT WHITELISTED, CONTACT SUPPORT` | Your server IP isn't whitelisted. Contact support with your IP. See [Go live and whitelist IP](/docs/how-to/go-live-and-whitelist-ip) |
| `028` | `PRODUCT IS NOT WHITELISTED ON YOUR ACCOUNT` | Whitelist the products you want to sell. See [Whitelist products](/docs/tutorials/getting-started/whitelist-products) |
| `087` | `INVALID CREDENTIALS` | Check your credentials and confirm you're using the right authentication method. See [API key authentication](/docs/tutorials/getting-started/create-api-key) |

### Service and system errors

The following table lists the codes for service and system errors:

| Code | Response description | Meaning |
| :--- | :--- | :--- |
| `030` | `BILLER NOT REACHABLE AT THIS POINT` | The biller for the product or service can't be reached |
| `034` | `SERVICE SUSPENDED` | The service is suspended for now |
| `035` | `SERVICE INACTIVE` | The service is turned off at the moment |
| `083` | `SYSTEM ERROR` | A system error occurred. Contact VTpass tech support |

## Transaction status
When the `code` is `000`, read `content.transactions.status` to get the actual state of the transaction.

The following table lists each status and what to do:

| Status | Meaning | What to do |
| :--- | :--- | :--- |
| `initiated` | The transaction has started | Requery later for the final status |
| `pending` | The service provider hasn't concluded the transaction yet | Requery later for the final status |
| `delivered` | The transaction succeeded and the service was delivered | Give value to your customer |
