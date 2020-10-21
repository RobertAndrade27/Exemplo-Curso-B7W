

var listadeConvidados = [];

listadeConvidados.push ('Rick')
listadeConvidados.push ('Morty')
listadeConvidados.push ('Caio')
listadeConvidados.push ('Karen')

//Length faz a contagem de tudo que tem dentro da variável
var totalConvidados = listadeConvidados.length

console.log('Total de convidados: ' + totalConvidados);

for(var i = 0; i < totalConvidados; i++){
    console.log('Indice: ' + i);
    console.log(listadeConvidados[i]);
}

console.log('_______________________________________________')
console.log('_________Laço repetição com o ForEach__________')
console.log('_______________________________________________')

listadeConvidados.forEach(nome => {
    console.log(nome);

})