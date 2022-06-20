const tarefas = [
  { cor: "azul"},
  {
    cor: "rosa"
    }
  
];
const indice = [
  { num: "1"},
  { num: "2"}  
];

let quantia = prompt("quantas cartas deseja jogar?");
let contador = quantia;
let contador2 = quantia / 2;
let contador3 = quantia / 2;
let contaviradas = 0;
let ncartas = 0;
let firstCard, secondCard;
let carta01;
let carta02;
let cartacoringa;
new function criacartas() {
    while (quantia % 2 != 0 || quantia < 4 || quantia > 14) {
        quantia = prompt("por favor escolha um numero par de cartas maior que 4 e menor que 14");
    }
    if (quantia % 2 == 0) {
        if (contador2 % 2 == 1) {
            const indice3 = Math.floor(Math.random() * indice.length);
            if (indice3 == 0) {
                contador2--;
                contador3++;
            }
            else {
                contador2++;
                contador3--; 
            }
    }
        while (contador > 0) {
            const indice2 = Math.floor(Math.random() * indice.length);
            if (indice2 == 0) {6
                criazul();
            }

            if (indice2 == 1) {
                criarosa();
            }
        }
    }
 }

function criazul() {
    if (contador2 > 0) {
        contador2--;
        contador--;
        const cartastemplate= `
        <li><div class="papagaio ${tarefas[0].cor} frente" onclick="vira(this)"><img src="images/papagaio.png"></div></li>
        `;
        document.querySelector("ul").innerHTML += cartastemplate;
        console.log(contador);
        console.log(contador2 + "-----");
    }
}
function criarosa() {
    if (contador3 > 0) {
        contador3--;
        contador--;
        const cartastemplate= `
        <li><div class="papagaio ${tarefas[1].cor} frente" onclick="vira(this)"><img src="images/papagaio.png"></div></li>
        `;
        document.querySelector("ul").innerHTML += cartastemplate;
    }
}
function vira(carta) {
    contaviradas++;
    cartacoringa = carta;
    if (carta.classList.contains("frente")) {
        carta.classList.remove("frente");
    } else {
        unflip();
    }
    contaviradas++;16
    if (!firstCard) {
        firstCard = carta;
        carta01 = firstCard;
        return false;
    }
    secondCard = carta;
    carta02 = secondCard;
        checa();
}
function checa() {
    console.log(carta01);
    console.log(carta02);
    if (firstCard.classList.contains("azul")) {
        if (secondCard.classList.contains("azul")) {
            console.log("deu1111");
            ncartas++;
            setTimeout(verificajogo, 1000);
            firstCard = null;
            secondCard = null;
            return false;
        }
        if (secondCard.classList.contains("rosa")){
            console.log("deunao1111");
            setTimeout(unfliplate, 1000);
            return false;
        }
    }
    if (firstCard.classList.contains("rosa")) {
        if (secondCard.classList.contains("rosa")) {
            console.log("deu2222");
            ncartas++;
            setTimeout(verificajogo, 1000);
            firstCard = null;
            secondCard = null;
            return false;
        }
        if (secondCard.classList.contains("azul")){
            console.log("deunao222")
            setTimeout(unfliplate, 1000);
            return false;
        }
    }
}
function unflip() {
    cartacoringa.classList.add("frente");
}
function unfliplate() {
    firstCard.classList.add("frente");
    secondCard.classList.add("frente");
    firstCard = null;
    secondCard = null;
}
function verificajogo() {
    if (ncartas >= quantia / 2) {
        alert(`Você ganhou em ${contaviradas/2} jogadas!`);      
    }
}