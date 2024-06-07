# KubeStack Web App

## Overview

**KubeStack Web App** is a simple multi-tier web application designed to demonstrate the integration of Docker and Kubernetes. The application consists of a front-end service built with a basic static site, a back-end service using Node.js and Express, and a MySQL database.


## Architecture

The architecture of the KubeStack Web App consists of:

- **Front-end Service**: A simple static site served using `http-server`.
- **Back-end Service**: A Node.js application with Express, which connects to the MySQL database.
- **Database Service**: MySQL database to store application data.

## Prerequisites

Before you begin, ensure you have the following installed:

- Docker
- Kubernetes (Minikube or a Kubernetes cluster)
- kubectl

## Setup

### Clone the Repository

git clone https://github.com/SandaliChandrasekara/KubeStack-Web-App.git
cd kubestack-web-app

## Build Docker Images

## Build Front-end Image

cd frontend
docker build -t frontend:1.0 .

## Build Back-end Image

cd backend
docker build -t backend:1.0 .

## Deploy to Kubernetes

Apply Kubernetes Manifests

kubectl apply -f k8s/mysql-deployment.yaml
kubectl apply -f k8s/mysql-service.yaml
kubectl apply -f k8s/backend-deployment.yaml
kubectl apply -f k8s/backend-service.yaml
kubectl apply -f k8s/frontend-deployment.yaml
kubectl apply -f k8s/frontend-service.yaml

## Accessing the Application
Get the External IP

## kubectl get services
Access the Front-end

Open a web browser and navigate to the external IP of the frontend-service.

## Cleaning Up
To remove the deployed application from your Kubernetes cluster, run:

kubectl delete -f k8s/
