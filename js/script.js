
$(document).ready(function(){

	$('div#conteudo').load('./home.html');

	$('div#home').click(function(){
		$('div#conteudo').load('./home.html');
	})
	$('div#oraculos').click(function(){
		$('div#conteudo').load('./oraculos.html');
	})
	$('div#geradores').click(function(){
		$('div#conteudo').load('./geradores.html');
	})

	$('.menu-link').click(function(){
		$('.menu-ativo')
			.removeClass('menu-ativo')
			.addClass('menu-passivo');

		$(this)
			.removeClass('menu-passivo')
			.addClass('menu-ativo');
	});		

	/*$('li#blog').click(function(){
		$('#inicial')
			.fadeOut('fast')
		$('button.fechar-artigo')
			.fadeOut('fast')
		$('div#lista-categorias')
			.fadeIn()
			.css("display","block");
		$('div#lista-artigos')
			.fadeIn()
			.css("display","block")
		$('#conteudo')
			.removeClass('oculto')
			.fadeIn()
			.load('./blog.html');	
	}); 
	
	$('div#lista-categorias button').click(function(){
		$('div#lista-artigos')
			.load($(this).attr("value"))
		$('button.fechar-artigo')
			.fadeOut('fast');
	});

	*/

		
});
