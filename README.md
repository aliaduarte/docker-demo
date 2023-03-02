# Docker + Node.js

The main goal of this exercise is to dockerize a Node.js application.

You are receiving the instructions below, and you'll need to interpret them into what the Dockerfile should contain.
Once the Dockerfile builds correctly, start the container locally. Make sure it works by navigating to http://localhost:8080

Instructions for our Dockerfile:

1- Use the node official base image, with the 12 version
2- Set the working directory to the folder "app"
3- Node.js uses a "package manager", so you need to copy the package.json and package-lock.json file to your currently working directory.
4- The app needs to run 'npm install' to install dependencies from that file.
5- You need to copy the "src" folder from the current directory into the "src" folder of the image.
6- The app listens on port 5000, but the container should listen on port 8080 of the Docker host, so it will respond to http://localhost:8080 on your computer
7- The app needs to execute the script watch from the package.json

Instructions for our docker-compose:
1- Build a docker-compose.yml file were is defined the port forwarding configuration and the volumes to persist the "src" files of our application.
2- Use the command docker-compose build && docker-compose up
