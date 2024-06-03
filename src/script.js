let numeroAleatorio = Math.floor(Math.random () * 100) +1;
let tentativas = 0;
let palpitesRepetidos = [];

function jogoDeAdivinhacao() {
     const palpiteDigitado = pegarPalpiteDigitado ();

     if (!palpiteDigitado) {
    alert("Digite um valor válido");
    return;
    }
    else if (palpiteDigitado <= 0 || palpiteDigitado > 100){
        alert("digite um número entre 1 e 100, por favor");
        return;
    }
    if (palpitesRepetidos.includes(palpiteDigitado)) {
        alert("Você já tentou esse número, tente outro valor.");
    return;
    }

    (palpitesRepetidos.push(palpiteDigitado));
    
    if (palpiteDigitado === numeroAleatorio) {
        alert("Parabéns, você adivinhou!");
        reiniciarJogo()
        return;
    } else if (palpiteDigitado > numeroAleatorio) {
        tentativas++
        atualizarFeedback("Esse número é muito alto. Tente novamente!");
    } else if (palpiteDigitado < numeroAleatorio) {
        tentativas++;
        atualizarFeedback("Esse número é muito baixo. Tente novamete!");
    } 

    const novaPontuacao = 100 - (tentativas * 10);
    atualizarPontuacao(novaPontuacao); 
    
    const palpitesFalhos = pegarPalpitesFalhos();
    const novoPalpitesFalhos = palpitesFalhos + " " + palpiteDigitado;
    atualizarPalpitesFalhos(novoPalpitesFalhos);

    const pontuacaoAtual = pegarPontuacao();
    if (pontuacaoAtual === "Você tem 0 pontos") {
    alert("Chegou a 0 pontos, mas não desista!");
    reiniciarJogo();
    }

}

function reiniciarJogo() {
    const desejaReiniciar = confirm("Jogar novamente?");
    console.log(desejaReiniciar);
   
    if (desejaReiniciar) { 
        tentativas = 0;
        palpitesRepetidos =[]
        atualizarPalpitesFalhos("");
        atualizarPontuacao(100);
        atualizarFeedback(" ");
        limparPalpiteDigitado();
    }
}