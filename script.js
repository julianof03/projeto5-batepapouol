let nickname;
let nome = "";
let receiver;
let menssagem;
let texto;
let todasmensagens = [];
let usuario = [];
let meuintervalo;
perguntanome();

function pegamenssagens(){
const promise = axios.get("https://mock-api.driven.com.br/api/v6/uol/messages");
promise.then(recebedados);
}

function perguntanome() {
    nome = String(prompt("qual seu nome lindo?"));
    usuario = {
        name: nome
    }
    const promisse2 = axios.post("https://mock-api.driven.com.br/api/v6/uol/participants", usuario);
    promisse2.then(pegamenssagens());

    promisse2.catch(entrarErro())
}
function entrarErro(error) {
    window.alert("esta nome ja esta sendo usado ou é invalido, tente novamente");
}
function atulizaLogin() {
    
}
function entrou() {
    let notification = `<li>
                    <div class="status">
                        <p class="text">(09:21:45) <strong>${nome}</strong> entrou na sala...</p>
                    </div>
                </li>`;
    document.querySelector(".listachat").innerHTML += notification;
}

function teste2() {

    receiver = "todos";
    menssagem = document.querySelector(".chatinput");
    texto = menssagem.value;
    let notification = `<li>
                    <div>
                        <p class="message">(09:21:45) <strong>${nome}</strong> para <strong>${receiver}</strong>: ${texto} </p>
                    </div>
                </li>`;
    document.querySelector(".listachat").innerHTML += notification;
}

function recebedados(dados) {
    todasmensagens = dados.data;
    crialista2();
}

function teste() {
    let menssagem = document.querySelector(".chatinput");
    let texto = menssagem.value;
}

function crialista2() {
    const listavazia = document.querySelector(".listachat");
    listavazia.innerHTML = "";
    for (let i = 0; i < todasmensagens.length; i++){
        listavazia.innerHTML += 
            `<li class="elementolista"> 
                <div class="${todasmensagens[i].type}">
                    <p class="text ${todasmensagens[i].type}">(${todasmensagens[i].time})  <strong> ${todasmensagens[i].from}</strong> para <strong>${todasmensagens[i].to}</strong>: ${todasmensagens[i].text}</p>
                </div>
            </li>`;
    }
    setTimeout(pegamenssagens, 3000);
}