---
title: Introduction
description: Test Lab introduction and use case.
---

An introduction to Test Lab and its primary use case.

---

## What is Test Lab?

**TestLab is an open-source, self-hosted feature flagging and experimentation platform.**

TestLab provides a feature management infrastructure that allows a developer to create feature toggles, rollouts, and experiments, with native SDKs to evaluate features and allow rendering of user-specific variants. TestLab also allows for event capture and analytics to visualize the outcome of experiments and determine whether the specified variation resulted in statistically significant changes in user behavor.

This case study will walk you through an introduction to A/B testing, a description of how TestLab fits into the landscape of A/B testing options, and an exploration of the engineering decisions that were addressed while building the TestLab application.

## Test Lab Use Case

As we will describe in the sections below, there are a range of A/B testing and feature flagging platforms available, so where does TestLab fit in? We think that TestLab is a great choice for companies that have at least one developer on their team. These companies might be reluctant to give large companies access to their data and would prefer a self-hosted solution, and they’re looking for easy deployment to their virtual private servers. This company is experiencing enough growth to be interested in making data-driven decisions, but they’re not yet collecting their own event data. In essence, they’re looking for flexibility, but they don’t have the resources to build a solution from scratch.
