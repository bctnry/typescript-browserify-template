"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var HelloWorld = /** @class */ (function () {
    function HelloWorld() {
    }
    HelloWorld.HelloWorld = function (name) {
        console.log("Hello, " + (name ? name : "World") + "!");
    };
    return HelloWorld;
}());
exports.HelloWorld = HelloWorld;
