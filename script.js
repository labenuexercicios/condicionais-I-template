const booleano1 = false
const booleano2 = true

if (booleano1) {
    alert("entrou no if, variável true")
}else{
    alert('entrou no else, variável false')
}

const booleano3 = true

if (booleano1 === booleano2){
    alert ('o valor das variáveis 1 e 2 são iguais')
}else if (booleano2 === booleano3){
    alert ('o valor das variáveis 2 e 3 são iguais') 
}else if (booleano1 === booleano3){
    alert('o valor das variáveis 1 e 3 são iguais')
}else{
    alert ('não existem valores iguais')
}


const idade = 10

if (idade >= 60 || idade >= 16 && idade < 18){
    console.log("voto facultativo")
}else if (idade >=18){
    console.log('voce tem direito de emitir o título de eleitor')
}else{
    console.log('você nao tem idade suficiente para emitir o título de eleitor')
}

const media = 7

if(media >= 5){
    console.log("você foi aprovado")
}else if(media >= 3){
    console.log('você está em recuperação')
}else if (media < 3){
    console.log("você foi reprovado")
}else{
    console.log("dado inválido")
}