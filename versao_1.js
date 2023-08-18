/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
    console.log("Boas vindas ao jogo de Blackjack!")

    const iniciarJogo = () => {
       const perguntandoPessoaUsuária = confirm("Quer iniciar uma nova rodada?");
          if(perguntandoPessoaUsuária === true) {
             const cartaDeComputador1 = comprarCarta();
             const cartaDeComputador2 = comprarCarta();
             const cartaDeJogador1 = comprarCarta();
             const cartaDeJogador2 = comprarCarta();
            
             let pontuacaoComputador = cartaDeComputador1.valor + cartaDeComputador2.valor 
             let pontuacaoJogador = cartaDeJogador1.valor + cartaDeJogador2.valor
    
             let tipoDeCartaDoComputador1 = cartaDeComputador1.texto 
             let tipoDeCartaDoComputador2 = cartaDeComputador2.texto 
             let tipoDeCartaDoJogador1 = cartaDeJogador1.texto
             let tipoDeCartaDoJodador2 = cartaDeJogador2.texto
    
             //console.log(cartaDeComputador1.texto, cartaDeComputador2.texto)
    
             console.log(`Usuário - cartas: ${tipoDeCartaDoJogador1} ${tipoDeCartaDoJodador2} - ${pontuacaoJogador}`)
             console.log(`Computador - cartas: ${tipoDeCartaDoComputador1} ${tipoDeCartaDoComputador2} - ${pontuacaoComputador}`)
          
             if(pontuacaoJogador <= 21 && pontuacaoJogador > pontuacaoComputador) {
                console.log("O usuário ganhou!")
             } else if(pontuacaoComputador <= 21 && pontuacaoComputador > pontuacaoJogador) {
                console.log("O computador ganhou!");
             } else if(pontuacaoJogador === pontuacaoComputador) {
                console.log("Empate!");
             }
               
       } else {
          console.log("O jogo acabou");
       }
    }
    iniciarJogo()
    
    
    