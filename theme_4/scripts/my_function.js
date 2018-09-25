function LoadSection() {
		$("section#home").load("section/home/");
		$("section#about_me").load("section/about_me/");
		$("section#projects").load("section/personal_projects/");
		$("section#contact_me").load("section/contact_me/");
	};
	
	function ShowSectionData(myData) {
		$("section#"+myData).fadeIn("section/"+myData+"/");
	};
	
	function ResetCurrent() {
		$('nav a').not(".bar").attr("class","");
	}
	
	function HideSectionData() {
		$("section#home").hide(0, "section/home/");
		$("section#about_me").hide(0, "section/about_me/");
		$("section#contact_me").hide(0, "section/contact_me/");
		$("section#projects").hide(0, "section/personal_projects/");
	};