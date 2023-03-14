---
title: Use Cases
description: Use cases for A/B testing can include feature experimentation, hardware/backend changes, and testing of APIs and other third-party services.
---

Use cases for A/B testing can include design changes, feature experimentation, hardware/backend changes, and testing of APIs and other third-party services.

---

## UI and Design Changes

While simple decisions about a website’s color or the shape of a button might seem minor, these design
choices can have significant consequences. As mentioned above, in 2009, Google famously implemented a
test in which they tested 41 different shades of blue for their links, compared user behavior with each
variant, and not only identified the shade that users preferred, but also determined that making the switch to
that shade would result in an additional annual revenue of about $200 million. This may be an extreme
example, but it does illustrate that even subtle changes can have a dramatic impact on user behavior. Rather
than leaving these changes up to guesswork, it is worthwhile to obtain actual user analytics before deploying
a potentially costly “minor” design change.

## Feature Experimentation

Larger changes, such as adding additional functionality like a search bar or a “like” feature to a website, may
require a considerable amount of up-front engineering cost to implement. In turn, it can be significantly
more difficult to implement changes to these types of features. Rather than releasing a feature to the entire
user base, only to find it has negatively impacted user behavior, and then using guesswork to refine the new
feature, A/B testing allows developers to expose the new feature to a small subset of users, evaluate their
response, and create additional variants and tests if needed, prior to a wider rollout.

## Hardware / Backend Changes

With the nearly unlimited selection of possible system design decisions and options for processing and
storing data, A/B testing may help increase desired user behavior or decrease cost structure. For example,
the slightly increased latency of a downgraded server or alternate service may not be as detrimental to user
conversion as the design team anticipates. For other apps it may be best to upgrade to the most performant
architecture the company can afford to maximize potential user conversions – a 100ms delay in loading can
hurt conversion rates by as much as 7% according to a 2017 Akamai study. However, user loyalty or user
dependence on your application is variable enough to warrant A/B testing to make the most effective
changes.

## Testing APIs / Third-Party Services

It is often efficient and economical to rely on APIs and third-party services for portions of an application. For
each desired component, there may be many different options with distinct features, computational and
financial costs, and user interfaces. As an example, there may be a significant difference in conversion rates if
you allow users to utilize PayPal for their purchases as opposed to only credit cards. There are trade-offs in
terms of the cost of using these services, but the increased conversion rate may outweigh the increased cost.
Testing these changes prior to implementation allows for a clear understanding of the risks and rewards.

---
