---
title: Test Lab Introduction
description: Test Lab introduction and use case.
---

---

## What is Test Lab?

> **Test Lab is an open-source, self-hosted feature management and A/B testing platform.**

Test Lab provides **feature management** infrastructure for the creation of feature toggles, rollouts, and experiments. Test Lab also includes **native SDKs** to evaluate features and allow rendering of distinct variants.

**Toggles** and **Rollouts** are features that are active or inactive for **all** users of an application or a specified **percentage** of users, respectively. **Experiment** features include two or more **variants**, and each user enrolled in an experiment is presented with one version of an application depending on the variant assigned.

Test Lab allows for **event capture** and analytics to visualize the outcome of experiments. The visualizer can help to determine whether the specified variation resulted in changes in user behavior.

Test Lab is Dockerized and can be deployed on your virtual private server or AWS Elastic Container Service with one simple command.

---

## Test Lab Use Case

As you saw in the previous sections, there are a range of A/B testing and feature management platforms available, so **where does Test Lab fit in**?

We think that Test Lab is a great choice for small to mid-sized companies that have at least one developer on their team. These companies might be reluctant to give other providers access to their data and would prefer a self-hosted solution, and they may be looking for easy deployment to their virtual private servers. This company may be experiencing enough growth to be interested in making data-driven decisions, but they are not yet collecting their own event data. In essence, they are looking for **flexibility**, but they do not have the resources to build their own A/B testing solution from scratch.

**That's where Test Lab comes in.**

> The rest of this case study will walk you through the Test Lab architecture and the engineering decisions that we made while building the Test Lab application.
