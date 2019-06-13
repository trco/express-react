FROM node:11-alpine

WORKDIR /front

COPY package.json ./

RUN npm install

EXPOSE 3000

CMD [ "npm", "start" ]
