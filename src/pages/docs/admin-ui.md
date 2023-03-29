---
title: Admin UI
description: A walkthrough of the functionality of the Test Lab Admin UI.
---

The Admin UI is a CRUD app for interacting with current, upcoming, and past features. In addition, you can view experiment data and results in the data visualizer.

> Information on how to use the Admin UI can be found in the [Admin UI Documentation](/docs/ui-docs)

---

Rather than allowing multivariate experiments, where users can be exposed to more than one variant at a time, we developed a **user-block** strategy where the available pool of users is segmented into 20 chunks, each representing 5% of the user base. Each of these chunks, or **user-blocks**, is permanently allocated for the duration of the experiment, ensuring that the **user-block** is only exposed to one experiment at a time.

In order to ensure that the percentage of users to be enrolled in a new experiment does not exceed the number of **user-blocks** available for the selected date range, the Admin UI dynamically populates the maximum percentage of users that are available during the entire specified date range, based on existing experiments scheduled during that period.

Although this limits the complexity of experiments that can be performed, we believe that it is better suited to Test Lab clients, who may have smaller pools of potential users and, therefore, a lower likelihood of achieving statistically significant results with multivariate tests.

We will walk through the logic of **user-blocks** in more detail when we discuss [the SDKs](/docs/sdk#user-blocks) and how they determine which variant to render.
