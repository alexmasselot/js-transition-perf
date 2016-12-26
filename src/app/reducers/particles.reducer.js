"use strict";
var particle_set_1 = require("../models/particle-set");
var experimental_environment_1 = require("../models/experimental-environment");
exports.WALK_POSITIONS = 'WALK_POSITIONS';
exports.SET_POSITION_COUNT = 'SET_POSITION_COUNT';
exports.particlesReducer = function (state, action) {
    if (state === void 0) { state = new particle_set_1.ParticleSet(1000); }
    switch (action.type) {
        case exports.WALK_POSITIONS:
            return state.walk(experimental_environment_1.experimentalEnvironment.leapLength);
        case exports.SET_POSITION_COUNT:
            return new particle_set_1.ParticleSet(action.payload);
        default:
            return state;
    }
};
