# Dockerfile

# base image
FROM node:alpine

# create & set working directory
WORKDIR /www/app

# copy source files
COPY . /www/app

# install dependencies
RUN npm install

# start app
RUN npm run build
EXPOSE 3001
CMD npm run start
