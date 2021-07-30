

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

function randomAte(numMaximo){
	 /* 
	 de 0 a numMaximo -1.
	 se colocar numMaximo+1 no argumento, 
	 vai de 1 até numMaximo.
	 */
	return Math.floor(Math.random()*(numMaximo+1));
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


/* função pra arrumar
function uneArrays(tipo){
	let arrayAux=[];


	switch(tipoCenario){
		case 'geral':
			arrayAux=arrayAux.concat('lista'+tipo);
		break;

		case 'fantasia':
			arrayAux=arrayAux.concat(tipo+'Fantasia','lista'+tipo);
		break;	

		case 'moderno':
			arrayAux=arrayAux.concat(tipo+'Moderno','lista'+tipo);
		break;

		case 'supers':
			arrayAux=arrayAux.concat(tipo+'Supers','lista'+tipo);
		break;

		case 'cyberpunk':
			arrayAux=arrayAux.concat(tipo+'Cyberpunk','lista'+tipo);
		break;

		case 'pokemon':
			arrayAux=arrayAux.concat(tipo+'Pokemon','lista'+tipo);
		break;

		default: console.log('Cenário inválido.');
	}
	return arrayAux;
}
*/

function reviravolta(){
	let arrayAux=[];

	switch(tipoCenario){
		case 'geral':
			arrayAux=arrayAux.concat(listareviravolta);
		break;

		case 'fantasia':
			arrayAux=arrayAux.concat(reviravoltaFantasia,listareviravolta);
		break;	

		case 'moderno':
			arrayAux=arrayAux.concat(reviravoltaModerno,listareviravolta);
		break;

		case 'supers':
			arrayAux=arrayAux.concat(reviravoltaSupers,listareviravolta);
		break;

		case 'cyberpunk':
			arrayAux=arrayAux.concat(reviravoltaCyberpunk,listareviravolta);
		break;

		case 'pokemon':
			arrayAux=arrayAux.concat(reviravoltaPokemon,listareviravolta);
		break;

		default: console.log('Cenário inválido.');
	}

	escreverLog("<span style='font-weight: bolder'>Reviravolta: </span>"+arrayAux[randomEntre(0,arrayAux.length-1)]);
}

function relacionamento(){
	let arrayAux=[];

	switch(tipoCenario){
		case 'geral':
			arrayAux=arrayAux.concat(listarelacionamento);
		break;

		case 'fantasia':
			arrayAux=arrayAux.concat(relacionamentoFantasia,listarelacionamento);
		break;	

		case 'moderno':
			arrayAux=arrayAux.concat(relacionamentoModerno,listarelacionamento);
		break;

		case 'supers':
			arrayAux=arrayAux.concat(relacionamentoSupers,listarelacionamento);
		break;

		case 'cyberpunk':
			arrayAux=arrayAux.concat(relacionamentoCyberpunk,listarelacionamento);
		break;

		case 'pokemon':
			arrayAux=arrayAux.concat(relacionamentoPokemon,listarelacionamento);
		break;

		default: console.log('Cenário inválido.');
	}
	escreverLog("<span style='font-weight: bolder'>Relacionamento: </span>"+arrayAux[randomEntre(0,arrayAux.length-1)]);
}

function lugarNatureza(){
	let arrayAux=[];

	switch(tipoCenario){
		case 'geral':
			arrayAux=arrayAux.concat(listanatureza);
		break;

		case 'fantasia':
			arrayAux=arrayAux.concat(naturezaFantasia,listanatureza);
		break;	

		case 'moderno':
			arrayAux=arrayAux.concat(naturezaModerno,listanatureza);
		break;

		case 'supers':
			arrayAux=arrayAux.concat(naturezaSupers,listanatureza);
		break;

		case 'cyberpunk':
			arrayAux=arrayAux.concat(naturezaCyberpunk,listanatureza);
		break;

		case 'pokemon':
			arrayAux=arrayAux.concat(naturezaPokemon,listanatureza);
		break;

		default: console.log('Cenário inválido.');
	}
	escreverLog("<span style='font-weight: bolder'>Lugar: </span>"+arrayAux[randomEntre(0,arrayAux.length-1)]);
}

function lugarUrbano(){
	let arrayAux=[];

	switch(tipoCenario){
		case 'geral':
			arrayAux=arrayAux.concat(listaurbano);
		break;

		case 'fantasia':
			arrayAux=arrayAux.concat(urbanoFantasia,listaurbano);
		break;	

		case 'moderno':
			arrayAux=arrayAux.concat(urbanoModerno,listaurbano);
		break;

		case 'supers':
			arrayAux=arrayAux.concat(urbanoSupers,listaurbano);
		break;

		case 'cyberpunk':
			arrayAux=arrayAux.concat(urbanoCyberpunk,listaurbano);
		break;

		case 'pokemon':
			arrayAux=arrayAux.concat(urbanoPokemon,listaurbano);
		break;

		default: console.log('Cenário inválido.');
	}
	escreverLog("<span style='font-weight: bolder'>Lugar: </span>"+arrayAux[randomEntre(0,arrayAux.length-1)]);
}

function complicacao(){
	let arrayAux=[];

	switch(tipoCenario){
		case 'geral':
			arrayAux=arrayAux.concat(listacomplicacao);
		break;

		case 'fantasia':
			arrayAux=arrayAux.concat(complicacaoFantasia,listacomplicacao);
		break;	

		case 'moderno':
			arrayAux=arrayAux.concat(complicacaoModerno,listacomplicacao);
		break;

		case 'supers':
			arrayAux=arrayAux.concat(complicacaoSupers,listacomplicacao);
		break;

		case 'cyberpunk':
			arrayAux=arrayAux.concat(complicacaoCyberpunk,listacomplicacao);
		break;

		case 'pokemon':
			arrayAux=arrayAux.concat(complicacaoPokemon,listacomplicacao);
		break;

		default: console.log('Cenário inválido.');
	}
	escreverLog("<span style='font-weight: bolder'>Complicação: </span>"+arrayAux[randomEntre(0,arrayAux.length-1)]);
}

function gancho(){
	let arrayAux=[];

	switch(tipoCenario){
		case 'geral':
			arrayAux=arrayAux.concat(listagancho);
		break;

		case 'fantasia':
			arrayAux=arrayAux.concat(ganchoFantasia,listagancho);
		break;	

		case 'moderno':
			arrayAux=arrayAux.concat(ganchoModerno,listagancho);
		break;

		case 'supers':
			arrayAux=arrayAux.concat(ganchoSupers,listagancho);
		break;

		case 'cyberpunk':
			arrayAux=arrayAux.concat(ganchoCyberpunk,listagancho);
		break;

		case 'pokemon':
			arrayAux=arrayAux.concat(ganchoPokemon,listagancho);
		break;

		default: console.log('Cenário inválido.');
	}
	escreverLog("<span style='font-weight: bolder'>Gancho: </span>"+arrayAux[randomEntre(0,arrayAux.length-1)]);
}

function pessoa(){
	let arrayAux=[];

	switch(tipoCenario){
		case 'geral':
			arrayAux=arrayAux.concat(listapessoa);
		break;

		case 'fantasia':
			arrayAux=arrayAux.concat(pessoaFantasia,listapessoa);
		break;	

		case 'moderno':
			arrayAux=arrayAux.concat(pessoaModerno,listapessoa);
		break;

		case 'supers':
			arrayAux=arrayAux.concat(pessoaSupers,listapessoa);
		break;

		case 'cyberpunk':
			arrayAux=arrayAux.concat(pessoaCyberpunk,listapessoa);
		break;

		case 'pokemon':
			arrayAux=arrayAux.concat(pessoaPokemon,listapessoa);
		break;

		default: console.log('Cenário inválido.');
	}
	escreverLog("<span style='font-weight: bolder'>Pessoa: </span>"+arrayAux[randomEntre(0,arrayAux.length-1)]);
}

function coisa(){
	let arrayAux=[];

	switch(tipoCenario){
		case 'geral':
			arrayAux=arrayAux.concat(listacoisa);
		break;

		case 'fantasia':
			arrayAux=arrayAux.concat(coisaFantasia,listacoisa);
		break;	

		case 'moderno':
			arrayAux=arrayAux.concat(coisaModerno,listacoisa);
		break;

		case 'supers':
			arrayAux=arrayAux.concat(coisaSupers,listacoisa);
		break;

		case 'cyberpunk':
			arrayAux=arrayAux.concat(coisaCyberpunk,listacoisa);
		break;

		case 'pokemon':
			arrayAux=arrayAux.concat(coisaPokemon,listacoisa);
		break;

		default: console.log('Cenário inválido.');
	}
	escreverLog("<span style='font-weight: bolder'>Coisa: </span>"+arrayAux[randomEntre(0,arrayAux.length-1)]);
}

function nomeAtual(){
	escreverLog("<span style='font-weight: bolder'>Nome atual: </span>"+listaNome[randomEntre(0,listaNome.length-1)]+' '+listaSobrenome[randomEntre(0,listaSobrenome.length-1)]);
}

function acaoCombate(){
	escreverLog("<span style='font-weight: bolder'>Ação de combate: </span>"+listaAcoesCombate[randomEntre(0,listaAcoesCombate.length-1)]);
}

function posturaPDM(){
	escreverLog("<span style='font-weight: bolder'>Postura: </span>"+listaPostura[randomEntre(0,listaPostura.length-1)]);
}

function vegetacao(){
	escreverLog("<span style='font-weight: bolder'>Vegetação: </span>"+listaVegetacao[randomEntre(0,listaVegetacao.length-1)]);
}


function nomeFantasia(){

	function gerarNome(){
		let quantidadeDeSilabas= randomEntre(2,3);
		console.log(quantidadeDeSilabas);
		let nome="";

		for (contadorSilaba=1;contadorSilaba<=quantidadeDeSilabas;contadorSilaba++){

			if (contadorSilaba>1) {
				nome= nome + consoanteAleatoria() + vogalAleatoria() ;
			}else{
				nome= nome + consoanteAleatoria().toUpperCase() + vogalAleatoria() ;
			}
		}	

		function vogalAleatoria(){

		  let listaVogais="aeiou";
		  let numeroAleatorio=randomEntre(1, listaVogais.length);

		  return listaVogais.substring(numeroAleatorio-1,numeroAleatorio);
		}

		function consoanteAleatoria(){

		  let listaConsoantes="bcdfghjklmnpqrstwvxyz";
		  let numeroAleatorio=randomEntre(1, listaConsoantes.length);

		  return listaConsoantes.substring(numeroAleatorio-1,numeroAleatorio);
		}
		return nome;
	}
	escreverLog("<span style='font-weight: bolder'>Nome fantasia: </span>"+gerarNome()+' '+gerarNome());
}

function desejosObjetivos(){
	let desejo ='';
	let lista=[];

	switch(randomAte(5)){
		case 0: //escapar
			desejo='Escapar ';
			lista.push(
				'do passado',
				'de um inimigo poderoso',
				'de um compromisso',
				'de um segredo',
				'de uma dívida',
				'de um lugar'
			);
		break;

		case 1: //proteger
			desejo='Proteger ';
			lista.push(
				'família ou amigos',
				'a honra',
				'sua reputação',
				'um pupilo',
				'um grupo',
				'um objeto especial'
			);
		break;

		case 2: //descobrir
			desejo='Descobrir ';
			lista.push(
				'um segredo',
				'um lugar',
				'a identidade de alguém',
				'a solução para um problema',
				'quem fez isso com ele',
				'o paradeiro de alguém ou algo'
			);
		break;

		case 3: //obter
			desejo='Obter ';
			lista.push(
				'um item',
				'admiração ou respeito',
				'glória',
				'poder',
				'riqueza',
				'uma posição',
				'fama'
			);
		break;

		case 4: //eliminar
			desejo='Eliminar ';
			lista.push(
				'um inimigo antigo',
				'um monstro',
				'um rival',
				'alguém importante',
				'uma organização',
				'uma comunidade',
				'uma maldição'
			);
		break;

		case 5: //mudar
			desejo='Mudar ';
			lista.push(
				'de local',
				'de classe social',
				'de vida',
				'de amigos',
				'de carreira',
				'de estilo de vida'
			);
		break;

		default: alert('Opção inválida!');
	}

	desejo+=lista[randomAte(lista.length-1)];

	escreverLog("<span style='font-weight: bolder'>Desejo/Objetivo do PDM: </span>"+desejo);
}

function missao(){
	escreverLog("<span style='font-weight: bolder'>Missão: </span>"+listamissao[randomEntre(0,listamissao.length-1)]);
}

/*** MISSÃO ****************************************************************/
var listamissao=
[
'Afetar [Pessoa]',
'Ajudar [Pessoa]',
'Alterar [Coisa]',
'Ameaçar [Pessoa]',
'Apoiar [Pessoa]',
'Apreender [Coisa]',
'Aprisionar [Pessoa]',
'Arruinar [Lugar urbano]',
'Atacar [Lugar urbano] ou [Pessoa]',
'Atrair [Pessoa]',
'Atrasar [Pessoa] ou [Coisa]',
'Caçar [Pessoa]',
'Comunicar [Pessoa][Lugar urbano]',
'Convencer [Pessoa]',
'Curar [Pessoa]',
'Decifrar [Coisa]',
'Defender [Pessoa] ou [Lugar] ou [Coisa]',
'Derrotar [Pessoa]',
'Destruir [Coisa][Lugar urbano]',
'Distrair [Pessoa]',
'Emboscar [Pessoa]',
'Encontrar [Pessoa] ou [Coisa] ou [Lugar]',
'Enfraquecer [Pessoa] ou [Coisa]',
'Enganar [Pessoa]',
'Entregar [Coisa]',
'Escapar de [Lugar]',
'Escoltar [Pessoa] ou [Coisa]',
'Explorar [Lugar]',
'Fortalecer [Coisa]',
'Impedir [Pessoa]',
'Interromper [Pessoa]',
'Invadir [Lugar]',
'Localizar [Pessoa] ou [Lugar] ou [Coisa]',
'Matar [Pessoa]',
'Observar [Pessoa] ou [Lugar] ou [Coisa]',
'Obter [Coisa]',
'Perguntar [Pessoa]',
'Procurar [Pessoa] ou [Lugar] ou [Coisa]',
'Proteger [Pessoa] ou [Lugar] ou [Coisa]',
'Punir [Pessoa]',
'Raptar [Pessoa]',
'Recrutar [Pessoa]',
'Recuperar [Coisa]',
'Resgatar [Pessoa] ou [Coisa]',
'Roubar [Coisa] de [Pessoa]',
'Salvar [Pessoa] ou [Lugar]',
'Seguir [Pessoa]',
'Segurar [Coisa] ou [Pessoa]',
'Separar [Coisa] de [Pessoa]',
'Separar [Pessoa] de [Lugar urbano]',
'Transportar [Coisa] até [Lugar natureza]',
'Viajar até [Lugar natureza] para [missão]',
'Vingar uma [Pessoa]'
];


/* REVIRAVOLTA *************************************************/
var listareviravolta=
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

var reviravoltaFantasia=
[

];

var reviravoltaModerno=
[

];

var reviravoltaSupers=
[

];

var reviravoltaCyberpunk=
[

];

var reviravoltaPokemon=
[

];


/* RELACIONAMENTO **************************************/
var listarelacionamento=
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


var relacionamentoFantasia=
[

];

var relacionamentoModerno=
[

];

var relacionamentoSupers=
[

];

var relacionamentoCyberpunk=
[

];

var relacionamentoPokemon=
[

];

/* NATUREZA *******************************************/

var listanatureza=[
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

var naturezaFantasia=
[

];

var naturezaModerno=
[

];

var naturezaSupers=
[
'planeta distante',
'planeta próximo',
'Outro plano',
'Outra dimensão'
];

var naturezaCyberpunk=
[

];

var naturezaPokemon=
[

];

/* LUGAR URBANO ******************************************/

var listaurbano=
[
'Armazém',
'Bazar',
'Bordel',
'Centro comercial',
'Centro da cidade',
'Cidade distante',
'Cripta',
'Depósito',
'Esgotos/subterrâneo',
'Galpão abandonado',
'Jardim',
'Loja de armas',
'Mansão',
'Nas nuvens',
'Necrotério, cemitério',
'País distante',
'Praça',
'Prédio',
'Prisão',
'Templo'
];

var urbanoFantasia=
[
'Palácio',
'Catacumbas',
'Fortaleza',
'Torre',
'Santuário',
'tumba',
'Taverna',
'Estalagem',
'Loja de suprimentos',
'Forja',
'A casa Nobre',
'lugar místico',
'ruínas antigas',
'Reino secreto',
'castelo'
];

var urbanoModerno=
[

];

var urbanoSupers=
[

];

var urbanoCyberpunk=
[

];

var urbanoPokemon=
[

];

/* COMPLICAÇÃO ***************************************/

var listacomplicacao=
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

var complicacaoFantasia=
[

];

var complicacaoModerno=
[

];

var complicacaoSupers=
[

];

var complicacaoCyberpunk=
[

];

var complicacaoPokemon=
[

];

/* GANCHO *****************************************/

var listagancho=[
'Chantageado',
'Deixado para morrer',
'Entrou na situação por acaso',
'Fez uma aposta',
'Foi contratado para isso',
'Injustiçado e querendo vingança',
'Ordens de um superior',
'Ouviu uma conversa',
'Pagando uma dívida',
'Para provar sua coragem',
'Pedido um favor',
'Perdido ou Náufrago',
'Preso e forçado a entrar em serviço',
'Teve um sonho'
];

var ganchoFantasia=
[
'Amaldiçoado por um deus',
'Encontrou mapa antigo',
'Teve uma visão',
'Ouviu uma profecia',
'Ouviu uma música ou poema',
'Leu um pergaminho antigo'
];

var ganchoModerno=
[

];

var ganchoSupers=
[

];

var ganchoCyberpunk=
[

];

var ganchoPokemon=
[

];

/* PESSOA ************************************************/
var listapessoa=
[
'Agente da lei',
'Animal/Ser',
'Aprendiz',
'Artesã/o',
'Artista',
'Assassino/a',
'Criminoso/a',
'Dançarino/a',
'Espiã/o',
'Estudioso/a',
'Familiar',
'Fugitivo/a',
'Grupo',
'Ladrão',
'Mendigo/a',
'Mercenário/a',
'Organização',
'Poeta/isa',
'Político',
'Prisioneiro/a',
'Prostituta/o',
'Refém',
'Refugiado/a',
'Rival',
'Torturador/a',
'Traficante',
'Uma criança'
];

var pessoaFantasia=
[
'Nobre',
'Camponês/a',
'Pirata',
'Sacerdote/isa',
'Servo/a',
'Mago/a',
'Guerreiro/a',
'Monge',
'Druida',
'Arqueiro',
'Rei/Rainha',
'Principe/Princesa',
'Bárbaro',
'Bardo/a',
'Paladino/a',
'Patrulheiro/a',
'Feiticeiro/a',
'Ladino/a',
'Bruxo/a',
'Xamã',
'Halfling',
'Orc',
'Humano/a',
'Anã/o',
'Élfo/a',
'Necromante',
'Lich',
'Espírito',
'Demônio',
'Fantasma',
'Ferreiro/a',
'Herói/na famoso/a',
'Sociedade secreta'
];

var pessoaModerno=
[

];

var pessoaSupers=
[

];

var pessoaCyberpunk=
[

];

var pessoaPokemon=
[

];

/* COISA ********************************************/

var listacoisa=
[
'Anel',
'Artefato',
'Baú',
'Capa',
'Carga',
'Carta',
'Chave',
'Culto',
'Disputa',
'Estatueta',
'Guerra',
'Identidade secreta',
'Jóia',
'Livro',
'Máscara',
'Meteorito',
'Passado',
'Paradeiro de alguém',
'Política',
'Quadro',
'Respeito de alguém',
'Riqueza de alguém',
'Segredo',
'Uma cerimônia'
];

var coisaFantasia=
[
'Coroa',
'Cristal',
'Adaga',
'Elmo',
'Ídolo',
'Lente',
'Sarcófago',
'Pergaminho',
'Selo',
'Caveira',
'Espada',
'Tomo',
'Tesouro',
'Caravana'
];

var coisaModerno=
[

];

var coisaSupers=
[

];

var coisaCyberpunk=
[

];

var coisaPokemon=
[

];

/* ORACULOS GERAIS *********************************/

var listaPostura=[
'Agressivo',
'Amistoso',
'Antipático',
'Atencioso',
'Desconfiado',
'Neutro',
'Quieto'
];

var listaAcoesCombate=
[
'Ataque à Dist melhorado',
'Ataque à Dist normal.',
'Ataque CaC melhorado.',
'Ataque CaC normal.',
'Ataque furtivo.',
'Fugir/Ir embora.',
'Manobra Tática.',
'Postura Defensiva.',
'Proteger.',
'Tentar desarmar (se possível).',
'Tentar imobilizar (se possível).'
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

var listaFerimento=[
	'ombro esquerdo com ferimento',
	'ombro esquerdo quebrado',
	'braço esquerdo com ferimento',
	'braço esquerdo quebrado',
	'cotovelo esquerdo com ferimento',
	'cotovelo esquerdo quebrado',
	'antebraço esquerdo com ferimento',
	'antebraço esquerdo quebrado',
	'mão esquerda com ferimento',
	'mão esquerda quebrada',
	'ombro direito com ferimento',
	'ombro direito quebrado',
	'braço direito com ferimento',
	'braço direito quebrado',
	'cotovelo direito com ferimento',
	'cotovelo direito quebrado',
	'antebraço direito com ferimento',
	'antebraço direito quebrado',
	'mão direita com ferimento',
	'mão direita quebrada',
	'coxa esquerda com ferimento',
	'fêmur esquerdo quebrado',
	'joelho esquerdo com ferimento',
	'joelho esquerdo quebrado',
	'pé esquerdo com ferimento',
	'pé esquerdo quebrado',
	'coxa direita com ferimento',
	'fêmur direito quebrado',
	'joelho direito com ferimento',
	'joelho direito quebrado',
	'pé direito com ferimento',
	'pé direito quebrado',
	'ferimento no pescoço',
	'ferimento no tórax',
	'ferimento nas costas',
	'ferimento na barriga',
	'ferimento nas costelas',
	'ferimento na nuca',
	'ferimento nos olhos',
	'ferimento no rosto',
	'ferimento na boca'
];

var listaNome=
[
	'Santiago',
	'Francisco',
	'João',
	'Afonso',
	'Rodrigo',
	'Martim',
	'Tomás',
	'Miguel',
	'Gabriel',
	'Lourenço',
	'Rafael',
	'Lucas',
	'Guilherme',
	'Pedro',
	'Tiago',
	'Diogo',
	'Vicente',
	'José',
	'David',
	'Mateus',
	'Simão',
	'Antônio',
	'Diego',
	'Manuel',
	'Henrique',
	'Daniel',
	'Bernardo',
	'Enzo',
	'André',
	'Leonardo',
	'Luis',
	'Isaque',
	'Eduardo',
	'Alexandre',
	'Kevin',
	'Matias',
	'Leandro',
	'Felipe',
	'Xavier',
	'Samuel',
	'Ricardo',
	'Arthur',
	'Valentim',
	'Frederico',
	'Lorenzo',
	'Bryan',
	'Bruno',
	'Benjamin',
	'Carlos',
	'Sebastião',
	'Noah',
	'Mário',
	'Tomé',
	'Fábio',
	'Paulo',
	'Renato',
	'Jorge',
	'Jaime',
	'Ângelo',
	'Micael',
	'Ivan',
	'Cristiano',
	'Jonathan',
	'Sérgio',
	'Gil',
	'Ivo',
	'Vitor',
	'Yuri',
	'Fernando',
	'Dilan',
	'Romeu',
	'Caio',
	'Emanuel',
	'Sandro',
	'Igor',
	'Moisés',
	'Mauro',
	'Cesar',
	'Josué',
	'Edgar',
	'Elias',
	'Joel',
	'Alex',
	'Denis',
	'Marcelo',
	'Adriel',
	'Álvaro',
	'Dylan',
	'Raul',
	'Mohamed',
	'Nelson',
	'Dário',
	'Oliver',
	'Ismael',
	'Márcio',
	'Ian',
	'Erick',
	'Cláudio',
	'Heitor',
	'Martinho',
	'Jonas',
	'Júlio',
	'Adriano',
	'Augusto',
	'Flávio',
	'Jason',
	'James',
	'Danilo',
	'Adam',
	'Levi',
	'Nicolas',
	'Sebastian',
	'Cauã',
	'Misael',
	'Alberto',
	'Israel',
	'Edson',
	'Luan',
	'Denzel',
	'Apolo',
	'Alfredo',
	'Nicolau',
	'Axel',
	'Patrick',
	'Giovani',
	'Aron',
	'Luiz',
	'Leonel',
	'Wesley',
	'Ari',
	'Roberto',
	'Hélder',
	'Roberta',
	'Henry',
	'Cristóvão',
	'Jesus',
	'Nathan',
	'Rogério',
	'Caleb',
	'Fabrício',
	'Valentino',
	'Noé',
	'Luka',
	'Armando',
	'Stéfano',
	'Bartolomeu',
	'Anthony',
	'Derick',
	'Ryan',
	'Luciano',
	'Theo',
	'Christian',
	'Anderson',
	'Abel',
	'Nataniel',
	'Dominick',
	'Alexander',
	'Isaías',
	'Amadeu',
	'Oscar',
	'Lázaro',
	'Ulisses',
	'Max',
	'Steven',
	'Leon',
	'Maurício',
	'Juliano',
	'Osvaldo',
	'Edward',
	'Jayden',
	'Olavo',
	'Saulo',
	'Pietro',
	'Breno',
	'Jair',
	'Uriel',
	'Adiel',
	'Fred',
	'Jack',
	'Evandro',
	'Juan',
	'Ruan',
	'Rauny',
	'Tainan',
	'Igor',
	'Fabiano',
	'Robert',
	'Hélio',
	'Adilson',
	'Elder',
	'Éder',
	'Jordan',
	'Tito',
	'Júnior',
	'Alonso',
	'George',
	'Jorge',
	'Félix',
	'Gilson',
	'Gilberto',
	'Abner',
	'Wagner',
	'Adolfo',
	'Salomão',
	'Kauan',
	'Nilson',
	'Willian',
	'Tobias',
	'Julian',
	'Jacob',
	'Vladmir',
	'Yan',
	'Harry',


	'Maria',
	'Leonor',
	'Matilde',
	'Beatriz',
	'Carolina',
	'Mariana',
	'Ana',
	'Sofia',
	'Francisca',
	'Inês',
	'Margarida',
	'Clara',
	'Lara',
	'Alice',
	'Laura',
	'Benedita',
	'Diana',
	'Madalena',
	'Joana',
	'Camila',
	'Bianca',
	'Mafalda',
	'Íris',
	'Vitória',
	'Luana',
	'Sara',
	'Letícia',
	'Gabriela',
	'Rita',
	'Eva',
	'Mara',
	'Yara',
	'Luisa',
	'Yasmin',
	'Helena',
	'Catarina',
	'Valentina',
	'Júlia',
	'Marta',
	'Noa',
	'Rafaela',
	'Teresa',
	'Nicole',
	'Melissa',
	'Iara',
	'Bruna',
	'Isabel',
	'Daniela',
	'Miriam',
	'Luna',
	'Raquel',
	'Bárbara',
	'Mia',
	'Áurea',
	'Aurora',
	'Juliana',
	'Olívia',
	'Amélia',
	'Jéssica',
	'Kelly',
	'Érica',
	'Naiara',
	'Isabela',
	'Adriana',
	'Débora',
	'Lorena',
	'Isis',
	'Emma',
	'Julieta',
	'Alexandra',
	'Elisa',
	'Frederica',
	'Soraia',
	'Tatiana',
	'Eduarda',
	'Chloe',
	'Safira',
	'Isabella',
	'Mayara',
	'Rosa',
	'Emília',
	'Vera',
	'Sophia',
	'Fabiana',
	'Flor',
	'Paloma',
	'Luciana',
	'Nádia',
	'Alana',
	'Ester',
	'Aline',
	'Larissa',
	'Nair',
	'Salomé',
	'Renata',
	'Sara',
	'Andreia',
	'Emily',
	'Anita',
	'Patrícia',
	'Bia',
	'Verônica',
	'Iris',
	'Serena',
	'Cristiana',
	'Dalila',
	'Cláudia',
	'Lúcia',
	'Carla',
	'Ângela',
	'Neuza',
	'Simone',
	'Tamara',
	'Clarice',
	'Raissa',
	'Maiara',
	'Eliane',
	'Cristina',
	'Isa',
	'Samira',
	'Violeta',
	'Estrela',
	'Giovana',
	'Valéria',
	'Micaela',
	'Jacinta',
	'Sandra',
	'Liliana',
	'Cíntia',
	'Marisa',
	'Natasha',
	'Rute',
	'Telma',
	'Jade',
	'Eliana',
	'Samara',
	'Susana',
	'Cátia',
	'Elsa',
	'Carina',
	'Mônica',
	'Ayla',
	'Rebecca',
	'Briana',
	'Penélope',
	'Heloisa',
	'Flávia',
	'Aléxia',
	'Nina',
	'Neide',
	'Priscila',
	'Evelyn',
	'Vânia',
	'Jasmine',
	'Ariane',
	'Abigail',
	'Cecília',
	'Milena',
	'Manuela',
	'Márcia',
	'Marina',
	'Glória',
	'Erika',
	'Samanta',
	'Lívia',
	'Ellen',
	'Solange',
	'Naomi',
	'Antonia',
	'Angelina',
	'Vanessa',
	'Amanda',
	'Taís',
	'Angélica',
	'Natália',
	'Brenda',
	'Jennifer',
	'Isadora',
	'Sônia',
	'Tânia',
	'Silvia',
	'Sabrina',
	'Eleonora',
	'Leandra',
	'Fatima',
	'Lua',
	'Alina',
	'Viviane',
	'Ligia',
	'Adriele',
	'Janaína',
	'Lavínia',
	'Regina',
	'Agatha',
	'Léa'
];

var listaSobrenome =
[
	'Estevam',
	'Silva',
	'Santos',
	'Ferreira',
	'Nascimento',
	'Perez',
	'Militão',
	'Monteiro',
	'Abdala',
	'Santiago',
	'Pereira',
	'Arruda',
	'Ribeiro',
	'Cunha',
	'Lima',
	'Figuerôa',
	'Gonçalves',
	'Araujo',
	'Rodrigues',
	'Abreu',
	'Albuquerque',
	'Almeida',
	'Alves',
	'Antunes',
	'Avelar',
	'Azevedo',
	'Barros',
	'Batista',
	'Borges',
	'Brandão',
	'Bragança',
	'Brito',
	'Cabral',
	'Caetano',
	'Caires',
	'Camacho',
	'Camargo',
	'Campos',
	'Carvalho',
	'Castilhos',
	'Castro',
	'Cerqueira',
	'Coimbra',
	'Conceição',
	'Cotrim',
	'Coutinho',
	'Cruz',
	'Cunha',
	'Custódio',
	'Damasceno',
	'Dantas',
	'Dias',
	'Domingos',
	'Domingues',
	'Duarte',
	'Dutra',
	'Fagundes',
	'Faria',
	'Félix',
	'Fernandes',
	'Ferraz',
	'Ferreira',
	'Flores',
	'Fonseca',
	'Fontes',
	'Fraga',
	'Franco',
	'Freire',
	'Freitas',
	'Freixo',
	'Frota',
	'Garcez',
	'Garrido',
	'Gaspar',
	'Gentil',
	'Godoy',
	'da Graça',
	'Guedes',
	'Guerra',
	'Henrique',
	'Hilário',
	'Hipólito',
	'Jardim',
	'Lacerda',
	'Leal',
	'Leite',
	'Leme',
	'Lemos',
	'Lima',
	'Linhares',
	'Lisboa',
	'Lira',
	'Lobato',
	'Lopes',
	'Lourenço',
	'Luz',
	'Macedo',
	'Machado',
	'Maciel',
	'Magalhães',
	'Maia',
	'Malta',
	'Marcondes',
	'Marinho',
	'Martins',
	'Medeiros',
	'Monteiro',
	'Matias',
	'Matos',
	'Medina',
	'Menezes',
	'Miranda',
	'Monforte',
	'Montenegro',
	'Moreira',
	'Mota',
	'Moura',
	'Muniz',
	'Nascimento',
	'Neto',
	'Neves',
	'Nobre',
	'Nóbrega',
	'Nogueira',
	'Nolasco',
	'Novais',
	'Nunes',
	'Oliveira',
	'Onofre',
	'Osório',
	'Pacheco',
	'Padilha',
	'de Pádua',
	'Paiva',
	'Paixão',
	'Palhaes',
	'Peçanha',
	'Pedroso',
	'Peixoto',
	'Penedo',
	'Penha',
	'Paz',
	'Penteado',
	'Pereira',
	'Pessoa',
	'Pestana',
	'Pimentel',
	'Pinheiro',
	'Pires',
	'Pontes',
	'Porto',
	'Prado',
	'Prates',
	'Prestes',
	'Proença',
	'Prudente',
	'Quadros',
	'Queirós',
	'Quintana',
	'Rabelo',
	'Ramires',
	'Ramos',
	'Rangel',
	'Reis',
	'Ribeiro',
	'Rocha',
	'Rodrigues',
	'Ruas',
	'Sacramento',
	'Saldanha',
	'Salvador',
	'Salomão',
	'Santos',
	'Santiago',
	'Saraiva',
	'Silva',
	'Silveira',
	'Silvestre',
	'Simão',
	'Cintra',
	'Soares',
	'Souza',
	'Tavares',
	'Teixeira',
	'Toledo',
	'Torrado',
	'Torres',
	'Toscano',
	'Trindade',
	'Uchoa',
	'Valadão',
	'Valente',
	'Valentim',
	'Valério',
	'Valverde',
	'Varanda',
	'Vargas',
	'Vasconcelos',
	'Vasques',
	'Vaz',
	'Velasques',
	'Veloso',
	'Vergueiro',
	'Viana',
	'Vilela',
	'Xavier',
	'Watanabe',
	'Yamamoto',
	'Saito',
	'Yoshida',
	'Yamazaki',
	'Kobayashi',
	'Tanaka',
	'Takahashi',
	'Sato',
	'Suzuki',
	'Ito',
	'Nakamura',
	'Kobayashi',
	'Kato',
	'Yamada',
	'Sasaki',
	'Yamaguchi',
	'Matsumoto',
	'Shimizu',
	'Nakajima',
	'Maeda',
	'Okada',
	'Sakamoto',
	'Nakagawa',
	'Nakano',
	'Matsui',
	'Wang',
	'Li',
	'Zhang',
	'Liu',
	'Chen',
	'Yang',
	'Huang',
	'Zhao',
	'Zhu',
	'Lin',
	'Smith',
	'Johnson',
	'Williams',
	'Jones',
	'Brown',
	'Davis',
	'Miller',
	'Wilson',
	'Taylor',
	'Thomas',
	'Anderson',
	'Jackson',
	'White',
	'Harris',
	'Martin',
	'Thompson',
	'Garcia',
	'Martinez',
	'Clark',
	'Lewis',
	'Lee',
	'Walker',
	'Wild',
	'Hall',
	'Allen',
	'Lopez',
	'Scott',
	'Green',
	'Adams',
	'Baker',
	'Carter',
	'Roberts',
	'Turner',
	'Philips',
	'Campbell',
	'Parker',
	'Evans',
	'Edwards',
	'Collins',
	'Stewart',
	'Morris',
	'Rogers',
	'Cooper',
	'Richard',
	'Peterson',
	'Watson',
	'Brooks',
	'Sanders',
	'Price',
	'Wood',
	'Ross',
	'Coleman',
	'Jenkins',
	'Hughes',
	'Washington',
	'Simmons',
	'Foster',
	'Bryant',
	'Griffin'
];
