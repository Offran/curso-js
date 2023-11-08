const nomeNotas = [];
const campeao = { nome: "", nota: -1 };
// manter o campeão com nota negativa no início

function adicionarParticipante() {
    let participante = document.getElementById("nome").value;
    let nota = Number(document.getElementById("nota").value);

    if (participante && !isNaN(nota)) {
        nomeNotas.push({ participante, nota });
        document.getElementById("nome").value = "";
        document.getElementById("nota").value = "";
        //limpando o campo do nome e nota
    }
}

function quemCampeao() {
    if (nomeNotas.length > 0) {
        for (const { participante, nota } of nomeNotas) {
            if (nota > campeao.nota) {
                campeao.nome = participante;
                campeao.nota = nota;
            }
        }
        let resposta = document.getElementById("resultado");
        resposta.innerText = "Campeão: " + campeao.nome + "      " + "Nota: " + campeao.nota;
    }
}