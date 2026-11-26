---
sidebar_position: 6
---
# Response codes
Every VTpass API response includes a `code` field that shows the result of your request.
This page lists each code, what it means, and what to do when you get it.

:::warning

If you get a response that doesn't match this page, a timeout, or no response at all, treat the transaction as pending and [requery it](/docs/how-to/handle-pending-transactions) to confirm its status.

:::

## Verification response codes
VTpass returns these codes when you verify an electricity meter number, or a DStv, GOtv, or StarTimes smartcard number.

:::note

If you get any of these codes when you make a purchase, treat the transaction as failed.

:::

The following table lists the verification response codes:

| Code | Response description | Meaning |
| :--- | :--- | :--- |
| `020` | `BILLER CONFIRMED` | VTpass verified the smartcard or meter number |
| `011` | `INVALID ARGUMENTS` | One or more required request arguments are missing |
| `012` | `PRODUCT DOES NOT EXIST` | The product doesn't exist |
| `030` | `BILLER NOT REACHABLE AT THIS POINT` | VTpass can't reach the biller for the product or service |

## Transaction and requery response codes
VTpass returns these codes when you make a purchase or requery a transaction.

### Processed or in progress
For these codes, the transaction may still succeed. Check the status before you give value to your customer.

The following table lists the codes for transactions that VTpass processed, or that are still in progress:

| Code | Response description | Meaning |
| :--- | :--- | :--- |
| `000` | `TRANSACTION PROCESSED` | VTpass processed the transaction. Check `content.transactions.status` for its actual state. See [Transaction status](#transaction-status) |
| `099` | `TRANSACTION IS PROCESSING` | The transaction is still processing. Requery with your request ID to get its current status |
| `001` | `TRANSACTION QUERY` | The current status of a transaction on the platform |
| `044` | `TRANSACTION RESOLVED` | VTpass resolved the transaction. Contact VTpass for more information |
| `089` | `REQUEST IS PROCESSING, PLEASE WAIT BEFORE MAKING ANOTHER REQUEST` | Your previous request is still processing. Wait before you send another request |

### Failed or reversed

The following table lists the codes for transactions that failed, or that VTpass reversed:

| Code | Response description | Meaning |
| :--- | :--- | :--- |
| `016` | `TRANSACTION FAILED` | The transaction failed |
| `040` | `TRANSACTION REVERSAL` | VTpass reversed the transaction and returned the money to your wallet |
| `091` | `TRANSACTION NOT PROCESSED` | The transaction wasn't processed, and you weren't charged |

### Request errors

The following table lists the codes for errors in the request:

| Code | Response description | Meaning |
| :--- | :--- | :--- |
| `010` | `VARIATION CODE DOES NOT EXIST` | The variation code is invalid. Use the [Variation codes API](/docs/reference/service-discovery/variation-codes) to get valid codes |
| `011` | `INVALID ARGUMENTS` | One or more required request arguments are missing |
| `012` | `PRODUCT DOES NOT EXIST` | The product doesn't exist |
| `013` | `BELOW MINIMUM AMOUNT ALLOWED` | The amount is below the minimum for the product or service |
| `017` | `ABOVE MAXIMUM AMOUNT ALLOWED` | The amount is higher than the maximum for the product or service |
| `019` | `LIKELY DUPLICATE TRANSACTION` | You bought the same service for the same `biller_code` more than once within 30 seconds |
| `025` | `RECIPIENT BANK INVALID` | The bank code for a bank transfer is invalid |
| `026` | `RECIPIENT ACCOUNT COULD NOT BE VERIFIED` | VTpass couldn't verify the bank account number |
| `031` | `BELOW MINIMUM QUANTITY ALLOWED` | The quantity is below the minimum allowed per purchase |
| `032` | `ABOVE MINIMUM QUANTITY ALLOWED` | The quantity is higher than the maximum allowed per purchase |

### Request ID errors
See [Request ID](/docs/explanation/request-id) for the required format.

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
| `021` | `ACCOUNT LOCKED` | VTpass locked your account |
| `022` | `ACCOUNT SUSPENDED` | VTpass suspended your account |
| `023` | `API ACCESS NOT ENABLE FOR USER` | API access isn't enabled on your account. Contact VTpass to activate it |
| `024` | `ACCOUNT INACTIVE` | Your account is inactive |
| `027` | `IP NOT WHITELISTED, CONTACT SUPPORT` | Your server IP isn't whitelisted. Contact support with your IP. See [Go live with the VTpass API](/docs/how-to/go-live#2-request-api-access-and-ip-whitelisting) |
| `028` | `PRODUCT IS NOT WHITELISTED ON YOUR ACCOUNT` | Whitelist the products you want to sell. See [Whitelist products](/docs/tutorials/getting-started/whitelist-products) |
| `087` | `INVALID CREDENTIALS` | Check your credentials and confirm you're using the right authentication method. See [Authentication](/docs/reference/authentication) |

### Service and system errors

The following table lists the codes for service and system errors:

| Code | Response description | Meaning |
| :--- | :--- | :--- |
| `030` | `BILLER NOT REACHABLE AT THIS POINT` | VTpass can't reach the biller for the product or service |
| `034` | `SERVICE SUSPENDED` | VTpass suspended the service for now |
| `035` | `SERVICE INACTIVE` | VTpass turned off the service for now |
| `083` | `SYSTEM ERROR` | A system error occurred. Contact VTpass tech support |

## Transaction status
When the `code` is `000`, read `content.transactions.status` to get the actual state of the transaction.

The following table lists each status and what to do:

| Status | Meaning | What to do |
| :--- | :--- | :--- |
| `initiated` | The transaction has started | Requery later for the final status |
| `pending` | The service provider hasn't concluded the transaction yet | Requery later for the final status |
| `delivered` | The transaction succeeded, and the customer has the service | Give value to your customer |
