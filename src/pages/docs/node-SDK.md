---
title: Node SDK
description: TestLab Client for Node applications.
---

The Node SDK is used to create the TestLab Client for use in Node applications.

---

## Using the TestLab Client in a Node Application

Use `npm install testlab-sdk-node` to install the SDK for use in your application.

You should initialize a `testLabClient` as early in your code as possible, and export it so that it is available to be imported throughout the application.

```jsx
import Config from 'testlab-sdk-node'

const testLabClient = await new Config('http://localhost:3000', 15).connect()

export { testLabClient }
```

When the client is initialized, it will be provided with a default context, which includes an automatically generated `userID` and `ip` address obtained from [https://ipapi.co/json/](https://ipapi.co/json/).

The context is used to determine the value of experiment variants, so you can overwrite this context with a different userID and/or ip address using (if either the `userID` or `ip` property is not provided in the context object, then the default value will be retained):

```jsx
testLabClient.updateContext({ userID: 'example', ip: 'ip_example' })
```

The context object within the client can be used to evaluate the value of a feature or experiment for a particular user. When you need to determine whether a feature is enabled (and, if applicable, the variant value), use the following, where `name_of_experiment` is the name given to the experiment when it was created.

```jsx
let variant = testLabClient.getFeatureValue('name_of_experiment')
```

`getFeatureValue` returns `false` if the feature is not enabled for this userID, `true` if the feature is a toggle or rollout that should be activated for this user, and a value corresponding to a `variant` if the userID is enrolled in a particular experiment. The `variant` contains `id` and `value` properties. `variant.value` can be used to obtain the value for use in the experiment.

### Events

Note that a user will still need to make a post call with event information (user_id and variant_id) whenever an event occurs that they want to record in the experiment.

Note the TestLab can only capture data for a single event type per experiment, but you can send data for any type of event that you want to measure as long as the `post` payload is an object that contains the `user_id` and `variant_id` properties.

```jsx
if (variant.id) {
  await axios.post(`${url}/api/events`, {
    user_id: Client.context.userID,
    variant_id: variant.id,
  })
}
```

Event tracking is only available for experiment feature types and not for toggle or rollout features.
