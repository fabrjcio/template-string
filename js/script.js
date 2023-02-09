// Array com os dados dos times do Cearense
let listaDadosTimes = [
  {time: "Fortaleza", pontos: "12", posicao: ""},
  {time: "Ceará", pontos: "13", posicao: ""},
  {time: "Ferroviário", pontos: "7", posicao: ""},
  {time: "Atlético-CE", pontos: "8", posicao: ""},
  {time: "Caucaia", pontos: "6", posicao: ""},
  {time: "Pacajus", pontos: "4", posicao: ""},
  {time: "Guarani", pontos: "0", posicao: ""},
  {time: "Barbalha", pontos: "3", posicao: ""},
  {time: "Macaranã", pontos: "8", posicao: ""},
  {time: "Iguatu", pontos: "10", posicao: ""}
  ];

// Pegando a div com o método queryselector que retorna o primeiro elemento no html especificado pelo id #main.
const main = document.querySelector('#main');
  
// O método map recebe uma função como argumento,z chamada de função de callback, que é aplicada a cada elemento do array original e o retorno dessa função, devolve um novo array com os elementos obtidos/mapeados.
function criaBody(){    
  // Sem arrow function: const objTimes = listaDadosTimes.map(function (times){
    const objTimes = listaDadosTimes.map(times => {
    return `<tr>
    <td>${times.time}</td>
    <td>${times.pontos}</td>
    <td>${times.posicao}</td>
    </tr>`;

});

// Trazendo pra fora da função criaBody, o objeto objTimes, que é o que queremos colocar na tabela.
return objTimes;
}

// Chamada que retorna cada time dentro de uma linha de tabela para inserir no body no html. Atribuída em uma variável.
const tabelaBody = criaBody();

// console.log para verificar se a execução da tabelaBody está vindo corretamente.
// console.log(tabelaBody);

// Variável que vai receber a base da tabela linha principal e receber a variável tabelaBody contendo todas as linhas da tabela preenchidas.
const table = `<table>
<tr>
  <th>Time</th>
  <th>Pontos</th>
  <th>Posição</th>
  </tr>
  ${tabelaBody}
</table>`;

// Método de interface que insere o conteúdo especificado como html em uma posição específica.
main.insertAdjacentHTML('afterbegin', table);