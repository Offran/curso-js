function mediaPonderada(){
    let n1 = document.getElementById("nota1").value;
    let n2 = document.getElementById("nota2").value;
    let media = (n1 + n2 + n2) / 3;
    let resposta = document.getElementById("resposta");
    
    if (!n1 || !n2){
        resposta.innerHTML = `Preencha os dois campos!`;
    } else if (n1 < 0 || n2 < 0){
        resposta.innerHTML = `Não é possível que as notas sejam menores que zero, digite novamente.`;
    } else if (media > 0 && media < 3){
        resposta.innerHTML = `Sua média foi ${media.toFixed(1)} uma merda`;
    } else {
        resposta.innerHTML = `Sua média foi ${media.toFixed(3)}.`;
    }
}