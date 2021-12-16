'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors')

// ** PATH
const testRoutes = require('./routes/test');

//app.set('trust proxy', true);
app.use(bodyParser.urlencoded({ limit: '1mb', extended: true }));
app.use(bodyParser.json({ limit: '1mb' }));
app.use(cors());

// ** PREFIX
app.use('/', testRoutes);

//  ** EXPORT
module.exports = app;