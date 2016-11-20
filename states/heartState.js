'use strict';

const State = require('./state');
const states = require('../config/constants');

const heartState = new State(states.HEART);
heartState.stateSwitch = function(params)
{
    if (params && params.a && params.b)
        return states.ALARM;
    else
        return states.DATE;
}
;

module.exports = heartState;
