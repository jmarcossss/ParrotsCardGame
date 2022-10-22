let num_cartas = 0;
let bool = 1;


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

entrarNoJogo();

alert("OK!");
