	
	$('a[href^="#"]').on('click', function(e) {
		var target = $(this.getAttribute('href'));
		if( target.length ) {
		e.preventDefault();
			$('html, body').stop().animate({
			scrollTop: target.offset().top
			}, 400);
		}
	});
	

	
	$("a.l1").hover(
	function () {
		$(this).animate({
			color: "#00ffff"
		}, 300);
	}, 
	function () {
		$(this).animate({
			color: "#ffffff"
		}, 100);
	});
	
	//$("#home").load("section/home/");
	$("#about_me").load("section/about_me/");
	$("#projects").load("section/personal_projects/");
	$("#contact_me").load("section/contact_me/");
	