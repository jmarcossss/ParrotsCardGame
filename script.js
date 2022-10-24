let num_cartas = 0;
let bool = 1;
let i = 0;
let qtd_de_jogadas = 0;
let primeira_carta, segunda_carta;
let paresFeitos = []
const armazena_gifs_func = [];
const armazena_gifs = [ //Dobrar os gifs porque para cada par de carta, são necessários gifs iguais...
    'bobrossparrot.gif',
    'bobrossparrot.gif',
    'explodyparrot.gif',
    'explodyparrot.gif',
    'fiestaparrot.gif',
    'fiestaparrot.gif',
    'metalparrot.gif',
    'metalparrot.gif',
    'revertitparrot.gif',
    'revertitparrot.gif',
    'tripletsparrot.gif',
    'tripletsparrot.gif',
    'unicornparrot.gif',
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

function random_gifs() {
    for(let i = 0; i < num_cartas; i++){
        gifsSelecionados.push(armazena_gifs[i]) //Armeza os gifs num novo array
        gifsSelecionados.sort(comparador) //Sortear os gifs
    }
}

function comparador() { 
	return Math.random() - 0.5; 
}


//Função que vai inserir a quantidade de cartas que o usuário selecionou
function inserirCartas() {
    const carta_inserida = document.querySelector(".cartas");
    random_gifs();
    carta_inserida.innerHTML += `<div class="barreira"></div>`
    for(i = 0; i < num_cartas; i++){
        carta_inserida.innerHTML += 
        `<div class="carta" onclick=lado_oposto(this)>
            <img class="foto frente" src='./Arquivos/back.png' />
            <img class="foto verso" src='Arquivos/${gifsSelecionados[i]}' />
        </div>`
    }
};

//Função que vai virar o lado da carta sempre que a div "carta" for selecionada, por isso que ela recebe um botão
//Se essa função for chamada, obviamente é porque o usuário deu um click em alguma carta, logo é necessário incrementar a qtd_de_jogadas
function lado_oposto(button) { //O button recebe o valor do this de inserirCartas()
    qtd_de_jogadas++;
    button.querySelector(".verso").classList.add("virar-verso");
    button.querySelector(".frente").classList.add("virar-frente");
    if(!document.querySelector(".primeira_carta")){ //Inicialmente aqui vai ter um valor falso, pois não recebemos o primeira_carta de vez
        button.classList.add("primeira_carta")      //Logo, o operador not(!) irá 
        primeira_carta = button
        primeira_carta.setAttribute('onclick','')
    }
    else{
        document.querySelector(".barreira").style.display = "block";    
        button.classList.add("segunda_carta");
        segunda_carta = button
        setTimeout(compararPar, 500)
    }
}

function compararPar(){
    if(primeira_carta.innerHTML !== segunda_carta.innerHTML){ //Se as cartas comparadas forem diferentes, quer dizer que aquele par está errado
        primeira_carta.querySelector(".verso").classList.remove("virar-verso")
        primeira_carta.querySelector(".frente").classList.remove("virar-frente")
        segunda_carta.querySelector(".verso").classList.remove("virar-verso")
        segunda_carta.querySelector(".frente").classList.remove("virar-frente")
        primeira_carta.setAttribute("onclick", "lado_oposto(this)")
        primeira_carta.classList.remove("primeira_carta")
        segunda_carta.classList.remove("segunda_carta")
    }
    else{ //Caso contrário, elas são iguais
        paresFeitos.push("Feito")
        primeira_carta.classList.remove("primeira_carta")
        segunda_carta.classList.remove("segunda_carta")
        primeira_carta.setAttribute('onclick','')
        segunda_carta.setAttribute('onclick','')
        sairDoJogo();

    }
    document.querySelector(".barreira").style.display = "none"
}

function sairDoJogo() {
    if(paresFeitos.length === (num_cartas / 2)){
                alert(`Parabens, você ganhou ${qtd_de_jogadas} jogadas!!!`)
            }
}

entrarNoJogo();
inserirCartas();

alert("OK!");