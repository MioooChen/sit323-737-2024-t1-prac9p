# MongoDB Deployment and Management in Kubernetes
## This project demonstrates how to deploy MongoDB to a Kubernetes cluster and manage it effectively, including monitoring and backup strategies.

### Installing MongoDB in Kubernetes Cluster
* Deploy MongoDB using Docker containers and Kubernetes.
* Create Deployment and Service objects to manage MongoDB instances.
* Configure PersistentVolume and PersistentVolumeClaim to ensure persistent storage for MongoDB data.

### Creating a Persistent Storage MongoDB Database
* Ensure MongoDB data persistence using PersistentVolume and PersistentVolumeClaim, ensuring data integrity even if Pods restart.

### Managing Sensitive Information with Kubernetes Secrets
* Create a Secret containing MongoDB root username and password, and reference them in deployment files to enhance security.

### Writing a Test CRUD Operation Node.js Script
* Develop a Node.js script (index.js) that connects to the MongoDB database using the MongoDB Node.js driver and performs CRUD operations. This script helps in testing database configuration and application interaction with the database.

### Setting Up Regular Backup Strategy
* Implement a CronJob to periodically run the mongodump command for MongoDB database backup, ensuring quick data recovery in case of unexpected events.

### Configuring Custom Monitoring Tools to Monitor MongoDB Database Status
* Develop a Node.js script (mongodb_monitor.js) that periodically queries the MongoDB database to ensure it is running smoothly. Add alerting and notification mechanisms as required.
