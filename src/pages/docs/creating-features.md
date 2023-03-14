---
title: Creating Features
description: You can create TestLab features in the Admin UI or through direct access of the TestLab API.
---

You can create TestLab features in the Admin UI or through direct access of the TestLab API.

---

## Types of Features

TestLab offers three types of features on its platform: **Toggles**, **Rollouts**, and A/B Testing **Experiments**. Features can be activated immediately or scheduled to go live at a future date.

### Toggles

Toggles are features that are all-or-nothing. They are either activated or inactivated (evaluating to **true** or **false**, respectively) for the entire user base.

### Rollouts

Rollouts are activated for the specified percentage of users. Evaluation of the feature will be **true** for the specified user percentage and **false** for the remaining users.

### Experiments

---

## Creating Features

For the best user experience, we recommend creating features in the TestLab Admin UI. However, features can also be created via direct API calls. See the **API Reference** for details on using API calls to create and edit features.
