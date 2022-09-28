window.addEventListener('load', function(){
	new Glider(document.querySelector('.carousel__lista'), {
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: '.carousel__indicadores',
		rewind: true,
		scrollLock: true,
		scrollLockDelay: 1000,
		arrows: {
			prev: '.carousel__anterior',
			next: '.carousel__siguiente'
		},
		responsive: [
			{
			  // screens greater than >= 775px
			breakpoint: 450,
			settings: {
				// Set to `auto` and provide item width to adjust to viewport
				slidesToShow: 2,
				slidesToScroll: 1,
				itemWidth: 150,
				duration: 0.25,
				}
			},{
			  // screens greater than >= 1024px
			breakpoint: 800,
			settings: {
				slidesToShow: 4,
				slidesToScroll: 1,
				scrollLockDelay: 1000,
				itemWidth: 150,
				duration: 0.25,
				}
			}
		]
	});
});

window.addEventListener('load', function(){
	new Glider(document.querySelector('.carousel__lista2'), {
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: '.carousel__indicadores2',
		rewind: true,
		scrollLock: true,
		scrollLockDelay: 1000,
		arrows: {
			prev: '.carousel__anterior2',
			next: '.carousel__siguiente2'
		},
		responsive: [
			{
			  // screens greater than >= 775px
			breakpoint: 450,
			settings: {
				// Set to `auto` and provide item width to adjust to viewport
				slidesToShow: 2,
				slidesToScroll: 1,
				itemWidth: 150,
				duration: 0.25,
				}
			},{
			  // screens greater than >= 1024px
			breakpoint: 800,
			settings: {
				slidesToShow: 4,
				slidesToScroll: 1,
				scrollLockDelay: 1000,
				itemWidth: 150,
				duration: 0.25,
				}
			}
		]
	});
});