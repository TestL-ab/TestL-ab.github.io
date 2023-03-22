---
title: A/B Testing Overview
description: An overview of A/B testing and use cases, and implementation options.
---

## Small changes can have a big impact

In established applications, even the smallest changes can have a significant impact that may not be predictable or obvious to the development team. In some cases, it’s best left to the end user to truly decide which modifications to make to the application. Presenting an application change to a “test” audience of users and observing their behavior can add empirical data to the process of making improvements to increase conversion rates or alter desired user behavior.

Google famously tested over 40 different shades of
blue for ad links, resulting in a final color choice that added nearly $200M in revenue. A/B testing allows the development team to make informed decisions based on quantitative data points and
analytics. These decisions can increase desired user behavior and may help identify more efficient or cost-effective solutions. A/B testing prior to rollout also reduces the risk of making a detrimental design choice based on perceived aesthetic preference rather than actual user behavior.

## Hypotheses, experiments, and results

**A/B testing** (also called split testing) is a tool that is used to compare the way users engage with two or more
distinct website variations. Prior to conducting an A/B test, a design team will create a **hypothesis** as to the
way that a modification is expected to impact a specific user behavior, such as click-through rates, bounce
rates, or conversion rates. Next, a **variation** of the original site is created that features the proposed design
change, and an A/B test tool is used to direct a certain percentage of users to the variant and a certain
percentage to the control.

![Alt Text](/images/ab_testing_overview.png)

Once users are assigned to a test variant, data can be gathered and analyzed from users in each group. The user behavior from each version is compared to determine whether the hypothesis was accurate. By enabling distinct groups of users to interact with each version and using data analysis to compare their responses with the proposed goal, the design team can make an informed decision as to whether to roll out the change to the whole user base.

---

## Use Cases for A/B Testing

Use cases for A/B testing can include design changes, feature experimentation, hardware/backend changes, and testing of APIs and other third-party services.

### UI and Design Changes

While simple decisions about a website’s color or the shape of a button might seem minor, these design choices can have significant consequences. As mentioned above, in 2009, Google famously implemented a test in which they tested 41 different shades of blue for their links and compared user behavior with each variant. Not only did they identify the shade that users preferred, but they also predicted that making the switch to that shade would result in an additional annual revenue of about $200 million. This may be an extreme example, but it does illustrate that even subtle changes can have a dramatic impact on user behavior. Rather than leaving these changes up to guesswork, it is worthwhile to obtain actual user analytics before deploying a potentially costly “minor” design change.

### Feature Experimentation

Larger changes, such as adding additional functionality like a search bar or a “like” feature to a website, may require a considerable amount of up-front engineering cost to implement. In turn, it can be significantly more difficult to implement changes to these types of features. Rather than releasing a feature to the entire user base, only to find it has negatively impacted user behavior, and then using guesswork to refine the new feature, A/B testing allows developers to expose the new feature to a small subset of users, evaluate their response, and create additional variants and tests if needed, prior to a wider rollout.

### Hardware / Backend Changes

With the nearly unlimited selection of possible system design decisions and options for processing and storing data, A/B testing may help increase desired user behavior or decrease cost structure. For example, the slightly increased latency of a downgraded server or alternate service may not be as detrimental to user conversion as the design team anticipates. For other apps, it may be best to upgrade to the most performant architecture the company can afford to maximize potential user conversions – a 100ms delay in loading can hurt conversion rates by as much as 7% according to a 2017 Akamai study. However, user loyalty or user dependence on your application is variable enough to warrant A/B testing to make the most effective changes.

### Testing APIs / Third-Party Services

It is often efficient and economical to rely on APIs and third-party services for portions of an application. For each desired component, there may be many different options with distinct features, computational and financial costs, and user interfaces. As an example, there may be a significant difference in conversion rates if you allow users to utilize PayPal for their purchases as opposed to only credit cards. There are trade-offs in terms of the cost of using these services, but the increased conversion rate may outweigh the increased cost. Testing these changes prior to implementation allows for a clear understanding of the risks and rewards.

---

## Implementing A/B Testing

A/B tests can be implemented in the client-side, server-side, CDN, or API/microservice level of an application.

### Client-Side Implementation

A/B tests are most commonly implemented on the client-side, and these types of tests typically rely on third-party services. Users are assigned to test and control groups randomly, and the DOM is modified for the test group using JavaScript.

A key advantage of client-side implementation is that it’s easy for developers, as there are many existing third-party services (including but not limited to Google Optimize, Optimizely, and VWO). There is no inherent need to build a testing platform from scratch, and many of these tools can be implemented with no developer expertise at all.

On the downside, client-side implementation of A/B tests can cause a strange user experience, as you have to re-render the page for the test group after having the original page flash briefly on their screen. Client-side implementation can also have an undesirable impact on sites that utilize React, Angular, and other libraries and frameworks, as the DOM will not match the virtual DOM for those who are part of the test group.

### Server-Side Implementation

With server-side implementation of A/B testing, the HTML is modified on the server before being sent to the browser.

One advantage of this approach is that the server has full access to user data, so you are able to select specific users for testing, based on criteria you determine to be relevant. In addition, most back-end testing platforms are built by developers on-site, so there is more control over implementation.

On the other hand, there are fewer third-party options for implementing server-side A/B testing, so more developer expertise is required. Server-side A/B testing can also interfere with caching/CDNs since different renderings of the same URL will feature different components depending on the user. Finally, sending analytic events from the server-side can impact performance, so developers need to be thoughtful when implementing methods for tracking analytics.

### CDN Implementation

A/B testing can also be implemented via a CDN, where the CDN randomly assigns users to either the control or the test implementation, routes them directly to a different path, and uses cookies in the browser to capture analytics.

Since you have entirely separate branches of code for your existing version and your test version(s), it is easier to fully switch the entire user base to the successful version after the experiment is complete. This approach is ideal for static sites that are already hosted on a CDN, as many CDNs already offer this service. In addition, since users are sent directly to one site or the other, you don’t have the potential “flash” of the original site for users in the test group.

However, since the CDN does not store user data, there is no way to use this data to curate the user experience. Assignment is random, which also means that traffic must be split evenly between the two sites in order to avoid cache misses that could occur if one version of the site is underutilized.

### API / Microservice Implementation

Implementing A/B testing at the microservice level is challenging. It is most often used in situations such as testing search algorithms or machine learning models. However, it adds significant complexity to application infrastructure, it is difficult to track analytics, and, similar to the CDN implementation, there is a need to split traffic evenly to prevent cache misses.
