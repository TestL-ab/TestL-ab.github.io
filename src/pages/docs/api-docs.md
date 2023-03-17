---
title: API Documentation
description: Reference for Test Lab backend server's API routes.
---

The Test Lab backend server offers routes to manage features, users, and events. Access to user-block configuration is also available.

---

# `/api/feature`

## Create a feature

Method: post

Route: `/api/feature`

Request body:

```javascript
{
    "type_id": 3,
    "name": "experiment with sidenav",
    "start_date": "2/23/23",
    "end_date": "4/24/23",
    "is_running": true,
    "user_percentage": 0.5
}
```

Response body (success):

```javascript
{
    "type_id": 3,
    "name": "experiment with sidenav",
    "start_date": "2/23/23",
    "end_date": "4/24/23",
    "is_running": true,
    "user_percentage": 0.5
}
```

Response body (error):

```
"Error in creating the feature in postgres"
```

Notes:

The `type_id` can be `1`, `2`, or `3`.

1. toggle
2. roll out
3. experiment

The object in the request body must include the `type_id`, a unique `name`, a `start_date`, and an `end_date`.

`is_running` is a boolean indicating if the feature is active or not. It defaults to `true`.

`user_percentage` is the percentage of users for the app that will be assigned to the feature. It can have a value between `0` and `1` and defaults to including all users with a value of `1`.

The `description` is an optional description of the feature.

Note that if you create an experiment (type `3` feature) using the Test Lab api you will also need to create a set of variants assoicated with that experiment.

## Get all features

## Get current features

## Update features

## Delete features

---
