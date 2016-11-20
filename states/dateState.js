'use strict';

const State = require('./state');
const states = require('../config/constants');

const dateState = new State(states.DATE);
dateState.stateSwitch = function(params)
{
    if (params && params[0] === '1')
        return states.TIMER;
    else
        return states.ALARM;
}
;

module.exports = dateState;
