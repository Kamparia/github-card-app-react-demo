# pull official base image
FROM node:15.12.0-alpine

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
# COPY package-lock.json ./

RUN npm install -g react-scripts
RUN npm install

# add app
COPY . ./

# start app
CMD ["npm", "start"] 