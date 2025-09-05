

let totalAulaSemestre = parseInt(prompt("Informe a quantidade de aulas do semestre."));
let totalFaltaAluno = parseInt(prompt("Em quantas aulas o aluno esteve ausente?"));
let nota1 = parseFloat(prompt("Qual foi a primeira nota do aluno?"));
let nota2 = parseFloat(prompt("Qual foi a segunda nota do aluno?"));

//calculo para saber se o aluno teve a frequência necessária
let totalFrequência = ((totalFaltaAluno/totalAulaSemestre)*100).toFixed(2);
if (totalFrequência>25) {
    console.log("O aluno foi reprovado por falta.")
}

//calculo de média
let mediaAluno = ((nota1+nota2)/2).toFixed(2);
if (mediaAluno>=7){
    console.log("O aluno foi aprovada com média", mediaAluno);
}
    else if (mediaAluno>=5 && mediaAluno<7){
        console.log("Sua média foi ", mediaAluno,"e o aluno deverá realizar uma prova complementar.");
        let notaRecuperacao = parseFloat(prompt("Qual foi a nota da prova da recuperação do aluno?"))
        let mediaRecuperacao = ((mediaAluno+notaRecuperacao)/2).toFixed(2);
    }
            if (mediaRecuperacao>=7){
            console.log("O aluno foi aprovado com média", mediaRecuperacao);
        }
            else {
            console.log("O aluno foi reprovado. Sua média final foi de ", mediaRecuperacao);
            }
        
    
    else {
    console.log("Sua média foi ",mediaAluno, "e o aluno está reprovado por média.");
    }

console.log("O seu semestre teve um total de",totalAulaSemestre, "aulas.");
console.log("Você teve ",totalFaltaAluno," faltas no semestre.");
console.log("Sua porcentagem de faltas foi de", totalFrequência);
console.log("Sua primeira nota foi de ",nota1);
console.log("Sua segunda nota foi de ",nota2);
console.log("Sua média é de ",mediaAluno);
