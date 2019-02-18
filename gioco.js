
function startRace() {
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
    document.querySelectorAll(".horse").forEach(function (elm, k) {
        elm.vel = 5 + Math.random() * 15;
        elm.idtimer = setInterval(function () {
            muovi("#" + elm.id, elm.vel + (-5 + Math.random() * 10), 0);
        }, 1000 / 25);
        elm.onclick = function () {
            document.querySelector("#div_info").innerHTML = "Hai fatto click su " + elm.alt;
        };

    });
}

// funzione principale per il movimento e controllo di vittoria del cavallo
function muovi(str, x, y) {
    console.log(str, x, y);
    // rilevo la posizione dei cavalli e aggiungo l'allungo corrente
    let posX = parseFloat(document.querySelector(str).style.left);
    let posY = parseFloat(document.querySelector(str).style.top);
    posX += x;
    posY += y;
    document.querySelector(str).style.left = posX + "px";
    document.querySelector(str).style.top = posY + "px";
    id = document.querySelector(str).idtimer;
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


