$(document).ready(function() {
	TWRP.App.instance = new TWRP.App();
});

TWRP.ns('TWRP');
TWRP.App = Class.extend(TWRP.util.Observable, {

	initialize: function() {
		this.initNaviButtons();
		this.initVisualisationsPane();

	},

	initNaviButtons: function() {
		$('.navi-btn').click(function() {
			$("html, body").animate({scrollTop: $('.' + $(this).text().toLocaleLowerCase()).position().top - $('.header').height() + "px" });
		});
	},

	initVisualisationsPane: function() {
		var visContainer = $('.visualisations');
		var heightNormal = visContainer.height();
		var heightExpanded = 500;
		$('.visualisations-btn').click(function() {
			if (visContainer.height() == heightExpanded) {
				visContainer.animate({height: heightNormal});
			} else {
				visContainer.animate({height: heightExpanded});
			}
		});
	}
});