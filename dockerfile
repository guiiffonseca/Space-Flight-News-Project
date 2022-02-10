FROM node:alpine

WORKDIR /projeto-coodesh

COPY package*.json ./

RUN npm install 

COPY . .
