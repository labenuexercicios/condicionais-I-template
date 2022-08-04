//? Condicionais if/else, condicionais simples:

const bool1 = false // <--- Exemplo de const booleana falsa

const bool2 = true // <--- Exemplo de const booleana true

const bool3 = true // <--- Exemplo de const booleana true

if (bool1===bool2) {
    console.log('1 e 2 são iguais')  // <--- Como o valor da variável é true, o if vai executar a ação
} else if (bool2===bool3) {
    console.log('2 e 3 são iguais') // <--- Como o valor da variável é true, o else não executa a ação
} else if (bool1===bool3) {
    console.log('1 e 3 são iguas')
} else {
    console.log('Nenhuma das condições anteriores são verdadeiras')
}

let idade = Number(prompt('Qual é a sua idade?'))

if (idade < 16) {
    console.log('Não pode votar.')
} else if (idade < 18 || idade > 65) {
    console.log('Voto opcional.')
} else {
    console.log('Voto obrigatório!')
}

const media = 8

if(media >= 5){
    console.log('Você foi aprovado!')
} else if(media >=3){
    console.log('Você ficou de recuperação, bora estudar!')
} else if(media < 3){
    console.log('Você foi reprovado =(')
} else {
    console.log('Dado inválido!')
}