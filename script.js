const campo_Texto   = document.querySelector(".txtArea_encriptar");
const campo_Mensaje = document.querySelector(".txtArea_Desencriptar");

const matriz_code = [
    ["e", "enter"], //indiec 0 con position 0(e) y 1(enter)
    ["i", "imes"],  //indiec 1 con position 0(i) y 1(imes)1
    ["a", "ai"],    //indiec 2 con position 0(a) y 1(ai)
    ["o", "ober"],  //indiec 3 con position 0(o) y 1(ober)
    ["u", "ufat"],  //indiec 4 con position 0(u) y 1(ufat)
];

function btnEncriptar(){ // funcion para el boton encriptar
    const txtEncriptar = cifrar(campo_Texto.value);  //variable que almacena la funcion cifrar con parametro del textarea
    campo_Mensaje.value = txtEncriptar;             //el textarea mostrara el valor de txtEncriptar
    campo_Texto.value = "";
    campo_Mensaje.style.backgroundImage = "none";
}

function cifrar(fraseEncriptada){                  //funcion cifrar con parametro 
    fraseEncriptada = fraseEncriptada.toLowerCase()
    for(let i = 0; i < matriz_code.length; i++){    //ciclo for que recorrera hasta la el valor del tamaño de la matris
        if(fraseEncriptada.includes(matriz_code[i] [0])){   //si en la la variable fraseEncriptada incluie en su matriz n° indice en la posicion 0
            fraseEncriptada = fraseEncriptada.replaceAll(   //la variable será igual a la variable modifiando a la pocicion 0 con la 1
                matriz_code[i] [0],                         //valores que estan
                matriz_code[i] [1]                          //valores que sustituiran
            );
        }
    }
    return fraseEncriptada;                     //retornamos el valor de la variable
}

function btnDesencriptar(){
    const txtDesencriptar = Descifrar(campo_Texto.value);
    campo_Mensaje.value = txtDesencriptar;
}

function Descifrar(fraseDescifrado){
    fraseDescifrado = fraseDescifrado.toLowerCase()
    for(let i = 0; i < matriz_code.length; i++){
        if(fraseDescifrado.includes(matriz_code[i] [1])){
            fraseDescifrado = fraseDescifrado.replaceAll(
                matriz_code[i] [1],
                matriz_code[i] [0]
            );
        }
    }
    return fraseDescifrado;
}