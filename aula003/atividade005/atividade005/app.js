// 1 baixar foto do pokemon
// 2 renoemar a imagem
// 3 criar 2 arrey, um com as fotos e outro com o nome 
// 4 relacionar a foto com nime e com o numero
let nomes = ['Bulbasaur', 'Ivysaur', 'Venusaur', 'Charmander', 'Charmeleon', 'Charizard']
let fotos = ['https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/001.png',
    'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/002.png',
    'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/003.png',
    'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/004.png',
    'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/005.png',
    'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/006.png']

    let indice = 0
    document.getElementById("pokemon_foto").src = fotos[indice]
    document.getElementById("pokemon_numero").innerText = indice + 1
    document.getElementById("pokemon_nome").innerText = nomes [indice]

    function fnPesquisarNumero(){
    let pokemon_procurado = document.getElementById("pokemon_procurado").value
    document.getElementById("pokemon_foto").src = fotos[pokemon_procurado - 1]
    document.getElementById("pokemon_nome").innerText = nomes [pokemon_procurado - 1]
    document.getElementById("pokemon_numero").innerText =pokemon_procurado 
    }

    function fnProximo(){
        if(indice < nomes.length - 1){
        indice = indice + 1
    document.getElementById("pokemon_foto").src = fotos [indice - 1]
    document.getElementById("pokemon_nome").innerText = nomes [indice - 1]
    document.getElementById("pokemon_numero").innerText = indice + 1
      }
    }

    function fnAnterior(){
             if(indice && nomes.length > 1){
        indice = indice - 1
    document.getElementById("pokemon_foto").src = fotos [indice]
    document.getElementById("pokemon_nome").innerText = nomes [indice]
    document.getElementById("pokemon_numero").innerText = indice + 1
      }

    }