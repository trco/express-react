FROM node:11-alpine

WORKDIR /back

COPY package.json ./
COPY package-lock.json ./

RUN npm install

EXPOSE 8000

CMD [ "node", "./bin/www" ]
