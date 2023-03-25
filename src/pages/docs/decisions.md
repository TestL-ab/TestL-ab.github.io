---
title: Architectural Decisions
description: Key decisions made when designing the Test Lab architecture.
---

## Managed versus Self-Hosted

A/B testing platforms are generally fully managed and hosted by a third party or self-hosted on a private server. The Test Lab team opted to provide an open-source, self-hosted solution, which offers the opportunity for customization, complete control over data, and a lower cost.

1. Customization: With a self-hosted A/B testing platform like Test Lab, you have complete control over the platform and can customize it to fit your specific needs. This can be particularly useful if you have specific requirements that are not met by off-the-shelf A/B testing solutions but do not have sufficient resources to build an A/B testing platform completely in-house.
2. Cost: While a self-hosted A/B testing platform may require more upfront investment in hardware and infrastructure, it can be more cost-effective in the long run than a fully managed and hosted option. With a self-hosted platform, you have more control over costs and can scale the platform as needed without incurring additional fees.
3. Data ownership: With a self-hosted A/B testing platform, you have complete ownership and control over your data. This can be important if you want to keep your data on-premises or if you have specific data retention or compliance requirements.

All of these elements are especially important for Test Lab’s core use case, which includes applications that may not be large enough to benefit from a fully-managed A/B testing solution.

---

## Database Type

An early design decision we made was which type of database to use to store the Test Lab feature configurations, users, and event data. We considered using a SQL database, a noSQL database like MongoDB, and even a time series database specifically for the event data.

Ultimately, we chose to use PostgreSQL to store data for the Test Lab A/B testing platform for a few key reasons:

1. Structured data: SQL databases are designed to store structured data, which is ideal for A/B testing data. In particular, feature configurations require specific data types. Although we have logic in both the Admin UI and the Test Lab backend server ensuring appropriate data structure is used, the rigidity of the PostgreSQL database gave us an additional layer of validation.
2. Data consistency: SQL databases provide transactional support, ensuring that data is consistent and accurate. This is particularly important for A/B testing platforms, where data accuracy and consistency are critical to making informed decisions based on experiment results.
3. Reliability: SQL databases are known for their reliability and durability, making them a great choice for storing critical data such as A/B testing results. PostgreSQL, in particular, has a reputation for being one of the most reliable and robust open-source databases available.

---

## API Access

When designing our Test Lab backend server, we had to determine whether we wanted to force users to interact with the API solely through the Admin UI or whether we also wanted to provide direct API access as well. Keeping with our theme of **flexibility**, we decided to offer direct API access in addition to our Admin UI.

A downside of this choice is that we do not yet have all of the validation built into the backend server that we have in the Admin UI. We do enforce that the format of created and updated features, variants, users, and events are correct whether the action came from the Admin UI or direct API access. However, there is a key validation feature present in the Admin UI that does not currently carry over to the backend server - ensuring that no more than 100% of the user base is enrolled in an experiment over a given time period.

Overall, we felt that the flexibility of allowing developers to interact with the API in the way that is most helpful for their application outweighed the potention downsides of the developer using the API endpoints incorrectly. As a way to mitigate this risk, we provide [extensive API documentation](/docs/api-docs) to help guide the correct use of the Test Lab routes.
