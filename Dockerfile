FROM node:12.4.0

USER node

WORKDIR /home/node

COPY package.json ./
COPY package-lock.json ./
COPY . .

RUN yarn install

EXPOSE 4000

ENV  NODE_ENV production

CMD [ "node", "index.js" ]