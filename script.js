let nickname;
let nome = "";
let receiver;
let menssagem;
let texto;
let todasmensagens = [];
let usuario = [];
let meuintervalo;
perguntanome();

function pegamenssagens() { 
    const promise = axios.get("https://mock-api.driven.com.br/api/v6/uol/messages");
    promise.then(recebedados);
}
function atulizaLogin() {
    console.log("atualizei o login");
    const promisse2 = axios.post("https://mock-api.driven.com.br/api/v6/uol/status", usuario);
}
function fazlogin() {
    const promisse2 = axios.post("https://mock-api.driven.com.br/api/v6/uol/participants", usuario);
    promisse2.then(pegamenssagens());
    promisse2.catch(entrarErro());
    const intervalo = setInterval(atulizaLogin, 4999);
}
function perguntanome() {
    nome = String(prompt("qual seu nome lindo?"));
    usuario = {
        name: nome
    }
    fazlogin();
}
function entrarErro(error) {
    window.alert("esta nome ja esta sendo usado ou é invalido, tente novamente");
}
function entrou() {
    let notification = `<li>
                    <div class="status">
                        <p class="text">(09:21:45) <strong>${nome}</strong> entrou na sala...</p>
                    </div>
                </li>`;
    document.querySelector(".listachat").innerHTML += notification;
}
function teste() {
    local = document.querySelector(".chatinput");
    texto = local.value;
    if (texto != null) {
        console.log(texto);
        menssagem = {
            from: nome,
            to: "Todos",
            text: texto,
            type: "message"
        }
    }
    const promisse3 = axios.post("https://mock-api.driven.com.br/api/v6/uol/messages", menssagem);
}
function recebedados(dados) {
    todasmensagens = dados.data;
    crialista2();
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
    const elementopai = document.querySelector('.listachat');
    const elementoQueQueroQueApareca = elementopai.lastElementChild;
    elementoQueQueroQueApareca.scrollIntoView();
    setTimeout(pegamenssagens, 3000);
}