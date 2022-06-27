let nickname;
let nome = "";
let receiver;
let menssagem;
let texto;
let todasmensagens = [];
let usuario;
let meuintervalo;
let promise;
let promise2;
let promise3;
perguntanome();

function pegamenssagens() { 
    const promise = axios.get("https://mock-api.driven.com.br/api/v6/uol/messages");
    promise.then(recebedados);
}
function perguntanome() {
    nome = prompt("qual seu nome lindo?");
        promise2 = axios.post("https://mock-api.driven.com.br/api/v6/uol/participants",
    {
        name: nome
    }
    );
    promise2.then(pegamenssagens);
    promise2.catch(entrarErro);
    setInterval(atulizaLogin, 5000);
}
function atulizaLogin() {
    console.log("atualizei o login");
    const promisse2 = axios.post("https://mock-api.driven.com.br/api/v6/uol/status",
        {
            name: nome
        });
}
function entrarErro(error) {
    console.log(error);
    location.reload();
}
function teste() {
    local = document.querySelector(".chatinput");
    texto = local.value;  
    console.log(texto);
    menssagem = {
        from: nome,
        to: "Todos",
        text: texto,
        type: "message"
    }
    const promise = axios.post("https://mock-api.driven.com.br/api/v6/uol/messages", menssagem);
    promise.catch(function () {
        location.reload();
    })
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