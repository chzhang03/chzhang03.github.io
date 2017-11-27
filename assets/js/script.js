$(document).ready(function() {

/* this is for the hover function of the city introduction */

	$(".photo-seoul").hover(function() { //jQuery function No.1//
		$(".photo-seoul").css("opacity", 0.5, "2s"); //jQuery function No.2//
		$(".text-seoul").css("opacity", 1);
	}, function () {
		$(".photo-seoul").css("opacity", 1, "2s");
		$(".text-seoul").css("opacity", 0);
	});

	$(".photo-seattle").hover(function() { 
		$(".photo-seattle").css("opacity", 0.5, "2s");
		$(".text-seattle").css("opacity", 1);
	}, function () {
		$(".photo-seattle").css("opacity", 1, "2s");
		$(".text-seattle").css("opacity", 0);
	});

	$(".photo-jeju").hover(function() { 
		$(".photo-jeju").css("opacity", 0.5, "2s");
		$(".text-jeju").css("opacity", 1);
	}, function () {
		$(".photo-jeju").css("opacity", 1, "2s");
		$(".text-jeju").css("opacity", 0);
	});


/* this is for the "back to previous page" function */
	
	$("#top_wrapper").click(function(){ //jQuery function No.3//
		function goBack() {
			window.history.back();
		}
	})
})





