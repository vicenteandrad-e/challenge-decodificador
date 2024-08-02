// Funções Criptografar e Descriptografar

const textArea = document.querySelector("#principal__conteudo__areatexto");
const mensagem = document.querySelector(".principal__sidebar__setores__mensagem__textarea");

// Mostrando e ocultando elementos dentro do HTML
document.getElementById("principal__sidebar__setor__mensagem").style.display = 'none';
document.getElementById("principal__sidebar__setor__sinalizador").style.display = 'initial';

// Buscar outra maneira e fazer criptografia

function criptografar(stringCriptografada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringCriptografada = stringCriptografada.toLowerCase();
    
    for(let i = 0; i < matrizCodigo.length; i++) {
        if(stringCriptografada.includes(matrizCodigo[i][0])) {
            stringCriptografada = stringCriptografada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringCriptografada;
}

function descriptografar(stringDescriptografada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDescriptografada = stringDescriptografada.toLowerCase();
    
    for(let i = 0; i < matrizCodigo.length; i++) {
        if(stringDescriptografada.includes(matrizCodigo[i][1])) {
            stringDescriptografada = stringDescriptografada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return stringDescriptografada;
}

function btnCriptografar() {
    const textoCriptografado = criptografar(textArea.value);
    if(textoCriptografado == "") {
        alert("Por favor, digite um texto no campo!");
    } else {
        resetarTextoBotao()
        trocarElementos();
        mensagem.value = textoCriptografado;
        textArea.value = "";
    }
}

function btnDescriptografar() {
    const textoDescriptografado = descriptografar(textArea.value);
    if(textoDescriptografado == "" || textoDescriptografado == null){
        alert("Por favor, digite um texto no campo!");
    } else {
        resetarTextoBotao()
        trocarElementos();
        mensagem.value = textoDescriptografado;
        textArea.value = "";
    }
}

// Função para trocar de elementos

function trocarElementos() {
    document.getElementById("principal__sidebar__setor__mensagem").style.display = 'inherit';
    document.getElementById("principal__sidebar__setor__sinalizador").style.display = 'none'; 
}

// Função para copiar
async function copiarTexto() {
    const textoArea = document.querySelector(".principal__sidebar__setores__mensagem__textarea");
    try {
        await navigator.clipboard.writeText(textoArea.value);
        mudarTextoBotao();
    } catch(err) {
        console.log(err.message);
    }
}


// Mudar e resetar valor o botão copiar

function mudarTextoBotao() {
    document.querySelector(".principal__sidebar__setor__mensagem__botao").innerHTML = "Texto Copiado!";
}

function resetarTextoBotao() {
    document.querySelector(".principal__sidebar__setor__mensagem__botao").innerHTML = "Copiar";
}
