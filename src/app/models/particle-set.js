"use strict";
var particle_1 = require("./particle");
var ParticleSet = (function () {
    function ParticleSet(n) {
        this.particles = [];
        for (var i = 0; i < n; i++) {
            this.particles.push(new particle_1.Particle(i, Math.random(), Math.random(), 0, 0));
        }
    }
    ParticleSet.prototype.size = function () {
        return this.particles.length;
    };
    ParticleSet.prototype.get = function (i) {
        return this.particles[i];
    };
    /**
     * return a new particle set with update positions random
     * factor is a floating point value. The leap among the two directions is on average factor * width or height.
     * a particle cannot get out of the box
     */
    ParticleSet.prototype.walk = function (factor) {
        var bs = new ParticleSet(0);
        this.particles.forEach(function (b) {
            var dx = (Math.random() - 0.5) * 4 * factor;
            var dy = (Math.random() - 0.5) * 4 * factor;
            var x1 = ((b.x + dx) <= 1 && b.x + dx >= 0) ? (b.x + dx) : (b.x - dx);
            var y1 = ((b.y + dy) <= 1 && b.y + dy >= 0) ? (b.y + dy) : (b.y - dy);
            bs.particles.push(new particle_1.Particle(b.id, x1, y1, b.x, b.y));
        });
        return bs;
    };
    return ParticleSet;
}());
exports.ParticleSet = ParticleSet;
