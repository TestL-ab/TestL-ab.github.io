---
title: Getting started
pageTitle: Test Lab - Testing made simple, success made achievable.
description: Learn more about Test Lab and how it can help you make better design decisions to maximize user engagement with your application.
---

Learn more about Test Lab and how it can help you make better design decisions to maximize user engagement with your application. {% .lead %}

{% quick-links %}

{% quick-link title="Installation" icon="installation" href="/docs/installation" description="Step-by-step guide to setting up our self-hosted platform on your local host, virtual private server, or AWS Elastic Container Service." /%}

{% quick-link title="Architecture guide" icon="presets" href="/docs/architecture" description="Learn about the key features, functionality, and components of Test Lab" /%}

{% quick-link title="SDKs" icon="plugins" href="/docs/sdk-docs" description="Use our native JavaScript, React, Ruby, or Python SDKs to integrate Test Lab feature management into your application." /%}

{% quick-link title="API reference" icon="theming" href="/docs/api-docs" description="A guide to API endpoints that you can access via the Admin UI, command line, or Test Lab SDKs." /%}

{% quick-link title="Team" icon="team" href="/docs/team" description="Meet the team responsible for creating Test Lab." /%}

{% quick-link title="Presentation" icon="presentation" href="/docs/presentation" description="View the Test Lab case study presentation." /%}

{% /quick-links %}

---

# Executive Summary (TL;DR)

> **TestLab is an open-source, self-hosted feature flagging and experimentation platform.**

Test Lab provides a **feature management** infrastructure that for the creation of feature toggles, rollouts, and experiments, with **native SDKs** to evaluate features and allow rendering of user-specific variants. Test Lab also allows for **event capture** and analytics to visualize the outcome of experiments and determine whether the specified variation resulted in changes in user behavior. Test Lab is Dockerized and can be deployed on your localhost, virtual private server, or AWS Elastic Container Service with one simple command.

The Test Lab A/B Testing and Feature Flagging Platform consists of:

1. A Node.js / Express [backend server](/docs/backend-server) that exposes APIs for creating, editing, and deleting features, retrieving feature configurations, and collecting and retrieving feature data
2. An [Admin User Interface (Admin UI)](/docs/admin-ui) build with React that facilitates creating, editing, deleting, and viewing current, scheduled, and past features as well as viewing experiment data / results
3. A PostgreSQL [database](/docs/database) for persisting data that defines the features, the blocks of the user base allocated to each experiment, and event data for experiment analytics
4. Native [SDKs](/docs/sdk) for Node.js, React, Ruby, and Python for communicating directly with the Test Lab API and allocating individual requests to the appropriate feature(s)

This case study explores key decisions made when designing and implementing the Test Lab platform, including:

- Architectural decisions regarding Test Lab [hosting](/docs/decisions#managed-versus-self-hosted), [database](/docs/decisions#database-type) type, and [API access](/docs/decisions#api-access)

* Functional decisions relating to the ["stickiness"](/docs/functional-decisions#"stickiness"-of-the-user-experience) of the user experience, limiting users to one concurrent experiment with [user-blocks]("/docs/functional-decisions#limiting-users-to-one-concurrent-experiment), the [granularity](/docs/functional-decisions#granularity-of-user-blocks) of user-blocks, and using [polling](/docs/functional-decisions#polling-to-retrieve-updated-feature-data) to retrieve updated feature data

Test Lab includes a full [test suite](/docs/testing) on its backend server as well as documentation on [installation](/docs/installation), [APIs](/docs/api-docs), and [SDKs](/docs/sdk-docs).
