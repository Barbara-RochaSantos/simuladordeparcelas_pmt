let valorBemASerAdquido;
let entrada;
let valorPresente;
let taxaDeJuros;
let qtdParcelas;

valorBemASerAdquido = Number(prompt("SISTEMA FINANCIAMENTO FACIL\n*** SIMULE O VALOR DAS SUAS PARCELAS *** \nDigite o valor a ser financiado:").replace(",","."))
validaDados (valorBemASerAdquido)
entrada = Number(prompt("SISTEMA FINANCIAMENTO FACIL\n***CALCULE O VALOR DAS SUAS PARCELAS *** \nCaso haja valor para entrada, digite abaixo (Caso contrário coloque 0 no campo):").replace(",","."))
validaDados (entrada)
valorPresente = valorBemASerAdquido - entrada
taxaDeJuros = Number(prompt("SISTEMA FINANCIAMENTO FACIL\n***CALCULE O VALOR DAS SUAS PARCELAS *** \nDigite a taxa de Juros A.M (ao mês)","3.99").replace(",","."))
validaDados (taxaDeJuros)
qtdParcelas = Number(prompt("SISTEMA FINANCIAMENTO FACIL\n***CALCULE O VALOR DAS SUAS PARCELAS *** \nDigite a quantidade de parcelas desejada:"))
validaDados (qtdParcelas)


taxaDeJurosConvertida = taxaDeJuros / 100;


//FUNÇÃO PARA CALCULAR VALOR DAS PARCELAS
function valorParcela(vp,i,n){
    
let pmt = (vp * i * (1 + i) ** n) / ((1 + i) ** n - 1);
return pmt;

} 

/*A fórmula da PMT (Parcela Fixa) é utilizada para calcular o valor das prestações de um empréstimo ou financiamento com base em pagamentos constantes e uma taxa de juros constante. 
A fórmula é:
PMT = PV * r / (1 - (1 + r)^-n)
Onde:
PMT: valor do pagamento periódico.
PV: valor presente ou principal do empréstimo.
r: taxa de juros por período (no caso ao mês).
n: número total de períodos de pagamento.
Para utilizar a fórmula, você precisa ter em mãos o valor do empréstimo (PV), a taxa de juros (r) e o número de períodos (n). */


let parcela = valorParcela(valorPresente, taxaDeJurosConvertida, qtdParcelas);
alert("SISTEMA FINANCIAMENTO FACIL\n***CALCULE O VALOR DAS SUAS PARCELAS *** \nValor a ser financiado: R$ " + valorBemASerAdquido.toFixed(2) + "\nValor da Entrada: R$ " + entrada.toFixed(2) + "\nTaxa de Juros: " + taxaDeJuros + "% a.m" + "\nQuantidade de Parcelas: " + qtdParcelas + "\n" + "\nO valor das parcelas a serem pagas é R$ " + parcela.toFixed(2));


//FUNÇÃO PARA VALIDAR ENTRADA 
function validaDados (p1){                //caso usuário digite letras ao invés de números
    if (isNaN(p1) || p1 < 0) {
    alert("Valor de entrada inválido!");
    throw new Error("Entrada inválida"); // interrompe a execução (não deixa continuar com cálculo errado)
}

}
