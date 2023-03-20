---
title: Challenges of A/B testing
description: Challenges related to A/B testing.
---

---

## Implementation Challenges

### Sticky Sessions

One challenge of A/B testing is ensuring that the appropriate features are shown to a given user and that the user continues to be exposed to that experience over time. In most cases, simply randomizing each request to one of many potential experiences will just not cut it. The approach for ensuring the “stickiness” of the experience can vary depending on whether you’re rolling out a new feature to a small subset of users or trying to conduct an experiment to determine which of several variants results in the highest level of user engagement.

Test Lab aims to offer **flexibility** to its users. As such, it allows the definition of "stickiness" to be defined by the client application. As you will see in [our discussion of engineering decisions](/docs/functional-decisions#stickiness-of-the-user-experience), Test Lab offers SDKs which allow for the definition of `context`, which defines a distinct user for the purposes of the application--whether that be a UUID, an email address, a session ID, or another unique classifier used by the client application.

### Developer Involvement

Another challenge of A/B testing is that developer involvement is typically required to ensuring that the appropriate features are rendered for a given user given the parameters of a defined experiment. When developing an A/B testing platform, it can be difficult to balance ease-of-use for the developer with robust feature creation and management tools.

One solution to this challenge is What You See Is What You Get (WYSIWYG) experimentation platforms. These tools allow you to insert text or images, or drag and drop elements onto a web page without any developer expertise. The software automatically generates the code, and you can inject the code directly into your application as a `script` tag.

Although this is certainly a straightforward solution, it only works for _client-side_ rendered applications, and it also limits your A/B testing to _visual features_. When developing Test Lab, we wanted to provide the **flexibility** to test a range of features that may or may not result in a visual change for the user. In addition, we wanted Test Lab to be applicable to either client-side or server-side rendered applications. Therefore, we opted to provide a platform that does require developer expertise to implement, understanding that this trade-off does limit the potential user-base.

### Collecting Event Data

In order to evaluate the results of an A/B test, you need to collect some form of event data. As you will see in the next section, many A/B testing platforms including Firebase, GrowthBook, and Unleash rely on data already being collected for through services such as Google Analytics. But what if an application is not already collecting its own event data?

The Test Lab use case is geared toward applications that are just getting started in A/B testing -- they may not have a preferred analytics platform, and they may not be collecting their own event data (or may not be collecting it in such a way that it is amenable to A/B testing). Therefore, Test Lab opted to offer storage of event data within its database.

This means that one barrier to using Test Lab is lowered, but it also means that applications will need to send their event data directly to Test Lab. This can be done with an API call to the Test Lab backend server, and you can read more about this in the [API docs](/docs/api-docs#create-events) and [SDK docs](/docs/sdk-docs#event-tracking).

---

## Statistical Challenges

In addition to engineering challenges, there are also a number of statistical challenges related to A/B testing.

### Extracting the Impact of a Single Variation

First, if a user is presented with multiple variations at the same time, it can be extremely challenging to determine which specific variant or aspect of the experience was really influencing user behavior. As you will see in the [subsequent discussion](/docs/functional-decisions#limiting-users-to-one-concurrent-experiment) on Functional Decisions related to Test Lab, this was critical in our decision to limit users to enrollment in a single experiment at a time.

Rather than allowing multivariate experiments, where users can be exposed to more than one variant at a time, we developed a **user-block** strategy where the available pool of users is segmented into 20 chunks, each representing 5% of the user base. Each of these chunks, or **user-blocks**, is permanently allocated for the duration of the experiment, ensuring that the **user-block** is only exposed to one variant at a time.

Although this limits the complexity of experiments that can be performed, we believe that it is better suited to the Test Lab use case, where we expect smaller pools of potential users and a lower likelihood of achieving statistically significant results with multivariate tests.

We will walk through the logic of **user-blocks** in more detail when we discuss [the SDKs](/docs/sdk#user-blocks) and how they evaluate feature values.

### Power to Detect Small Effects

In addition, A/B testing can be less helpful for sites with low traffic. If you are testing a large number of variants or the effect of each variant on user behavior is small, then it could take an extended period of time to generate enough data to see a statistically significant impact.

This is one challenge that we could not directly address with our Test Lab implementation. Instead, we opted to indirectly address this concern by displaying raw experiment data, regardless of the sample size.

Some applications limit the display of experiment results to those where statistical sigificance is reached. This is a reasonable choice, as it makes sense to ensure that results are rigorous and statistically signficant before implementing a change to your application. However, it it is limiting for those applications where the user base or the expected effect size is small.

Therefore, in the interest of **flexibility** we opted to display raw data as long as some even data has been received, allowing the client to make their own judgement on whether or not to move forward with changes on the basis of qualitative information.
