# pull the Node.js Docker image
FROM node:alpine

# create the directory inside the container
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

RUN apk add --no-cache openssl

# ENV DOCKERIZE_VERSION v0.6.1
# RUN wget https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-alpine-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
#     && tar -C /usr/local/bin -xzvf dockerize-alpine-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
#     && rm dockerize-alpine-linux-amd64-$DOCKERIZE_VERSION.tar.gz

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
# CMD dockerize -wait tcp://dbserver:3306 -timeout 20s node index.js

