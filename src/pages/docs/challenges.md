---
title: Challenges of A/B testing
description: Challenges related to A/B testing.
---

---

## Implementation Challenges

### Consistent Assignment

Ensuring that the appropriate features are shown to a given user and that the user continues to be exposed to that experience over time is one challenge of A/B testing. In most cases, simply randomizing each request to one of many potential experiences will just not cut it.

For example, imagine you are testing a new feature for a social media platform that allows users to post long-form content. You want to determine if the new feature leads to increased user engagement and retention, so you randomly assign users to either the control group (no new feature) or the treatment group (new feature).

However, if users are able to switch between the control and treatment groups or see different versions of the new feature at different times, then the results of the experiment may be biased and difficult to interpret. In this case, you would want to make sure that each user is consistently assigned to either the control or treatment group throughout the duration of the experiment.

A/B testing platforms need to be able to accommodate the assignment needs for an application, whether than means **random** assignment, consistent assignment by **session**, or even consistent assignment based on an individual **user**.

### Developer Involvement

Another challenge of A/B testing is that developer involvement is typically required to ensure that the appropriate features are rendered for a user given the parameters of a defined experiment. When developing an A/B testing platform, it can be difficult to balance ease-of-use for the developer with robust feature creation and management tools.

One solution to this challenge is What You See Is What You Get (WYSIWYG) experimentation platforms. These tools allow you to insert text or images, or drag and drop elements onto a web page, with little or no developer expertise. The software automatically generates the code, and you can inject the code directly into your application as a `script` tag.

Although this is certainly a straightforward solution, it only works for **client-side** rendered applications, and it also limits your A/B testing to **visual features**. In addition, there is no guarantee that the automatically-generated code will be error-free. Companies may want to test a range of features that may or may not result in a visual change for the user, so there are trade-offs to consider between ease-of-use and more control, including the ability to conduct more complex A/B tests.

### Collecting Event Data

In order to evaluate the results of an A/B test, you need to collect some form of event data. As you will see in the next section, many A/B testing platforms including Firebase, GrowthBook, and Unleash rely on data already being collected through services such as Google Analytics. But what if an application is not already collecting its own event data?

As we described in the [introduction](/docs/testlab-intro), the Test Lab use case is geared toward applications that are just getting started in A/B testing -- they may not have a preferred analytics platform, and they may not be collecting their own event data (or may not be collecting it in such a way that it is amenable to A/B testing). Therefore, the Test Lab team opted to offer storage of event data within its database.

This means that one barrier to using Test Lab is lowered, but it also means that applications will need to send their event data directly to Test Lab. This can be done with an API call to the Test Lab backend server, as described in the [API docs](/docs/api-docs#create-events) and [SDK docs](/docs/sdk-docs#event-tracking).

---

## Statistical Challenges

In addition to engineering challenges, there are also a number of statistical challenges related to A/B testing.

### Extracting the Impact of a Single Variation

First, if a user is presented with multiple variations at the same time, it can be extremely challenging to determine which specific variant or aspect of the experience was really influencing user behavior. Multivariate analysis is one solution, but it generally requires a large sample size and more complex data analysis to tease out the impact of a single variation. Another option is to ensure that users are exposed to only one variant at a time.

As you will see in the [subsequent discussion](/docs/functional-decisions#limiting-users-to-one-concurrent-experiment) on Design Decisions related to Test Lab, this was critical in our decision to limit users to enrollment in a single experiment at a time. Although this limits the complexity of experiments that can be performed, we believe that it is better suited to Test Lab clients, who may have smaller pools of potential users and, therefore, a lower likelihood of achieving statistically significant results with multivariate tests.

### Power to Detect Small Effects

In addition, A/B testing can be less helpful for sites with low traffic. If you are testing a large number of variants or the effect of each variant on user behavior is small, then it could take an extended period of time to generate enough data to see a statistically significant impact.

Some applications limit the display of experiment results to those where statistical significance is reached. This is a reasonable choice, as it makes sense to ensure that results are rigorous and statistically significant before implementing a change to your application. However, it it is limiting for those applications where the user base or the expected effect size is small.

Therefore, in the interest of **flexibility** you will see that we opted to display raw data as long as some event data has been received, allowing the client to make their own judgement on whether or not to move forward with changes on the basis of qualitative information.
