'use strict';

(function(){
	function StateSwitcher(){
		this.switchers = {};
	};
	
	StateSwitcher.prototype.addSwitcher = function(state, fn){
		this.switchers[state] = fn;
	};

	StateSwitcher.prototype.switch = function(state, params){
		return this.switchers[state](params);
	};

	module.exports = StateSwitcher;
}());
