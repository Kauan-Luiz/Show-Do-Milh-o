window.onload = function () {
    tratar_eventos();
    tocar_audio('abertura');
}

function tratar_eventos() {
    document.getElementById("btn-comecar").onclick = function () {
        tocar_audio('comecar');
        document.getElementById("comecar").style.display = "none";
        document.getElementById("pergunta1000").style.display = "block";
        
    };

    
    document.getElementById("form-pergunta1000").onsubmit = processarPergunta1000;
    document.getElementById("form-pergunta2000").onsubmit = processarPergunta2000;
    document.getElementById("form-pergunta3000").onsubmit = processarPergunta3000;

    
    jogar_novamente = document.getElementById("jogar-novamente");
}

var total_pontos = 0; 

function processarPergunta1000() {
    var opcao_correta = "3";
    var opcao_selecionada = this.pergunta1000.value;
    var perdeu = document.getElementById("perdeu");
    var pontosDisplay = document.getElementById("pontos");
     

    if (opcao_selecionada == opcao_correta) {
        
        document.getElementById("perdeu").style.display = "none" 
        total_pontos += 1000; 
        tocar_audio('pergunta-2000');
        document.getElementById("pergunta1000").style.display = "none";
        document.getElementById("pergunta2000").style.display = "block";
        pontosDisplay.innerHTML = "TOTAL DE PONTOS:" + total_pontos;  
    } else {
        document.getElementById("pergunta1000").style.display = "none";
        document.getElementById("perdeu").style.display = "block" 
        perdeu.innerHTML = "Você perdeu!";
        tocar_audio('errou');
        reinicia_jogo();
    }

    return false; 
}

function processarPergunta2000() {
    var opcao_correta = "1";
    var opcao_selecionada = this.pergunta2000.value;
    var perdeu = document.getElementById("perdeu");
    var pontosDisplay = document.getElementById("pontos"); 

    if (opcao_selecionada == opcao_correta) {
        total_pontos += 2000; 
        tocar_audio('pergunta-3000');
        document.getElementById("pergunta2000").style.display = "none";
        document.getElementById("pergunta3000").style.display = "block";
        pontosDisplay.innerHTML = "TOTAL DE PONTOS:" + total_pontos;  
    } else {
        document.getElementById("pergunta2000").style.display = "none";
        document.getElementById("perdeu").style.display = "block" 
        perdeu.innerHTML = "Você perdeu!";
        tocar_audio('errou');
        reinicia_jogo();
    }

    return false;
}

function processarPergunta3000() {
    var opcao_correta = "4";
    var opcao_selecionada = this.pergunta3000.value;
    var conseguiu = document.getElementById("ganhou");
    var pontosDisplay = document.getElementById("pontos"); 

    if (opcao_selecionada == opcao_correta) {
        tocar_audio('ganhou');
        document.getElementById("pergunta3000").style.display = "none";
        conseguiu.innerHTML = "Você ganhou!";
        total_pontos += 3000; 
        pontosDisplay.innerHTML = "TOTAL DE PONTOS:" + total_pontos;  }

        else {
        document.getElementById("pergunta3000").style.display = "none";
        document.getElementById("perdeu").style.display = "block" 
        perdeu.innerHTML = "Você perdeu!";
        tocar_audio('errou');
        pontosDisplay.innerHTML = "TOTAL DE PONTOS:" + total_pontos; 
        }
   

    return false; 
}

function reinicia_jogo() {
    document.getElementById("comecar").style.display = "block";
    document.getElementById("btn-comecar").innerHTML = "Jogar novamente";
    total_pontos = 0; 
    document.getElementById("pontos").innerHTML = "TOTAL DE PONTOS:" + total_pontos;
     
}

function tocar_audio(qual_tocar) {
    var audio = document.getElementById("silvio-santos");

    switch (qual_tocar) {
        case 'abertura':
            audio.src = "audio/abertura-show-do-milhao.mp3";
            break;
        case 'comecar':
            audio.src = "audio/1000.wav";
            break;
        case 'acertou':
            audio.src = "audio/parabens.wav";
            break;
        case 'ganhou':
            audio.src = "audio/ganhou.wav";
            break;
        case 'errou':
            audio.src = "audio/errou.wav";
            audio.src = "audio/2000.wav";
            break;
        case 'pergunta-3000':
            audio.src = "audio/3000.wav";
            break;
    }

    audio.play();
}

