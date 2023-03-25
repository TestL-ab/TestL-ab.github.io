---
title: A/B Testing Overview
description: An overview of A/B testing and use cases, and implementation options.
---

## Small changes can have a big impact

In established applications, even the smallest changes can have a significant impact that may not be predictable or obvious. In some cases, user behavior can be used by a company to inform app optimizations. Presenting an application change to a “test” audience of users and observing their behavior can add empirical data to the process of making improvements. This can increase conversion rates or alter desired user behavior.

[Google famously tested over 40 different shades of
blue for ad links](https://www.theguardian.com/technology/2014/feb/05/why-google-engineers-designers), resulting in a final color choice that added nearly $200M in revenue. A/B testing allows companies to make informed decisions based on quantitative data points and
analytics. These decisions can increase desired user behavior and may help identify more efficient or cost-effective solutions. A/B testing prior to rollout also reduces the risk of making a detrimental design choice based on perceived aesthetic preference rather than actual user behavior.

## Hypotheses, experiments, and results

**A/B testing** (also called split testing) is a tool that is used to compare the way users engage with two or more distinct versions of a website. Those versions may have visible differences in the user interface, or there may be differences in hardware, software, or APIs that may not be visible to the user but could otherwise affect the user experience.

Prior to conducting an A/B test, a company will create a **hypothesis** about how a modification is expected to impact a specific user behavior, such as click-through rates, bounce
rates, or conversion rates. Next, a **variation** of the original site is created that features the proposed design
change, and an A/B test tool is used to direct a certain percentage of users to the variant and a certain
percentage to the control.

![Alt Text](/images/ab_testing_overview.png)

Once users are assigned to a test variant, data can be gathered and analyzed from users in each group. The user behavior from each version is compared to determine whether the hypothesis was accurate. By enabling distinct groups of users to interact with each version and using data analysis to compare their responses with the proposed goal, companies can make an informed decision as to whether to roll out the change to the whole user base.

---

## Use Cases for A/B Testing

Use cases for A/B testing can include design changes, feature experimentation, hardware/backend changes, and testing of APIs and other third-party services.

### UI and Design Changes

While simple decisions about a color or the shape of a button might seem minor, these design choices can have significant consequences. As mentioned above, in 2009, Google famously implemented a test in which they tested 41 different shades of blue for their links and compared user behavior with each variant. Not only did they identify the shade that users preferred, but they also predicted that making the switch to that shade would result in an additional annual revenue of about $200 million. This may be an extreme example, but it does illustrate that, at scale, even subtle changes can have a dramatic impact on user behavior. Rather than leaving these changes up to guesswork, it is worthwhile to obtain actual user analytics before deploying a potentially costly “minor” design change.

### Feature Experimentation

Larger changes, such as adding additional functionality like a search bar or a “like” feature to a website, may require a considerable amount of up-front engineering cost to implement. It can be significantly more difficult to implement changes to these types of features. A/B testing allows developers to expose a new feature to a small subset of users and evaluate their response prior to a wide rollout. This approach can be far more effective than releasing a new feature to the entire user base, only to find out it has negatively impacted user behavior. A/B testing helps to take the guesswork out of rolling out and refining new features.

### Hardware / Backend Changes

A/B testing can also be used to make backend changes, including hardware changes, that could yield cost savings for a company. For example, the slightly increased latency of a downgraded server or alternate service may not be as detrimental to user conversion as anticipated. For other apps, it may be best to upgrade to the most performant architecture the company can afford to maximize potential user conversions – a 100ms delay in loading can hurt conversion rates by as much as 7% according to a [2017 Akamai study](https://www.akamai.com/newsroom/press-release/akamai-releases-spring-2017-state-of-online-retail-performance-report). A/B testing can be used to determine which changes are less likely to impact a user's experience.

### Testing APIs / Third-Party Services

It is often efficient and economical to rely on APIs and third-party services for portions of an application. For each desired component, there may be many different options with distinct features, computational and financial costs, and user interfaces. As an example, there may be a significant difference in conversion rates if you allow users to utilize PayPal for their purchases as opposed to only credit cards. There are trade-offs in terms of the cost of using these services, but the increased conversion rate may outweigh the increased cost. Testing these changes prior to implementation allows for a clear understanding of the risks and rewards.

---

## Implementing A/B Testing

A/B tests can be implemented on the client-side, server-side, CDN, or API/microservice level of an application.

### Client-Side Implementation

A/B tests are most commonly implemented on the client-side, and these types of tests typically rely on third-party services. The web server always sends the same version of the page, but users are assigned to test and control groups, and the DOM is modified for the test group using JavaScript. Since the variation happens in the browser rather than the server, it is called client-side implementation.

A key advantage of client-side implementation is that it’s easy for developers, as there are many existing third-party services (for example, Google Optimize, Optimizely, and VWO) to support this type of implementation. There is no inherent need to build a testing platform from scratch, and many of these tools can be implemented with limited developer expertise. In fact, VWO goes so far as to state that, ["...ideally, we want our users never to touch any code (be it HTML, JavaScript, CSS, or PHP)...VWO is suited for people who don't want to rely on developers or \[the\] IT team for doing even the simplest kind of testing."](https://cxl.com/blog/server-side-vs-client-side-ab-testing-tools-whats-the-difference/#h-client-side-server-side-what-s-the-difference)

On the downside, client-side implementation of A/B tests can cause a strange user experience, as you have to re-render the page for the test group after having the original page flash briefly on their screen. Client-side implementation can also have an undesirable impact on sites that utilize React, Angular, and other libraries and frameworks, as the DOM will not match the virtual DOM for those who are part of the test group.

### Server-Side Implementation

With server-side implementation of A/B testing, the HTML is modified on the server before being sent to the browser.

One advantage of this approach is that the server has full access to user data, so you are able to select specific users for testing, based on criteria you determine to be relevant. In addition, many back-end testing platforms tend to be custom-built, so there is more control over implementation and the option of more robust privacy and security measures.

On the other hand, there are fewer third-party options for implementing server-side A/B testing, so more developer expertise is required. Peter Koomen, co-founder of Optimizely [summarized this key trade-off of client- versus server-side A/B testing](https://cxl.com/blog/server-side-vs-client-side-ab-testing-tools-whats-the-difference/#h-client-side-server-side-what-s-the-difference):

> "The advantage of testing on the client side is speed and simplicity. You can test a lot of changes quickly without much initial investment. On the other hand, testing on the server side is both more work and generally more powerful."

### CDN Implementation

A/B testing can also be implemented via a CDN, where the CDN randomly assigns users to either the control or the test implementation, routes them directly to a different path, and uses cookies in the browser to capture analytics.

Since you have entirely separate branches of code for your existing version and your test version(s), it is easier to fully switch the entire user base to the successful version after the experiment is complete. This approach is ideal for static sites that are already hosted on a CDN, as many CDNs already offer this service. In addition, since users are sent directly to one site or the other, you don’t have the potential “flash” of the original site for users in the test group.

However, since the CDN does not store user data, there is no way to use this data to curate the user experience. Assignment is random, which also means that traffic must be split evenly between the two sites in order to avoid cache misses that could occur if one version of the site is underutilized.

### API / Microservice Implementation

Implementing A/B testing at the microservice level is challenging. It is most often used in situations such as testing search algorithms or machine learning models. However, it adds significant complexity to application infrastructure, it is difficult to track analytics, and, similar to the CDN implementation, there is a need to split traffic evenly to prevent cache misses.
