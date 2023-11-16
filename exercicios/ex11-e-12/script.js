function verificarPalindromo() {
    let palavra = document.getElementById("palavra").value;
    let compara = palavra.split("").reverse().join("");

    try {
        if (!palavra) {
            throw new Error("Digite uma palavra.");
        } else if (!isNaN(palavra)) {
            throw new Error("Use letras, não números.");
        } else if (palavra == compara) {
            resposta.innerText = `A palavra ${palavra} é um palíndromo.`;
            resposta.style.color = "green";
        } else if (palavra != compara) {
            throw new Error("Não é palíndromo");
        }
    } catch (err) {
        resposta.innerText = err.message;
        resposta.style.color = "red";
    }
}

// else if (palavra.split("").find(0, 1, 2, 3, 4, 5, 6, 7, 8, 9)){
//     throw new Error ("Use apelas letras, não números.");

// if (palavra.search("1", "2", "3", "4", "5", "6", "7", "8", "9", "0")){
//     throw new Error("Não podem haver números na sua palavra.");
// }

function entrarBalada() {
    let nome = document.getElementById("nome").value;
    let data = document.getElementById("data").value;
    let ano = data.slice(-4);

    validacao(nome, ano);
}

function validacao(nome, ano) {

    try {
        if (!nome) {
            throw new Error("Digite um nome.");
        } else if (!isNaN(nome)) {
            throw new Error("Use letras, não números.");
        } else if (nome) {
            resposta2.innerText = `${nome}`;
            resposta2.style.color = "blue";
        }
    }
    catch (err) {
        resposta2.innerText = err.message;
        resposta2.style.color = "red";
    }

    try {
        if (!ano) {
            throw new Error("Digite uma data.");
        } else if (isNaN(ano)) {
            throw new Error("Sua idade deve ser números.");
        } else if (ano) {
            const idade = 2023 - Number(ano);
            if (idade < 18) {
                throw new Error("Você é menor de idade, não pode entrar.");
            } else {
                respostaIdade.innerText = `${idade}`;
                respostaIdade.style.color = "blue";
            }
        }
    } catch (err) {
        respostaIdade.innerText = err.message;
        respostaIdade.style.color = "red";
    }
}

function mascara(){
    let input = document.getElementById("data");
    let inputValue = input.value
    let inputlength = inputValue.inputlength;

    if (inputlength == 2 || inputlength == 5){
        inputValue.value += "/";
    }
}