---
title: Installation
description: TestLab is Dockerized and can easily be deployed to the server of your choice or AWS Elastic Container Service.
---

TestLab is Dockerized and can easily be deployed to the server of your choice or AWS Elastic Container Service.

---

## Install the TestLab Application

The TestLab suite includes the client, the server, and a PostgreSQL database. Start by cloning the TestLab Docker Repository.

```shell
git clone https://github.com/TestL-ab/testlab-docker.git
cd testlab-docker
```

### Deploy to a Local or Virtual Server

To launch TestLab in detached mode:

```shell
docker-compose up -d
```

To spin down and removed the stopped containers:

```shell
docker-compose down
```

### Deploy to the AWS Elastic Container Service

To deploy to ECS using docker compose, you need to have set up a user with admin persmissions on an AWS account.

If you have not already done so, run

```shell
docker context create ecs myecscontext
```

to create an Amazon ECS Docker context named myecscontext. If you have already installed and configured the AWS CLI, the setup command lets you select an existing AWS profile to connect to Amazon.

Make sure you are in the ecs context by using

```shell
docker context use myecscontext
```

Run

```shell
docker compose up
```

to start the application on the ECS, and

```shell
docker compose down
```

to stop the application.

```shell
docker compose ps
```

shows the status of the containers and the address where they can be reached.
