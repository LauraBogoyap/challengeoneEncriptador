const btnEncriptar = document.querySelector("#btn-encriptar");
const btnDesencriptar = document.querySelector("#btn-desencriptar");

const text_entrada = document.querySelector("text_entrada")
const card_salida = document.querySelector(".card_salida")


btnEncriptar.addEventListener("click",encriptar);
btnDesencriptar.addEventListener("click",desencriptar);



// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"


function encriptar(e){
    e.preventDefault();
    let text_entrada = document.getElementById("text_entrada").value
    var entrada = text_entrada.toLowerCase();

    var resultado = "";
    for (let i = 0; i < entrada.length; i++) {
        if(entrada[i] =="a"){
            resultado = resultado + entrada[i].replace("a", "ai");
        }
        else if(entrada[i] =="e"){
            resultado = resultado + entrada[i].replace("e", "enter");

        }else if(entrada[i] =="i"){
            resultado = resultado + entrada[i].replace("i", "imes");
        }
        else if(entrada[i] =="o"){
            resultado = resultado + entrada[i].replace("o", "ober");

        }else if(entrada[i] =="u"){
            resultado = resultado + entrada[i].replace("u", "ufat");

        }else{
            resultado = resultado + entrada[i];

        }
        text_salida.style.backgroundImage = "none";
    document.getElementById("text_salida").innerHTML = resultado;
    }
    limpiarEspacio();
    
}

function desencriptar(e){
    e.preventDefault();
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    let text_entrada = document.getElementById("text_entrada").value
    text_entrada = text_entrada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(text_entrada.includes(matrizCodigo[i][1])){
            text_entrada = text_entrada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    }
    document.getElementById("text_salida").innerHTML = text_entrada;
    limpiarEspacio()
    
}

function limpiarEspacio() {
    document.getElementById("text_entrada").value = "";
  }

function copiar() {
var copyText = document.getElementById("text_salida");
// var copyText = document.querySelector(".card").textContent;
copyText.select();
navigator.clipboard.writeText(copyText.value)
}
  
//   document.querySelector("#copy").addEventListener("click", copy);