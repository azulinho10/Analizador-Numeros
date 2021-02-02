const mouse = document.querySelector("button.adicionar");
const botaoFinalizar = document.querySelector("button.finalizar");
let resposta = document.querySelector("div.resposta");
let vet = [];

mouse.addEventListener("click", adicionarNumeros);
botaoFinalizar.addEventListener("click", calcular);

function adicionarNumeros() {
  let numero = document.querySelector("input#number").valueAsNumber;
  let adicionarNumeroTab = document.querySelector("select#selnum");
  let item = document.createElement("option");

  if (!numero) {
    alert("Por favor, digite o valor no campo vazio");
  } else if (numero >= 1 && numero <= 100) {
    if (vet.indexOf(numero) === -1) {
      vet.push(numero);
      item.text = `Valor ${numero} adicionado`;
      adicionarNumeroTab.appendChild(item);
    }
  } else {
    alert("Digite o número entre 1 a 100 ");
  }
}

function calcular() {
   if(vet.length == 0){
       alert('Adicione os valores, antes de finalizar')
   }else{

       let quantidadeElementos = vet.length;
       let maiorValor = 0;
   
       let media = 0;
     
       for (let valor of vet) {
         if (maiorValor < valor) {
           maiorValor = valor;
         }
        }
        let menorValor = Math.min(...vet)
        
       let total = vet.reduce((accumulator, numero) => accumulator + numero, 0)
       media = total / quantidadeElementos;
     
       resposta.innerText = `Ao todo, temos ${quantidadeElementos} números cadastrados. \n`;
       resposta.innerText += `O maior valor informado foi ${maiorValor}. \n`;
       resposta.innerText += `O menor valor informado foi ${menorValor}. \n`;
       resposta.innerText += `Somando todos os valores, temos ${total}. \n`;
       resposta.innerText += `A média dos valores digitados é ${media}.`;
   } 
}
