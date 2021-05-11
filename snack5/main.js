/*
 ! Scrivi una funzione che accetti tre argomenti:
 ! un array e due numeri (“a” più piccolo di “b” e “b” grande al massimo quanto il numero di elementi dell’array).
 ! La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra “a” e “b”
 */

/*  function compresi(array, num1, num2) {
     
    var num3 = num2 + 1;
    var arraytagliato = array.slice(num1, num3);
    return arraytagliato
    
 } */

 var numeri = [1,2,3,4,5,6];

/*  var nuovo = compresi(numeri, 1, 3);
console.log(nuovo); */

function between(arrray, min, max) {

   if(min < max && max < arrray.lenght){
      
      return arrray.slice(min, max)
   } else {
      return " non va "
   }

   
}

var provaprova = between(numeri, 1, 3)
console.log(provaprova);