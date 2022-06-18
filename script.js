const tarefas = [
  { cor: "azul"},
  {
    cor: "rosa"
    }
  
];
let quantia = prompt("quantas cartas deseja jogar?");
new function criacartas() {
    while (quantia % 2 != 0) {
        quantia = prompt("por favor escolha um numero par de cartas");
    }
    if (quantia % 2 == 0){
        for (let i = 0; i < quantia; i++){

            tarefas.sort(comparador);
            const cartastemplate= `
        <li><div class="papagaio ${tarefas[0].cor} frente" onclick="vira(this)"><img src="images/papagaio.png"></div></li>
        `;
            document.querySelector("ul").innerHTML += cartastemplate;
        }
    }
 }
function vira(carta) {
    if (carta.classList.contains("frente")) {
        carta.classList.remove("frente");
        carta.classList.add("verso");
    } else {
        carta.classList.remove("verso");
        carta.classList.add("frente");
    }
    console.log("virou");
}
function comparador() { 
	return Math.random() - 0.5; 
}