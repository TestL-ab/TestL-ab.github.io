---
title: Ruby SDK
description: TestLab Client for Ruby applications.
---

The React SDK is used to create the TestLab Client for use in Ruby / Sinatra / Rails applications.

---

## Using the TestLab Client in a React Application

Install using `testlab_sdk_ruby` and include `testlab_sdk_ruby` in your application's `Gemfile`.

You should initialize a `testLabClient` as early in your code as possible, and export it so that it is available to be imported throughout the application.

A new client is initialized by creating a new `Config` object and passing in the URL of the `TestLab` server and the `interval` of time (in seconds) that you want to elapse between checks for new or updated features from the `TestLab` server.

When the client is initialized, it will be provided with a default context, which includes an automatically generated `user_id` and `ip` address obtained from [https://ipapi.co/json/](https://ipapi.co/json/).

The context is used to determine the value of experiment variants, so you can overwrite this context with a different userID and/or ip address using (if either the `user_id` or `ip` property is not provided in the context object, then the default value will be retained).

```ruby
configure do
  set :client, Config.new("#{server_url}", interval).connect
end

before do
  @client = settings.client
  @client.update_context({user_id: SecureRandom.uuid})
end
```

The context object within the client can be used to evaluate the value of a feature or experiment for a particular user. When you need to determine whether a feature is enabled (and, if applicable, the variant value), use the following, where `name_of_experiment` is the name given to the experiment when it was created.

```ruby
@feature = @client.get_feature_value("name_of_experiment")
```

`getFeatureValue` returns `false` if the feature is not enabled for this userID, `true` if the feature is a toggle or rollout that should be activated for this user, and a value corresponding to a `variant` if the userID is enrolled in a particular experiment.

The `variant` contains `id` and `value` properties. `variant.value` can be used to obtain the value for use in the experiment.

### Events

Note that a user will need to make a `post` http request with a json payload containing both a `user_id` and `variant_id` property with event information whenever an event occurs that they want to record in the experiment.

Event tracking is only available for experiment feature types and not for toggle or rollout features.
