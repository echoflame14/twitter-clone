$("document").ready(function(){
		console.log("document is ready");

// tweet-controls & textarea handelinng
	$("#tweet-content> .tweet-compose").on("focus",function(){// making the textarea larger and showing the controls
		$("#tweet-content> #tweet-controls").removeClass("hidden");
		$("#tweet-content> textarea").addClass("scale2x");
	});
	$("#tweet-content> .tweet-compose").on("blur",function(){// making it smaller again
		$("#tweet-content> #tweet-controls").addClass("hidden");
		$("#tweet-content> textarea").removeClass("scale2x");
	});
	// making the counter work
	var keypress = 0;
	var charCount = function(keypress){
		$("#tweet-controls > #char-count").append("<h1>" + keypress + "</h1>");
		console.log("keypress");
	};
	//$("#tweet-content> textarea.tweet-compose").on("keydown",charCount(keypress));
	$("#tweet-content> textarea.tweet-compose").on("keypress",function(){
		console.log(keypress);
		keypress++;
		if(140 - keypress <= 9){
			$("#tweet-controls > #char-count").addClass("red");
			$("#tweet-controls > #char-count").html("<h1>" + (140 - keypress) + "</h1>");
		}
		else{
			$("#tweet-controls > #char-count").html("<h1>" + (140 - keypress) + "</h1>");
		}

	});
});
