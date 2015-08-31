
$(document).ready(function(){
	
	
	function gotoHome(){		
		$('#content').stop().scrollTo($('#home'), 800);
		$('#navHome').addClass('active');
		$('#navResume').removeClass('active');
		$('#navProjects').removeClass('active');
		$('#navContact').removeClass('active');
		return false;
	}
	
	function gotoResume(){
		$('#content').stop().scrollTo($('#resume'), 800);
		$('#navHome').removeClass('active');
		$('#navResume').addClass('active');
		$('#navProjects').removeClass('active');
		$('#navContact').removeClass('active');
		return false;
	}
	
	function gotoProjects(){
		$('#content').stop().scrollTo($('#projects'), 800);
		$('#navHome').removeClass('active');
		$('#navResume').removeClass('active');
		$('#navProjects').addClass('active');
		$('#navContact').removeClass('active');
		return false;
	}
	
	function gotoContact(){
		$('#content').stop().scrollTo($('#contact'), 800);
		$('#navHome').removeClass('active');
		$('#navResume').removeClass('active');
		$('#navProjects').removeClass('active');
		$('#navContact').addClass('active');
		return false;
	}	
	
	$('#navHome').live("click", gotoHome);
	$('#navResume').live("click", gotoResume);
	$('#navProjects').live("click", gotoProjects);
	$('#navContact').live("click", gotoContact);	
	
	//Seguimiento descarga pdf
	$('a.pdf').click(function(){		
		var nombreDocumento = $(this).attr("href");
		_gaq.push(['_trackEvent','Descargas','PDF',nombreDocumento]);
	});
	
});
