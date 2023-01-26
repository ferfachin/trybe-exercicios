/* let player = {
  name: 'Marta',
  lastName: 'Silva',
  age: 34,
  medals: { golden: 2, sikver: 3 },
};

console.log('A ' + player.name + ' ' + player.lastName + ' tem ' + player.age + ' anos de idade.')

player.bestInTheWorld = [2006, 2007, 2008, 2009, 2010, 2018]

console.log('A jogadora ' + player['name'] + ' ' + player['lastName'] + ' foi eleita a melhor do mundo por ' + player['bestInTheWorld'].length + ' vezes.');

function greetingsMessage(name) {
  console.log("Boas vindas, " + name);
}
greetingsMessage('Matheus') */

//Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome.
//Use a sintaxe meuObjeto.chave. Valor esperado no console:

let meuObjeto = {
  chave: 'Fernando',
}
console.log('Bem vindo, ' + meuObjeto.chave)

//Insira no objeto uma nova propriedade com o nome de chave ‘recorrente’ e o valor ‘Sim’ e, em
//seguida, imprima o objeto no console. Use a sintaxe meuObjeto['chave'] = valor. Valor
//esperado no console:

meuObjeto['chave'] = 'Sim'
console.log(meuObjeto['chave'])

