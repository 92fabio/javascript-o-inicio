// Boas práticas
/*
• Classes e Interfaces: Use a convenção PascalCase (por exemplo, Person, Employee).
• Métodos e Variáveis: Use camelCase (por exemplo, calculateTotal, firstName).
• Constantes: Use letras maiúsculas e sublinhadas (por exemplo, MAX_LENGTH, DEFAULT_VALUE).
*/

// Case sensitive
/*
O Java trata nomes de variáveis, métodos, classes, pacotes, etc. de forma sensível a maiúsculas e minúsculas.
Isso quer dizer que:int numero = 5;
System.out.println(numero);  // OK
System.out.println(Numero);  // ERRO: "Numero" não foi declarado
*/
console.log("alá mundo!")

// Sintaxe básica e comentário
/* 
várias
linhas
*/

// Declaração de variáveis(var, let, const)
/*
Em JavaScript, existem três formas de declarar variáveis: var, let e const.
Todas armazenam valores, mas funcionam de maneiras diferentes em relação ao escopo, redeclaração e mudança de valor.
Escopo de função (ou global, se fora de função);
Pode ser redeclared e reassignado (mudado);
É menos seguro, pois pode causar confusão em blocos (if, for etc.).
*/
let nome = "fabio"
console.log("olá " + nome)
nome = "xavier"
console.log(nome)
const idade = 31
console.log(idade)

// Console e Debug
/*
O objeto console é uma ferramenta de depuração (debugging) do JavaScript.
Ele permite exibir informações no console do navegador (F12 → Aba Console).
let nome = "Fabio";
console.log("Olá, " + nome);  // Saída: Olá, Fabio
console.log(10 + 5);          // Saída: 15
*/

//Tipos de dados
/*
| Tipo        | Exemplo              | Descrição                              |
| ----------- | -------------------- | -------------------------------------- |
| `String`    | `"Olá"` ou `'Mundo'` | Textos, entre aspas                    |
| `Number`    | `42`, `3.14`, `-10`  | Números inteiros ou decimais           |
| `Boolean`   | `true`, `false`      | Valores lógicos (verdadeiro/falso)     |
| `Undefined` | `undefined`          | Variável declarada, mas sem valor      |
| `Null`      | `null`               | Valor vazio ou intencionalmente nulo   |
| `Symbol`    | `Symbol("id")`       | Identificador único (usado em objetos) |
| `BigInt`    | `123n`               | Números inteiros muito grandes         |
let nome = "Fabio";       // String
let idade = 25;           // Number
let ativo = true;         // Boolean
let endereco;             // Undefined
let valorNulo = null;     // Null
let id = Symbol("chave"); // Symbol
let grande = 12345678901234567890n; // BigInt
*/
console.warn("atenção")
console.info("informação")
console.error("erro")

// Operadores
//     Operador Atribuição  ( = )
       salario = 2500
//     Operadores aritméticos (+ , - , * , / ) 
      let n1 = 10, n2 = 5    /* n1 um valor n2 outro valor */
      console.log(n1+n2) // soma
      console.log(n1-n2) // subtração
      console.log(n1*n2) // multiplicação
      console.log(n1/n2) // divisão
      console.log(10%2) // divisão     /* pega o resto da divisão */
      

//     Operadores relacionais ( == , != , > , < , >= , <= )
        console.log(n1 == n2)
        console.log(n1 != n2)
        console.log(n1 > n2)
        console.log(n1 < n2)
        console.log(n1 >= n2)
        console.log(n1 <= n2)
//     Operadores lógicos  ! - não / NOT || - ou / OR && - e / AND 
        let altura = 1.80
        let peso = 80
        console.log(altura > 2 )
        console.log(altura > 2 )
        let tipo = "creiança"

// muda o resultado final, se for verdadeiro vira falso e se for falso vira verdadeiro
        console.log(!10>5)

// com && todas as verificações devem ser verdadeiras para o resultado final ser verdadeiro 
        console.log(altura > 1.5 && peso < 150 && tipo != "criança")

// Estrutura
//     Estrutura de controle/decisão
let carro = "fiat"

if(carro == "bmw"){
  console.log("vc ta bem mais ou meno") // verdadeiro
  }else{
    console.log("A vida ta progredindo") // falso
}

let idadealuno =20
if(idadealuno >=18){
  console.log("maior de iade") // verdadeiro
  }else{
    console.log("menor de idade") // falso
}

//     Laços de repetição

// Arrays --> vetor

// Funções personalizadas