"use strict";
exports.__esModule = true;
var _ = require("lodash");
$(function () {
    var $examples = $("[data-example]");
    $examples.each(function (t, example) {
        var $exampleId = $(example).data("example");
        var $html = $($exampleId).html();
        // trim whitespace from the end of the html
        $html = $html.replace(/\s*$/, "");
        // strip out shared initial tabs to left justify html
        var lines = $html.split("\n");
        lines = _.without(lines, "");
        var match = true;
        while (match) {
            var stripped = new Array(lines.length);
            for (var l = 0; l < lines.length; l++) {
                if (lines[l].indexOf("\t") === 0) {
                    stripped[l] = lines[l].substr(1);
                }
                else {
                    match = false;
                    stripped = lines;
                    break;
                }
            }
            lines = stripped;
        }
        $(example).text(_.join(lines, "\n"));
    });
});
//# sourceMappingURL=rb-example.js.map