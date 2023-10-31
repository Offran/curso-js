function validacao() {
    let nome = document.getElementById("nome").value;
    let idade = Number(document.getElementById("idade").value);
    let email = document.getElementById("email").value;

    validaNome(nome);
    validaIdade(idade);
    validaEmail(email);

    if (document.getElementById("respostaNome").style.color === "green" &&
        document.getElementById("respostaIdade").style.color === "green" &&
        document.getElementById("respostaEmail").style.color === "green") {
        document.getElementById("respostaFinal").innerHTML = `Cadastro completo`;
    } else {
        document.getElementById("respostaFinal").innerHTML = ``;
    }
}

function validaNome(nome) {
    let respostaNome = document.getElementById("respostaNome");
    respostaNome.innerHTML = "";

    try {
        if (!nome) {
            throw new Error();
        } else {
            respostaNome.style.color = "green";
            respostaNome.innerHTML = `Nome preenchido.`;
        }
    } catch (err) {
        respostaNome.style.color = "red";
        respostaNome.innerHTML = `Preencha o campo.`;
    }
}

function validaIdade(idade) {
    let respostaIdade = document.getElementById("respostaIdade");

    try {
        if (!idade || idade < 0) {
            throw new Error();
        } else {
            respostaIdade.style.color = "green";
            respostaIdade.innerHTML = `Idade preenchida.`;
        }
    } catch (err) {
        respostaIdade.style.color = "red";
        respostaIdade.innerHTML = `Preencha uma idade válida.`;
    }
}

function validaEmail(email) {
    let respostaEmail = document.getElementById("respostaEmail");
    const pL = email.slice(0, 1);
    let numeroDoErro;

    try {
        if (!email) {
            numeroDoErro = 1;
            throw new Error();
        } else if (email.indexOf(".", email.indexOf("@")) === -1) {
            numeroDoErro = 2;
            throw new Error();
        } else if (!isNaN(pL)) {
            numeroDoErro = 3;
            throw new Error();
        } else {
            respostaEmail.style.color = "green";
            respostaEmail.innerHTML = `Email preenchido.`;
        }
    } catch (err) {
        switch (numeroDoErro) {
            case 1:
                respostaEmail.style.color = "red"
                respostaEmail.innerHTML = `Preencha seu email.`;
                break;
            case 2:
                respostaEmail.style.color = "red";
                respostaEmail.innerHTML = `Email incorreto, seu formato deve respeitar exemplo@protocoloemail.com.`;
                break;
            case 3:
                respostaEmail.style.color = "red";
                respostaEmail.innerHTML = `Não comece seu email com números, sempre com letras.`;
                break;
        }
    }
}