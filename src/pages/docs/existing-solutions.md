---
title: Existing Solutions
description: A snapshot of the current A/B Testing landscape.
---

---

Existing solutions for A/B testing run the gamut from bare-bones apps exposing APIs for creating and retrieving experiments from the command line to What You See Is What You Get (WYSIWYG) options for performing A/B testing on client-side-rendered applications with no developer expertise needed (e.g., VWO) to full featured A/B testing solutions that offer exposed APIs as well as SDKs for both server-side and client-side rendered applications that require developer expertise.

Options for A/B testing in the “middle-of-the-road” (i.e., solutions that are open source with self-hosting options) are relatively sparse – applications that look promising either fade away and have little to no development or engagement over time or they become fully-featured enterprise options that offer only expensive, managed solutions (e.g., LaunchDarkly, Optimizely).

|           Feature            | Firebase |  VWO   | GrowthBook |   Unleash    |      LaunchDarkly      |
| :--------------------------: | :------: | :----: | :--------: | :----------: | :--------------------: |
|      Self-Hosted Option      |   None   |  None  |   Docker   | Docker, Node |          None          |
|        Managed Option        |   Yes    |  Yes   |    Yes     |     Yes      |        Required        |
|    Analytics Data Storage    |    No    |   No   |     No     |      No      |          Yes           |
|  Client Data Store Required  |    No    |   No   |    Yes     |      No      |          `No           |
|           WYSIWYG            |    No    |  Yes   |     No     |      No      |           No           |
| Developer Expertise Required |   Yes    |   No   |    Yes     |     Yes      |          Yes           |
|    Client- or Server-Side    |  Client  | Client |    Both    |     Both     |          Both          |
|             SDKs             |    No    |   No   |    Yes     |     Yes      |          Yes           |
|             APIs             |    No    |   No   |    Some    |     Yes      |          Yes           |
|    GUI for Test Creating     |   Yes    |  Yes   |    Yes     |     Yes      | Pro or Enterprise Plan |
|  GUI for Data Visualization  |   Yes    |  Yes   |    Yes     |      No      | Pro or Enterprise Plan |
|         Open-Source          |    No    |   No   |    Yes     |     Yes      |           No           |

Within the limited, self-hosted category, two key options are Unleash and GrowthBook, both of which offer rich documentation and API access, with open-source deployment options. These solutions inspired some of the features and functionality of Test Lab.
