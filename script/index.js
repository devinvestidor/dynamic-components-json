

function testeJson(){
	adicionaMascaraNosCampos();
}




function geraLayoutSistema(){
	//Opção 1
	var exibeOpcoes1 = [
	                    "dadosPessoais",
						"nome",
						"cpf",
						"mae",
						"pai",
						"dtNascimento",
						"telefone",
						"endereco",
						"rua",
						"bairro",
						"estado",
						"complemento",
						"cep"
	                   ];	
					   
	var opcoesObrigatorias1 = [
								"dadosPessoais",
								"nome",
								"cpf",
								"mae",								
								"dtNascimento",
								"telefone",
								"endereco",
								"rua",
								"bairro",
								"estado",								
								"cep"
							  ];
							  
	//Opção 2							  
	var exibeOpcoes2 = [
	                    "dadosPessoais",
						"nome",
						"razaoSocial",
						"cnpj",
						"dtFunc",
						"dtNascimento",
						"telefone",
						"endereco",
						"cep"
	                   ];	
					   
	var opcoesObrigatorias2 = [
								"dadosPessoais",
								"nome",
								"razaoSocial",
								"cnpj",
								"dtFunc",
								"dtNascimento",
								"telefone",
								"endereco"						
							  ];

	//Opção 3
	var exibeOpcoes3 = [
	                    "dadosPessoais",
						"nome",
						"razaoSocial",
						"cnpj",
						"dtFunc",
						"dtNascimento",
						"telefone",
						"endereco",
						"cep"
	                   ];								  
					   
	var opcoesObrigatorias3 = [
								"dadosPessoais",
								"nome",
								"razaoSocial",
								"cnpj",
								"dtFunc",
								"dtNascimento",
								"telefone",
								"endereco",
								"cep"								
							  ];
	//Opção 4
	var exibeOpcoes4 = [
	                    "dadosPessoais",
						"nome",
						"cpf",
						"mae",
						"pai",
						"dtNascimento",
						"telefone",
						"endereco",
						"rua",
						"bairro",
						"estado",
						"complemento",
						"cep"
	                   ];

	var opcoesObrigatorias4 = [
								"dadosPessoais",
								"nome",
								"cpf",
								"pai",								
								"dtNascimento",
								"telefone",
								"endereco",
								"rua",
								"bairro",
								"estado",								
								"cep"
							  ];					   
					   
					   
					   

					   
					   
								  
	

	$('select').bind('change', function (e) {
		var optionSelected = $("option:selected", this);
		var valueSelected = this.value; 			
		$('div').empty();
				 
		if(valueSelected=="1"){
			$.getJSON("opcao.js", function(result){
				$.each(result, function(i, field){
					//Exibi as opções correspondentes
					if($.inArray(i, exibeOpcoes1) != -1){
						//Verifica obrigatoriaridade dos campos
						if($.inArray(i, opcoesObrigatorias1) != -1){							
							$("#divPrincipal").append(adicionaObrigacaoNosCampos(field));
						}else{
							$("#divPrincipal").append(field);					
						}						
					}		
					
				});
				adicionaMascaraNosCampos();
			});				
		}else if(valueSelected=="2"){
			$.getJSON("opcao.js", function(result){
				$.each(result, function(i, field){
					//Exibi as opções correspondentes
					if($.inArray(i, exibeOpcoes2) != -1){
						//Verifica obrigatoriaridade dos campos
						if($.inArray(i, opcoesObrigatorias2) != -1){							
							$("#divPrincipal").append(adicionaObrigacaoNosCampos(field));
						}else{
							$("#divPrincipal").append(field);					
						}						
					}		
					
				});
				adicionaMascaraNosCampos();
			});				
		}else if(valueSelected=="3"){
			$.getJSON("opcao.js", function(result){
				$.each(result, function(i, field){
					//Exibi as opções correspondentes
					if($.inArray(i, exibeOpcoes3) != -1){
						//Verifica obrigatoriaridade dos campos
						if($.inArray(i, opcoesObrigatorias3) != -1){							
							$("#divPrincipal").append(adicionaObrigacaoNosCampos(field));
						}else{
							$("#divPrincipal").append(field);					
						}						
					}		
					
				});
				adicionaMascaraNosCampos();
			});				
		}else if(valueSelected=="4"){
			$.getJSON("opcao.js", function(result){
				$.each(result, function(i, field){
					//Exibi as opções correspondentes
					if($.inArray(i, exibeOpcoes4) != -1){
						//Verifica obrigatoriaridade dos campos
						if($.inArray(i, opcoesObrigatorias4) != -1){							
							$("#divPrincipal").append(adicionaObrigacaoNosCampos(field));
						}else{
							$("#divPrincipal").append(field);					
						}						
					}		
					
				});
				adicionaMascaraNosCampos();
			});				
		}	
	});	
}


function adicionaObrigacaoNosCampos(texto){			
	var br = texto.substring(0, 4) == "<br>"? texto.substring(0, 4): "nao";
	var resto = br == "nao"? texto: texto.substring(5);
	var textoCompleto = ""	;
	
	if(br == "<br>"){
		textoCompleto = br + resto.replace("/>", " required />");
	}else{
		textoCompleto = texto;
	}	
	
	return textoCompleto;
}


function adicionaMascaraNosCampos(){
	jQuery(function($){
	       $("#dtFunc").mask("99/99/9999");
		   $("#dtNascimento").mask("99/99/9999");
	       $("#telefone").mask("(999) 999-9999");
	       $("#cep").mask("99.999-999");
		   $("#cpf").mask("999.999.999-99");
		   $("#cnpj").mask("99.999.999/99999-99");							
	});		
}


//Inicializa o sistema com jquery
$(function() {
	geraLayoutSistema();	 	
});