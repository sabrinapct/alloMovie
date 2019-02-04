//console.log("Hello world");

let titre = "Un titre";
let realisateur ="Un réalisateur";
let dateSortie = "02/10/1998";
let synopsis = "Une synopsis";
let nbrEntre = " Un nombre d'entrée";

//  Création de notre objet film en json.
let film = {
    titre: "un titre",
    realisateur: "Un realisateur",
    dateSortie: "02/10/1998",
    synopsis: "Une synopsis",
    nbrEntre: 1000
};



/* Création de notre film en version tableau.
let filmTab = [ titre = "un titre",realisateur = "Un realisateur",dateSortie = "02/10/1998",synopsis= "Une synopsis",nbrEntre= 100000];*/

let listFilms = [
     {
        titre: "un titre 1",
        realisateur: "Un realisateur 1",
        dateSortie: "01/10/1998 1",
        synopsis: "Une synopsis 1",
        nbrEntre: 1501
     },
     {
        titre: "un titre 2",
        realisateur: "Un realisateur 2",
        dateSortie: "02/10/1998 ",
        synopsis: "Une synopsis 2",
        nbrEntre: 503
     },
     {
        titre: "un titre 3",
        realisateur: "Un realisateur 3",
        dateSortie: "03/10/1998 ",
        synopsis: "Une synopsis 3",
        nbrEntre: 654
     }
];


//console.log(film.nbrEntre);
/*for (let i = 0;i< listFilms.length;i++){
    console.log (listFilms[i].titre);                            //Boucle for
};

for (indextitre in listFilms) {
    
    console.log(listFilms[indextitre].titre);                     //Boucle forin
    };

*/

/*listFilms.forEach (function(listFilms) {                           // Boucle foreach
    console.log(listFilms.titre)
});*/


let filmFilter = listFilms.filter(listFilms => listFilms.nbrEntre > 1500);
console.log(filmFilter);                                                     //filtrer plus de 1500 entrées et faire apparaitre 

console.log ("Nombre totale d'entrées en box office !");
const reducer = (accumulator, listFilms)=> accumulator+ listFilms.nbrEntre;  // addition des entrées de tous les films
let nbrEntreTotale = listFilms.reduce(reducer,0)
console.log(nbrEntreTotale + " de tickets vendus au total");


//autre façon en methode
console.log("Nombre totale d'entrées des films qui ont fait plus de 1500 entrées");
let nbrEntreTotal = filmFilter.reduce(function (acc,obj){ return acc + obj.nbrEntre; }, 0);  // addition des films de plus de 1500 entrées
console.log(nbrEntreTotal + " tickets vendu des films de plus 1500 entrées");




