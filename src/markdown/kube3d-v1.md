---
path: '/projects/kube3d-mobile'
title: 'Kubernetes 3D Mobile'
featuredImage: '../assets/kube3d-v1.png'
technologies: [Android, Java, Kubernetes]
github: null
website: null
---

##Description
An Android application that renders a 3D visualization of your Kubernetes cluster by using Unity for the 3D rendering and the Kubernetes Java API client for fetching cluster information. The idea was to create a tool that provided cluster information and events, allowing users to quickly view the status of their cluster (similar to network graphs). It would also serve as a learning tool for people learning Kubernetes, allowing them to see how various components interact with eachother. I no longer support the mobile version and plan on improving the web version instead. The bundle size for the web version is MUCH smaller and has a cleaner code base (all JavaScript). This version was also created with a friend of mine, which involved coordination and some pair programming.

##Architecture
###Unity
All renderings were handled through Unity. I built the scripts that created the renderings and handled touch controls (camera movement, node selection, etc). The UI was also built in Unity and showed information about a cluster's nodes. This information included the resources that ran on a node, such as: deployments, pods, and services. All of this data came through an intent created through the main Android application (explained next section). One interesting part about the rending script was getting the nodes evenly distributed around the master node. This was done using a Fibonacci sphere distribution, which created some neat looking clusters!

###Android
The project was going to be a Unity port that ran on Android, but hitting the Kubernetes API was difficult through Unity. I tried using the C# client library, but that proved nearly impossible. Instead, my partner and I created the main menu in Android that would use the Kubernetes Java API client to fetch cluster information and send it through an intent when opening the Unity module.
