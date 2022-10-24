let num_cartas = 0;
let bool = 1;
let i = 0;
let qtd_de_jogadas = 0;
let carts_comp_first, cards_comp_second;
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

// Funções que geram valores aleatórios e armazenam em armazena_gifs_func

function comparador() { 
	return Math.random() - 0.5; 
}

function random_gifs() {
    for(let i = 0; i < num_cartas; i++){
        armazena_gifs_func.push(armazena_gifs[i]); //Armeza os gifs num novo array
        armazena_gifs_func.sort(comparador); //Sortear os gifs
    }
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
            <img class="foto verso" src='Arquivos/${armazena_gifs_func[i]}' />
        </div>`;
    }
};

//Função que vai virar o lado da carta sempre que a div "carta" for selecionada, por isso que ela recebe um botão
//Se essa função for chamada, obviamente é porque o usuário deu um click em alguma carta, logo é necessário incrementar a qtd_de_jogadas
function lado_oposto(button) { //O button recebe o valor do this de inserirCartas()
    qtd_de_jogadas++;
    button.querySelector(".verso").classList.add("virar-verso");
    button.querySelector(".frente").classList.add("virar-frente");
    if(!document.querySelector(".carts_comp_first")){ //Inicialmente aqui vai ter um valor falso, pois não recebemos o carts_comp_first de vez
        button.classList.add("carts_comp_first");      //Logo, o operador not(!) irá 
        carts_comp_first = button;
        carts_comp_first.setAttribute('onclick','');
    }
    else{
        document.querySelector(".barreira").style.display = "block";    
        button.classList.add("cards_comp_second");
        cards_comp_second = button;
        setTimeout(compararPar, 500);
    }
}

function compararPar(){
    if(carts_comp_first.innerHTML !== cards_comp_second.innerHTML){ //Se as cartas comparadas forem diferentes, quer dizer que aquele par está errado
        if(bool == 0) {
            bool = 1;
            if(bool = 1){
                carts_comp_first.querySelector(".verso").classList.remove("virar-verso");
                carts_comp_first.querySelector(".frente").classList.remove("virar-frente");
                cards_comp_second.querySelector(".verso").classList.remove("virar-verso");
                cards_comp_second.querySelector(".frente").classList.remove("virar-frente");
                carts_comp_first.setAttribute("onclick", "lado_oposto(this)");
                carts_comp_first.classList.remove("carts_comp_first");
                cards_comp_second.classList.remove("cards_comp_second");
            }
        }
    }
    else{ //Caso contrário, elas são iguais
        paresFeitos.push(".");
        carts_comp_first.classList.remove("carts_comp_first");
        cards_comp_second.classList.remove("cards_comp_second");
        carts_comp_first.setAttribute('onclick','');
        cards_comp_second.setAttribute('onclick','');
        sairDoJogo();

    }
    document.querySelector(".barreira").style.display = "none";
}

function sairDoJogo() {
    if(paresFeitos.length === (num_cartas / 2)){
                alert(`Você ganhou em ${qtd_de_jogadas} jogadas!`);
            }
}

entrarNoJogo();
inserirCartas();