function trocarMoeda() {
    let real = document.getElementById("moeda").value;
    let resposta = document.getElementById("resposta");

    try {
        if (!real) {
            throw new Error();
        } else {
            const dl = trocaDolar(real);
            const eu = trocaEuro(real);
            const li = trocaLibra(real);

            resposta.innerText = `A conversão de ${real} R$ dá ${dl.toFixed(2)} USD, ${eu.toFixed(2)} € e ${li.toFixed(2)} £`;
        }
    }
    catch (err) {
        resposta.innerText = `Digite um valor válido.`;
    }
}

function trocaDolar(moeda) {
    let dolar = moeda * 4.91;
    return dolar;
}

function trocaEuro(moeda) {
    let euro = moeda * 5.26;
    return euro;
}

function trocaLibra(moeda) {
    let libra = moeda * 6.03;
    return libra;
}