---
title: Admin UI
description: A walkthrough of the functionality of the Test Lab Admin UI.
---

The Admin UI is a basic CRUD application that manages feature configuration and event data visualization. In addition to serving as a user-friendly interface for managing features, the Admin UI has been specially designed to support our clients in creating successful experiments that will yield valid, useful data.

> Information on how to use the Admin UI can be found in the [Admin UI Documentation](/docs/ui-docs)

---

## User-block introduction

One key aspect of ensuring that we provide useful experiment data is accurately reflecting whether a change in user behavior is the result of a single variant being tested, versus some combination of variants from concurrently running experiments.

Rather than allowing multivariate experiments, where users can be exposed to more than one variant at a time, we developed a **user-block** strategy where the available pool of users is segmented into 20 chunks, each representing 5% of the user base. Each of these chunks, or **user-blocks**, is permanently allocated for the duration of the experiment, ensuring that the **user-block** is only exposed to one experiment at a time.

In order to ensure that the percentage of users to be enrolled in a new experiment does not exceed the number of **user-blocks** available for the selected date range, the Admin UI dynamically populates the maximum percentage of users that are available during the entire specified date range, based on existing experiments scheduled during that period.

Although this limits the complexity of experiments that can be performed, we believe that it is better suited to Test Lab clients, who may have smaller pools of potential users and, therefore, a lower likelihood of achieving statistically significant results with multivariate tests.

We will walk through the logic of **user-blocks** in more detail when we discuss [the SDKs](/docs/sdk#user-blocks) and how they determine which variant to render.

![Alt Text](/images/DynamicUserBlocksByDate.gif)

---

## Validation checks

In addition to ensuring that our users do not exceed available user-blocks, our Admin UI has also built-in validation checks to verify that newly created experiments conform to our database requirements. The Admin UI requires that:

- Newly created features have **unique** names not shared with any features that already exist in our database
- Variants created for a single experiment each have **unique** values
- The sum of variant weights for a single experiment total **exactly 100%**

Our Admin UI also requires that all experiments have at least two variants, exactly one of which is the control, and no more than five variants. These requirements guide our users towards generating actionable data. Experiments without a control would not provide insight into the relative change in user behavior, and allowing more than five variants would be unlikely to provide a large enough sample to generate useful results based on the expected user volume of Test Lab clients.

In the event that an experiment was created in error, the Admin UI restricts users to three options: deleting the experiment, changing the experiment to a rollout which enrolls the same percentage of users that our client allocated to the database, or changing the experiment to a toggle, which enrolls all users.

![Alt Text](/images/VariantForm.png)

## Pausing and resuming features

Test Lab recognizes that bugs can be discovered as new features are deployed, making it necessary roll back the feature until the bug has been patched. Additionally, while experiments are running, unanticipated circumstances can cause changes in user behavior in ways that are unrelated to variants being tested. For example, a competitor could be having a large sale that might temporarily alter the demographics of the users visiting your site, which would mean the data collected from that period of time might not be representative of typical user behavior.

Test Lab has accounted for these circumstances. Rather than requiring our clients to terminate a feature only to recreate it after the issue has been resolved, a our Admin UI includes the ability to pause and resume features with the click of a button.

![Alt Text](/images/PauseResumeFeatures.gif)

## Editing features while maintaining experiment integrity

Additionally, the Test Lab application ensures that once experiments are created, future edits will not be detrimental. We have tailored our feature editing options to ensure maximum flexibility when editing **upcoming** features, including the ability to modify names, descriptions, start dates, end dates, and user enrollment percentages, where relevant, as well as the quantity and weight of variants for experiments.

![Alt Text](/images/EditingUpcomingFeatures.png)

However, in order to ensure that our clients do not make changes that damage the integrity of their data for **currently running** experiments, our Admin UI limits the ability to make destructive changes to **ongoing** features. Once an experiment has begun:

- The start date may not be altered.
- Variants may not be added or removed.
- Variant weights may not be changed.

Users still have the flexibility to alter the name, description, end date and the overall percentage of users site-wide that are exposed to the experiment, as well as the variant values.

![Alt Text](/images/EditingOngoingFeatures.png)

## Viewing results

Finally, for current and past experiments, our Admin UI allows our clients to view in-progress and final results collected from their experiments. This data visualization helps illuminate the differences in user behavior between variants and guides our clients towards making informed decisions when experiments conclude.

![Visualizer](/images/RyanVisualizer.gif)
