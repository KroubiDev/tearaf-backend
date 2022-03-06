FROM node:lts-alpine

RUN npm install -g typescript

WORKDIR /var/code

COPY package.json /var/code

RUN npm install

COPY . /var/code

EXPOSE 5000

ENTRYPOINT ["node", "src/app.ts"]