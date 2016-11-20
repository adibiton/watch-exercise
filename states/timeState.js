'use strict';

const State = require('./state');
const states = require('../config/constants');

const alarmState = new State(states.TIME);
alarmState.stateSwitch = function(params)
{
    if (params && params[0] === '1')
        return states.TIMER;
    else
        return states.DATE;
}
;

module.exports = alarmState;
