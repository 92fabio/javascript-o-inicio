function fnJogo() {
    let chute = 0, numeroMagico = Math.floor(Math.random() * 10) + 1;
    chute = document.getElementById("valor").value

    if (chute == numeroMagico) {
        document.getElementById("resultado").innerText = "Acertou 👌"
    } else {
        document.getElementById("resultado").innerText = "Errou 🤦‍♂️"
    }
}

// como 1- como fazer um sorteio de número de 1 a 10 ao invés de deixar fixo 0 3

// if verdadeiro
// else falso 

// let chute = 0, numeroMagico = Math.floor(Math.random() * 10) + 1; fuçao numero aleatorio
