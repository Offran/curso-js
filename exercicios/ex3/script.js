// function mediaPonderada() {
//     let n2 = Number(document.getElementById("nota2").value);
//     let n1 = Number(document.getElementById("nota1").value);
//     let media = (n1 + n2 + n2) / 3;
//     let resposta = document.getElementById("resposta");

//     if (!n1 || !n2) {
//         resposta.innerHTML = `Preencha os dois campos!`;
//     } else if (n1 < 0 || n2 < 0) {
//         resposta.innerHTML = `Não é possível que as notas sejam menores que zero, digite novamente.`;
//     } else if (media > 0 && media < 7) {
//         resposta.innerHTML = `Sua média foi ${media.toFixed(2)}. Infelizmente você foi reprovado.`;
//     } else {
//         resposta.innerHTML = `Sua média foi ${media.toFixed(2)}. Parabéns, você foi aprovado.`;
//     }
// }

function calcularMedia() {
    let n1 = Number(document.getElementById("nota1").value);
    let n2 = Number(document.getElementById("nota2").value);

    erro(n1, n2);
}

function erro(n1, n2) {
    if (!n1 || !n2) {
        window.alert("Preencha os dois campos!");
    } else if (n1 > 10 || n2 > 10) {
        window.alert("Os valores das notas só vão até 10!");
    } else if (n1 < 0 || n2 < 0) {
        window.alert("Nenhuma das notas pode ser menor que zero!");
    } else {
        let media = (n1 + n2 + n2) / 3;
        mensagemNota(media);
    }
}

function mensagemNota(media) {
    let resposta = document.getElementById("resposta");

    if (media < 7) {
        resposta.innerHTML = `Sua média foi ${media.toFixed(2)}. Infelizmente você foi reprovado.`;
    } else {
        resposta.innerHTML = `Sua média foi ${media.toFixed(2)}. Parabéns, você foi aprovado.`;
    }
}