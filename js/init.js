//Hook up the tweet display

$(document).ready(function() {
						   
	$(".countdown").countdown({
				date: "7 mar 2020 18:30:00",
				format: "on"
			},
			
			function() {
				// callback function
			});

});	