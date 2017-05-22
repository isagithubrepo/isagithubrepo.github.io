
	function startUp() {
		$("h1").fadeIn("slow");
		$("div.contact_me").fadeIn("fast");
		$("div.my_projects").fadeIn("slow");
		$("div.about_me").fadeIn("very slow");
		
	}

	function close() {
		$("div.1").hide();
		$("div.2").hide();
		$("div.3").hide();
		$("div.content").hide();
	}
	
	$("div.about_me").on('click',function(e) {
		e.preventDefault();
		close();
		$("div.content").fadeIn();
		$("div.1").fadeIn();
		$("h1").hide();
		$("h1").html("ABOUT ME");
		$("h1").slideDown("slow");
	});
	
	$("div.my_projects").on('click',function(e) {
		e.preventDefault();
		close();
		$("div.content").fadeIn();
		$("div.2").fadeIn();
		$("h1").hide();
		$("h1").html("MY PROJECTS");
		$("h1").slideDown("slow");
	});
	
	$("div.contact_me").on('click',function(e) {
		e.preventDefault();
		close();
		$("div.content").fadeIn();
		$("div.3").fadeIn();
		$("h1").hide();
		$("h1").html("CONTACT ME");
		$("h1").slideDown("slow");
	});
	
	$("a.closebtn").on('click',function(e) {
		e.preventDefault();
		$("div.content").hide();
		$("h1").hide();
		$("h1").html("WELCOME");
		$("h1").fadeIn("slow");
	});
	
	startUp();
	close();