# Node-Express-Mongo Boiler Plate

## Features: 

### 1. Node-Express Server
### 2. Auth middleware made with jasonwebtokens, bcrypt and cookie-parser
### 3. Skeleton for schema and controllers 
### 4. Data valiation in the schema
### 5. Dockerised to support easy transfer efficient production build
### 6. Load balancing using haproxy 
### 7. payload compression
### 8. Gulp support (for minification/bundling/compression static data, cache busting and many other things )
### 9. can support > 20 CRUD 
### 10. Scalability




## How to make the most out of this boilerplate: 

### inside src/config/.env -> replace <username>, <password>, <dbName> in the MONGO_URI
### Uncomment mongo comments in src/server.js once you have added your cloud db details in the repo
### Require the necessary schemas in the controller pages to perform CRUD
### On adding a new controller, make sure to add it's corresponding route in src/routers/<corresponding-route-file>.js
### 
### 
### 
## Use with docker:
### 
### Here are a few helpful docker commands
### 
### -- building an image:
### > docker build -t <you-app-name> .
### 
### -- view all images:
### > docker images
### 
### -- create a container: 
### > docker run --name <you-app-name> -p 80:3001 <you-app-name>
### 
### -- view all container:
### > docker ps -a      
### 
### -- view all images:
### > docker images
### 
### -- delete a container:
### >docker stop <container-name-or-id>
### > docker rm <container-name-or-id>
### or 
### >docker ps -a 
### >docker rm -f <container-id>
### 
### -- delete an image: 
### 
### > docker image rm <image-name>
### 
### 
### 
### 
## use without docker 
### 
### clone the repo
### cd into the repo then run the following commands:
###     cd ./node-project
###     npm install
###     npm start


