---
layout: ../../layouts/BlogLayout.astro
title: How to hide prices until customers log in on Shopify
description: Selling wholesale or to trade customers? Here is how to show your products to everyone but reveal prices, and Add to Cart, only to customers who have logged in or been approved, with no code.
category: Access control · Guide
pubDate: 2026-10-02
---

Plenty of Shopify stores don't want everyone to see their prices. Wholesale suppliers keep trade prices away from retail shoppers. Brands with authorised resellers don't want their reseller price list on public view. Some stores simply want shoppers to create an account before they can buy.

Shopify doesn't offer this out of the box. Every visitor sees every price. Here is how to change that, so products stay visible to everyone but prices only appear once a customer logs in, or once you approve them.

## Two ways to do it

There are two common setups, and the right one depends on who you want to let in:

- **Any logged-in customer sees prices.** Good when you just want shoppers to create an account first, for example to build your customer list or to keep casual browsers from comparing prices.
- **Only approved customers see prices.** Good for wholesale and B2B. A customer signs up, you check who they are, and you add a tag such as `wholesale` to their account. Only tagged customers see prices.

The second setup matters because an account on its own proves nothing: anyone can register. A tag means you have looked at the customer and said yes.

## How to set it up with GateKeeper

[GateKeeper](/products/gatekeeper) builds every rule from three choices: a **Lock** (what to protect), a **Key** (who gets in) and an **Action** (what everyone else sees).

1. **Install GateKeeper** (free) and open it from your Shopify admin.
2. **Start from the B2B wholesale template**, or create a rule from scratch.
3. **Lock:** choose the products or collections whose prices you want to hide. You can also lock your whole storefront.
4. **Key:** choose **logged-in customers** for the first setup, or **customer tag** with `wholesale` for the second.
5. **Action:** choose **hide the price** (and Add to Cart, if you want), so visitors still see the product but can't see the price or buy it.
6. **Check the summary.** GateKeeper reads the rule back in plain English and shows a live preview, so you can confirm it before it goes live.
7. **Save.**

From then on, a visitor who isn't logged in, or isn't tagged, sees the product without a price. Once they log in as an approved customer, prices and the Add to Cart button appear.

## Approving wholesale customers

With the tag setup, approving a customer takes a few seconds in Shopify: open **Customers**, choose the customer, and add the `wholesale` tag. The next time they log in, they see prices. Remove the tag and the prices disappear again.

A few tips that make this smoother:

- **Make the next step obvious.** If you'd rather send visitors straight to sign in, choose the **login wall** action instead of hiding the price, and mention trade accounts on your login or contact page.
- **Use more than one tag** if you have different customer groups, for example `wholesale` and `reseller`, each with its own rule.
- **Keep retail and wholesale separate** by locking only your wholesale collection, so retail shoppers still buy as normal.

## Other ways to restrict access

Hiding prices is one use of GateKeeper. The same Lock, Key and Action rules can also:

- Lock pages, blog posts or whole collections behind a login, a passcode or a secret link
- Show a login wall instead of the product
- Limit products or checkout to certain countries

If you'd rather not set it up yourself, message us and we'll build the rule for you, free.

[Get GateKeeper, free →](https://apps.shopify.com/gatekeeper-6)
