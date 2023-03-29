---
title: Database
description: A description of the Test Lab database.
---

---

Test Lab uses a PostgreSQL database to store persistent feature, user, user-block, and event data, including:

- **Feature Configuration** data for toggle, rollout, and experiment features including a feature’s name, description, and the proportion of users enrolled
- **Variant Configuration** data for experiments, including a variant’s name, value, and the proportion of users in a given experiment that will experience that variant
- **User** data for users enrolled in experiments, including a unique string identifying the user, the user’s IP address, and the variant that the user experienced
- **Event** data [posted by experiments](/docs/api-docs#create-events), including the time of the event, the user triggering the event, and the variant the user experienced when triggering the event
- **User-block** data that represents which blocks of users are allocated to which experiments at a given point in time
