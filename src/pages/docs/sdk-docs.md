---
title: SDK Documentation
description: Documentation for Test Lab SDKs
---

Test Lab offers SDKs for Node, React, Ruby, and Python applications. Test Lab also offers the opportunity to send event data from experiments to the Test Lab database for storage and analysis.

- [Node SDK](#node-sdk)
- [React SDK](#react-sdk)
- [Ruby SDK](#ruby-sdk)
- [Python SDK](#python-sdk)
- [Event Tracking](#event-tracking)

---

## Node SDK

Use **`npm install testlab-sdk-node`** to install the SDK for use in your application.

You should initialize a **`testLabClient`** as early in your code as possible, and export it so that it is available to be imported throughout the application.

```jsx
import Config from 'testlab-sdk-node'

const testLabClient = await new Config('http://localhost:3000', 15).connect()

export { testLabClient }
```

When the client is initialized, it will be provided with a default context, which includes an automatically generated **`userID`** and **`ip`** address obtained from **[https://ipapi.co/json/](https://ipapi.co/json/)**.

The context is used to determine the value of experiment variants, so you can overwrite this context with a different userID and/or ip address using (if either the **`userID`** or **`ip`** property is not provided in the context object, then the default value will be retained):

```jsx
testLabClient.updateContext({ userID: 'example', ip: 'ip_example' })
```

The context object within the client can be used to evaluate the value of a feature or experiment for a particular user. When you need to determine whether a feature is enabled (and, if applicable, the variant value), use the following, where **`name_of_experiment`** is the name given to the experiment when it was created.

```jsx
let variant = testLabClient.getFeatureValue('name_of_experiment')
```

`getFeatureValue` returns:

1.  **`false`** if the feature is not enabled for this user
2.  **`true`** if the feature is a toggle or rollout that should be activated for this user
3.  A **`variant`** if the user is enrolled in a particular experiment. The  **`variant`**  contains  **`id`** and **`value`** properties, and **`variant.value`** can be used to obtain the value for use in the experiment.

---

## React SDK

Use **`npm install testlab-sdk-react`** to install the SDK for use in your application.

In the **`index.js`** of the project, import the **`Config`** and **`TestLabProvider`** objects. Then, initialize a new **`Config`** object with the URL of the **`testlab`** server and the desired interval for retrieving new features, in seconds. Finally, wrap the **`App`** component in the **`TestLabProvider`**, passing **`config`** as props.

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

The **`TestLabProvider`** creates and exports an **`sdkClient`** that can be accessed in all child components as follows:

```jsx
import { TestLabContext } from "testlab-sdk-react";

function App() {
  const { sdkClient } = React.useContext(TestLabContext);

	...
}
```

As part of the **`sdkClient`** initialization process, the sdk creates a default context with an automatically generated **`userID`** and **`ip`** address based on the current request. If you would like to provide an alternative **`userID`**, you can do so within a component by using the **`updateContext`** method. If an object that is missing either a **`userID`** or an **`ip`** property is supplied to this method, the update will not occur, and the default values will remain in place.

```jsx
sdkClient.updateContext({userID: <<your_userID>>, ip: <<your_ip>>});
```

When you need to determine whether a feature is enabled (and, if applicable, the variant value), use the following, where **`name_of_experiment`** is the name given to the experiment when it was created.

```jsx
let feature = sdkClient.getFeatureValue('name_of_experiment')
```

`getFeatureValue` returns:

1.  **`false`** if the feature is not enabled for this user
2.  **`true`** if the feature is a toggle or rollout that should be activated for this user
3.  A **`variant`** if the user is enrolled in a particular experiment. The  **`variant`**  contains  **`id`** and **`value`** properties, and **`variant.value`** can be used to obtain the value for use in the experiment.

---

## Ruby SDK

Install using `gem install testlab_sdk_ruby` and include **`testlab_sdk_ruby`** in your application's **`Gemfile`**.

You should initialize a `client` as early in your code as possible so that it is available throughout the application.

A new client is initialized by:

1. Creating a new **`Config`** object
2. Passing in the URL of the TestLab server (`server_url`) and the **`interval`** of time (in seconds) that you want to elapse between checks for new or updated features from the TestLab server
3. Calling the `connect` method to generate the new `Client`

When the client is initialized, it will be provided with a default context, which includes an automatically generated **`user_id`** and **`ip`** address obtained from **[https://ipapi.co/json/](https://ipapi.co/json/)**. An object containing these properties is the TestLab **context.**

The **context** is used to determine the value of experiment variants for a given user, so you can overwrite this context with a different `user_id` and/or `ip` property using the `update_context` method. Note that if either the **`user_id`** or **`ip`** property is not provided in the context object, then the default value will be retained.

```ruby
configure do
  set :client, Config.new("#{server_url}", interval).connect
end

before do
  @client = settings.client
  @client.update_context({user_id: SecureRandom.uuid})
end
```

When you need to determine whether a feature is enabled for a particular user (and, if applicable, the variant value), use the `get_feature_value` method, where **`name_of_experiment`** is the name given to the experiment when it was created.

```ruby
@feature = @client.get_feature_value("name_of_experiment")
```

`get_feature_value` returns:

1.  **`false`** if the feature is not enabled for this user
2.  **`true`** if the feature is a toggle or rollout that should be activated for this user
3.  A **`variant`** if the user is enrolled in a particular experiment. The  **`variant`**  contains  **`id`** and **`value`** properties, and **`variant.value`** can be used to obtain the value for use in the experiment.

---

## Python SDK

Install the SDK for use in your application by using using `python3 -m pip install testlab_sdk_python`.

The `Config` class will need to be imported into your application by using

```python
 from testlab_sdk_python.Config import Config
```

You should initialize a `client` as early in your code as possible so that it is available throughout the application.

A new client is initialized by:

1. Creating a new **`Config`** object
2. Passing in the URL of the TestLab server (`server_url`) and the **`interval`** of time (in seconds) that you want to elapse between checks for new or updated features from the TestLab server
3. Calling the `connect` method to generate the new `Client`

When the client is initialized, it will be provided with a default context, which includes an automatically generated **`user_id`** and **`ip`** address obtained from **[https://ipapi.co/json/](https://ipapi.co/json/)**. An object containing these properties is the TestLab **context.**

The **context** is used to determine the value of experiment variants for a given user, so you can overwrite this context with a different `user_id` and/or `ip` property using the `update_context` method. Note that if either the **`user_id`** or **`ip`** property is not provided in the context object, then the default value will be retained.

```ruby
client = Config('http://localhost:3000', 10).connect()

# Optional
client.update_context({"user_id": "your_specified_user_id"})
```

When you need to determine whether a feature is enabled for a particular user (and, if applicable, the variant value), use the `get_feature_value` method, where **`name_of_experiment`** is the name given to the experiment when it was created.

```python
feature = client.get_feature_value("name_of_experiment")

# example usage
color = "gray"
if feature :
	color = feature['value']
return render_template('home.html', value=color)
```

`get_feature_value` returns:

1.  **`false`** if the feature is not enabled for this user
2.  **`true`** if the feature is a toggle or rollout that should be activated for this user
3.  A **`variant`** if the user is enrolled in a particular experiment. The  **`variant`**  contains  **`id`** and **`value`** properties, and **`variant.value`** can be used to obtain the value for use in the experiment.

---

## Event Tracking

Note that a user will need to make a `post` call with event information (`user_id` and `variant_id`) whenever an event occurs that they want to record in the experiment. See [API docs on creating events](/docs/api-docs#create-events) for more information.

TestLab can only capture data for a single event type per experiment, but you can send data for any type of event that you want to measure as long as the **`post`** payload is an object that contains the **`user_id`** and **`variant_id`** properties.

_javascript example_:

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

Event tracking is only available for **experiment** feature types and not for **toggle** or **rollout** features.
