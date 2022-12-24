const booleano1 = false
const booleano2 = true
const booleano3 = true
// if (booleano1 )  {
// alert(TRUE)
// }else{
// alert(false)
// }


// if(booleano1 === booleano2){
//     alert("1 e 2 são iguais")
// }else if(booleano2 === booleano3){
//     alert("2 e 3 são iguais")
// }else if(booleano1===booleano3){
//     alert("1 e 3 são iguais")
// }else{
//     alert("Nenhuma das condições foi atendida")
// }

//o if executa apenas o bloco em que a condição é verdadeira 

// const idade = prompt("Qual a sua idade?")


// if (idade >= 60  ){
//     alert("Seu titulo é facultativo")// se idade maior ou igual a 60

// }else if(idade >= 16 && idade <18 ){
//     alert("Seu titulo é facultativo")// se não se idade maior/igual a 16 e idade menor que 18
// }else if(idade >=18){
//     alert("Você deve tirar o titulo")// se idade maior/igual 18
// }else{
//     alert("você não pode tirar o titulo")//se não
// }

//PRATICA GUIADA


const media = "lasanha"

if (media >=5 ){
    alert("Parabéns, você foi aprovado!")
}else if(media >= 3 && media <5){
    alert("Você esta na recuperação")
}else if(media <3){
    alert("Você foi reprovado!")
}else{
    alert("Dado invalido")
}