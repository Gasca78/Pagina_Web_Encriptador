const getText = document.querySelector("#texto");
const outputText = document.querySelector("#texto-salida");
const matriz = [
    ["i", "imes"],
    ["e", "enter"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
];

function botonEncript(){
    const text = encriptar(getText.value);
    outputText.value = text;
}

function botonDesencript(){
    text = desencriptar(getText.value);
    outputText.value = text;
}

function encriptar(frase){
    for (let i=0; i < matriz.length; i++){
        if (frase.includes(matriz[i][0])){
            frase = frase.replaceAll(
                matriz[i][0],
                matriz[i][1]
            );
        }
    }
    return frase;
}

function desencriptar(frase){
    for (let i=0; i < matriz.length; i++){
        if (frase.includes(matriz[i][1])){
            frase = frase.replaceAll(
                matriz[i][1],
                matriz[i][0]
            );
        }
    }
    return frase;
}

function copiar(){
    const copy = document.querySelector("#texto-salida");
    copy.select();
    document.execCommand("copy")
}

function reemplazar(){
    var reemImagen = document.querySelector("#imagen-mensaje");
    var reemTexto = document.querySelector("#texto-salida");
    var reemCopy = document.querySelector("#copy")
    if (reemImagen.style.display === 'none') {
        reem.style.display = 'block';
    } else {
        reemImagen.style.display = 'none';
    }
    if (reemTexto.style.display === 'none'){
        reemTexto.style.display = 'block';
    } else {
        reemTexto.style.display = 'none';
    }
    if (reemCopy.style.display === 'none'){
        reemCopy.style.display = 'block';
    } else {
        reemCopy.style.display = 'none';
    }
}