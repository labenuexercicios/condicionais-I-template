// Prática guiada

// 1)

// Crie duas variáveis booleanas, booleano1 e booleano2, e atribua respectivamente false e true
// Crie um if para verificar se o booleano 1 é true, exiba um ALERT caso seja true.
// Crie um else que exiba um ALERT caso não seja.

// Resolução:
// Ao usar o if(variavel){alert("string")}else{alert("string")} essa expressão TEM que ser verdadeira para o alerta rodar,
// caso ele seja falso, passa direto para o else.

const booleano1 = false
const booleano2 = true

if(booleano1){
    alert("Entrou no if")
}else{
    alert("Entrou no else. A variável é false")
}

// 2)

// Comente as condicionais anteriores
// Crie uma terceira variável chamada booleano3, com valor true.
// Crie um if que verifica se booleano 1 e booleano 2 são iguais e exiba um ALERT.
// Crie um else if que verifica se booleano 2 e booleano 3 são iguais e exiba um ALERT.
// Crie mais um else if que verifica se booleano 1 e booleano 3 são iguais e exiba um ALERT.
// Crie um else que exiba um ALERT caso não exista valores iguais.

// Resolução:
// Ao usar o if(variavel){alert("string")}else{alert("string")} essa expressão TEM que ser verdadeira para o alerta rodar,
// caso ele seja falso, passa direto para o else if ou o else.

const booleano3 = true

if(booleano1 === booleano2){
    alert("O valor das variáveis 1 e 2 são iguais")
}else if(booleano2 === booleano3){
    alert("O valor das variáveis 2 e 3 são iguais")
}else if(booleano1 === booleano3){
    alert("O valor das variáveis 1 e 3 são iguais")
}else{
    alert("Não existem valores iguais")
}

// 3)

// Comente as condicionais anteriores
// Vamos verificar se o usuário já pode tirar seu título de eleitor!
// Crie uma variável idade e atribua o valor a ela.
// Agora crie uma lógica com os requisitos abaixo:

// Pode emitir título de eleitor: pessoas com 18 anos ou mais.
// Não pode emitir título de eleitor: pessoas menos de 18 anos.
// Casos facultativos:
// Pessoas com 60 anos ou mais.
// Pessoas com idade entre 16 e 17 anos.

// Resolução:
// Se a variavel for (maior ou igual) a 60 (ou) variavel for (maior ou igual) a 16 (e) variavel for (menor) que 18
// significará que o if é true então rodará o primeiro console.log("string"). Se não for, passa para o else if.
// se a idade for (maior ou igual) a 18 rodará o segundo console.log("string"). Se não for, passa para o else.
// O else não tem nenhuma condição pois, as duas condições principais já foram estabelecidas anteriormente ou seja
// caso nenhuma das alternativas acima seja true, automáticamente a última será, então ela rodará no último console.log("string")

const idade = 18

if(idade >= 60 || idade >= 16 && idade < 18){
    console.log("Voto facultativo")
}else if(idade >= 18){
    console.log("Você tem direito à emissão do título de eleitor")
}else{
console.log("Você não tem idade mínima para emissão do título de eleitor")
}

// Exercício pra guardar na cabeça

// Crie uma variável chamada (média), e atribua a ela um valor numérico entre 0 e 10.
// Crie um if que verifica se o valor é maior ou igual a 5. Caso seja, imprima que a pessoa foi (aprovado).
// Adicione um else que imprime que a pessoa foi (Reprovada) se a condição não foi atendida.
// Adicione um else if antes de reprovar, que verifica se a nota é maior ou igual a 3. Caso seja, imprima (Recuperação).
// Altere o último else para que ele também seja um else if que verifica se a nota é menor que três para exibir (Reprovado).
// Adicione um último else, que imprima (dado invalido) caso nenhuma das condições anteriores seja atendida.

// Resolução:
// Se a variavel for (maior ou igual) a 5 significa que o primeiro if é true, então rodará o primeiro console.log("string").
// Se não, passa para o primeiro else if, se a variavel for (maior ou igual) a 3, significa que o primeiro else if é true,
// então rodará o segundo console.log("string").
// Se não, passa para o segundo else if, se a variavel for (menor) que 3, significa que o segundo else if é true,
// então rodará o terceiro console.log("string").
// Se não, passa para o else final, esse automáticamente deverá ser true, visto que todas outras condições foram false
// então exibirá o último console.log("string")

const media = 10

if(media >= 5){
    console.log("Você foi aprovado(a)!")
}else if(media >= 3){
    console.log("Você está de recuperação!")
}else if(media < 3){
    console.log("Você está reprovado(a)!")
}else{
    console.log("Dado inválido")
}

