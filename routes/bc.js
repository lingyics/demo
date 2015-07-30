/**
 * Created by apple on 7/30/15.
 */
var express = require('express');
var router = express.Router();

var bc = require('node-bigcommerce');

var bigc = new bc(
    {
        LogLevel: 'info',
        ClientId: '',
    }
);





modules.exports = router;
