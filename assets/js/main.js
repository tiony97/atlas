/* Fix header to top */
$(document).ready(function () {
	const header = $("header");
	const headerHeight = header.outerHeight();

	$(window).scroll(function () {
		if ($(window).scrollTop() > headerHeight) {
			header.addClass("fixed");
		} else {
			header.removeClass("fixed");
		}
	});
});

//Search Functionality
document.getElementById("search-icon").addEventListener("click", function (e) {
	e.preventDefault(); // Prevent default anchor behavior

	Fancybox.show([
		{
			src: "#search-popup",
			type: "inline",
		},
	]);
});

$(document).ready(function () {
	const swiper = new Swiper(".swiper-container", {
		loop: true,
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
	});
});
