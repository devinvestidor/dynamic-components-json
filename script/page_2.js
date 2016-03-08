//Inicializa o sistema com jquery
$(function() {
	obtemDadosUrl();
	
	
});


function obtemDadosUrl(){
	var url = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
	
	for(i = 0; i < url.length; i++){		
		$("#divPrincipal").append(replaceAll(url[i], "+", " ") + " <br>");					
	}
	
	
}



function replaceAll(string, token, newtoken) {
	while (string.indexOf(token) != -1) {
 		string = string.replace(token, newtoken);
	}
	return string;
}