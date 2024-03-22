/*
Receber um valor: EX: 6

Fazer um sorteio de valores com a quantidade de valores que o input receber.
EX: Receber valor 6 e tem uma sáida com 6 valores aleatórios.

DETALHE: Não pode ser menor que 6 e maior que 9. Valores de 1 - 60

*/

let headerElement = document.querySelector(".main");
let inputElement = document.querySelector(".app input");
let divElement = document.querySelector("#result");
let buttonElement = document.querySelector(".app button");


function sorteio() {//Sorteio de valores

    if (inputElement.value < 6 || inputElement.value > 9) {//Verificando as condições
         alert("Você precisa digitar um valor entre 6 e 9");
    } else {
          let valoresSorteados = [];

          for (let i = 0; i < inputElement.value; i++) {//Loop de sorteio de valores
            let numeroAleatorio = Math.floor(Math.random()*60)+1;
              valoresSorteados.push(numeroAleatorio);
         }
         
         let h4Element = document.createElement("h4");
         let textH4 = document.createTextNode("Valores sorteados:");
         let descritionElement = document.createElement("p");//Criando elementos
         let valueText = document.createTextNode(valoresSorteados.join(" - "));//join() --> trocando separador

         h4Element.appendChild(textH4)
         divElement.appendChild(h4Element);
         descritionElement.appendChild(valueText);//Adionando elementos no index
         divElement.appendChild(descritionElement);

    }

}


function recebendoValor() {//Verificando o preenchimento do input
    if (inputElement.value === '') {
        alert ("Você precisa digitar um valor");
        return false;
    } else {
        sorteio();//Ativando a function sorteio
    }
    inputElement.value = '';
}

buttonElement.onclick = recebendoValor;//Ativando botão 'Sortear'