---
path: '/project/kubeko-v2'
title: 'Kubeko v2'
featuredImage: '../assets/kubeko-thumb.jpg'
technologies: [React, Node.js, Express, Firebase, Kubernetes]
github: https://github.com/jesmarsc/kubeko-frontend
website: https://kubeko.net/
---

##Description
While learning React I decided to improve my capstone's code base as a personal project. This became my first React project, involving restructuring of not only the front-end with React, but the back-end as well with Node.js and Firebase. I was learning JavaScript, so I didn't want to switch between JavaScript and Java while working on the whole stack.

##Architecture
###Front-End
The front-end is composed entirely of **React** and uses other libraries such as:

- **Axios**: To make API requests to my Node.js server.
- **React Router**: Handles page routing in a single page application.
- **Firebase Web SDK**: To make requests to Firebase authenticator and RTDB.
- **Ant Design (UI Framework)**: Used for out of the box table components.
- **Formik (Form Handler)**: Creates form components.

Like the capstone, the user can upload a YAML file representing the resource they want to create on their desired Kubernetes cluster. This request is then sent to the Node.js back-end that forwards

###Back-end
The back-end consists of Firebase and a Node.js proxy server.

####Firebase
Firebase came to mind when I wanted to rapidly prototype my authentication and data storage. Firebase authenticator is used to easily create user accounts and Firebase RTDB is used to store data for those accounts. Another benefit were the ID tokens that clients would recieve once they were authenticated. These ID tokens were used to authorize any requests they would make to the Node.js proxy (explained next). Once owners configured their clusters to accept tokens signed by my authenticator, users can securely make requests to their cluster through the proxy. Owners must also make sure to setup RBAC roles for these tokens.

####Node.js Proxy
Since making requests from the browser require CORS headers to be set, clients couldn't directly communicate with Kubernetes clusters (atleast I was unable to get that working). As a solution, I created a Node.js proxy that would set the CORS headers and forward requests to the cluster. File uploads (POST requests) were handled slightly differently. The proxy would parse the incoming file, ensure namespaces were set (more on this in the next section), make the right API calls, and update the user's data on Firebase. Some of the libraries used were:

- **Busboy**: File parser.
- **Express**: Created the API endpoints.
- **Firebase Admin SDK**: Update Firebase data and create admin tokens that cluster owners could use.
- **Firebase Functions**: Used to host the proxy on Firebase functions (serverless).
- **Kubernetes Client**: An API client used to communicate with clusters.

####Kubernetes Setup
When owners add a cluster to my service, they have to ensure they configure it properly. First, they have to configure the API server to accept ID tokens signed by Firebase. This requires configuring OIDC, more explained [here](https://kubernetes.io/docs/reference/access-authn-authz/authentication/#openid-connect-tokens). They must also make sure to set RBAC roles for these users, specifically, making users only have permissions in their own namespaces. This is because for security purposes, Kubeko will send all of a users requests to a namespace derived from their uid. This makes sure users don't change workloads not belonging to them. For simplicity, the owner can accept an admin token only available in the Kubeko backend. With this admin token, Kubeko can automatically create the namespaces and RBAC roles. The owner is also able to manage their cluster through our dashboard.
