/*global assert*/

var rfs = require("../lib/rfs");

exports.name = "fork-input-bidi-plaintext";
exports.landscape = "W3C HTML applies unicode-bidi: plaintext to input elements.";
exports.transform = function (data) {
    var $pre = assert("CSS <pre> in bidi rendering",
                $("#bidi-rendering")
                    .parent()
                    .find("pre.css:first"))
    ;
    $pre.html($pre.html().replace(/textarea[\s\S]+?}/, data.input));
};
exports.params = function () {
    return [{
        input: rfs("res/bidi-rendering/input-bidi-plaintext.css")
    }];
};
