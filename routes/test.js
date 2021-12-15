'use strict'

const express = require ('express');
const testController = require ('../controllers/test');
const api = express.Router();

api.get('/', testController.test);

module.exports = api;