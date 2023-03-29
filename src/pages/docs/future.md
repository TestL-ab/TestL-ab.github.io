---
title: Future Work
description: Places where we would like to take Test Lab.
---

---

## Increasing granularity of user-blocks

In the previous discussion, we explained our [logic](/docs/functional-decisions#granularity-of-user-blocks) for segmenting the **user-blocks** into 5% chunks. If we find that Test Lab users are experiencing application use that warrants more granular user-blocks, then there could be value in offering smaller chunks of **user-blocks**. One option would be to offer additional routes in the backend server that would allow the user to choose from a range of user-block sizes when they use the [SDK](/docs/sdk/user-blocks) or [API](/docs/api-docs).

---

## SSEs for real-time updates

Right now there is no way for a user to understand the "health" of an experiment. Errors are typically handled in such a way that it does not detract from the user experience, but that also means that it may not be clear when something is going wrong with particular features. We believe that adding SSEs to communicate any errors from the backend server to the Admin UI could be a valuable addition. We envision a dashboard where we can display "experiment health" metrics on current experiments so that the client can be confident that the experiments are performing as designed.

---

## Statistical analysis

In the current implementation of Test Lab, we provide clients with a visual representation of raw and normalized event data as well as a way to access the raw data from the [API](/docs/api-docs#get-all-events). This was, in part, because we did not want to be prescriptive about the types of analysis that clients may want to conduct on their event data.

In the interest of **flexibility**, we provide a qualitative representation of their event data and offer the opportunity to obtain and analyze their event data with their preferred metric. However, we realize that there may be value in providing simple measures of statistical significance for commonly used types of experiments, and this is something that we plan to explore.

In addition, once some measure of statistical significance is in place, we believe that allowing users to convert the winning variant into either a toggle or a rollout after completing an experiment could be a useful future component.

---

## Roadmap

Additional functionality currently on our roadmap includes:

- Offering additional analytics in the visualizer portion of the Admin UI
- Additional error handling on the backend server to cover cases that are currently handled in the Admin UI but not when accessing the APIs directly
- Bolstering the testing suite for the Admin UI
- Using past features as templates for generating new features
- Tracking of multiple event types for a single experiment
- Tool to predict the required sample sizes needed to achieve a statistically significant result for an experiment
- An option in the Admin UI to download raw data directly, instead of accessing it through the API
