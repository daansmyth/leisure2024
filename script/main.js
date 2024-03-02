const swiperDestaques = new Swiper('.swiperDestaques', {
	spaceBetween: 20,
 	slidesPerView: 2,
	loop: true,
	pagination: {
	  el: '.swiper-pagination',
	},
  
	navigation: {
	  nextEl: '.swiper-button-next',
	  prevEl: '.swiper-button-prev',
	},
  
	scrollbar: {
	  el: '.swiper-scrollbar',
	},
  });

const swiper = new Swiper('.swiper', {
	spaceBetween: 20,
 	slidesPerView: 3,
	loop: false,
	pagination: {
	  el: '.swiper-pagination',
	},
  
	navigation: {
	  nextEl: '.swiper-button-next',
	  prevEl: '.swiper-button-prev',
	},
  
	scrollbar: {
	  el: '.swiper-scrollbar',
	},
  });
  
//   const swiper = new Swiper('.swiper', {
// 	spaceBetween: 20,
// 	slidesPerView: 3,
// 	pagination: {
// 		el: '.swiper-pagination',
// 	   type: 'bullets',
// 	},
// 	navigation:{
// 		nextEl: ".swiper-button-next",
// 		prevEl: ".swiper-button-prev",
// 	},
// });
