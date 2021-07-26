

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
		
});

function adicionarCampo(){
	var texto=document.getElementById('campo').value;
	escreverLog("<span style='font-weight: bolder;' >Inserido manualmente</span>: "+texto);
	scrollParaLog();
	texto=document.getElementById('campo').value='';
}


function scrollParaLog(){
	let divTopo = document.querySelector('#log').offsetTop; /* topo do elemento */

  	window.scroll({
  		top: divTopo,
    	behavior: "smooth"
  	});
}

function escreverLog(texto){
	var data = new Date();

	var hora= data.getHours();// 0-23
		if (hora<10) {
			hora = '0'+hora;
		}
	var min     = data.getMinutes();// 0-59
		if (min<10) {
			min = '0'+min;
		}

	$('div#log').prepend("<span style='color:blue'>"+hora + ':' + min+'</span>: '+texto+'<br/>');
}


function sessaoInicio(){
	if (confirm("Tem certeza de que quer apagar o histórico e iniciar uma nova sessão?")) {
		$('div#log').html('');


			// Obtém a data/hora atual
		var data = new Date();

		// Guarda cada pedaço em uma variável
		var dia     = data.getDate();           // 1-31
		var dia_sem = data.getDay();            // 0-6 (zero=domingo)
		var mes     = data.getMonth()+1;          // 0-11 (zero=janeiro)
			if (mes<10) {
				mes = '0'+mes;
			}
		var ano2    = data.getYear();           // 2 dígitos
		var ano4    = data.getFullYear();       // 4 dígitos
		var hora    = data.getHours();          // 0-23
			if (hora<10) {
				hora = '0'+hora;
			}
		var min     = data.getMinutes();        // 0-59
			if (min<10) {
				min = '0'+min;
			}
		var seg     = data.getSeconds();        // 0-59
		var mseg    = data.getMilliseconds();   // 0-999
		var tz      = data.getTimezoneOffset(); // em minutos

		// Formata a data e a hora
		var str_data = dia + '/' + (mes) + '/' + ano4;
		var str_hora = hora + ':' + min/*+ ':' + seg*/;

		switch(dia_sem){
			case 0 : dia_sem='Domingo'; break;
			case 1 : dia_sem='Segunda-feira'; break;
			case 2 : dia_sem='Terça-feira'; break;
			case 3 : dia_sem='Quarta-feira'; break;
			case 4 : dia_sem='Quinta-feira'; break;
			case 5 : dia_sem='Sexta-feira'; break;
			case 6 : dia_sem='Sábado'; break;
			default: dia_sem="Dia da semana inválido.";
		}
		

		$('div#log').prepend("<h3 style='color:red;'>Iniciando sessão: "+dia_sem+', ' + str_data + ' às ' + str_hora+'</h3>');
		scrollParaLog();
	}
}

/* testes *******************************************/
function lorem(texto){
	for (var i = 0; i<40;i++) {
		escreverLog(texto+' pela '+i+' vez.');
	}
}

/* impressão **************************************/
function finalizaImprime1(){

	var conteudoDiv = $('#log').html();

	$('#divImprimir').html(conteudoDiv);
    window.print();

    $('#divImprimir').html('');
}

function finalizaImprime2(){
	var conteudo = document.getElementById('log').innerHTML;
	var telaImpressao = window.open('about:blank');

	telaImpressao.document.write(conteudo);
	telaImpressao.window.print();
	telaImpressao.window.close();
}


/* Oraculos *********************/

function tipoOraculo(tipo){

	switch(tipo){

		case 'geral':
			escreverLog(tipo);
		break;

		case  'fantasia':
			escreverLog(tipo);
		break;	

		case  'moderno':
			escreverLog(tipo);
		break;

		case  'supers':
			escreverLog(tipo);
		break;

		case  'cyberpunk':
			escreverLog(tipo);
		break;

		case  'pokemon':
			escreverLog(tipo);
		break;

		default: console.log('Tipo de oráculo inválido.');

	}

	
}