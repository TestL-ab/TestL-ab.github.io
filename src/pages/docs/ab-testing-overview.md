---
title: A/B Testing Landscape
description: An overview of A/B testing and use cases, and implementation options.
---

Due to the key advantages discussed in the previous section, our solution - Test Lab - takes the A/B testing approach to optimizing applications. In this section, we will walk through a more detailed introduction to A/B testing, its key use cases, and implementation options.

---

## Small changes can have a big impact

In established applications, even the smallest changes can have a significant impact that may not be predictable or obvious. Presenting an application change to a “test” audience of users and observing their behavior can add empirical data to the process of making improvements. This can increase conversion rates or alter desired user behavior.

[Google famously tested over 40 different shades of
blue for ad links](https://www.theguardian.com/technology/2014/feb/05/why-google-engineers-designers), resulting in a final color choice that added nearly $200M in revenue. As you will see in the upcoming discussion, A/B testing allows companies to make informed decisions about features, design choices, or even hardware based on quantitative data points and
analytics. Changes to the application based on these decisions can increase desired user behavior and may help identify more efficient or cost-effective solutions. A/B testing prior to rollout also reduces the risk of making a detrimental design choice based on perceived aesthetic preference of a designer, developer, or executive rather than actual user behavior.

---

## Use Cases for A/B Testing

Although A/B testing is most commonly used to test visual elements of a website or application, it can aid in a much wider range of decisions. Use cases for A/B testing can include not only design changes but also feature experimentation, changes to hardware or backend software, and testing of third-party APIs and services.

### UI and Design Changes

While simple decisions about a color or the shape of a button might seem minor, these design choices can have significant consequences. As mentioned above, in 2009, Google famously implemented a test in which they tested 41 different shades of blue for their links and compared user behavior with each variant. Not only did they identify the shade that users preferred, but they also predicted that making the switch to that shade would result in an additional annual revenue of about $200 million. This may be an extreme example, but it does illustrate that, at scale, even subtle changes can have a dramatic impact on user behavior. Rather than leaving these changes up to guesswork, it is worthwhile to obtain actual user analytics before deploying a potentially costly “minor” design change to the entire user-base.

### Feature Experimentation

Larger changes, such as adding additional functionality like a search bar or a “like” feature to a website, may require a considerable amount of up-front engineering cost to implement. It can be significantly more difficult to implement changes to these types of features. A/B testing allows developers to expose a new feature to a small subset of users and evaluate their response prior to a wide rollout. This approach can be far more effective than releasing a new feature to the entire user base, only to find out it has negatively impacted user behavior. A/B testing helps to take the guesswork out of rolling out and refining new features.

### Changes to Hardware or Backend Software

A/B testing can also be used to test other types of variants that do not result in a visual change for the user, including hardware or backend software changes. Hardware changes, in particular, could yield cost savings for a company. For example, the slightly increased latency of a downgraded server or alternate service may not be as detrimental to user conversion as anticipated. For other apps, it may be best to upgrade to the most performant architecture the company can afford to maximize potential user conversions – a 100ms delay in loading can hurt conversion rates by as much as 7% according to a [2017 Akamai study](https://www.akamai.com/newsroom/press-release/akamai-releases-spring-2017-state-of-online-retail-performance-report). A/B testing can be used to determine which changes are less likely to impact a user's experience.

### Testing APIs / Third-Party Services

It is often efficient and economical to rely on APIs and third-party services for portions of an application. Building and maintaining complex features and functionalities from scratch can be time-consuming and expensive. APIs and third-party services offer pre-built solutions that can be integrated into an application, saving development time and resources.

When considering third-party services, there may be many different options with distinct features, computational and financial costs, and user interfaces. As an example, there may be a significant difference in conversion rates if you allow users to utilize PayPal for their purchases as opposed to only credit cards. There are trade-offs in terms of the cost of using these services, but the increased conversion rate may outweigh the increased cost. Testing these changes in an A/B test prior to rolling them out for all users allows for a clear understanding of the risks and rewards.

---

## Implementing A/B Testing

As A/B testing becomes more popular as a way to improve a website or application, it is important to consider the different ways in which tests can be implemented. Depending on the application, A/B tests can be implemented on the client-side, server-side, or CDN level, each of which offers unique advantages and challenges.

### Client-Side Implementation

In a client-side implementation of A/B testing, the web server always sends the same version of the page to all users. However, when a user is assigned to the test group, the DOM (Document Object Model) is modified using JavaScript to display the test version of the page. This process typically involves the following steps:

1. The user's browser loads the page and executes the JavaScript code that has been added to the page for the purpose of A/B testing.

2. The JavaScript code checks whether the user has been assigned to the test group or the control group. This information is typically stored in a cookie or in the URL parameters.

3. If the user has been assigned to the test group, the JavaScript code modifies the DOM to display the test version of the page. This could involve changing the layout, the color scheme, the wording, or any other element of the page that is being tested.

4. The user sees the modified version of the page and interacts with it in the usual way.

By modifying the DOM using JavaScript, A/B testing can be carried out without making any changes to the web server or the backend code. This makes it a convenient and flexible way to test different versions of a webpage or app.

A key advantage of client-side implementation is that it’s easy for developers, as there are many existing third-party services (for example, Google Optimize, Optimizely, and VWO) to support this type of implementation. There is no inherent need to build a testing platform from scratch, and many of these tools can be used with limited developer expertise. In fact, VWO goes so far as to state that,

> ["...ideally, we want our users never to touch any code (be it HTML, JavaScript, CSS, or PHP)...VWO is suited for people who don't want to rely on developers or \[the\] IT team for doing even the simplest kind of testing."](https://cxl.com/blog/server-side-vs-client-side-ab-testing-tools-whats-the-difference/#h-client-side-server-side-what-s-the-difference)

On the downside, A/B tests with client-side rendered applications can cause a strange user experience, as you have to re-render the page for the test group after having the original page flash briefly on their screen.

Client-side implementation can also have an undesirable impact on sites that utilize React, Angular, and other libraries and frameworks, as the DOM will not match the virtual DOM for those who are part of the test group. When the virtual DOM and the real DOM become out of sync for the users in the test group, this can cause unexpected behavior, errors, or bugs that do not accurately reflect the performance of the original web application.

For example, suppose a React-based website is being A/B tested, and a change is made to the DOM for the test group using JavaScript. The virtual DOM and the real DOM for the test group will not match, which can lead to unpredictable behavior such as incorrect component rendering or unresponsive user interactions. This can result in inaccurate test results, and can also negatively impact the user experience for those in the test group.

### Server-Side Implementation

Server-side A/B testing is performed on the server-side, which means that it happens before the page is served to the user. Server-side A/B testing can be used to test any aspect of a website or application that is controlled by the server, including content, layout, and functionality.

One advantage of this approach is that the server has full access to user data, so you are better able to select specific users for testing, based on criteria you determine to be relevant. Client-side A/B testing generally only has access to data that is available in the user's browser, such as cookies or local storage. However, server-side A/B testing is done on the web server, which has access to a much wider range of user data, including the user's IP address, session data, and other information that is not generally available in the browser. This additional data can be used to provide more detailed and accurate analysis of user behavior and performance metrics.

Server-side A/B testing platforms tend to be custom-built rather than provided by third parties for several reasons:

1. Customization: Server-side A/B testing often requires customization to fit the specific needs of the application or website. Custom-built platforms can be tailored to the specific requirements of the business and can be designed to integrate with existing systems and infrastructure.

2. Control: Custom-built A/B testing platforms provide more control over the testing process, including the ability to adjust testing parameters, add or remove tests, and modify the underlying code.

3. Security: Server-side A/B testing involves sensitive data and code that is executed on the server. Custom-built platforms can be designed with security in mind and can be audited and tested to ensure that they meet the highest security standards.

4. Scale: Large-scale A/B testing can involve processing massive amounts of data and traffic. Custom-built platforms can be optimized for performance and scalability to handle large volumes of traffic and provide real-time results.

5. Cost: Third-party A/B testing platforms may come with additional costs, such as subscription fees or transaction fees. Custom-built platforms can provide cost savings over the long term, especially if the business has specific requirements or needs that are not met by third-party solutions.

Since there are fewer third-party options for implementing server-side A/B testing, more developer expertise is required. Peter Koomen, co-founder of Optimizely [summarized this key trade-off of client- versus server-side A/B testing](https://cxl.com/blog/server-side-vs-client-side-ab-testing-tools-whats-the-difference/#h-client-side-server-side-what-s-the-difference):

> "The advantage of testing on the client side is speed and simplicity. You can test a lot of changes quickly without much initial investment. On the other hand, testing on the server side is both more work and generally more powerful."

### CDN Implementation

A/B testing can also be implemented via a CDN, where the CDN randomly assigns users to either the control or the test implementation, routes them directly to a different path, and uses cookies in the browser to capture analytics.

Since you have entirely separate branches of code for your existing version and your test version(s), it is easier to fully switch the entire user base to the successful version after the experiment is complete. This approach is ideal for static sites that are already hosted on a CDN, as many CDNs already offer this service. In addition, since users are sent directly to one site or the other, you don’t have the potential “flash” of the original site for users in the test group.

However, one limitation of CDN A/B testing is that it can only test content that can be served by the CDN. This typically includes static content such as images, CSS files, and JavaScript files, but may not include dynamic content generated by the server, such as user-specific data or personalized content. This can limit the scope of testing and make it more difficult to identify the most effective changes.

Another limitation of CDN A/B testing is that it may not provide accurate results for users who are located far away from the edge servers, as the latency and network conditions may vary widely depending on the user's location. Additionally, CDN A/B testing may not be suitable for testing certain types of content or functionality, such as e-commerce transactions or user authentication, which may require more advanced testing methods.

In summary, while CDN A/B testing can provide some benefits, such as improved website performance and reduced latency, it is limited in scope and may not be suitable for all types of content or functionality.
