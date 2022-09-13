function calculoimc(){
    var peso=document.querySelector('input#peso')
    var altura=document.querySelector('input#altura')
    var pesoc=Number(peso.value)
    var alturac=Number(altura.value)
    var imc=pesoc/(alturac**2)
    var imcvir=imc.toFixed(2)
    var mostrar=document.getElementById('exibirimc')
    if(imcvir<=18.5){
        mostrar.innerHTML=`Seu IMC é de ${imcvir}.Está abaixo do peso normal.`
    }else if(imcvir<=24.9){
        mostrar.innerHTML=`Seu IMC é de ${imcvir}.Está no peso normal!`
    }else if(imcvir<=29.9){
        mostrar.innerHTML=`Seu IMC é de ${imcvir}.Está com sobrepeso.`
    }else if(imcvir<=34.9){
        mostrar.innerHTML=`Seu IMC é de ${imcvir}.Está com obesidade de grau I.`
    }else if(imcvir<=39.9){
        mostrar.innerHTML=`Seu IMC é de ${imcvir}.Está com obesidade de grau II.`
    }else{
        mostrar.innerHTML=`Seu IMC é de ${imcvir}.Está com obesidade de grau III.`
    }
}