const botoes = document.querySelectorAll (".botao");
const textos = document.querySelectorAll (".aba-conteudo");

for(let i=0;i < botoes.length; i++){
    botoes[i].onclick = function(){

        for(let j=0;j < botoes.length; j++){
            botoes[j].classList.remove("ativo");
            textos[j].classList.remove("ativo");
        }
      botoes[i].classList.add("ativo");
      textos[i].classList.add("ativo");
    }
    console.log();
}

const contadores = document.querySelectorAll (".contador");

const tempoObjetivo1 = new Date("2030-12-05T00:00:00");
contadores[0] .textContent = calculaTempo (tempoObjetivo1);
const tempoObjetivo2 = new Date("2031-12-10T00:00:00");
contadores[1] .textContent = calculaTempo (tempoObjetivo2);
const tempoObjetivo3 = new Date("2033-10-06T00:00:00");
contadores[2] .textContent = calculaTempo (tempoObjetivo3);
const tempoObjetivo4 = new Date("2034-08-10T00:00:00");
contadores[3] .textContent = calculaTempo (tempoObjetivo4);

function calculaTempo(tempoObjetivo){
let tempoAtual = new Date();
let tempoFinal = tempoObjetivo - tempoAtual;
let segundos = Math.floor (tempoFinal/1000);
return segundos; 
}