FROM node:12
# an imaginary directory (container) where your application will run
WORKDIR /home/node/app 
#copying the code to the container
COPY node-project /home/node/app
#run - runs when you build an image
RUN npm install
#cmd - runs when you run an instance of the container from the image
CMD npm start