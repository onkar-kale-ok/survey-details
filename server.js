'use strict';

require("dotenv").config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const apiRoutes = require('./routes')
const environment = require('./config/environment')

app.use("/api", apiRoutes());

app.listen(environment.port);

console.info(`server is running on port ${environment.port}`)



