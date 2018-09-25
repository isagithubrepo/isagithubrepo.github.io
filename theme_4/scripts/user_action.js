$('a[href^="#home"]').on('click', function(e) {
		myData="home";
		ResetCurrent();
		$(this).attr("class", "current");
		HideSectionData();
		ShowSectionData(myData);
	});
	
	$('a[href^="#about_me"]').on('click', function(e) {
		myData="about_me";
		ResetCurrent();
		$(this).attr("class", "current");
		HideSectionData();
		ShowSectionData(myData);
	});
	
	$('a[href^="#projects"]').on('click', function(e) {
		myData="projects";
		ResetCurrent();
		$(this).attr("class", "current");
		HideSectionData();
		ShowSectionData(myData);
	});
	
	$('a[href^="#contact_me"]').on('click', function(e) {
		myData="contact_me";
		ResetCurrent();
		$(this).attr("class", "current");
		HideSectionData();
		ShowSectionData(myData);
	});

	$('a#d1').on('click', function(e) {
		e.preventDefault();
		$("div.dummy_popup").show();
		$("body header.main").attr("class", "background");
		$("div.dummy_popup header").attr("class", "main");
	});	
	
	$('a#c1').on('click', function(e) {
		e.preventDefault();
		$("body header").hide();
		$("body nav").hide();
		$("body section").hide();
		$("body div.section").hide();
		$("body footer").hide();
		$("div#dummy_icon").show();
	});	
	
	$('a[href="#open_browse"]').on('click', function(e) {
		e.preventDefault();
		$("body header").show();
		$("body nav").show();
		$("body section").show();
		$("body footer").show();
		$("div#dummy_icon").hide();
	});	

	$('a#c2').on('click', function(e) {
		e.preventDefault();
		$("div.dummy_popup").hide();
		$("body header.main").attr("class", "");
		$("body header.background").removeClass().addClass("main");
	});	