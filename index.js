'use strict';
const timeState = require('./states/timeState');
const dateState = require('./states/dateState');
const alarmState = require('./states/alarmState');
const timerState = require('./states/timerState');
const heartState = require('./states/heartState');

const Watch = require('./watch');
const StateSwitcher = require('./state-switcher');
const states = require('./config/constants');

(function () {
    let stateSwitcher = new StateSwitcher();

    stateSwitcher.addSwitcher(states.TIME, timeState.stateSwitch);
    stateSwitcher.addSwitcher(states.ALARM, alarmState.stateSwitch);
    stateSwitcher.addSwitcher(states.DATE, dateState.stateSwitch);
    stateSwitcher.addSwitcher(states.HEART, heartState.stateSwitch);
    stateSwitcher.addSwitcher(states.TIMER, timerState.stateSwitch);

    let watch = new Watch(stateSwitcher);

    console.log('Started a new watch');
    watch.modeClicked({});
    watch.aClicked();
    watch.bClicked();
    watch.modeClicked({a: 50});
    watch.modeClicked({a:3, b:30});
    watch.bClicked();
    console.log('Finish');
}());
