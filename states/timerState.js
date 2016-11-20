'use strict';

const State = require('./state');
const states = require('../config/constants');

const timerState = new State(states.TIMER);
timerState.stateSwitch = function (params) {
    if (params && params.length === 2)
        return states.HEART;
    else
        return states.ALARM;
}
;

module.exports = timerState;
