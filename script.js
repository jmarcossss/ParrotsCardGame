let num_cartas = 0;
let bool = 1;
let i = 0;
const gifsSelecionados = [];
const armazena_gifs = [
    'bobrossparrot.gif',
    'explodyparrot.gif',
    'fiestaparrot.gif',
    'metalparrot.gif',
    'revertitparrot.gif',
    'tripletsparrot.gif',
    'unicornparrot.gif'
]

// Função que verifica se a quantidade de cartas que o usuário escolheu é válida!
function entrarNoJogo() { 
    while(bool){
        num_cartas = prompt("Quantas cartas você deseja colocar?");
        if(num_cartas > 3 && num_cartas < 15 && (num_cartas % 2) === 0){
            bool = 0;
            alert("OK, você selecionou uma quantidade de cartas válida e vai poder entrar no jogo!");
        }
        else{
            alert("Ops, selecione uma quantidade de cartas válida!");
        }
    }
};


//Função que vai inserir a quantidade de cartas que o usuário selecionou
function inserirCartas() {
    const carta_inserida = document.querySelector(".cartas");
    carta_inserida.innerHTML += `<div class="barreira"></div>`
    for(i = 0; i < num_cartas; i++){
        carta_inserida.innerHTML += `<div class="carta" onclick=lado_oposto(this)>
        <img class="foto" src='./Arquivos/back.png' />
        <img class="foto verso" src='Arquivos/${armazena_gifs[i]}' />
        </div>`
    }
};


