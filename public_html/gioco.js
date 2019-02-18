
var indice = 0;
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


var id1=setInterval(function () {
    muovi("#cavallo1", Math.random() * 200, 0,id1);
}, 1000);
var id2=setInterval(function () {
    muovi("#cavallo2", Math.random() * 200, 0,id2);
}, 1000);
var id3=setInterval(function () {
    muovi("#cavallo3", Math.random() * 200, 0,id3);
}, 1000);
var id4=setInterval(function () {
    muovi("#cavallo4", Math.random() * 200, 0,id4);
}, 1000);
var id5=setInterval(function () {
    muovi("#cavallo5", Math.random() * 200, 0,id5);
}, 1000);


function muovi(str, x, y,id) {

    let posX = parseFloat(document.querySelector(str).style.left);
    let posY = parseFloat(document.querySelector(str).style.top);
    posX += x;
    posY += y;
    document.querySelector(str).style.left = posX + "px";
    document.querySelector(str).style.top = posY + "px";

    if (posX+100>= window.innerWidth){
        document.querySelector("#div_info").innerHTML="";
        document.querySelector("#result").style.display="block";
        for (let r=1;r<=5;r++){
            let posizione=document.querySelector("#pos"+r).innerHTML;
            if (posizione === ""){
                document.querySelector("#pos"+r).innerHTML=document.querySelector(str).alt;
                clearInterval(id);
                break;
            }
        }
//        document.querySelector("#result").innerHTML = "Ha vinto " + document.querySelector(str).alt;
//        stop();
    }
    console.log(str, posX, posY);
}

function stop(){
    clearInterval(id1);
    clearInterval(id2);
    clearInterval(id3);
    clearInterval(id4);
    clearInterval(id5);
}
//function informazioni() {
    document.querySelectorAll(".horse").forEach(function (elm, k) {
        elm.onclick=function(){
            document.querySelector("#div_info").innerHTML = "Hai fatto click su "+elm.alt;
        };
        
    });
//}
console.log("pagina gioco js caricata!");
//console.log(sx, alto);al(function() {muovi("#bicicletta",Math.random()*6,0);},1000);