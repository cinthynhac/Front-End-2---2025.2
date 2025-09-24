let salario = parseFloat(prompt("Informe o salário inicial do funcionário:"));
let percentual = 0.015; 
let ano = 1995;

for (let i = 1996; i <= new Date().getFullYear(); i++) {
    salario += salario * percentual;
    percentual *= 2;
}

console.log(`Salário atual em ${new Date().getFullYear()}: R$ ${salario.toFixed(2)}`);