'use strict';
const states = require('./config/constants');
const stateSwitcher = require('./state-switcher');

(function(){
	function Watch(stateSwitcher){
		this.state = states.TIME;
		this.stateSwitcher = stateSwitcher;
	}
	
	Watch.prototype.modeClicked = function(params){
		this.state = this.stateSwitcher.switch(this.state, params);
		console.log(`Watch has been changed to mode: ${this.state}`);
	};

	Watch.prototype.aClicked = function(){
		console.log(`a button has been clicked`);
	};

	Watch.prototype.bClicked = function(){
		console.log(`b button has been clicked`);
	};
	module.exports = Watch;
}());
