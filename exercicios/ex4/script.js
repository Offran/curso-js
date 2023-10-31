let contador = 0;

function ajudarBart() {
    let resposta = document.getElementById("resposta");

    if (contador < 50) {
        if (contador % 2 == 1) {
            for (let i = 0; i < 1; i++) {
                resposta.innerHTML += `Não andarei de skate no corredor da escola. <br>`;
                contador++;
            }
        } else {
            resposta.innerHTML += `Eu não vou encorajar o Ralph a voar. `;
            contador++;
        }
    } else {
        window.alert("Você já preencheu o quadro.");
    }
}