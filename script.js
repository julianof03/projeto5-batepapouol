let nickname;
let nome = "";
let receiver;
let menssagem;
let texto;
let todasmensagens = [];
let meuintervalo

const promise = axios.get("https://mock-api.driven.com.br/api/v6/uol/messages");
promise.then(recebedados);

new function perguntanome() {
    let numvef;
    nome = String(prompt("qual seu nome lindo?"));
    if (!nome) {
        numvef = 0;
        console.log("ainda não");
    } else {
        numve = 2;
        console.log("ufa");
    }
    while (numvef < 1) {
        nome = String(prompt("qual seu nome lindo?"));
        if (nome) {
            numvef = 1;
            console.log("ufa");
        }
        
    }
    entrou(); 
}
function entrou() {
    let notification = `<li>
                    <div>
                        <p class="message">(09:21:45) ${nome} entrou na sala</p>
                    </div>
                </li>`;
    document.querySelector(".listachat").innerHTML += notification;
    meuintervalo = setInterval(crialista2(), 3000);
}

function teste2() {
    receiver = "todos";
    menssagem = document.querySelector(".chatinput");
    texto = menssagem.value;
    let notification = `<li>
                    <div>
                        <p class="message">(09:21:45) ${nome} para <strong>${receiver}</strong>: ${texto} </p>
                    </div>
                </li>`;
    document.querySelector(".listachat").innerHTML += notification;
}

function recebedados(dados) {
    console.log(dados.data);
    todasmensagens = dados.data;
    crialista2();
}

function teste() {
    let menssagem = document.querySelector(".chatinput");
    let texto = menssagem.value;
    console.log(texto);
}

function crialista2() {
    console.log("to atualizando")
    const listavazia = document.querySelector(".listachat");
    let mostra;
    mostra = document.querySelector('message');
    for (let i = 0; i < todasmensagens.length; i++){
        listavazia.innerHTML += 
            `<li>
                    <div>
                        <p class="message">(${todasmensagens[i].time}) ${todasmensagens[i].from} para <strong>${todasmensagens[i].to}</strong>: ${todasmensagens[i].text} </p>
                    </div>
                </li>`;
        mostra = document.querySelector('message');
    }
    
}
    