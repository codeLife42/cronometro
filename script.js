//Variaveis
var displayMinutos = document.querySelector("#minutos");
var displaySegundos = document.querySelector("#segundos");
var btnZerar = document.querySelector("#reset");
var btnIniciar = document.querySelector("#iniciar");
var pausarContador;
//Eventos

btnIniciar.addEventListener("click",function(){
	checaValores();
	if((Number(displaySegundos.value) !== 0) || (Number(displayMinutos.value) !== 0)){
		//Desativa o botao, quando ele for clicado
		btnIniciar.setAttribute("disabled","true");
		pausarContador = setInterval(contaTempo,1000);
	}

});
btnZerar.addEventListener("click",function(){
	displayMinutos.value = 0;
	displaySegundos.value = 0;
	btnIniciar.removeAttribute("disabled");
	clearInterval(pausarContador);
})
//Funcoes
function contaTempo(){
	//Se der false, o contador para, dizendo que o tempo acabou.
	if((Number(displayMinutos.value) === 0) && (Number(displaySegundos.value) - 1 === 0)){
		displaySegundos.value--;
		clearInterval(pausarContador);
		btnIniciar.removeAttribute("disabled");
		alert("O tempo acabou.");
	//Logica para diminuir um minuto, caso o displaySegundos === 0, e displayMinutos !== 0	
	}else if((Number(displayMinutos.value) !== 0) && (Number(displaySegundos.value) === 0)){
		displayMinutos.value--;
		displaySegundos.value = 59;
	//Diminui o valor do displaySegundos
	}else if(Number(displaySegundos.value) !== 0){
		displaySegundos.value--;
	}
}

function checaValores(){
	if(Number(displaySegundos.value) > 60)
		displaySegundos.value = 59;
	else if(Number(displaySegundos.value) < 0)
		displaySegundos.value = 0;
	if(Number(displayMinutos.value > 100))
		displayMinutos.value = 99;
	else if(Number(displayMinutos.value < 0))
		displayMinutos.value = 0;
}