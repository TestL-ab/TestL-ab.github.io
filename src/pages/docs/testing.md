---
title: Testing Suite
description: An overview of Test Lab's backend testing suite.
---

The Test Lab team is particularly proud of the extensive test suite that covers the Test Lab backend server. **_Current coverage exceeds 90%._**

Building the test suite concurrently with the development of the backend server helped to expedite the implementation of large changes, as we could ensure that new code did not impact previous functionality.

The current suite of tests ensures that all API routes can be accessed and return the correct data. It includes both successful requests and requests that result in errors. Tests also include testing defaults for entities as well as setup and tear down.

A critical component of our SDKs require the backend server to return a `304 Not Modified` status code when feature configuration has not changed, and the test suite includes tests for this as well.
