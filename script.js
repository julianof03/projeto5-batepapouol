const tarefas = [
    {
        cor: `<img class="verso gif" src="images/explodyparrot.gif">`
    },
    {
        cor: `<img class="verso gif" src="images/unicornparrot.gif">`
    },
    {
        cor: `<img class="verso gif" src="images/metalparrot.gif">`
    },
    {
        cor: `<img class="verso gif" src="images/revertitparrot.gif">`
    },
    {
        cor: `<img class="verso gif" src="images/tripletsparrot.gif">`
    },
    {
        cor: `<img class="verso gif" src="images/fiestaparrot.gif">`
    },
    {
        cor: `<img class="verso gif" src="images/bobrossparrot.gif">`
    },
  
];
const indice = [
    { num: "1" },
    { num: "2" },
    { num: "3" },
    { num: "4" },
    { num: "5" }, 
    { num: "6" },
    { num: "7" }
  
];

let quantia;
let quantiabi;

let contador;4
let contador1 = 2;
let contador2 = 2;
let contador3 = 2;
let contador4 = 2;
let contador5 = 2;
let contador6 = 2;
let contador7 = 2;

let contaviradas = 0;
let ncartas = 0;

let firstCard, secondCard;
let cartacoringa;
let gifcoringa;4
let papagaiocoringa;

new function criacartas() {
    quantia = prompt("quantas cartas deseja jogar?");
    
    if (quantia % 2 != 0 || quantia < 4 || quantia > 14) {
        quantiabi = 0;
        console.log("ainda não");
    }
    else {
        quantiabi = 2;
        console.log("ufa");
    }
    while (quantiabi < 1) {
        quantia = prompt("por favor escolha um numero par de cartas maior que 4 e menor que 14");
        if (quantia % 2 == 0 || quantia >= 4 || quantia <= 14) {
        quantiabi = 2;
        console.log("ufa");
        }
    }
    contador = quantia;
        while (contador > 0) {
            const indice2 = Math.floor(Math.random() * indice.length);
            if (quantia == 4) {
                if (indice2 == 1) {
                    criap1();
                }
                if (indice2 == 2) {
                    criap2();
                }
            }
            if (quantia == 6) {
                if (indice2 == 0) {
                    criap1();
                }
                if (indice2 == 1) {
                    criap2();
                }
                if (indice2 == 2) {
                    criap3();
                }
            }
            if (quantia == 8) {
                if (indice2 == 0) {
                    criap1();
                }
                if (indice2 == 1) {
                    criap2();
                }
                if (indice2 == 2) {
                    criap3();
                }
                if (indice2 == 3) {
                    criap4();
                }
            }
            if (quantia == 10) {
                if (indice2 == 0) {
                    criap1();
                }
                if (indice2 == 1) {
                    criap2();
                }
                if (indice2 == 2) {
                    criap3();
                }
                if (indice2 == 3) {
                    criap4();
                }
                if (indice2 == 4) {
                    criap5();
                }
            }
            if (quantia == 12) {
                if (indice2 == 0) {
                    criap1();
                }
                if (indice2 == 1) {
                    criap2();
                }
                if (indice2 == 2) {
                    criap3();
                }
                if (indice2 == 3) {
                    criap4();
                }
                if (indice2 == 4) {
                    criap5();
                }
                if (indice2 == 5) {
                    criap6();
                }
            }
            if (quantia == 14) {
                if (indice2 == 0) {
                    criap1();
                }
                if (indice2 == 1) {
                    criap2();
                }
                if (indice2 == 2) {
                    criap3();
                }
                if (indice2 == 3) {
                    criap4();
                }
                if (indice2 == 4) {
                    criap5();
                }
                if (indice2 == 5) {
                    criap6();
                }
                if (indice2 == 6) {
                    criap7();
                }
            }
        }
}
    
 

    function criap1() {
        if (contador1 > 0) {

            contador1--;
            contador--;

            const cartastemplate = `
        <li><div class="papagaio p1 frente" onclick="vira(this)">${tarefas[0].cor}<img  class="verso frente foto" src="images/papagaio.png"></div></li>
        `;

            document.querySelector("ul").innerHTML += cartastemplate;
        }
    }
    function criap2() {
        if (contador2 > 0) {

            contador2--;
            contador--;

            const cartastemplate = `
        <li><div class="papagaio p2 frente" onclick="vira(this)">${tarefas[1].cor}<img  class="verso frente foto" src="images/papagaio.png"></div></li>
        `;

            document.querySelector("ul").innerHTML += cartastemplate;
        }
    }

    function criap3() {
        if (contador3 > 0) {

            contador3--;
            contador--;

            const cartastemplate = `
        <li><div class="papagaio p3 frente" onclick="vira(this)">${tarefas[2].cor}<img  class="verso frente foto" src="images/papagaio.png"></div></li>
        `;

            document.querySelector("ul").innerHTML += cartastemplate;
        }
    }

    function criap4() {
        if (contador4 > 0) {

            contador4--;
            contador--;

            const cartastemplate = `
        <li><div class="papagaio p4 frente" onclick="vira(this)">${tarefas[3].cor}<img  class="verso frente foto" src="images/papagaio.png"></div></li>
        `;

            document.querySelector("ul").innerHTML += cartastemplate;
        }
    }

    function criap5() {
        if (contador5 > 0) {

            contador5--;
            contador--;

            const cartastemplate = `
        <li><div class="papagaio p5 frente" onclick="vira(this)">${tarefas[4].cor}<img  class="verso frente foto" src="images/papagaio.png"></div></li>
        `;

            document.querySelector("ul").innerHTML += cartastemplate;
        }
    }

    function criap6() {
        if (contador6 > 0) {

            contador6--;
            contador--;

            const cartastemplate = `
        <li><div class="papagaio p6 frente" onclick="vira(this)">${tarefas[5].cor}<img  class="verso frente foto" src="images/papagaio.png"></div></li>
        `;

            document.querySelector("ul").innerHTML += cartastemplate;
        }
    }

    function criap7() {
        if (contador7 > 0) {

            contador7--;
            contador--;

            const cartastemplate = `
        <li><div class="papagaio p7 frente" onclick="vira(this)">${tarefas[6].cor}<img  class="verso frente foto" src="images/papagaio.png"></div></li>
        `;

            document.querySelector("ul").innerHTML += cartastemplate;
        }
    }

    function vira(carta) {
        contaviradas++;
        cartacoringa = carta;

        let gif = carta.querySelector(".gif");
        let papagaio = carta.querySelector(".foto");

        gifcoringa = gif;
        papagaiocoringa = papagaio;

        if (carta.classList.contains("frente")) {
            carta.classList.remove("frente");
            papagaio.classList.remove("frente");
            gif.classList.add("frente");
        }
        contaviradas++; 16
        if (!firstCard) {
            firstCard = carta;
            return false;
        }
        secondCard = carta;
        checa();
    }
    function checa() {

        if (firstCard.classList.contains("p1")) {
            if (secondCard.classList.contains("p1")) {
                ncartas++;
                firstCard.onclick = '';
                secondCard.onclick = '';

                setTimeout(verificajogo, 1000);

                firstCard = null;
                secondCard = null;

                return false;
            }
            else {
                setTimeout(unfliplate, 1000);

                return false;
            }
        }


        if (firstCard.classList.contains("p2")) {
            if (secondCard.classList.contains("p2")) {
                ncartas++;
                firstCard.onclick = '';
                secondCard.onclick = '';
                setTimeout(verificajogo, 1000);
                firstCard = null;
                secondCard = null;
                return false;
            }
            else {
                setTimeout(unfliplate, 1000);
                return false;
            }
        }
        if (firstCard.classList.contains("p3")) {
            if (secondCard.classList.contains("p3")) {
                ncartas++;
                firstCard.onclick = '';
                secondCard.onclick = '';
                setTimeout(verificajogo, 1000);
                firstCard = null;
                secondCard = null;
                return false;
            }
            else {
                setTimeout(unfliplate, 1000);
                return false;
            }
        }
        if (firstCard.classList.contains("p4")) {
            if (secondCard.classList.contains("p4")) {
                ncartas++;
                firstCard.onclick = '';
                secondCard.onclick = '';
                setTimeout(verificajogo, 1000);
                firstCard = null;
                secondCard = null;
                return false;
            }
            else {
                setTimeout(unfliplate, 1000);
                return false;
            }
        }
        if (firstCard.classList.contains("p5")) {
            if (secondCard.classList.contains("p5")) {
                ncartas++;
                firstCard.onclick = '';
                secondCard.onclick = '';
                setTimeout(verificajogo, 1000);
                firstCard = null;
                secondCard = null;
                return false;
            }
            else {
                setTimeout(unfliplate, 1000);
                return false;
            }
        }
        if (firstCard.classList.contains("p6")) {
            if (secondCard.classList.contains("p6")) {
                ncartas++;
                firstCard.onclick = '';
                secondCard.onclick = '';
                setTimeout(verificajogo, 1000);
                firstCard = null;
                secondCard = null;
                return false;
            }
            else {
                setTimeout(unfliplate, 1000);
                return false;
            }
        }
        if (firstCard.classList.contains("p7")) {
            if (secondCard.classList.contains("p7")) {
                ncartas++;
                firstCard.onclick = '';
                secondCard.onclick = '';
                setTimeout(verificajogo, 1000);
                firstCard = null;
                secondCard = null;
                return false;
            }
            else {
                setTimeout(unfliplate, 1000);
                return false;
            }
        }
    }
    function unfliplate() {

        let gifcoringa2 = firstCard.querySelector(".gif");
        let papagaiocoringa2 = firstCard.querySelector(".foto");

        firstCard.classList.add("frente");
        secondCard.classList.add("frente");

        papagaiocoringa.classList.add("frente");
        gifcoringa.classList.remove("frente");

        papagaiocoringa2.classList.add("frente");
        gifcoringa2.classList.remove("frente");

        firstCard = null;
        secondCard = null;
    }
    function verificajogo() {
        if (ncartas >= quantia / 2) {
            alert(`Você ganhou em ${contaviradas / 2} jogadas!`);
        }
    }
