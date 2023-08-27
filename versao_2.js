/*
 EXAMPLE OF USE OF 'comprarCarta'
   
const carta = comprarCarta(); // Draws a card. For example, the king of diamonds
    
console.log(carta.text) // prints the text of the card. 
Example: "K♦️" (indicates "K" of diamonds)

console.log(carta.value) // prints the value of the card (a number). 
Example: 10 (since "K" is equal to 10)
 */

//DECLARE 2 ARRAYS (Players cards) Global scope
let player = [];
let computer = [];

const askPlayer = confirm("Bem-vinde ao jogo de Blackjack\nQuer iniciar uma nova rodada?");
if (askPlayer) {
//BOOLEAN TRUE STARTS GAME (DEAL CARDS) PUSH TO ARRAY
   let dealCards = true;
   while (dealCards) {
      player.push(comprarCarta());
      player.push(comprarCarta());
      computer.push(comprarCarta());
      computer.push(comprarCarta());

      if ((player[0].valor === 11 && player[1].valor === 11) || (computer[0].valor === 11 && computer[1].valor === 11)) {

         player = [];
         computer = [];

      } else {
         dealCards = false
      }

   }
//PLAYER HIT
   let wantToHit = true;
   let typePlayer = " ";
   let scorePlayer = 0;
   while (wantToHit) {
      typePlayer = " "
      scorePlayer = 0
      for (let iterator of player) {
         typePlayer += iterator.texto
         scorePlayer += iterator.valor
      }
//HIT IF SCORE IS UNDER 21 
      if (scorePlayer > 21) {
         wantToHit = false
      } else {
         const askPlayer2ndTime = confirm(`Suas cartas são: ${typePlayer}. A carta revelada do computador é: ${computer[0].texto}.\nDeseja comprar mais uma carta?`)

         if (askPlayer2ndTime) {
            const hitCard = comprarCarta();
            player.push(hitCard)
         } else {
            wantToHit = false
         }
      }
   }
//IF PLAYER SELECTS CANCEL AFTER 1 HIT I NEED THE CURRENT SCORE TO PRINT WHO WON
   let playerScore = 0
   let playerType = " "
    for (let iterator of player) {
       playerScore = playerScore + iterator.valor
       playerType = playerType + iterator.texto
   }

   let computerScore = 0
   let computerType = " "
    for (let iterator of computer) {
       computerScore = computerScore + iterator.valor
       computerType = computerType + iterator.texto
   }

//LET COMPUTER HIT ANOTHER CARD IF SCORE IS UNDER 21
   let typeComputer = computer[0].texto + computer[1].texto;
   let scoreComputer = computer[0].valor + computer[1].valor;
   while (scoreComputer < scorePlayer && scorePlayer <= 21) {
      typeComputer = " ";
      scoreComputer = 0;
      for (let iterator of computer) {
         typeComputer += iterator.texto
         scoreComputer += iterator.valor
      }
   }
//IF STATEMENT TO TEST CONDITION (WHO WON)   
   if (scorePlayer <= 21 && scorePlayer > scoreComputer) {
      gameResults = "O usuário ganhou!"
      
   } else if (scoreComputer <= 21 && scoreComputer > scorePlayer || scorePlayer > 21) {
      gameResults = "O computador ganhou!";
      
   } else if (scorePlayer === scoreComputer) {
      gameResults = "Empate!";
     
   }

   alert(`Suas cartas são ${typePlayer}. Sua pontuação é ${scorePlayer}.\nAs cartas do computador são ${typeComputer}. A pontuação do computador é ${scoreComputer}.\nResult: ${gameResults}`)

//THE FINAL ELSE STATEMENT CONNECTED TO 1ST IF STATEMENT (start game or end game) depending on player confirm
   console.log(player, computer)
} else {
   alert("O jogo acabou");
}






