---
sidebar_position: 2
---

# Generate your API keys
VTpass uses API Keys for authentication, to generate API keys kindly follow the steps below.

## How to generate your API keys
- Go to your [Sandbox profile](https://sandbox.vtpass.com/account).
- Click in the API Keys tab on your profile page.
- Ensure to set API AUTHENTICATION type to all or API keys.
- Copy your static API Key and click in the text that says click to generate your public and secret key.
:::warning

You must copy the generated API keys before leaving the page.

:::

:::tip

If you didn't copy the API keys before closing or leaving the page you can generate a new set of keys and discard the old one. 

:::

:::info

For GET request you’ll need to pass the api-key and public-key through the request header.
```
api-key: xxxxxxxxxxxxxxxxxxxx
public-key: PK_xxxxxxxxxxxxxxxxx
```
:::

:::info

For POST request you’ll need to pass the api-key and secret-key through the request header.
```
api-key: xxxxxxxxxxxxxxxxxxxx 
secret-key: SK_xxxxxxxxxxxxxxxxx
```
:::
once you have your API keys proceed to [Whitelist products](/docs/tutorials/getting-started/whitelist-products)