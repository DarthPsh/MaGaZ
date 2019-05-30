"use strict"

// ;window.onload = function () {
// 	let preloader = document.getElementById("preloader");
// 	preloader.style.display = "none";
// };

new WOW().init();

function mySlider() {

 	// СЛАЙДЕР

 	let slideIndex = 1,
 		slides = document.querySelectorAll(".foto-slider"),
 		prev = document.querySelector(".left"),
 		next = document.querySelector(".right"),
 		dotsWrap = document.querySelector(".foto__dots"),
 		dots = document.querySelectorAll(".dot");

 	showSlides(slideIndex);

 	function showSlides(n) {

 		if (n > slides.length) {
 			slideIndex = 1;
 		};

 		if (n < 1) {
 			slideIndex = slides.length;
 		};

 		slides.forEach((item) => item.style.display = "none");
 		dots.forEach((item) => item.classList.remove("dot-active"));
 		slides[slideIndex - 1].style.display = "block";
 		dots[slideIndex - 1].classList.add("dot-active");
 	}; 

 	function plusSlides(n) {
 		showSlides(slideIndex += n);
 	};

 	function currentSlide(n) {
 		showSlides(slideIndex = n);
 	};

 	setInterval(function() {
 		plusSlides(1);
 	}, 15000);

 	//СЛАЙДЕР ПРИ НАЖАТИИ НА КНОПКИ 
 	prev.addEventListener("click", function() {
 		plusSlides(-1);
 	});
 	next.addEventListener("click", function() {
 		plusSlides(1);
 	});
	//СЛАЙДЕР ПРИ НАЖАТИИ НА КНОПКИ 



 	//СЛАЙДЕР ПАЛЬЦЕМ ПО ЭКРАНУ
 	let initialPoint;
 	let finalPoint;

 	document.addEventListener("touchstart", function(event) {
 		event.stopPropagation();
 		initialPoint=event.changedTouches[0];
 	}, false);

 	document.addEventListener("touchend", function(event) {
 		event.stopPropagation();
 		finalPoint=event.changedTouches[0];
 		let xAbs = Math.abs(initialPoint.pageX - finalPoint.pageX);
 		let yAbs = Math.abs(initialPoint.pageY - finalPoint.pageY);
 		if (xAbs > 20 || yAbs > 20) {
 			if (xAbs > yAbs) {
 			if (finalPoint.pageX < initialPoint.pageX){
 				plusSlides(1);}
 			else{
 				plusSlides(-1);}
 			}
 		}
 	}, false);
 	//СЛАЙДЕР ПАЛЬЦЕМ ПО ЭКРАНУ


 	dotsWrap.addEventListener("click", function(event) {
 		for (let i = 0; i < dots.length + 1; i++) {
 			if (event.target.classList.contains("dot") && event.target == dots[i - 1]) {
 				currentSlide(i);
 			};
 		};
 	});

};

mySlider();


let openPopup = document.querySelectorAll(".cta"),
	closePopup = document.querySelector(".popup__close"),
	popup = document.querySelector(".overlay");

for (let i = 0; i < openPopup.length; i++) openPopup[i].addEventListener("click", function() {
    popup.style.opacity = "1";
    popup.style.zIndex = "100";
});

closePopup.addEventListener("click", function() {
    popup.style.opacity = "";
    popup.style.zIndex = "-100";
});



let h = document.querySelector(".header-top"),
	stuck = false,
	stickPoint = getDistance();

function getDistance() {
	let topDist = h.offsetTop;
	return topDist;
}

window.onscroll = function(e) {
	let distance = getDistance() - window.pageYOffset;
	let offset = window.pageYOffset;
	if ( (distance <= 0) && !stuck) {
	    h.style.position = "fixed";
	    h.style.top = "0px";
	    stuck = true;
	} else if (stuck && (offset <= stickPoint)){
	    h.style.position = "static";
	    stuck = false;
	}
};





