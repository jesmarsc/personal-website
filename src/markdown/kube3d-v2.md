---
path: '/projects/kube3d-web'
title: 'Kubernetes 3D Web'
featuredImage: '../assets/kube3d-thumb.jpg'
technologies: [React, Babylon.js, Kubernetes]
github: https://github.com/jesmarsc/kube3d
website: https://kube3d.netlify.com/
---

##Description
A Kubernetes 3D renderer that improves on the mobile version of this application. I decided that converting the mobile version into a web application would be a good learning experience while improving the bundle size. Like the original, the idea was to create a tool that provided cluster information and events, allowing users to quickly view the status of their cluster (similar to network graphs). Currently, the application is not real-time, but I'm looking into the Kubernetes watch API to see if that can be integrated to pull real-time event updates.

##Architecture
###React
All UI is built using React. The logic for setting up the scene and placing the nodes is inside React components. Requests for cluster information were sent through Axios and the CORS anywhere address. This is simply for prototyping and will in the future use my already setup Node.js proxy.

###Babylon.js
The engine used to create the 3D renderings. This is also the reason why the bundle size was reduced greatly. Babylon.js is much more lightweight than Unity, and doesn't include a physics engine either.

###Kubernetes
Currently, the application requires a cluster owner to setup RBAC and allow anonymous access to node information. Again, this is for prototyping reasons and can be made more secure using OpenID Connect. That implementation was already done in my Kubernetes cluster sharing service and can be used by creating another proxy endpoint (work in progress).
