// const bool1 = false
// const bool2 = true

//Exercicio 1
// if(bool1){
//     alert('não é falso')
// }else{
//     alert('é falso')
// }

//Exercicio 2

// const bool3 = true

// if(bool1 === bool2){
//     alert('bool 1 e bool 2 são iguais')
// }else if(bool2 === bool3){
//     alert('bool 2 e bool 3 são iguais')
// }else if(bool1 === bool3){
//     alert('bool 1 e bool 3 são iguais')
// }else{
//     alert('não existem valores iguais')
// }

//Exercicio 3
// const idade = Number (prompt('Informe sua idade'))

// if(idade >=18 && idade < 60){
//     alert('Você pode tirar o título de eleitor.')
// }else if(idade < 18 && idade >= 16){
//     alert('Você pode tirar o título de eleitor agora, mas seu voto é facultativo.')
// }else if(idade >=60){
//     alert('Seu voto é facultativo.')
// }else{
//     alert('Você não pode tirar o título de eleitor ainda.')
// }

//Exercicio de fixação
const media = Number (prompt('Diga sua média:'))

if(media >= 5){
    alert('Você foi aprovado!')
    console.log('Você foi aprovado!')
}else if(media >=3){
    alert('Você está em recuperação.')
    console.log('Você está em recuperação.')
}else if(media <3){
    alert('Você foi reprovado :(')
    console.log('Você foi reprovado :(')
}else{
    alert('Dado inválido')
    console.log('Dado inválido')
}

