FROM node:16.19.0

COPY . /Reja-1
WORKDIR /Reja-1
CMD npm install && node server.js



# DOCKERFILE => DOCEKR IMAGE => direct docker: CONTAINER
# DOCKERFILE => DOCKER IMAGE => docker-compose: CONTAINER