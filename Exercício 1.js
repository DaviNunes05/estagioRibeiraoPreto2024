/* 
1) Observe o trecho de código abaixo:

int INDICE = 13, SOMA = 0, K = 0;
enquanto K < INDICE faça
{
K = K + 1;
SOMA = SOMA + K;
}
imprimir(SOMA);

Ao final do processamento, qual será o valor da variável SOMA?
*/

var INDICE = 13;
var SOMA = 0;
var K = 0;

if(K < INDICE){
    K = K+1;
    SOMA = SOMA + K;
}
console.log(SOMA); //Resposta 1

