---
sidebar_position: 3
description: How VTpass calculates your commission, and where to find it in API responses.
---
# Commission
This page explains how VTpass pays you commission on each transaction, how VTpass calculates it, and how to read it in API responses.

## How commission works
VTpass doesn't pay commission to you separately. Instead, VTpass gives it to you as a discount: when you buy a product through the API, VTpass charges your wallet less than the product's price. The difference is your commission.

For example, when your customer buys a ₦2,000 electricity token, you charge them ₦2,000. If your commission is 1.5%, VTpass charges your wallet ₦1,970, and you keep ₦30.

You can see this in every purchase and requery response. The following fields in `content.transactions` show the price, your commission, and what VTpass charged you:

```json
{
   "amount":"2000",
   "commission":30,
   "total_amount":1970,
   "commission_details": {
      "amount":30,
      "rate":"1.50",
      "rate_type":"percent",
      "computation_type":"default"
   }
}
```

- `amount` is the product's price, which is what your customer pays.
- `commission` is your commission on this transaction.
- `total_amount` is what VTpass charged your wallet: `amount` minus `commission`.

## Types of commission
Each product has a commission rate, which is either a percentage or a flat amount. The following table compares the two types:

| Type | How it's calculated | Example |
| :--- | :--- | :--- |
| Percentage | A percentage of the transaction amount, so your commission grows with the amount | A 2% rate on a ₦1,000 purchase gives you ₦20, and VTpass charges your wallet ₦980 |
| Flat | A fixed amount for each transaction, whatever the transaction amount | A ₦50 flat rate gives you ₦50 on every purchase, whether it's ₦1,000 or ₦10,000 |

### Capped commission
Some products limit how much commission you can earn on one transaction. If the calculated commission is higher than the cap, you get the cap instead.

For example, if a product has a 1.5% rate capped at ₦20, a ₦2,000 purchase gives you ₦20, not ₦30.

### Special commission rules
Some products use their own rules instead of the standard percentage or flat calculation. These rules depend on the product's category or variation. For example, electricity commission depends on the meter type and the customer's account type, such as MD, for Maximum Demand, or NMD, for Non-Maximum Demand. See [Commission](/docs/reference/services/electricity#commission) on the electricity page.

The `computation_type` field shows whether a special rule applies. See [Read commission details](#read-commission-details).

## Where to find your commission
You can find your commission in two places:

- **Before you sell**: the [VTpass commissions page](https://www.vtpass.com/commissions) lists the standard commission for each product.
- **In API responses**: the verify, purchase, and requery responses include a `commission_details` object with the commission for that product and transaction. This includes any special commission that applies to your account.

The API response is the most accurate source, because it reflects your own rates and any special rules.

## Read commission details
The `commission_details` object describes how VTpass calculated your commission. It appears in these responses:

- **Verify responses**, for example when you verify a meter or smartcard number. Use them to check your rate before the customer pays. `amount` is `null`, because the purchase amount isn't known yet.
- **Purchase and requery responses**. `amount` is the commission you earned on the transaction.

The following example shows a flat commission with a special rule and a cap:

```json
"commission_details": {
   "amount":20,
   "rate":"50",
   "rate_type":"flat",
   "computation_type":"nmd",
   "capped_at":"20"
}
```

The following table describes the `commission_details` fields:

| Field | Type | Description |
| :--- | :--- | :--- |
| `amount` | `number` | Commission on this transaction, in naira. `null` in verify responses |
| `rate` | `string` | Commission rate. Read it with `rate_type`: `"2"` with `percent` means 2%, and `"50"` with `flat` means ₦50 |
| `rate_type` | `string` | How VTpass applies the rate: `percent` for a percentage of the transaction amount, or `flat` for a fixed amount |
| `computation_type` | `string` | Commission rule. `default` means the standard percentage or flat calculation. Any other value, such as `nmd`, means a special rule applies |
| `capped_at` | `string` | Highest commission you can earn on one transaction, in naira. Missing or `null` if there's no cap |

## Related pages
- [Response fields](/docs/reference/requery#response-fields) describes the `commission` and `total_amount` fields in a requery response.
- [Electricity bill](/docs/reference/services/electricity#commission) explains how meter and account types affect electricity commission.
