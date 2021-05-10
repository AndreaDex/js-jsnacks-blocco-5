// * Scrivi una funzione che accetti una stringa come argomento e la ritorni girata (es. Ciao -> oaiC)

var stringa = "brobdingnagiano";
function reverseString(string) {
    var stringaSplittata = string.split("");
    var girata = stringaSplittata.reverse();
    var stringaGirata = girata.join("");
    return stringaGirata
}
console.log(reverseString(stringa));