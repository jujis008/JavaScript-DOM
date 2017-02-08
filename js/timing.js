'use strict';
var timingData = function() {
	var t = window.performance || {};
};

timingData.prototype.markUserTime = function() {
	alert("aaa");
	var userTime = [];
	if(this.t) {
		userTime = t.getEntriesByType('resource');
	}
}