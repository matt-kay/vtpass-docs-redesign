---
sidebar_position: 5
description: Move your VTpass integration from sandbox to live, including API access, IP whitelisting, live keys, and a first live transaction.
---
# Go live with the VTpass API
This guide shows you how to move your integration from sandbox to live, so your customers can make real purchases.

Sandbox and live are separate. Your live account has its own API keys, product settings, wallet, and callback URL, so you set each of them up again for live. Live also needs two things that sandbox doesn't: VTpass must turn on API access for your account, and whitelist your server's IP address.

:::warning

VTpass charges every live purchase to your VTpass wallet. Finish your testing in sandbox before you switch.

:::

## Before you begin
Make sure your integration does the following in sandbox:

- Handles every result in the **Test in sandbox** section of each service you sell: successful, pending, failed, timeout, no response, and unexpected response. For example, see [Test in sandbox](/docs/reference/services/airtime#test-in-sandbox) for airtime.
- Generates a valid request ID for each transaction. See [Request ID](/docs/explanation/request-id).
- Requeries pending transactions, and only gives value when the status is `delivered`. See [Handle pending transactions](/docs/how-to/handle-pending-transactions).
- Verifies the customer before payment, for services that need it, such as electricity, TV, and JAMB.
- Shows the customer their token, PIN, or voucher after a successful purchase, for services that return one.

## 1. Create a live account
Register on the [VTpass live platform](https://www.vtpass.com/register). This is a different account from your sandbox account.

## 2. Request API access and IP whitelisting
API access is off on new live accounts, and the live API only accepts requests from IP addresses that VTpass has whitelisted.

1. Find the public IP address of each server that calls the VTpass API. To check an address, run the following command on the server:

   ```bash
   curl https://ifconfig.me
   ```

2. Contact VTpass technical support by email at `support@vtpass.com` or on Skype at `vtpass.techsupport` with a message that includes the following:
   - The email address of your live VTpass account.
   - A request to turn on API access, and a note that you've finished testing in sandbox.
   - The public IP addresses of your servers.

VTpass support confirms when your account is ready.

:::note

Use servers with fixed IP addresses, also called static IP addresses. If your server's IP address changes, for example after a redeploy or when you add a server, live requests fail with response code `027` until VTpass whitelists the new address. Send support every new address before you start using it.

:::

## 3. Generate your live API keys
1. Go to your [VTpass live profile](https://vtpass.com/account).
2. Click the **API Keys** tab.
3. Set `API AUTHENTICATION TYPE` to **all** or **API keys**.
4. Copy your static API key, then click the text that generates your public and secret keys.
5. Copy the public and secret keys and store them securely, for example in your server's secret manager.

:::warning

VTpass shows your public and secret keys only once. If you don't copy them before you leave the page, generate a new set.

:::

## 4. Whitelist your products
VTpass turns off every product on your live account by default, even if you turned it on in sandbox.

1. Go to your [VTpass live profile](https://vtpass.com/account).
2. Click the **Product Settings** tab.
3. Select the products you want to sell, and click **Submit**.

## 5. Fund your live wallet
VTpass charges each live purchase to your wallet. Add enough funds to cover your expected sales. If your balance is too low, purchases fail with response code `018`.

## 6. Set your live callback URL
If you use webhooks, add your callback URL to your live account too. See [Set up your callback URL](/docs/how-to/webhooks/set-up-callback-url).

## 7. Switch your integration to live
Change the base URL and API keys your integration uses. The following table lists the values for each environment:

| Setting | Sandbox | Live |
| :--- | :--- | :--- |
| Base URL | `https://sandbox.vtpass.com/api` | `https://vtpass.com/api` |
| API keys | Keys from your sandbox profile | Keys from your live profile |

Keep these values in configuration, not in your code, so you can switch environments without changing code. For example:

```js noenv
// Set VTPASS_ENV=live in your live environment
const isLive = process.env.VTPASS_ENV === "live";

const config = {
  baseUrl: isLive ? "https://vtpass.com/api" : "https://sandbox.vtpass.com/api",
  apiKey: process.env.VTPASS_API_KEY,
  publicKey: process.env.VTPASS_PUBLIC_KEY,
  secretKey: process.env.VTPASS_SECRET_KEY,
};
```

:::tip

To see live URLs in the code samples on this site, select **Live** in the navigation bar.

:::

## 8. Test with a live transaction
Before you open live sales to customers, check your setup with a small real purchase:

1. [Get your wallet balance](/docs/tutorials/getting-started/make-first-request) with the live base URL and keys. A successful response confirms that your keys, API access, and IP whitelisting work.
2. Buy a small amount of [airtime](/docs/reference/services/airtime) for your own phone number.
3. [Requery the transaction](/docs/how-to/handle-pending-transactions) with its request ID, and check that the status is `delivered`.
4. If you use webhooks, check that your callback URL received the transaction update.

## Troubleshoot live requests
If a live request fails, check the response code. The following table lists the codes you're most likely to see when you go live:

| Code | What it means | What to do |
| :--- | :--- | :--- |
| `018` | Your wallet balance is too low | Fund your live wallet |
| `023` | API access isn't turned on for your account | Ask VTpass support to turn on API access. See [step 2](#2-request-api-access-and-ip-whitelisting) |
| `027` | The request came from an IP address that isn't whitelisted | Send VTpass support your server's public IP address. See [step 2](#2-request-api-access-and-ip-whitelisting) |
| `028` | The product isn't whitelisted on your account | Whitelist the product in your live profile. See [step 4](#4-whitelist-your-products) |
| `087` | Your credentials are invalid | Check that you're using your live keys, not your sandbox keys, with the live base URL. See [step 3](#3-generate-your-live-api-keys) |

For every code, see [Response codes](/docs/reference/response-codes).
