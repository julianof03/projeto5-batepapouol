function vira(carta) {;
    if (carta.classList.contains("frente")) {
        carta.classList.remove("frente");
        carta.classList.add("verso");
    } else {
        carta.classList.remove("verso");
        carta.classList.add("frente"); 
    }
    console.log("virou");
}