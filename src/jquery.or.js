(function (global) {

    var moduleNames = ["or","notfound", "inf"],
        version = "0.1",
        moduleNamePrefix = "jquery.",   
        msgNoJquery = moduleNamePrefix + moduleNames[0] + " : This module requires jQuery but it is not present",
        $;

	declareModule();

	function declareModule() {
		var nameIdx = 0,
    	    nameIdxMax = moduleNames.length;

		if (typeof global["define"] === "function" && define["amd"]) {

			for (; nameIdx < nameIdxMax; nameIdx += 1) {
			    define(moduleNamePrefix + moduleNames[nameIdx], ["jquery"], init);
			}

		} else if (typeof global["jQuery"] === "function") {

			init(global.jQuery);

		} else {

			console.log(msgNoJquery);
		}
	}

	function init(jq) {

	    var nameIdx = 0, nameIdxMax = moduleNames.length;
	    
		$ = jq;

		for (; nameIdx < nameIdxMax; nameIdx += 1) {

		    $.fn[moduleNames[nameIdx]] = notfound;
		}
	}

	function notfound() {
		if (this.length) return this;

		return $.apply(this, arguments);
	}

}(this));