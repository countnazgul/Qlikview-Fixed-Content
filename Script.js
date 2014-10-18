//Qva.LoadScript('https://getfirebug.com/firebug-lite-beta.js#startOpened=true', function () {
	Qva.AddDocumentExtension('FixedContent', function () {
		this.Document.SetOnUpdateComplete(SetFixed);
	}); 
//});

function SetFixed() { 
	tabrowDisplay = $('#Tabrow').css('display');
	
	var applyToTabRow = 1;
	var applyToHeader = 1;
	
	$( "*[class*=_fixed]" ).each(function() {		
		$(this).css("position", "fixed");
		zIndex = $(this).css('z-index');
		zIndex = parseInt(zIndex);
		$(this).css('z-index', zIndex + 10000);
		if( tabrowDisplay !== 'none') {
			$(this).css("margin-top", "33px");
		}
	});		

	if( applyToTabRow == 1) {
		if( tabrowDisplay !== 'none') {	
			$("#Tabrow").css("position", "fixed");
			$("#Tabrow").css("top", "0");
			$("#Tabrow").css('z-index', 20000);
			$("#MainContainer").css("margin-top", "33px");
		}
	}
}
