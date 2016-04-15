
var path = require('path');
var makeItGlobal = require('./');

makeItGlobal(path.dirname(module.parent.filename));