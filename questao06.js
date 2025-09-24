let capital = parseFloat(prompt("Digite o capital inicial:"));
let taxa = parseFloat(prompt("Digite a taxa de juros mensal (%):")) / 100;
let tempo = parseInt(prompt("Digite o tempo de investimento em meses:"));

let montante = capital * Math.pow((1 + taxa), tempo);

console.log(`O montante final será: R$ ${montante.toFixed(2)}`);