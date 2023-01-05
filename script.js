// //A)
// const bool1 = false;
// const bool2 = true;
// const bool3 = true;
// // if(bool2) {
// //     alert('ENTREI NO IF, SOU TRUE') //deve ser sempre verdadeira, pro -bloco ser executado // entra se for tru
// // } else {
// //     //Entra se for else
// //     alert('Entrei no Else, sou false')
// // }

// //B)
//     if(bool1 === bool2){
//         alert('1 e 2 são iguais!!')
//     }else if(bool2 === bool3) {
//         alert('2  e 3 são iguais!!!')
//     }else if(bool1 === bool3){
//         alert('1 e 3 são iguais!!!')
//     }else{
//         alert('Nenhuma das condições foi atendido!!!')
//     }
//C)

// const idade = prompt('Qual sua idade');

// if(idade >= 60 && idade < 90){
//     alert('O voto é facultativo')
// }else if(idade >= 16 && idade < 18){
//     alert('O voto é facultativo')
// }
// else if(idade >= 18 && idade <= 60){
//     alert('Deve emitir o titulo')
// }else if(idade >= 90 && idade){
//     alert('Voce ja deveria estar morto xD')
// }else{
//     alert('Não tem idade para emitir o titulo')
// }

//D) Exercicio Fixação

const media = Number(prompt('Qual foi a nota de 0 a 10'));

if (media >= 5 && media <= 10){
    alert('Você foi aprovado(a)!')
}else if(media >=3 && media < 5){
    alert('Voce pode recuperar! Vamos lá')
} else if(media < 3 && media >= 0){
    alert('Que pena, você reprovou, tem que estudar mais!')
}else{
    alert('Dados inválidos')
}