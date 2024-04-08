"use strict";
exports.__esModule = true;
require("../src/styles/tailwind.css");
var preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i
            }
        }
    }
};
exports["default"] = preview;
