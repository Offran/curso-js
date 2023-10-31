/*

1. Iniciar o jogo, criando as portas com seus valores e status (aberta ou fechada);
2. Criar função que permita selecionar a porta, verificando o status e exibindo mensagem adequada.
3. Criar função que encerra o jogo caso o jogador escolha a desistência.
4. Criar função que encerra o jogo caso o jogador escolha o monstro.
5. Criar função que encerra o jogo caso o jogador escolha o dinheiro.

*/
let portas;

// Criação da variável portas.

function startGame() {
    portas = [];
    for (let i = 1; i <= 6; i++) {
        const porta = criarPorta(i);
        portas.push(porta);
    }
}

/* Uma função que cria um array de 6 elementos enquanto os denomina "1", "2", "3", "4", "5" e "6".
O array acima é guardado na variável "portas", feita anteriormente.

Uma constante "porta" foi criada e atribuída com a função selecionaPorta(valor de i).

Falta falar sobre portas.push(porta).

*/
function reset() {
    startGame();
    // Precisa resetar a imagem inicial e reativar o click.
    for (let i = 0; i < portas.length; i++){
        portas[i].status = 0;
        // Define o status das portas para zero.0
    }

    for (let i = 1; i <= 6; i++){
        const elementoPorta = document.getElementById("porta-" + i);
        // Percorre os ids com esses nomes.
        elementoPorta.src = "https://pormade.vtexassets.com/arquivos/ids/155846/kit-porta-pronta-lisa-solida-preta.jpg?v=637799261927600000"
        elementoPorta.onclick = function(){
            selecionaPorta("porta-" + i);
        }
        elementoPorta.style.cursor = "pointer";
        // 
    }
    
}

startGame();

function criarPorta(numPorta) {
    let porta;
    switch (numPorta) {
        case 1:
        case 2:
        case 5:
            porta = { status: 0, valor: "nada", msg: "Não há nada aqui." };
            break;
        case 3:
            porta = { status: 0, valor: "monstro", msg: "Encontrou o monstro, perdeu." }
            break;
        case 4:
            porta = { status: 0, valor: "dinheiro", msg: "Encontrou o dinheiro, ganhou." }
            break;
        case 6:
            porta = { status: 0, valor: "sair", msg: "Você desistiu do jogo." }
            break;
    }
    return porta;
}

function selecionaPorta(idPorta) {
    const elementoPorta = document.getElementById(idPorta);
    const numPorta = Number(idPorta.replace("porta-", ""));

    const porta = portas[numPorta - 1];
    porta.status = 1;

    console.log(portas);

    elementoPorta.style.cursor = "auto";

    if (numPorta < 3 || numPorta == 5) {
        elementoPorta.src = "https://www.shutterstock.com/image-illustration/nothing-red-grungy-rectangle-stamp-260nw-1793816815.jpg";
        elementoPorta.onclick = null;
    } else if (numPorta == 3) {
        elementoPorta.src = "https://gartic.com.br/imgs/mural/lu/lud_lops/monstro.png";
        elementoPorta.onclick = null;
    } else if (numPorta == 4) {
        elementoPorta.src = "https://img.freepik.com/vetores-premium/conceito-de-empresario-rico-empresario-de-milionarios-sentado-na-pilha-de-moeda-ilustracao-vetorial_77116-1961.jpg?w=360";
        elementoPorta.onclick = null;
    } else {
        elementoPorta.src = "https://cdn.pensador.com/img/frase/al/mi/almir_silva_o_desistente_e_um_perdedor_por_antecipacao_l58oe8j.jpg";
        elementoPorta.onclick = null;
    }


    //Precisa inativar o click.

    console.log(elementoPorta);

    return window.alert(porta.msg);

}


// function mudarImagem() {
//     window.alert("A imagem foi clicada.");
// }

// let imagens = [
//     "https://www.shutterstock.com/image-illustration/nothing-red-grungy-rectangle-stamp-260nw-1793816815.jpg", // nothing
//     "https://img.freepik.com/vetores-premium/conceito-de-empresario-rico-empresario-de-milionarios-sentado-na-pilha-de-moeda-ilustracao-vetorial_77116-1961.jpg?w=360", // pilha de dinheiro
//     "https://gartic.com.br/imgs/mural/lu/lud_lops/monstro.png" // monstro
// ];

// function mudaPorta() {

// }

// function teste() {
//     let numPorta = Number(document.getElementById("button").value);

//     if (!numPorta || numPorta < 1) {
//         window.alert("Escolha um valor de porta entre 1 e 6!");
//     } else if (numPorta < 3 && numPorta > 4) {
//         mudaPorta(vazia);
//     } else if (numPorta == 3) {
//         mudaPorta(monstro);
//     } else {
//         mudaPorta(dinheiro);
//     }
// }

