function validacao() {
    let nome = document.getElementById("nome").value;
    let idade = Number(document.getElementById("idade").value);
    let email = document.getElementById("email").value;

    try {
        validaNome(nome);
    } catch (error) {
        alert.error("Erro na validação do nome:", error);
    }

    validaIdade(idade);
    validaEmail(email);
}

function validaNome(nome) {
    let respostaNome = document.getElementById("respostaNome");
    respostaNome.innerHTML = "";

    if (!nome) {
        respostaNome.style.color = "red";
        respostaNome.innerHTML = `Preencha o campo.`;
    } else {
        respostaNome.style.color = "green";
        respostaNome.innerHTML = `Nome preenchido.`;
    }
}

function validaIdade(idade) {
    let respostaIdade = document.getElementById("respostaIdade");

    if (!idade) {
        respostaIdade.style.color = "red";
        respostaIdade.innerHTML = `Preencha sua idade.`;
    } else if (idade < 0) {
        respostaIdade.style.color = "red";
        respostaIdade.innerHTML = `Preencha uma idade válida.`;
    } else {
        respostaIdade.style.color = "green";
        respostaIdade.innerHTML = `Idade preenchida.`;
    }
}

function validaEmail(email) {
    let respostaEmail = document.getElementById("respostaEmail");
    const pL = email.slice(0, 1);

    if (!email) {
        respostaEmail.style.color = "red"
        respostaEmail.innerHTML = `Preencha seu email.`;
    } else if (email.indexOf(".", email.indexOf("@")) === -1) {
        respostaEmail.style.color = "red";
        respostaEmail.innerHTML = `Email incorreto, seu formato deve respeitar exemplo@protocoloemail.com.`;
    } else if (pL == 0 || pL == 1 || pL == 2 || pL == 3 || pL == 4 || pL == 5 || pL == 6 || pL == 7 || pL == 8 || pL == 9) {
        respostaEmail.style.color = "red";
        respostaEmail.innerHTML = `Não comece seu email com números, sempre com letras.`;
    } else {
        respostaEmail.style.color = "green";
        respostaEmail.innerHTML = `Email válido.`;
    }
}