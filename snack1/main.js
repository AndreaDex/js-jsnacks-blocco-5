/* 
 * Crea un array di 10 oggetti che rappresentano una zucchina, indicando per ognuna varietà, peso e lunghezza.
Calcola quanto pesano tutte le zucchine. 
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
console.log(zucchine);
var pesototale = 0;

for (var index = 0; index < zucchine.length; index++) {
    var object = zucchine[index];
    console.log(object.peso);
    pesototale +=  object.peso;
}
console.log(pesototale);