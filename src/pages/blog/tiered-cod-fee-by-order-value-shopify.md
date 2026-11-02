---
layout: ../../layouts/BlogLayout.astro
title: How to set a Cash on Delivery fee by order value in Shopify
description: A flat COD fee can feel too high on small orders and too low on large ones. Here is how to tier your Cash on Delivery fee by cart subtotal in Shopify, with no code.
category: Payments · Guide
pubDate: 2026-11-02
---

A single flat Cash on Delivery fee is simple, but it rarely fits every order. On a small order it can look out of proportion and put the customer off. On a large order it may not come close to covering what you lose if the parcel is refused.

Tiering fixes this. The fee changes with the cart subtotal, so each order carries a charge that makes sense for its size. Shopify has no built-in way to add a fee to a payment method, let alone tier one, so here is how to do it.

## Flat, percentage or tiered?

You have three ways to structure a COD fee:

- **Flat fee.** The same amount on every order. Easy to explain, and a good fit if your order values are all similar.
- **Percentage fee.** Grows with the order automatically, but can feel steep on a large cart, because customers see the amount rather than the percentage.
- **Tiered fee.** A set amount for each band of cart subtotal. You stay in control of what each customer pays, and the bands are easy to adjust.

Tiering works best when your order values vary a lot, or when refused high-value parcels are your biggest COD cost.

## Choosing your tiers

Start from your own numbers rather than a formula:

1. **Find your real COD cost.** Add up what your courier charges for collecting cash and what a refused parcel costs you in return shipping.
2. **Look at your order values.** Your order history will show where most orders fall. Two or three bands are usually enough.
3. **Set a fee for each band.** Keep the lowest band small enough that it doesn't put off shoppers with small carts.

As an example only, a store might use these bands, in its own currency:

- Orders under 50: a fee of 2
- Orders from 50 to 150: a fee of 4
- Orders over 150: a fee of 7

Keep the bands simple. Customers don't need to understand the structure, but you do need to be able to explain any fee they ask about.

## How to set it up with ChargeIt

[ChargeIt](/products/chargeit) adds a fee or a discount based on the payment method the customer picks, and it can tier the amount by cart subtotal.

1. **Install ChargeIt** (free) and open it from your Shopify admin.
2. **Turn on the payment method selector** for your cart page.
3. **Create a rule** and choose Cash on Delivery as the payment method.
4. **Add your tiers** by cart subtotal, with a fee for each band.
5. **Name the fee line,** for example "COD handling fee", so customers see what they're paying for.
6. **Save,** then place a test order in each band to check that the right fee appears.

## Keep the fee fair

A tiered fee should reflect a real cost, so it's worth being open about it. Mention the fee on your shipping or FAQ page, and give shoppers an easy alternative. If a customer can see they would avoid the fee by paying online, it stops being an annoyance and becomes a choice.

You can make that choice more attractive by pairing the fee with a small reward for paying upfront. See our guide on [offering a discount for prepaid orders](/blog/prepaid-discount-shopify). The same tiers work there too, with a bigger saving on larger orders.

If large orders are simply too risky for COD, you may want to remove the option instead of charging for it. Our guide on [hiding Cash on Delivery on high-value orders](/blog/hide-cash-on-delivery-high-value-orders-shopify) shows how.

If you'd like a hand setting up your tiers, message us and we'll build the rule for you, free.

[Get ChargeIt, free →](https://apps.shopify.com/chargeit)
