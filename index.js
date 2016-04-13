var Module = require('module').Module;
var nodePath = require('path');

var appPaths = [];
var oldFindPath = Module._findPath;

Module._findPath = function (request, paths) {
    if (request.substr(0, 1) === '@') {
        paths = appPaths.concat(paths);
        request = request.substr(1);
    }
    return oldFindPath(request, paths);
}

module.exports = function addPath(path) {
    appPaths.push(path);
}
