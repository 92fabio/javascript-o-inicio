function fnConverterValor(){
    let valorDigitado = 0, totalDolar = 0, totalEuro = 0

    valorDigitado = document.getElementById("valor").value
    totalDolar = valorDigitado * 5.29
    totalEuro = valorDigitado * 6.11
    

    document.getElementById("valorConvertido").innerText = "Valor em Dolar " + totalDolar
    document.getElementById("valorConvertidoU").innerText = "Valor em Euro " + totalEuro

    }

// 1 - como colocar o resultado no formato  no formato r$ xx, xx 
// 2 - como mostrar o rsultado da conversão de dolar e euro

