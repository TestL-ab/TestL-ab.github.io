---
title: Architecture Overview
description: A high-level description of the Test Lab system design
---

Test Lab is loosely modeled on the Unleash A/B testing platform, offering users a flexible, self-hosted, open-source option for A/B testing but also adding the ability to collect, retrieve, and analyze event data originating from experiments. Test Lab is Dockerized and can be deployed on your localhost, virtual private server, or AWS Elastic Container Service with one simple command.

---

## Components of Test Lab Architecture

The Test Lab A/B Testing and Feature Flagging Platform consists of four key components:

1. A backend server that exposes APIs for creating, editing, and deleting features, retrieving feature configurations, and collecting and retrieving feature data
2. An Admin User Interface (Admin UI) that facilitates creating, editing, deleting, and viewing current, scheduled, and past features as well as viewing experiment data / results
3. A database for persisting data that defines the features, the blocks of the user base allocated to each experiment, and event data for experiment analytics
4. Native SDKs for Node, React, Ruby, and Python for communicating directly with the Test Lab API and allocating individual requests to the appropriate feature(s)