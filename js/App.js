$(document).ready(function() {
	TWRP.App.instance = new TWRP.App();
});

TWRP.ns('TWRP');
TWRP.App = Class.extend(TWRP.util.Observable, {

	initialize: function() {
		this.centerContent();
		this.initNaviButtons();
	},

	centerContent: function() {
		var centerPadding = $(window).width() / 5;
		$('.center').css('padding', '25px ' + centerPadding + 'px');
	},

	initNaviButtons: function() {
		$('.navi-btn').click(function() {
			$("html, body").animate({scrollTop: $('.' + $(this).text().toLocaleLowerCase()).position().top + "px" });
		});
	}
});