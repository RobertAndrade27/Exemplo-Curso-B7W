//Variaveis com letras denominado string, utilizar entre aspas simples
//variaveis com numeros denominadas INT, sem necessidade de aspas
//variaveis com numeros com valores quebrados, denominados decimais

var cidade = 'Ribeirão Preto';
//variavel tipo String
var estado = 'São Paulo';
//variavel tipo String
var ano = 2020;
//variável tipo int
var mes = 'oct' ;
//variavel tipo string e int
var populacao2010 = 590.593
var populacao2020 = 711.825

var aumento = populacao2020 - populacao2010;
var percentual = aumento / populacao2010;


console.log ('Cidade, ' + cidade + ' - ' + estado);
console.log ('Taxa de População em 2010: ' + populacao2010 + ' habitantes');
console.log ('Taxa de População em 2020: ' + populacao2020 + ' habitantes');
//Concaternar - entre aspas simples é o que printa na tela, sempre que adcionar info inserir o +
console.log ('Em 10 anos houve aumento de ' + aumento.toFixed(2) + ' habitantes ');
console.log ('Aproximadamente ' + percentual.toFixed(2) * 100 + ' % de crescimento ');
console.log ('Informação inserida em ' + mes + ' de ' + ano);

//mostrando nome das variáveis cadastradas

//console.log (estado);
//console.log (ano);
//console.log (mes);
