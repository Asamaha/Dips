var userModel = require('./userModel.js');
var jwt = require('jwt-simple');
var Promise = require('bluebird');
Promise.promisifyAll(require('mongoose'));