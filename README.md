# Node-Express-Mongo Boiler Plate

 <br>

## Features: 
 <br>

1. Node-Express Server
2. Auth middleware 
3. Skeleton for schema and controllers 
4. Data valiation in the schema
5. Dockerised to support easy transfer efficient production build
6. Load balancing using haproxy 
7. payload compression
8. Gulp support (for minification/bundling/compression static data, cache busting and many other things )
9. can support > 20 CRUD 
10. Scalability
11. Pagination middleware

<br>
<br>
<br>

## How to make the most out of this boilerplate: 
 <br>

* inside src/config/.env -> replace `<username>`, `<password>`, `<dbName>` inside the MONGO_URI
* Uncomment mongo comments in src/server.js
* Require the necessary schemas in the controller files to perform CRUD
* On adding a new controller, make sure to add it's corresponding route in src/routers/`<corresponding-route-file>`.js

 <br>
 <br>
 <br>

## Use with docker:
 <br>

### Here are a few helpful docker commands
 <br>

### -- building an image:
>> docker build -t `<you-app-name>` .
 <br> 

### -- view all images:
>> docker images
 <br>

### -- create a container: 
>> docker run --name `<you-app-name>` -p 80:3001 `<you-app-name>`

(you can use any ports in place of 80 and 3001)
 <br> 

### -- view all container:
>> docker ps -a      
 <br>

### -- view all images:
>> docker images
 <br>

### -- delete a container:
>>docker stop `<container-name-or-id>`
>> docker rm `<container-name-or-id>`
 or 
>>docker ps -a 
>>docker rm -f `<container-id>`
 <br>

### -- delete an image:  
>> docker image rm `<image-name>`
 <br>
 <br>
 <br>

## Use without docker 
 <br>

clone the repo
cd into the repo then run the following commands:
>>     cd ./node-project 
>>     npm install 
>>     npm start 


