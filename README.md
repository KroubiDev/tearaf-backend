# tearaf-backend


## Description

backend main service for tearaf.com

## system requirements
- install [nodejs v16 LTS](https://nodejs.org/en/)
- install typescript globally 
```bash
npm install -g typescript # npm comes with Nodejs

```

## Installation

```bash
cp .env.sample .env # contact team to get the keys
npm install

```

## Running the app
```bash
# development
npm run dev # compiles automatically with each change
```

## Test

```bash
# unit tests
$ npm run test

```

## Architecture

- using dependency injection with routers via having function that accept te dependencies as parameters and returns the router function, check [article](https://peteranderson.me/articles/dependency-injection-with-nodejs-expressjs-and-typescript) 

- decorator design pattern in building the models using Typegoose lib
