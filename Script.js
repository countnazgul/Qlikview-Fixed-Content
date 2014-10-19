//Qva.LoadScript('https://getfirebug.com/firebug-lite-beta.js#startOpened=true', function () {
	Qva.AddDocumentExtension('FixedContent', function () {
		this.Document.SetOnUpdateComplete(SetFixed);
	});
//});

function SetFixed() {
	tabrowDisplay = $('#Tabrow').css('display');
	
	$('#QvAjaxToolbar').css("position", "fixed");
	$("#QvAjaxToolbar").css("top", "0");
	$("#QvAjaxToolbar").css('z-index', 30000);
	
	$( "*[class*=_fixed]" ).each(function() {
		$(this).css("position", "fixed");
		zIndex = $(this).css('z-index');
		zIndex = parseInt(zIndex);
		$(this).css('z-index', zIndex + 10000);
	  
		if( tabrowDisplay !== 'none') {
			$(this).css("margin-top", "59px");
		} else {
		  $(this).css("margin-top", "25px");
		}
	
	  
	});

	if( tabrowDisplay !== 'none') {
		$("#Tabrow").css("position", "fixed");
	 	$("#Tabrow").css("top", "25px");
		$("#Tabrow").css('z-index', 20000);
		$("#MainContainer").css("top", "58px");
	  $("#MainContainer").css("margin-top", "59px");
	}
}
