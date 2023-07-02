FROM node:slim

RUN mkdir -p /app

WORKDIR /usr/src/app

COPY index.js /app/index.js
COPY package.json /app/package.json
COPY . /app/
RUN npm install

CMD ["npm", "start"]

ENTRYPOINT node index.js 