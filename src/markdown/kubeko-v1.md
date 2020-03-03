---
path: '/projects/kubeko-v1'
title: 'Kubernetes Sharing v1'
featuredImage: '../assets/kubeko-v1.jpg'
technologies: [Java, Spring, Hibernate, MySQL, Kubernetes]
github: https://github.com/jesmarsc/kubernetes-konekt
website: null
---

##Description
During my final year at UCSB, I partnered with Pivotal and 4 other classmates to create a Kubernetes cluster sharing service. This web service allows people to share their Kubernetes clusters with other users, removing the need for users to setup their own clusters. This helps reduce the barrier to entry for users trying to get the benefits of Kubernetes without having to manage a cluster. I later took this project and made major improvements in version 2.

##Responsibilites
As team lead, I was in charge of being scrum master, creating presentations, writing specification documents, and maintaining the feature backlog. As a developer, I setup the initial code base for the front and back-end using Java and Spring Boot. For the first quarter, I was in charge of the back-end, managing our controllers, authentication, load balancing, and SQL database. I also managed our communication with Kubernetes clusters, leveraging the Kubernetes Java API client. During our second quarter, I focused on integrating Prometheus and Grafana into our user dashboards. This helped populate our dashboards with real-time performance data that owners could use to see the status of their cluster.

##Architecture
![Image](https://raw.githubusercontent.com/jesmarsc/kubernetes-konekt/master/images/User-Backend.png)

####Container
A user can send requests to a cluster by uploading a YAML file containing information about the Kubernetes resource they want to deploy. I would parse their YAML file and use the Kubernetes Java API client to complete the request.

####Dashboard
Created in JSP, the front-end UI displayed all the deployments and services a user had running on a cluster. Owners had additional access to CPU, memory, disk, and network information for their entire cluster or for a particualar user.

####Load Balancer
When a user submitted a YAML file to a desired cluster, our back-end had a round robin load balancer that would query the stored clusters and send the request to the next available cluster. After I integrated a federated Prometheus architecture, I pulled resource information to create a priority queue of all the clusters. Workloads were then sent to clusters with the most available resources.

####Metrics Cluster
For our federated Prometheus, I setup a master cluster responsible for communicating with other clusters through the Prometheus instance running on them. This information not only fed into our Load Balancer, but to our Grafana instance as well. I created Grafana dashboards that would display CPU, memory, network, and disk usage.

####Database
For authentication and data storage I setup Spring Security, Hibernate, and a MySQL database. One major flaw that I fixed in version 2 was that we would store cluster credentials as plain text. This prototype required an owner to give us a username and password to send API requests to their cluster (TERRIBLE).
