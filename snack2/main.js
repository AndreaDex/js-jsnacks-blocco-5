/* 
 ! Crea 10 oggetti che rappresentano una zucchina.
 ! Dividi in due array separati le zucchine che misurano meno o più di 15cm.
 ! Infine stampa separatamente quanto pesano i due gruppi di zucchine. 
*/

var zucchine = [
    {
        varietà : "Zucchini",
        peso : 300,
        lunghezza: 15,
    },
    {
        varietà : "Diamond",
        peso : 350,
        lunghezza: 20,
    },
    {
        varietà : "Zebra",
        peso : 270,
        lunghezza: 18,
    },
    {
        varietà : "Zheltoplodny",
        peso : 200,
        lunghezza: 13,
    },
    {
        varietà : "Jade",
        peso : 390,
        lunghezza: 22,
    },
    {
        varietà : "Faraone",
        peso : 400,
        lunghezza: 22,
    },
    {
        varietà : "Zucchini Banana",
        peso : 450,
        lunghezza: 25,
    },
    {
        varietà : "Rhonda",
        peso : 150,
        lunghezza: 8,
    },
    {
        varietà : "Zolotinka",
        peso : 500,
        lunghezza: 10,
    },
    {
        varietà : "Black Handsome",
        peso : 900,
        lunghezza: 25,
    }
]

// ! Dividi in due array separati le zucchine che misurano meno o più di 15cm.

var smZucchine = [];
var lgZucchine = [];

for (var index = 0; index < zucchine.length; index++) {
    var object = zucchine[index];

    if(object.lunghezza > 15){
        lgZucchine.push(object)
    } else {
        smZucchine.push(object)
    }
    
}
console.log(smZucchine);
console.log(lgZucchine);


//  ! Infine stampa separatamente quanto pesano i due gruppi di zucchine. 
var pesoSm = 0;
var pesoLg = 0;
for (var index = 0; index < smZucchine.length; index++) {
    var element = smZucchine[index];
    pesoSm += element.peso
    
}
console.log(pesoSm);
for (var index = 0; index < lgZucchine.length; index++) {
    var element = lgZucchine[index];
    pesoLg += element.peso
    
}
console.log(pesoLg);