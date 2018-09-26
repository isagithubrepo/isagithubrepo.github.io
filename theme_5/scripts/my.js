function loadPage(page) {
			$("body section").hide().load("section/"+page+"/").fadeIn();
		};