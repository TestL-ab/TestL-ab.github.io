---
title: Introduction
description: Test Lab introduction and use case.
---

---

## What is Test Lab?

> **Test Lab is an open-source, self-hosted feature flagging and A/B testing platform.**

Test Lab provides a feature management infrastructure that allows a developer to create feature toggles, rollouts, and experiments, with native SDKs to evaluate features and allow rendering of user-specific variants. Test Lab also allows for event capture and analytics to visualize the outcome of experiments and determine whether the specified variation resulted in changes in user behavior.

This case study will walk you through an introduction to A/B testing, a description of how Test Lab fits into the landscape of A/B testing options, and an exploration of the engineering decisions that were addressed while building the Test Lab application.

## Test Lab Use Case

As we will describe in the following sections, there are a range of A/B testing and feature flagging platforms available, so **where does Test Lab fit in**?

We think that Test Lab is a great choice for companies that have at least one developer on their team. These companies might be reluctant to give large companies access to their data and would prefer a self-hosted solution, and they’re looking for easy deployment to their virtual private servers. This company is experiencing enough growth to be interested in making data-driven decisions, but they’re not yet collecting their own event data. In essence, they’re looking for **flexibility**, but they don’t have the resources to build a solution from scratch.

**That's where Test Lab comes in.**
