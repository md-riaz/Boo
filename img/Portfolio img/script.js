// init Isotope
var $grid = $(".portfolio_area").isotope({
	// options
	itemSelector: ".grid_item",
	percentPosition: true,
	masonry: {
		columnWidth: ".grid_item",
		gutter: 30
	}
});

//For Divs
// init Isotope
var $grid = $(".block_grid").isotope({
	// options
	itemSelector: ".div_item",
	percentPosition: true,
	masonry: {
		columnWidth: ".div_item",
		gutter: 30
	}
});