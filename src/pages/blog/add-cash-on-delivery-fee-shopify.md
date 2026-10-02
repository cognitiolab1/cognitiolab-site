---
layout: ../../layouts/BlogLayout.astro
title: How to add a Cash on Delivery fee in Shopify
description: Cash on Delivery orders cost more to deliver and get refused more often, but Shopify charges the same for every payment method by default. Here is how to add a fixed or percentage COD fee, with no code.
category: Payments · Guide
pubDate: 2026-10-02
---

Cash on Delivery orders cost you more than prepaid ones. Couriers often charge a collection fee for handling cash. Some customers refuse the parcel at the door, and you pay for the return trip. And the money arrives days or weeks later, after the courier settles up.

Yet most Shopify stores charge exactly the same for a COD order as for a card payment, because Shopify has no built-in way to add a fee to a specific payment method. Here is how to add one.

## Why charge a COD fee at all

A small COD fee does two jobs:

- **It covers the real cost** of collection charges and returned parcels, so COD orders stop eating into your margin.
- **It nudges customers towards paying upfront.** Many shoppers who pick COD out of habit will switch to a card when COD costs a little more, and prepaid orders are far less likely to be refused.

The fee doesn't need to be large. Many stores charge a fixed amount roughly equal to their courier's collection fee, for example 3 or 5 in their currency, or a small percentage of the order.

## How to set it up with ChargeIt

[ChargeIt](/products/chargeit) adds a fee or a discount based on the payment method the customer picks.

1. **Install ChargeIt** (free) and open it from your Shopify admin.
2. **Turn on the payment method selector** for your cart page. This is where shoppers choose how they'll pay, and it's styled to match your theme.
3. **Create a rule,** or start from one of the six templates.
4. **Choose Cash on Delivery** as the payment method.
5. **Set the fee:** a fixed amount, or a percentage of the cart. You can also tier it by cart subtotal, so larger orders carry a larger fee.
6. **Name the fee line,** for example "COD handling fee", so customers see exactly what they're paying for.
7. **Save.**

From then on, when a shopper chooses Cash on Delivery in the cart, the fee appears straight away on its own named line, before they reach checkout.

## What your customers see

The shopper picks their payment method on the cart page. If they choose COD, the fee line appears and the total updates. If they switch to a card, the fee disappears. Checkout then offers only the payment method they chose in the cart, so nobody can pick card in the cart to avoid the fee and then switch to COD at checkout.

The fee is a separate line on the order, not part of the shipping price, so your shipping rates stay exactly as they are.

## Limiting the fee to certain orders

You don't have to charge the fee on every COD order. Narrow the rule by:

- **Country,** for example only where your courier charges for cash collection
- **Cart value,** for example only on orders under a certain amount
- **Customer type or tags,** for example waive it for trusted repeat customers
- **Products,** for example only on bulky or fragile items

## Pair it with a prepaid discount

A COD fee works even better alongside a small discount for paying upfront, so customers see one reason to avoid COD and another reason to pay by card. See our guide on [offering a discount for prepaid orders](/blog/prepaid-discount-shopify).

If you'd like a hand setting up your COD fee, message us and we'll build the rule for you, free.

[Get ChargeIt, free →](https://apps.shopify.com/chargeit)
