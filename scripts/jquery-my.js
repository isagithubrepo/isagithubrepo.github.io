
	$('a[href^="#"]').on('click', function(e) {
		var target = $(this.getAttribute('href'));
		if( target.length ) {
		e.preventDefault();
			$('html, body').stop().animate({
			scrollTop: target.offset().top
			}, 400);
		}
	});
		
	$('nav.main a.l1').hover(
	function () {
		$(this).animate({
			color: "#00ffff"
		}, 300);
	}, 
	function () {
		$(this).animate({
			color: "#ffffff"
		}, 100);
	}
	);
		
	
	
	$("h1").on('click',function(){
		$("div.popup").fadeIn(100);
	});
	
	$(".close_div").on('click', function(){
		$("div.popup").fadeOut(100);
	});

$("#a2").load("section/about_me/");
$("#a3").load("section/personal_projects/");
$("#a4").load("section/contact_me/");

