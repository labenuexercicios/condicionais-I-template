console.log(" - AULA CONDICIONAIS I -")

// const booleano1 = true
// const booleano2 = false
// const booleano3 = true

// if (booleano1==booleano2){
//     alert("As condicionais 1 e 2 são iguais!")
// }else if(booleano2==booleano3){
//     alert("As condicionais 2 e 3 são iguais!")
// }else if(booleano1==booleano3){
//     alert("As condicionais 1 e 3 são iguais!")
// }else{
//     alert("Todas as condicionais são diferentes!")
// }

// alert("fim do código")

//const age = 0

// if (age>=18, age<=60){
//     alert("título obrigatório")
// }else if(age < 18){
//     alert("título não obrigatório")
// }else if(age >= 60){
//     alert("facultativo")
// }else if(age >= 16){
//     alert("facultativo")
// }else {
//     alert("valor errado")
// }

// if(age>=16 && age<18){
//     alert("facultativo")
// }else if(age >= 60){
//     alert("facultativo idoso")
// }else if(age>=18){
//     alert("voto obrigatório")
// }else if(age<16){
//     alert("não pode votar")
// }else{
//     alert("valor inválido")
// }

// 1. Crie uma variável chamada média, e atribua a ela um valor numérico entre 0 e 10;
// Crie um if que verifica se o valor é maior ou igual a 5. Caso seja, imprima que a pessoa foi aprovada. Adicione um else que imprime que a pessoa foi reprovada se a condição não foi atendida.
const media = 7

if(media>=5){
    alert("Aprovada")
}else if(media>=3){
    alert("Recuperação")
}else if(media<3){
    alert("Reprovada")
}else{
    alert("Dado inválido")
}
