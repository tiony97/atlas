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

//Home banner Slider
$(document).ready(function () {
	const swiper = new Swiper(".banner-swiper", {
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

$(document).ready(function () {
	const swiper = new Swiper(".cs-swiper", {
		loop: true,
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
		slidesPerView: 3,
		spaceBetween: 20,
		breakpoints: {
			768: {
				slidesPerView: 3,
			},
			480: {
				slidesPerView: 1,
			},
		},
	});
});

$(document).ready(function () {
	const swiper = new Swiper(".industry-swiper", {
		loop: true,
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
		slidesPerView: 5,
		spaceBetween: 20,
		breakpoints: {
			768: {
				slidesPerView: 5,
			},
			480: {
				slidesPerView: 1,
			},
		},
	});
});
