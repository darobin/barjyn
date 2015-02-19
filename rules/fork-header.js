/*global assert*/

var rfs = require("../lib/rfs");

exports.name = "fork-header";
exports.landscape = "W3C HTML has different representations for header elements.";
exports.transform = function (data) {
    assert("1st § in <header>",
    $("#the-header-element")
        .parent()
        .find("> p:first"))
        .replaceWith(data.header)
    ;
};
exports.params = function () {
    return [{
        header: rfs("res/the-header-element/header.html")
    }];
};
