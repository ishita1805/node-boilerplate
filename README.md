# Node-Express-Mongo Boiler Plate

## Features: 

### 1. Good file structure
### 2. Node-Express Server
### 3. Auth middleware made with jasonwebtokens, bcrypt and cookie-parser
### 4. Demo schema set up with mongoDB-mongoose ( Users only need to feed in information for their cloud db )
### 5. Data valiation in the schema
### 6. Dockerised to support easy transfer efficient production build
### 7. Load balancing using haproxy 
### 8. payload compression
### 9. Gulp support ( can be used to minif/bundle/compress static data, cache busing and many other things )
### 10. Built in .gitignore and .dockerignore files
### 11. can support > 20 CRUD easily
### 12. Easily scalable because of its module based architecture

## How to make the most out of this boilerplate: 

### inside src/config/.env -> replace <username>, <password>, <dbName> in the MONGO_URI
### Uncomment mongo comments in src/server.js once you have added your cloud db details in the repo
### Require the necessary schemas in the controller pages to perform CRUD
### On adding a new controller, make sure to add it's corresponding route in src/routers/<corresponding-route-file>.js

## Use with docker:

### Here are a few helpful docker commands

### -- building an image:
### > docker build -t <you-app-name> .

### -- view all images:
### > docker images

### -- create a container: 
### > docker run --name <you-app-name> -p 80:3001 <you-app-name>

### -- view all container:
### > docker ps -a      

### -- view all images:
### > docker images

### -- delete a container:
### >docker stop <container-name-or-id>
### > docker rm <container-name-or-id>
### or 
### >docker ps -a 
### >docker rm -f <container-id>

### -- delete an image: 
### (you can only delete an image once you have deleted all the containers associated to it)
### > docker image rm <image-name>

## use without docker 

### clone the repo
### cd into the repo then run the following commands:
###     cd ./node-project
###     npm install
###     npm start


