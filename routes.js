'use strict';

const express = require('express');
const apiRouter = express.Router();
const cookieParser = require('cookie-parser');
const app = express();

const userRouter = require('./modules/user/userRouter');
const { environment, apiKey } = require('./config/environment')

const bodyParser = require('body-parser');

apiRouter.use(cookieParser());

apiRouter.use(bodyParser.json());

apiRouter.use((req, res, next) => {
  console.log("req.headers['x-api-key']", req.headers['x-api-key'])
  if (req.headers['x-api-key'] === apiKey) {

    return next();
  }
  else {
    res.send('Unauthorised user')
    res.end();
  }
}
);


module.exports = () =>
  apiRouter
    .use("/survey", userRouter())

    // .all('*', () => {
    //   throw new NotFoundError();
    // });

