let idade = Number(prompt("Digite sua idade"))

if (idade >=18 && idade <70){
    alert("Pode votar")
} else if (idade === 16 || idade === 17){
    alert("Pode votar com a autorização dos pais")
} else if (idade >= 70){
    alert("Pode votar, mas não é obrigatório")
} else {
    alert("Não pode votar")
}



