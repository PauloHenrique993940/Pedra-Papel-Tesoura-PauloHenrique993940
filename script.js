/* Desenvolva seu código abaixo */
/* Criando Projeto  */


function playRockPaperScissor(player1, player2){
    var pedra = "Pedra";
    var papel = "Papel";
    var tesoura = "Tesoura";

    // Verificar se há empate
    if (player1 === player2) {
        return "Empate!";
    }
    
    // Verificar as combinações onde player1 vence
    if ((player1 === pedra && player2 === tesoura) ||
        (player1 === papel && player2 === pedra) ||
        (player1 === tesoura && player2 === papel)) {
        return "Jogador 1 venceu!";
    }

    // Se não houve empate e player1 não venceu, então player2 vence
    return "Jogador 2 venceu!";
}

// Solicitando as escolhas dos jogadores player1 e Player2 e  chamando a função com essas escolhas
var escolhaPlayer1 = prompt("Jogador 1, escolha: Pedra, Papel ou Tesoura?");
var escolhaPlayer2 = prompt("Jogador 2, escolha: Pedra, Papel ou Tesoura?");
alert(playRockPaperScissor(escolhaPlayer1, escolhaPlayer2));

