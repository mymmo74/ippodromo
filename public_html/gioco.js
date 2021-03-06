// stabilisco le posizioni di partenza dei cavalli (assegnando la proprietà top)
document.querySelector("#cavallo1").style.left = "0px";
document.querySelector("#cavallo1").style.top = "50px";

document.querySelector("#cavallo2").style.left = "0px";
document.querySelector("#cavallo2").style.top = "150px";

document.querySelector("#cavallo3").style.left = "0px";
document.querySelector("#cavallo3").style.top = "250px";

document.querySelector("#cavallo4").style.left = "0px";
document.querySelector("#cavallo4").style.top = "350px";

document.querySelector("#cavallo5").style.left = "0px";
document.querySelector("#cavallo5").style.top = "450px";


// setto i timer, di ognuna mi faccio restituire un id, che mi servirà per stoppare il timer
var id1 = setInterval(function () {
    muovi("#cavallo1", Math.random() * 200, 0, id1);
}, 1000);
var id2 = setInterval(function () {
    muovi("#cavallo2", Math.random() * 200, 0, id2);
}, 1000);
var id3 = setInterval(function () {
    muovi("#cavallo3", Math.random() * 200, 0, id3);
}, 1000);
var id4 = setInterval(function () {
    muovi("#cavallo4", Math.random() * 200, 0, id4);
}, 1000);
var id5 = setInterval(function () {
    muovi("#cavallo5", Math.random() * 200, 0, id5);
}, 1000);


// funzione principale per il movimento e controllo di vittoria del cavallo
function muovi(str, x, y, id) {
    // rilevo la posizione dei cavalli e aggiungo l'allungo corrente
    let posX = parseFloat(document.querySelector(str).style.left);
    let posY = parseFloat(document.querySelector(str).style.top);
    posX += x;
    posY += y;
    document.querySelector(str).style.left = posX + "px";
    document.querySelector(str).style.top = posY + "px";

    // verifico la posizione del cavallo, se ha tagliato il traguardo
    // l'immagine cavallo è larga 100px, ecco perchè verifico se a tagliare
    // il traguardo è la parte iniziale del cavallo
    if (posX + 100 >= window.innerWidth) {
        // cancello l'eventuale box informazioni cavalli
        document.querySelector("#div_info").innerHTML = "";
        // visualizzo il box per l'ordine di arrivo
        document.querySelector("#result").style.display = "block";
        // effettuo la verifica della posizione d'arrivo
        for (let r = 1; r <= 5; r++) {
            let posizione = document.querySelector("#pos" + r).innerHTML;
            // se il contenuto dello span con id (pos+r) è vuoto, allora questa è la posizione del cavallo
            if (posizione === "") {
                // assegno allo span la proprietà "ALT" dell'immagine, vi è contenuto il nome del cavallo
                document.querySelector("#pos" + r).innerHTML = document.querySelector(str).alt;
                // stoppo il timer (il cavallo può fermare la sua corsa)
                clearInterval(id);
                // esco dal ciclo for
                break;
            }
        }
    }
    // stampo sulla console il cavallo e le relative posizioni sullo schermo
    console.log(str, posX, posY);
}

// con questa query verifico se è stato fatto click su di un cavallo (a gara iniziata)
// e ne stampo in un box le relative informazioni
document.querySelectorAll(".horse").forEach(function (elm, k) {
    elm.onclick = function () {
        document.querySelector("#div_info").innerHTML = "Hai fatto click su " + elm.alt;
    };

});