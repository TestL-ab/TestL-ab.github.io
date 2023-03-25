---
title: API Documentation
description: Reference for Test Lab backend server's API routes.
---

The Test Lab backend server offers routes to manage features, experiment variants, users, and events. Access to user-block configuration is also available.

- [Features](#features)
- [Variants](#variants)
- [Users](#users)
- [Events](#events)
- [Analysis](#analysis)
- [User-blocks](#user-blocks)

---

## Features

### Create a feature

Method: `POST`

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

Method: `GET`

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

Method: `GET`

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

Method: `GET`

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

Method: `PUT`

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

Method: `DELETE`

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

Method: `POST`

Route: `/api/feature/:id/variants`

Request body:

```json
{
  "variants": [
    {
      "feature_id": 4730,
      "value": "blue",
      "is_control": true,
      "weight": 0.5
    },
    {
      "feature_id": 4730,
      "value": "red",
      "is_control": false,
      "weight": 0.5
    }
  ]
}
```

Response body (success):

```json
[
  {
    "id": 5003,
    "feature_id": 4730,
    "value": "blue",
    "is_control": true,
    "weight": "0.5"
  },
  {
    "id": 5004,
    "feature_id": 4730,
    "value": "red",
    "is_control": false,
    "weight": "0.5"
  }
]
```

Response body (error):

```
"Error in creating the variants in postgres"
```

Notes:  
Variants must be provided with a minimum of a `feature_id` and `value` property. If the variant object does not include properties and values for `is_control` and `weight` then the default values of false and (1.0 divided by the number of variants) will be used. Also, the parameter id in the route and the `feature_id` in each variant must match. The weights for each experiment must total `1`.

### Get Variants

Method: `GET`

Route: `/api/feature/:id/variants`

Response body (when the experiment has variants):

```json
[
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
```

Response body (when the experiment has no variants):

```json
[]
```

### Update Variants

Instead of updating variants, use the route to create a variant for a given `feature_id`, which will delete any variants previously created before creating new variants.

### Delete Variants

Variants are automatically deleted when the experiment they are assigned to is deleted.

---

## Events

### Create Events

Method: `POST`

Route: `/api/events`

Request body:

```json
{
  "user_id": "61",
  "variant_id": 5003
}
```

Response body (success):

```
"Event added to database."
```

Response body (error):

```
"Event added to database."
```

Notes:  
This is the endpoint that a client application will use to send event data to the Test Lab server to be stored in the PostgreSQL database. It captures a `user_id`, the `variant_id` the user is assigned to, and a timestamp. Pass an object with a valid user and variant id, and the timestamp is automatically generated. The response body is a string verifying success or failure.

### Get All Events

Method: `GET`

Route: `/api/events`

Response body (when events exist):

```json
[
  {
    "id": 2241,
    "variant_id": 5003,
    "user_id": "61",
    "time_stamp": "2023-03-15T17:35:58.511Z"
  },
  {
    "id": 2243,
    "variant_id": 5003,
    "user_id": "61",
    "time_stamp": "2023-03-15T17:37:12.790Z"
  },
  {
    "id": 2244,
    "variant_id": 5003,
    "user_id": "61",
    "time_stamp": "2023-03-15T17:37:13.690Z"
  }
]
```

Response body (when no events exist):

```json
[]
```

### Get Events for a Specific Feature

Method: `GET`

Route: `/api/events/feature/:id`

Response body (when events exist for a feature):

```json
[
  {
    "event_id": 2241,
    "variant_id": 5003,
    "user_id": "61",
    "time_stamp": "2023-03-15T17:35:58.511Z",
    "feature_id": 4730,
    "value": "blue",
    "is_control": true,
    "weight": "0.5"
  },
  {
    "event_id": 2243,
    "variant_id": 5003,
    "user_id": "61",
    "time_stamp": "2023-03-15T17:37:12.790Z",
    "feature_id": 4730,
    "value": "blue",
    "is_control": true,
    "weight": "0.5"
  }
]
```

Response body (when no events exist for a feature):

```json
[]
```

Notes: The route parameter passed is a `feature_id` (id of an experiment if you are using the API correctly.) The event table does not have a column with feature ids. To determine which events belong to which feature requires a join with the variant table that does have a `feature_id` column. This API call returns an array of objects with variant and event data from the join.

### Update Events

There is no route provided to update an event.

### Delete Events

There is no route provided to delete an event.

---

## Get Analysis

Method: `GET`

Route: `/api/analysis/feature/:id`

Response body (success):

```json
[
  {
    "id": 5003,
    "value": "blue",
    "is_control": true,
    "weight": "0.5",
    "event_total": 6,
    "distinct_user_events_total": 2,
    "total_users": 2
  },
  {
    "id": 5004,
    "value": "red",
    "is_control": false,
    "weight": "0.5",
    "event_total": 2,
    "distinct_user_events_total": 1,
    "total_users": 1
  }
]
```

Response body (error):

```
"Error getting the analysis in postgres"
```

Note:  
This endpoint returns an object with properties that represent variant-specific information. Properties include `event_total` which is the total number of events linked to that feature, `distinct_user_events_total` which measures new users events, and `total_users` which is the total number of users assigned to that variant. `total_users` will be greater than or equal to `distinct_user_events_total` because a user can be assigned and not be linked to an event.

---

## Users

### Create User

Method: `POST`

Route: `/api/users`

Request body:

```json
{
  "id": "62",
  "variant_id": 229,
  "ip_address": "192.168.101.21"
}
```

Response body (success):

```json
{
  "id": "62",
  "variant_id": 229,
  "ip_address": "192.168.101.21",
  "time_stamp": "2023-03-16T14:57:37.496Z"
}
```

Response body (error):

```
"Error in creating the user in postgres"
```

Notes:  
The `id` property of the request body is a unique string to identify the user. This can be a UUID, email address, session ID, or any other unique string.

### Get Users

Method: `GET`

Route: `/api/users`

Response body (success):

```json
[
  {
    "id": "62",
    "variant_id": 229,
    "ip_address": "192.168.101.21",
    "time_stamp": "2023-03-16T14:57:37.496Z"
  }
]
```

### Update Users

There is no route available for updating a user.

### Delete Users

Method: `DELETE`

Route: `/api/users/:id`

Response body (success):

```
"User with id 62 was deleted"
```

Response body (error):

```
"Error in deleting the user in postgres"
```

## User-blocks

### Create User-blocks

There is no route to create a user-block since these are created when the schema is initialized. Instead, blocks are assigned to features or reset to `null`.

There are 20 user-blocks with names of the percentage they represent. For example the user-block with `name` “20” represents the percentage greater then 15% and less then or equal to 20%.

User-blocks are automatically updated and sent with the data in the route `"/api/feature/current"`

### Get All User-blocks

Method: `GET`

Route: `/api/userblocks`

Response body (success):

```json
[
  {
    "id": 14,
    "name": "70",
    "feature_id": 383
  },
  {
    "id": 15,
    "name": "75",
    "feature_id": 383
  },
  {
    "id": 16,
    "name": "80",
    "feature_id": 383
  },
  {
    "id": 1,
    "name": "5",
    "feature_id": 383
  },
  {
    "id": 17,
    "name": "85",
    "feature_id": 382
  },
  {
    "id": 2,
    "name": "10",
    "feature_id": 382
  },
  {
    "id": 18,
    "name": "90",
    "feature_id": 382
  },
  {
    "id": 19,
    "name": "95",
    "feature_id": 382
  },
  {
    "id": 20,
    "name": "100",
    "feature_id": 382
  },
  {
    "id": 3,
    "name": "15",
    "feature_id": 382
  },
  {
    "id": 4,
    "name": "20",
    "feature_id": 382
  },
  {
    "id": 5,
    "name": "25",
    "feature_id": 382
  },
  {
    "id": 6,
    "name": "30",
    "feature_id": 382
  },
  {
    "id": 7,
    "name": "35",
    "feature_id": 382
  },
  {
    "id": 8,
    "name": "40",
    "feature_id": 383
  },
  {
    "id": 9,
    "name": "45",
    "feature_id": 383
  },
  {
    "id": 10,
    "name": "50",
    "feature_id": 383
  },
  {
    "id": 11,
    "name": "55",
    "feature_id": 383
  },
  {
    "id": 12,
    "name": "60",
    "feature_id": 383
  },
  {
    "id": 13,
    "name": "65",
    "feature_id": 383
  }
]
```

Response body (error):

```
"Error in getting userblocks in postgres"
```

### Get User-block by Block Name

Method: `GET`

Route: `/api/userblocks/:name`

Response body (success):

```json
{
  "id": 14,
  "name": "70",
  "feature_id": 383
}
```

Response body (error):

```
"Error in getting userblock in postgres"
```

### Set User-block to Experiment

Method: `PUT`

Route: `/api/userblocks`

Request body:

```json
{
  "feature_id": "86",
  "name": "10"
}
```

Response body (success):

```json
{
  "id": 2,
  "name": "10",
  "feature_id": 86
}
```

Response body (error):

```
"Error in updating userblock with name 13 in postgres"
```

Notes:  
This API route is used to update the assignment of a user-block with a `name` to a `feature_id`. These values are provided as an object in the body of the request. The backend server does not check to ensure the `feature_id` is valid. The `name` of the user-block must be a valid `name`.

### Reset User-blocks

Method: `PUT`

Route: `/api/userblocks/reset`

Response body (success):

```json
[
  {
    "id": 14,
    "name": "70",
    "feature_id": null
  },
  {
    "id": 15,
    "name": "75",
    "feature_id": null
  },
  {
    "id": 16,
    "name": "80",
    "feature_id": null
  },
  {
    "id": 1,
    "name": "5",
    "feature_id": null
  },
  {
    "id": 2,
    "name": "10",
    "feature_id": null
  },
  {
    "id": 17,
    "name": "85",
    "feature_id": null
  },
  {
    "id": 18,
    "name": "90",
    "feature_id": null
  },
  {
    "id": 19,
    "name": "95",
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
    "feature_id": null
  },
  {
    "id": 8,
    "name": "40",
    "feature_id": null
  },
  {
    "id": 9,
    "name": "45",
    "feature_id": null
  },
  {
    "id": 10,
    "name": "50",
    "feature_id": null
  },
  {
    "id": 11,
    "name": "55",
    "feature_id": null
  },
  {
    "id": 12,
    "name": "60",
    "feature_id": null
  },
  {
    "id": 13,
    "name": "65",
    "feature_id": null
  }
]
```

Response body (error):

```
"Error in resetting userblocks in postgres"
```

Notes:  
There is no body required for this API route. All of the blocks will be reset to `null`.

### Delete User-blocks

There is no route to delete user-blocks. User-blocks not in use should have `feature_id` of `null`.
