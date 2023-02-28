// const booleano1 = false
// const booleano2 = true
// const booleano3 = `true`

// if (booleano1  === booleano2) {
//     alert(`Booleano 1 e Booleano 2 são IGUAIS`)
// } else if (booleano2 === booleano3){
//     alert(`Booleano 2 e Booleano 3 são IGUAIS`)
// } else if (booleano1 === booleano3) {
//     alert(`Booleano 1 e Booleano 3 são IGUAIS`)
// } else {
//     alert(`Não existe Booleano IGUAIS`)
// }

// function verificarUusuario(){
// const idade = 80

// if (idade < 16) {
//     console.log(`você não pode VOTAR`)
// } else if (idade >= 18) {
//     console.log(`você pode VOTAR`)
// } else if (idade < 18 || idade >= 70) {
//     console.log(`voto é FACULTATIVO`)
// }}
// verificarUusuario()

function verificarNota(){
    const media = 1

    if(media >= 5){
        console.log(`Você está APROVADA`)
    }else if (media >= 3){
        console.log(`Você está em RECUPERAÇÃO`)
    }else if(media <3){
        console.log(`Você está REPROVADA`)
    }else {
        console.log(`Dado inválido`)
    }
}
verificarNota()