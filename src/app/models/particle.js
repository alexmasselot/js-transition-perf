"use strict";
var Particle = (function () {
    function Particle(id, x, y, xFrom, yFrom) {
        this.id = id;
        this.x = x;
        this.y = y;
        this.xFrom = xFrom;
        this.yFrom = yFrom;
    }
    return Particle;
}());
exports.Particle = Particle;
