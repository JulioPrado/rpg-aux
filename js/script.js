

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

var tipoCenario = 'geral'
var arrayAux=[];

function randomAte(numMaximo){
	 /* 
	 de 0 a numMaximo -1.
	 se colocar numMaximo+1 no argumento, 
	 vai de 1 até numMaximo.
	 */
	return Math.floor(Math.random()*(numMaximo));
}

function randomEntre(min,max){
	/* valor mínimo = min e valor máximo=max */
   return Math.floor(Math.random() * (max-min+1)+min);
}	

function tipoOraculo(tipo){

	switch(tipo){

		case 'geral':
			tipoCenario = tipo;
		break;

		case  'fantasia':
			tipoCenario = tipo;
		break;	

		case  'moderno':
			tipoCenario = tipo;
		break;

		case  'supers':
			tipoCenario = tipo;
		break;

		case  'cyberpunk':
			tipoCenario = tipo;
		break;

		case  'pokemon':
			tipoCenario = tipo;
		break;

		default: console.log('Tipo de oráculo inválido.');
	}	
}

function emConstrucao(){

	alert('Botão em construção...');
}

function simeNao(chance){
	var rolagem = randomEntre(1,100);
	var string= "Sim/Não - "+chance+": "+rolagem+": <span style='font-weight: bold;' >";

	switch(chance){
		case 'Muito fácil':
			rolagem>5 ? string+='Sim.' : string+='Não.';
		break;

		case 'Provável':
			rolagem>25 ? string+='Sim.' : string+='Não.';
		break;
		case '50/50':
			rolagem>50 ? string+='Sim.' : string+='Não.';
		break;
		case 'Improvável':
			rolagem>75 ? string+='Sim.' : string+='Não.';
		break;
		case 'Muito difícil':
			rolagem>95 ? string+='Sim.' : string+='Não.';
		break;

		default: console.log('Chance Sim/Não inválida!');
	}
	string+='</span>';
	escreverLog(string);
}

function reviravolta(){
	escreverLog("<span style='font-weight: bolder'>Reviravolta: </span>"+listaReviravolta[randomEntre(0,listaReviravolta.length-1)]);
}

function acaoCombate(){
	escreverLog("<span style='font-weight: bolder'>Ação de combate: </span>"+listaAcoesCombate[randomEntre(0,listaAcoesCombate.length-1)]);
}

function relacionamento(){
	escreverLog("<span style='font-weight: bolder'>Relacionamento: </span>"+listaRelacionamento[randomEntre(0,listaRelacionamento.length-1)]);
}

function posturaPDM(){
	escreverLog("<span style='font-weight: bolder'>Postura: </span>"+listaPostura[randomEntre(0,listaPostura.length-1)]);
}

function vegetacao(){
	escreverLog("<span style='font-weight: bolder'>Vegetação: </span>"+listaVegetacao[randomEntre(0,listaVegetacao.length-1)]);
}

function lugarNatureza(){
	escreverLog("<span style='font-weight: bolder'>Lugar: </span>"+listaLugarNatureza[randomEntre(0,listaLugarNatureza.length-1)]);
}

function complicacoes(){
	escreverLog("<span style='font-weight: bolder'>Complicações: </span>"+listaComplicacoes[randomEntre(0,listaComplicacoes.length-1)]);
}

/* Listas *************************************************/
var listaReviravolta=
[
'A aventura toda é uma brincadeira de uma divindade má.',
'A aventura toda é uma ilusão ou sonho.',
'A missão atual era apenas para te trazer aqui, a missão real é: (role).',
'A missão é para testar o PJ (experimento).',
'A missão na verdade era algo impossível de se conseguir.',
'A missão não passou de uma armadilha, agora você deve sobreviver e escapar.',
'Alguém que parecia ter grande poder, na verdade não tem.',
'Antagonista é um aliado ou amigo disfarçado.',
'Antagonista é um PJ de outro tempo ou realidade.',
'Antagonista está buscando um objetivo nobre.',
'Antagonista na verdade está sendo controlado por outro.',
'Distorção do tempo ou espaço no local da aventura.',
'Forçado a se aliar à um inimigo ou rival.',
'Motivações de um PDM importante eram falsas (ou mudaram)',
'O protagonista não recebe nenhuma recompensa, na verdade perde algo ou fica devendo.',
'O protagonista passa a ser visto como vilão.',
'O sucesso na missão leva a consequências inesperadas e terríveis.',
'PDM importante tem irmã/o gêmeo/a causando confusão.',
'Traição por um suposto aliado ou amigo.',
'Um aliado deixa de ser aliado e não interfere mais.',
'Um aliado se une ao inimigo.',
'Um antigo aliado surge como inimigo.',
'Um antigo inimigo ressurge.',
'Um novo inimigo surge.',
'Um PDM/grupo antes neutro se alia ao inimigo.',
'Uma informação importante era falsa.',
'Uma pessoa normal na verdade tem um grande poder.',
'Você chama atenção de outros inimigos.',
'Você descobre uma verdade prejudicial.',
'Você é enviado para um lugar desconhecido.',
'Você percebe que estava do lado errado o tempo todo.'
];

var listaAcoesCombate=
[
'Ataque à Dist buffado.',
'Ataque à Dist normal.',
'Ataque CaC buffado.',
'Ataque CaC normal.',
'Ataque furtivo.',
'Fugir/Ir embora.',
'Manobra Tática.',
'Postura Defensiva.',
'Proteger.',
'Tentar desarmar (se possível).',
'Tentar imobilizar (se possível).'
];

var listaRelacionamento=
[
'Abençoados pelo mesmo Deus/ Seguidores da mesma fé.',
'Aliados relutantes.',
'Ambos carregam uma maldição.',
' Amigo de um amigo.',
'Amigos de infância.',
'Bastardo e legítimo.',
'Cérebro e Músculo.',
'Companheiros de aventura.',
'Companheiros de viagem.',
'Cônjuges.',
'Desertores.',
'Dívida de sangue pendente.',
'Escolhidos de uma divindade.',
'Ex-colegas de trabalho.',
'Irmãos.',
'Já guerrearam lado a lado.',
'Ligados por um ritual profano.',
'Ligados por um voto.',
'Membros de grupo.',
'Membros de um grupo secreto.',
'Mercenário e contratante.',
'Mentor e pupilo.',
'Odeiam a mesma pessoa.',
'Os únicos que conhecem um segredo.',
'Os únicos sobreviventes de algo.',
'Ovelha negra e favorito da família.',
'Pai e filho.',
'Primos distantes.',
'Procurados.',
'Rivais Amistosos.',
'Serviram em lados opostos de uma guerra e depois ficaram amigos.',
'Testemunhas de um crime.',
'Trabalham para o mesmo contratante.',
'Treinados juntos.',
'Um sabe o segredo do outro.'
];

var listaPostura=[
'Agressivo',
'Amistoso',
'Antipático',
'Atencioso',
'Desconfiado',
'Neutro/Quieto'
];

var listaVegetacao=[
'Deserto',
'Estepe',
'Floresta Boreal (Taiga)',
'Floresta de Coníferas',
'Floresta temperada',
'Floresta tropical',
'Savana',
'Tundra',
'Vegetação de altitude',
'Vegetação Mediterrânea'
];

var listaLugarNatureza=[
'Abismo',
'Arquipélago',
'Cachoeira',
'Canal',
'Cânion',
'Caverna',
'Chapada',
'Colina',
'Cordilheira',
'Deserto',
'Duna',
'Enseada',
'Estreito',
'Geleira',
'Golfo',
'Iceberg',
'Ilha',
'Lago',
'Lagoa',
'Mar',
'Montanha',
'Oásis',
'Oceano',
'Pantanal',
'Pântano',
'Península',
'Planalto',
'Planície',
'Pradaria',
'Praia',
'Rio',
'Selva',
'Vale',
'Vulcão'
];

var listaComplicacoes=
[
'Guardas armados.',
'Assassinos.',
'Bandidos.',
'Ocultação, engano ou sigilo.',
'Maldição (real ou imaginária).',
'Ambiente mortal.',
'Desonestidade e ambição da população.',
'Grande distância.',
'Informação que precisa de tradução.',
'Falta de suprimentos.',
'Tempo limitado.',
'Desastre natural (ou não).',
'Monstro.',
'Grupo de inimigos.',
'Barreira física.',
'Enigma que tem que ser solucionado.',
'Bestas selvagens.',
'Ladrões.',
'A missão fará o protagonista perder um ou mais aliados.',
'A missão causará mortes de inocentes.',
'A missão causará danos econômicos graves.',
'A missão irá deixar um lugar radioativo/amaldiçoado/infértil.',
'A missão irá prejudicar algum amigo ou familiar.',
'A missão irá ferir a honra do protagonista.',
'A missão fará com que alguém fique impune.',
'A missão fere os interesses de um aliado importante.',
'A missão requer que o protagonista faça algo moralmente errado.',
'A missão irá prejudicar a reputação do protagonista.',
'A missão requer que o protagonista omita uma coisa importante, ou minta.',
'Aparece uma nova ameaça.',
'Um importante pertence seu foi roubado.',
'O vilão coloca sua cabeça à prêmio.'
];
