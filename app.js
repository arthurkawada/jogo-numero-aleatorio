
let numeroMaximo = prompt('Digite um número máximo');
let numeroSecreto = gerarNumeroAleatorio(); 
let contador = 1;
let palavraTentativa;

exibirMensagemInicial();

function exibirTextoNaTela(tag, texto){
   let campo = document.querySelector(tag);
   campo.innerHTML = texto;
   responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function exibirMensagemInicial() {
   exibirTextoNaTela('h1','Encontre o número');
   exibirTextoNaTela('p',`Escolha um número entre 1 e ${numeroMaximo}`);
}

function gerarNumeroAleatorio() {
   let numeroSecreto=parseInt(Math.random()*numeroMaximo + 1);
   return numeroSecreto;
}

function verificarChute(){
   let chute = document.querySelector('input').value;
   if(chute == numeroSecreto){
      palavraTentativa = contador > 1? ' tentativas':' tentativa';
      exibirTextoNaTela('h1', 'Acertou!');
      exibirTextoNaTela('p', 'Você descobriu o número com '+contador+palavraTentativa);
      document.getElementById('reiniciar').removeAttribute('disabled');
      document.getElementById('chute').setAttribute('disabled', 'disabled');
   } else {
      if(numeroSecreto > chute){
         exibirTextoNaTela('p', 'O número correto é maior que '+chute);
      } else{
         exibirTextoNaTela('p', 'O número correto é menor que '+chute);
      }
      contador++;
      limparCampo();
   }
}

function novoJogo() {
   numeroSecreto = gerarNumeroAleatorio(); 
   limparCampo();
   contador=1;
   exibirMensagemInicial();
   document.getElementById('reiniciar').setAttribute('disabled', true);
   document.getElementById('chute').removeAttribute('disabled');
}

function limparCampo() {
   chute=document.querySelector('input');
   chute.value='';
}

