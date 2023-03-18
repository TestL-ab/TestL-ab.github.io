---
title: API Documentation
description: Reference for Test Lab backend server's API routes.
---

The Test Lab backend server offers routes to manage features, experiment variants, users, and events. Access to user-block configuration is also available.

- [Features](#features)
- [Variants](#variants)
- [Users](#users)
- [Events](#events)
- [User-blocks](#user-blocks)

---

## Features

### Create a feature

Method: post

Route: `/api/feature`

Request body:

```json
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

```json
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

### Get all features

Method: get

Route: `/api/feature`

Response body (success):

```json
[
  {
    "id": 2918,
    "type_id": 2,
    "name": "rollout_experiment",
    "start_date": "2023-02-23T07:00:00.000Z",
    "end_date": "2023-04-24T06:00:00.000Z",
    "is_running": true,
    "user_percentage": 0.5,
    "description": "",
    "variant_arr": []
  },
  {
    "id": 4730,
    "type_id": 3,
    "name": "experiment",
    "start_date": "2023-02-23T07:00:00.000Z",
    "end_date": "2023-04-24T06:00:00.000Z",
    "is_running": true,
    "user_percentage": 0.5,
    "description": "",
    "variant_arr": [
      {
        "id": 5001,
        "value": "blue",
        "is_control": true,
        "weight": "0.5"
      },
      {
        "id": 5002,
        "value": "red",
        "is_control": false,
        "weight": "0.5"
      }
    ]
  }
]
```

Response body (error):

```
"Error getting the features in postgres"
```

### Get current features

Method: get

Route: `/api/feature/current`

Response body (success):

```json
{
  "experiments": [
    {
      "id": 4730,
      "type_id": 3,
      "name": "experiment",
      "start_date": "2023-02-23T07:00:00.000Z",
      "end_date": "2023-04-24T06:00:00.000Z",
      "is_running": true,
      "user_percentage": 0.5,
      "description": "",
      "variant_arr": [
        {
          "id": 5001,
          "value": "blue",
          "is_control": true,
          "weight": "0.5"
        },
        {
          "id": 5002,
          "value": "red",
          "is_control": false,
          "weight": "0.5"
        }
      ]
    }
  ],
  "toggles": [],
  "rollouts": [
    {
      "id": 2918,
      "type_id": 2,
      "name": "rollout_experiment",
      "start_date": "2023-02-23T07:00:00.000Z",
      "end_date": "2023-04-24T06:00:00.000Z",
      "is_running": true,
      "user_percentage": 0.5,
      "description": "",
      "variant_arr": []
    }
  ],
  "userblocks": [
    {
      "id": 13,
      "name": "65",
      "feature_id": null
    },
    {
      "id": 14,
      "name": "70",
      "feature_id": null
    },
    {
      "id": 8,
      "name": "40",
      "feature_id": null
    },
    {
      "id": 20,
      "name": "100",
      "feature_id": null
    },
    {
      "id": 3,
      "name": "15",
      "feature_id": null
    },
    {
      "id": 12,
      "name": "60",
      "feature_id": null
    },
    {
      "id": 2,
      "name": "10",
      "feature_id": null
    },
    {
      "id": 4,
      "name": "20",
      "feature_id": null
    },
    {
      "id": 5,
      "name": "25",
      "feature_id": null
    },
    {
      "id": 6,
      "name": "30",
      "feature_id": null
    },
    {
      "id": 7,
      "name": "35",
      "feature_id": 4730
    },
    {
      "id": 16,
      "name": "80",
      "feature_id": 4730
    },
    {
      "id": 15,
      "name": "75",
      "feature_id": 4730
    },
    {
      "id": 19,
      "name": "95",
      "feature_id": 4730
    },
    {
      "id": 17,
      "name": "85",
      "feature_id": 4730
    },
    {
      "id": 18,
      "name": "90",
      "feature_id": 4730
    },
    {
      "id": 9,
      "name": "45",
      "feature_id": 4730
    },
    {
      "id": 10,
      "name": "50",
      "feature_id": 4730
    },
    {
      "id": 1,
      "name": "5",
      "feature_id": 4730
    },
    {
      "id": 11,
      "name": "55",
      "feature_id": 4730
    }
  ]
}
```

Response body (error):

```
"Error getting the features in postgres"
```

Notes:
Current features are features where the current date is between the `start_date` and `end_date` of the feature. This route returns an object with lists of current toggles, rollouts, and experiments. It also updates and returns a list of the [user-blocks.](/docs/sdk#user-blocks)

### Get a Feature by ID

Method: get

Route: `/api/feature/:id`

Response body (success):

```json
{
  "id": 4730,
  "type_id": 3,
  "name": "experiment",
  "start_date": "2023-02-23T07:00:00.000Z",
  "end_date": "2023-04-24T06:00:00.000Z",
  "is_running": true,
  "user_percentage": 0.5,
  "description": "",
  "variant_arr": []
}
```

Response body (error):

```
"Error getting the feature in postgres"
```

### Update features

Method: put

Route: `/api/feature/:id`

Request body:

```json
{
  "id": 4730,
  "type_id": 3,
  "name": "1_feature_changed",
  "start_date": "2023-02-23T07:00:00.000Z",
  "end_date": "2024-02-23T07:00:00.000Z",
  "is_running": false,
  "user_percentage": 0.5,
  "description": ""
}
```

Response body (success):

```json
{
  "id": 4730,
  "type_id": 3,
  "name": "1_feature_changed",
  "start_date": "2023-02-23T07:00:00.000Z",
  "end_date": "2024-02-23T07:00:00.000Z",
  "is_running": false,
  "user_percentage": 0.5,
  "description": null,
  "variant_arr": [
    {
      "id": 5003,
      "value": "blue",
      "is_control": true,
      "weight": "0.5"
    },
    {
      "id": 5004,
      "value": "red",
      "is_control": false,
      "weight": "0.5"
    }
  ]
}
```

Response body (error):

```
"Error updating the feature in postgres"
```

### Delete features

Method: delete

Route: `/api/feature/:id`

Response body (success):

```
"feature with id 5031 successfully deleted."
```

Response body (error):

```
"Error in deleting the feature in postgres"
```

---

## Variants

### Create Variants

### Get Variants

### Update Variants

### Delete Variants
