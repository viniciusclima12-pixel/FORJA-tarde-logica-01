function soma(){
     var numero1 = document.getElementById("n1").valueAsNumber;
     var numero2 = document.getElementById("n2").valueAsNumber;
     var resposta =document.getElementById("respSoma")
     
     resposta.textContent = numero1 + numero2;

     //console.log(numero1 + numero2)

}
function subtracao(){
    var numero3 = document.getElementById("n3").valueAsNumber;
    var numero4 = document.getElementById("n4").valueAsNumber;
    var resposta =document.getElementById("respSubtracao")
    
    resposta.textContent = numero3 - numero4;
    //console.log(numero3 - numero4)
}
    
