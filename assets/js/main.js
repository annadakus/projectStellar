window.onload = function(){
	var wrapper = document.querySelector(".menu-wrapper")
	var nav = document.querySelector(".container-menu");
	var last = document.querySelector(".last");

	
	var statistic = document.querySelector(".statistic");


	var num = document.querySelectorAll(".num");

	

	var was_shown = false;
	window.onscroll = function(){
		console.log(last.getBoundingClientRect().bottom, nav.clientHeight)
		if (last.getBoundingClientRect().bottom <= (0 + nav.clientHeight)) {
			nav.classList.remove("fixed")
		} else if (wrapper.getBoundingClientRect().top <= 0) {
			nav.classList.add("fixed")
		} else {
			nav.classList.remove("fixed")
		}
	

	 	if(statistic.getBoundingClientRect().top <= 0 + 82 && !was_shown){
	 		was_shown = true;
	 		for (var i = 0; i < num.length; i++) {
	 			animateNumbers(num[i], +num[i].id)
	 		}
	 	}

	}

	
		
	function animateNumbers(num, maxValue){
		var number = 0;

		var timer = setInterval(function(){
			number += 20
			if(number >= maxValue){
				clearInterval(timer)

			}
			num.textContent = number
		
		}, 1000 / (maxValue / 20))
	}
	
}




