"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = require("./util");
var SayHelo = (function () {
    function SayHelo(name) {
        this.util = new util_1.Util(name);
    }
    SayHelo.prototype.beDumb = function () {
        return "---";
    };
    SayHelo.prototype.speak = function () {
        return "Hello " + this.util.getName();
    };
    return SayHelo;
}());
exports.SayHelo = SayHelo;
