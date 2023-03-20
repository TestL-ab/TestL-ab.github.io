---
title: Backend Server
description: A description of the Test Lab Backend Server.
---

The Test Lab Backend Server plays a number of key roles within the Test Lab application:

- Exposing **API endpoints** for:
  - Creating, editing, deleting, and retrieving **feature data**
  - Creating and retrieving **user data** to be used during the experiment data analysis
  - Storing and retrieving **event data** from experiments
- Ensuring the **integrity** of data sent to the Test Lab Database
- Assigning **user blocks** to each experiment to ensure that no more than 100% of users are enrolled in an experiment at any given time and that users do not move from one experiment to another
- Tracking the last time the feature data was modified to support the efficient SDK retrieval of feature data

It is important to note that developers have the option of using the [Admin UI](/docs/admin-ui) and/or [SDKs](/docs/sdk-docs) to interact with the Test Lab backend server or using the [API](/docs/api-docs) directly.
