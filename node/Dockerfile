# pull the Node.js Docker image
FROM node:alpine

# create the directory inside the container
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# copy the package.json files from local machine to the workdir in container
COPY package*.json /usr/src/app/

# run npm install in our local machine
RUN npm install

# copy the generated modules and all other files to the container
COPY . /usr/src/app

# our app is running on port 3000 within the container, so need to expose it
EXPOSE 3000

# the command that starts our app
CMD ["node", "index.js"]