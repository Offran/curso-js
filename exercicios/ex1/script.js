// function imc(p1, p2) {
//     let resultado = p1 / (p2 * p2);
//     return resultado;
// }

// console.log(imc(12, 2));

///////////////////////////////////////////////////
function imc() {
    let peso = document.getElementById("peso").value;
    let altura = document.getElementById("altura").value;

    if (!peso || !altura) {
        window.alert(`Informe valores positivos de peso e altura. Lembre-se de colocar a altura em metros.`);
        return;
    } else if (peso < 0 || altura < 0) {
        window.alert(`Peso e Altura devem ser números positivos.`);
        return;
    }

    let imcS = peso / (altura * altura);

    showMessage(imcS);
}

function showMessage(parametro) {
    let resultado = document.getElementById("resposta");

    if (parametro > 0 && parametro < 18.5) {
        resultado.innerHTML = `Seu IMC é ${parametro.toFixed(2)}, você está abaixo do peso`;
    } else if (parametro < 24.9) {
        resultado.innerHTML = `Seu IMC é ${parametro.toFixed(2)}, você está com o peso normal`;
    } else if (parametro < 29.9) {
        resultado.innerHTML = `Seu IMC é ${parametro.toFixed(2)}, você está com sobrepeso`;
    } else if (parametro < 34.99) {
        resultado.innerHTML = `Seu IMC é ${parametro.toFixed(2)}, você está com obesidade de grau 1`;
    } else if (parametro < 39.99) {
        resultado.innerHTML = `Seu IMC é ${parametro.toFixed(2)}, você está com obesidade de grau 2 (severa)`;
    } else if (parametro > 40) {
        resultado.innerHTML = `Seu IMC é ${parametro.toFixed(2)}, você está com obesidade de grau 3 (mórbida)`;
    } else {
        resultado.innerHTML = `Dados incorretos`;
    }
}