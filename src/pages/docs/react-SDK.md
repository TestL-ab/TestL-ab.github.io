---
title: React SDK
description: TestLab Client for React applications.
---

The React SDK is used to create the TestLab Client for use in Node applications.

---

## Using the TestLab Client in a React Application

Use `npm install testlab-sdk-react` to install the SDK for use in your application.

In the `index.js` of the project, import the `Config` and `TestLabProvider` objects. Then, initialize a new `Config` object with the URL of the `testlab` server and the desired interval for retrieving new features, in seconds. Finally, wrap the `App` component in the `TestLabProvider`, passing `config` as props.

```jsx
import { Config, TestLabProvider } from 'testlab-sdk-react'

const config = new Config('http://localhost:3000', 10)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <TestLabProvider config={config}>
    <App />
  </TestLabProvider>
)
```

The `TestLabProvider` creates and exports an `sdkClient` that can be accessed in all child components as follows:

```jsx
import { TestLabContext } from "testlab-sdk-react";

function App() {
  const { sdkClient } = React.useContext(TestLabContext);

	...
}
```

As part of the `sdkClient` initialization process, the sdk creates a default context with an automatically generated `userID` and `ip` address based on the current request. If you would like to provide an alternative `userID`, you can do so within a component by using the `updateContext` method. If an object that is missing either a `userID` or an `ip` property is supplied to this method, the update will not occur, and the default values will remain in place.

```jsx
sdkClient.updateContext({userID: <<your_userID>>, ip: <<your_ip>>});
```

When you need to determine whether a feature is enabled (and, if applicable, the variant value), use the following, where `name_of_experiment` is the name given to the experiment when it was created.

```jsx
let feature = sdkClient.getFeatureValue('name_of_experiment')
```

`getFeatureValue` returns `false` if the feature is not enabled for this userID, `true` if the feature is a toggle or rollout that should be activated for this user, and a `variant` object if the userID is enrolled in a particular experiment. The `variant` object contains `id` and `value` properties. `variant.value` can be used to obtain the value for use in the experiment.

### Events

If you want the `testlab` server to collect and analyze data for an experiment, you will need to have your application send a `post` request where the body is an object that contains a `variant_id` property and a `user_id` property. In react, one example would be to add an `onClick={handleClick}` attribute to your element and have `handleClick` be something like:

```jsx
const handleClick = async (e) => {
  e.preventDefault()
  if (feature.id) {
    try {
      await axios.post(`${sdkClient.config.serverAddress}/api/events`, {
        variant_id: feature.id,
        user_id: sdkClient.context.userID,
      })
    } catch (error) {
      console.log('Error sending event to database', error)
    }
  }
}
```

Collected events can be visualized in the Admin UI Visualizer.
