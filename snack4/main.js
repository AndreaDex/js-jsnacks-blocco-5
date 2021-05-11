/* Scrivi una funzione che fonda due array (aventi lo stesso numero di elementi) prendendo alternativamente gli elementi da uno e dall’altro
es. [a,b,c], [1,2,3] → [a,1,b,2,c,3]. */
var arrayString = ["a","b","c",];
var arrayNum = [1,2,3];

function unireArray (array1, array2){
    /*   console.log(array1);
      console.log(array2); */
      var nuovoarray = [];
      for( var i = 0; i < array1.length; i++){
          
          /* console.log(array1[i]);
          console.log(array2[i]); */
          nuovoarray.push(array1[i], array2[i])
      }
      return nuovoarray
  }

console.log(unireArray(arrayString, arrayNum));