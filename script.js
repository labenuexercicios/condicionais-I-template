// Pratica 1

let booleano1 = true;
let booleano2 = false

function recebeArgumentos (booleano1, booleano2){
  if (booleano1 === true ){
  alert ('caso positivo'); 
  } else {
    alert('nao é true');
  }
}

recebeArgumentos('booleano1')

// // pratica 2


let booleano3 = true

    if (booleano1 === booleano2){
     alert('Booleano1 é igual ao Booleano2')
    } else if( booleano2 === booleano3){
        alert('Booleano2 é igual ao Booleano3')
    } else if (booleano1 === booleano3){
        alert('Booleano1 é igual ao Booleano3')
    } else {
        alert('nao exixtem valores iguais')
    }


recebeArgumentos(true,false,true)


// pratica 3

function podeVotar(idade){
 if (idade >= 18 && idade < 70){
    console.log("DEVE VOTAR!")
 } else if ( idade < 18){
   console.log("NAO PODE!")
 } else if(idade === 16 || 17 || idade >= 70) {
    console.log("FACULTATIVOS")
 } else {
    console.log("Nao pode Votar")
}
}
podeVotar(19)
podeVotar(16)
podeVotar(75)


