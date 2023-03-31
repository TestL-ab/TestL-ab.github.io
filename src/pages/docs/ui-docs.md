---
title: Admin UI Documentation
description: Quidem magni aut exercitationem maxime rerum eos.
---

---

## Creating New Features

### Toggle or Rollout

To create a new toggle or rollout, click on the **Create New Feature** link in the side navigation bar. Enter the title and description for your new feature. Select either **Toggle** or **Rollout** to indicate which type of feature you are creating.

Select the start and end dates for this feature by clicking on the calendar and selecting the appropriate dates. **All users are automatically enrolled in toggles, so there is no need to specify the user percentage for feature toggles**. For feature rollouts, select the percentage of total users that you would like to expose to the feature.

![Create Toggle or Rollout](/images/CreateToggleOrRollout.gif)

### Experiment

To create a new experiment, click on the **Create New Feature** link in the side navigation bar. Enter the title and description, including your hypothesis for your new experiment. Select **Experiment** from the list of feature types, and then select the start and end dates for your experiment by clicking on the calendar and selecting the appropriate dates.

![Create Experiment](/images/CreateExperiment.gif)

After creating a new experiment, users of the Admin UI are taken to the variant creation form. To create variants, enter the value that you will be using to identify that variant, along with the percentage of users enrolled in the experiment that you would like to be assigned to that variant.

It is important to note that each variant name for the experiment must be unique, and exactly 100% of users must be allocated to variants within a particular experiment.

All experiments must have at least two variants, and may have up to five variants. To increase or decrease variants, click the **Add Another Variant** or **Remove Variant** buttons as needed.

If you created the experiment by mistake and do not want to assign variants, you may either **delete it** entirely, **change it to a roll-out**, which will enroll the same percentage of users that you selected for the experiment, or **change it to a toggle** which will enroll 100% of users in the feature.

![Create Variants](/images/CreateVariants.gif)

---

## Viewing Features

To view the **Current Toggles**, **Current Rollouts**, **Current Experiments**, **Upcoming Features**, or **Past Experiments**, click on the appropriate link in the side navigation menu. Details for each feature can be seen by clicking on the **+** icon next to the feature name. All currently running features can be paused or resumed as needed by clicking on the **Pause/Resume** button. All features—current, upcoming, and past—can be deleted by clicking on the **Delete** button.

> Please be aware that deleting is a destructive, non-reversible action, and, by confirming the delete, all information relating to that feature will be permanently deleted from the database.

![Viewing Features](/images/ListOverview.gif)

---

## Editing Features

To edit current and upcoming features, use the navigation menu to navigate to the list that contains the feature you would like to update. Click the **Edit** button that at corresponds to that feature, and make any desired alterations.

To edit variant details for experiments, once inside the edit modal for the relevant experiment, click the **Show Variant Form/Show Experiment Form** button to toggle between the forms for updating variants and updating experiment details as needed.

> Feature types cannot be changed after creation, and start dates may not be changed for current features. In order to ensure the integrity of data analysis, variant weights and number of variants cannot be edited for experiments that are already ongoing. Past experiments can be deleted, but not edited.

### Updating Toggles and Rollouts

![Updating Rollouts](/images/UpdateRollout.gif)

### Updating Variants in Current Experiments

![Updating Variants - Current](/images/UpdateVariantsCurrentExperiment.gif)

### Updating Variants in Upcoming Experiments

![Updating Variants](/images/UpdateVariantUpcomingExperiment.gif)

---

## Experiment Data Visualizer

To view results from past experiments, or in-progress data for current experiments, navigate to the experiment that you wish to view, click on the **View Experiment Details** button, and then the **View Analytics** button. This will display a raw event data graph, a normalized event data graph, and a timeline chart of events displayed by date.

![Visualizer](/images/RyanVisualizer.gif)
