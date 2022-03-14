let order = [];
let clickedOrder = [];
let score = 0;

//0 - verde
//1 - rosa
//2 - amarelo
//3 - azul

//Recuperando as cores do HTML, classes para variáveis.
const blue = document.querySelector('.blue');
const pink = document.querySelector('.pink');
const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');

//Criando ordem aletoria de cores
let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder;
    clickedOrder = [];

    for(let i in order) {
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number(i) + 1);
    }
}


//Acendendo as luzes
let lightColor = (element, number) => {
    number = number * 600;
    setTimeout(() => {
        element.classList.add('selected');
    }, number - 300);
    setTimeout(() => {
        element.classList.remove('selected');
    }, number - 150);
}

//Checando se a ordem dos botoes clicados coincidem com a ordem gerada pelo jogo 
let checkOrder = () => {
    for(let i in clickedOrder) {
        if(clickedOrder[i] != order[i]) {
            gameOver();
            break;
        }
    }
    if(clickedOrder.length == order.length) {
        alert(`Pontuação: ${score}\nVocê acertou! Iniciando próximo nível!`);
        nextLevel();
    }
}

//Criando a função de clique do usuario
let click = (color) => {
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add('selected');

    setTimeout(() => {
        createColorElement(color).classList.remove('selected');
        checkOrder();
    },100);
}

//Criando a função que retorna a cor
let createColorElement = (color) => {
    if(color == 0) {
        return green;
    } else if(color == 1) {
        return pink;
    } else if (color == 2) {
        return yellow;
    } else if (color == 3) {
        return blue;
    }
}

//Criando uma função para o proximo nivel do jogo
let nextLevel = () => {
    score++;
    shuffleOrder();
}

//Criando uma função para game over
let gameOver = () => {
    alert(`Pontuação: ${score}!\nVocê perdeu o jogo!\nClique em OK para iniciar um novo jogo`);
    order = [];
    clickedOrder = [];

    playGame();
}

//Finção de início
let playGame = () => {
    alert('Bem vindo ao Genius Gab!\nIniciando novo jogo!');
    score = 0;

    nextLevel();
}

//Eventos de clique por cor
green.onclick = () => click(0);
pink.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);


//Dê play no jogo.
playGame();

