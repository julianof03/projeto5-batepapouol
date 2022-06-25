let nickname;
let nome;
let receiver;
let menssagem;
let texto;
let todasmensagens = [];

nome = window.prompt("qual seu nome lindo?");

const promise = axios.get("https://mock-api.driven.com.br/api/v6/uol/messages");
promise.then(recebedados);

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

function entrou() {
    let notification = `<li>
                    <div>kk
                        <p class="message">(09:21:45) ${nome} entrou na sala</p>
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
    const listavazia = document.querySelector(".listachat");
    for (let i = 0; i < todasmensagens.length; i++){
        listavazia.innerHTML += 
            `<li>
                    <div>
                        <p class="message">(${todasmensagens[i].time}) ${todasmensagens[i].from} para <strong>${todasmensagens[i].to}</strong>: ${todasmensagens[i].text} </p>
                    </div>
                </li>`;
    }
}

crialista2();
    