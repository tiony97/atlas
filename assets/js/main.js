$(document).ready(function () {
	/* Nav dropdowns */
	// Dropdown 1
	$(".dropdown-btn-1").click(function () {
		$(".dropdown-1").toggleClass("navActive");
		$(this).toggleClass("active-btn");

		//remove .navActive class from other dropdowns and dropdown buttons
		$(".dropdown").not(".dropdown-1").removeClass("navActive");
		$(".dropdown-btn").not(this).removeClass("active-btn");

		//Hide current dropdown when hovering over other links
		$(".dropdown-btn")
			.not(this)
			.hover(function () {
				$(".dropdown-1").removeClass("navActive");
				$(".dropdown-btn-1").removeClass("active-btn");
			});
	});

	// Dropdown 2
	$(".dropdown-btn-2").click(function () {
		$(".dropdown-2").toggleClass("navActive");
		$(this).toggleClass("active-btn");

		//remove .navActive class from other dropdowns and dropdown buttons
		$(".dropdown").not(".dropdown-2").removeClass("navActive");
		$(".dropdown-btn").not(this).removeClass("active-btn");

		//Hide current dropdown when hovering over other links
		$(".dropdown-btn")
			.not(this)
			.hover(function () {
				$(".dropdown-2").removeClass("navActive");
				$(".dropdown-btn-2").removeClass("active-btn");
			});
	});

	// Dropdown 3
	$(".dropdown-btn-3").click(function () {
		$(".dropdown-3").toggleClass("navActive");
		$(this).toggleClass("active-btn");

		//remove .navActive class from other dropdowns and dropdown buttons
		$(".dropdown").not(".dropdown-3").removeClass("navActive");
		$(".dropdown-btn").not(this).removeClass("active-btn");

		//Hide current dropdown when hovering over other links
		$(".dropdown-btn")
			.not(this)
			.hover(function () {
				$(".dropdown-3").removeClass("navActive");
				$(".dropdown-btn-3").removeClass("active-btn");
			});
	});

	// Dropdown 4
	$(".dropdown-btn-4").click(function () {
		$(".dropdown-4").toggleClass("navActive");
		$(this).toggleClass("active-btn");

		//remove .navActive class from other dropdowns and dropdown buttons
		$(".dropdown").not(".dropdown-4").removeClass("navActive");
		$(".dropdown-btn").not(this).removeClass("active-btn");

		//Hide current dropdown when hovering over other links
		$(".dropdown-btn")
			.not(this)
			.hover(function () {
				$(".dropdown-4").removeClass("navActive");
				$(".dropdown-btn-4").removeClass("active-btn");
			});
	});

	// Dropdown 5
	$(".dropdown-btn-5").click(function () {
		$(".dropdown-5").toggleClass("navActive");
		$(this).toggleClass("active-btn");

		//remove .navActive class from other dropdowns and dropdown buttons
		$(".dropdown").not(".dropdown-5").removeClass("navActive");
		$(".dropdown-btn").not(this).removeClass("active-btn");

		//Hide current dropdown when hovering over other links
		$(".dropdown-btn")
			.not(this)
			.hover(function () {
				$(".dropdown-5").removeClass("navActive");
				$(".dropdown-btn-5").removeClass("active-btn");
			});
	});
});

//Menu dropown Accordion
$(document).ready(function () {
	$(".accordion .section-title").click(function (e) {
		// Get current link value
		var currentLink = $(this).attr("href");
		if ($(e.target).is(".active")) {
			close_section();
		} else {
			close_section();
			// Add active class to section title
			$(this).addClass("active");
			// Display the hidden content
			$(".accordion " + currentLink)
				.slideDown(350)
				.addClass("open");
		}
		e.preventDefault();
	});

	function close_section() {
		$(".accordion .section-title").removeClass("active");
		$(".accordion .section-content").removeClass("open").slideUp(350);
	}
});

//Change sections on accordion click
$(document).ready(function () {
	$(".accordion .section-title-1").click(function () {
		$("#acc-content-1").addClass("show");
		$(".acc-content").not("#acc-content-1").removeClass("show");
	});
	$(".accordion .section-title-2").click(function () {
		$("#acc-content-2").addClass("show");
		$(".acc-content").not("#acc-content-2").removeClass("show");
	});
	$(".accordion .section-title-3").click(function () {
		$("#acc-content-3").addClass("show");
		$(".acc-content").not("#acc-content-3").removeClass("show");
	});
	$(".accordion .section-title-4").click(function () {
		$("#acc-content-4").addClass("show");
		$(".acc-content").not("#acc-content-4").removeClass("show");
	});
	$(".accordion .section-title-5").click(function () {
		$("#acc-content-5").addClass("show");
		$(".acc-content").not("#acc-content-5").removeClass("show");
	});
	$(".accordion .section-title-6").click(function () {
		$("#acc-content-6").addClass("show");
		$(".acc-content").not("#acc-content-6").removeClass("show");
	});
});

//Menu Tabs
$(document).ready(function () {
	/*----- First Tab Item ------*/
	// Hide all tab content except the first
	$(".tab-menu-1 .tab-content").not(":first").hide();
	$(".tab-menu-1 .tab-links .tab-link").click(function (e) {
		//Hide all tab content
		$(".tab-menu-1 .tab-content").hide();

		// Remove active class from all tabs links
		$(".tab-menu-1 .tab-links .tab-link").removeClass("selected-tab");

		// Add active class to clicked tab link
		$(this).addClass("selected-tab");

		// Get data-tab attribute value
		var tab = $(this).data("tab");

		// Show corresponding tab content
		$("#" + tab).fadeIn("slow");
	});

	/*----- Second Tab Item ------*/
	$(".tab-menu-2 .tab-content").not(":first").hide();
	$(".tab-menu-2 .tab-links .tab-link").click(function (e) {
		//Hide all tab content
		$(".tab-menu-2 .tab-content").hide();

		// Remove active class from all tabs links
		$(".tab-menu-2 .tab-links .tab-link").removeClass("selected-tab");

		// Add active class to clicked tab link
		$(this).addClass("selected-tab");

		// Get data-tab attribute value
		var tab = $(this).data("tab");

		// Show corresponding tab content
		$("#" + tab).fadeIn("slow");
	});
});

//Stories (About Page) Tab
$(document).ready(function () {
	$(".stories .tab").click(function () {
		$(".stories .tab").removeClass("active");
		$(this).addClass("active");

		const index = $(this).index();
		$(".stories .tab-panel").removeClass("active");
		$(".stories .tab-panel").eq(index).addClass("active");
	});
});
