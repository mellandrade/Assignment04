/*eslint-env broswer*/
/*jslint devel: true */

//STEP 1
/* var movies = ["French Kiss", "Serendipity", "Love Actually", "Outbreak", "Pride and Prejudice"];
window.console.log(movies[1]); */

//STEP 2
/* var movies = new Array(5);
movies[0] = "French Kiss";
movies[1] = "Serendipity";
movies[2] = "Love Actually";
movies[3] = "Outbreak";
movies[4] = "Pride and Prejudice";
window.console.log(movies[0]); */

//STEP 3
/* var movies = new Array(5);
movies[0] = "French Kiss";
movies[1] = "Serendipity";
movies[2] = "Love Actually";
movies[3] = "Outbreak";
movies[4] = "Pride and Prejudice";
movies[5] = "Emma";
window.console.log(movies.length); */

//STEP 4
/* var movies = ["French Kiss", "Serendipity", "Love Actually", "Outbreak", "Pride and Prejudice"];
delete movies[0];
window.console.log(movies); */

//STEP 5
/* var i;
var movies = ["French Kiss", "Serendipity", "Love Actually", "Outbreak", "Pride and Prejudice", "Thumbelina", "Overboard"];
for (i = 0; i < movies.length; i += 1) {
    window.console.log(movies[i]);
} */

//STEP 6
/* Array.prototype.myname = function () {
    "use strict";
    
};
var i;
var movies = ["French Kiss", "Serendipity", "Love Actually", "Outbreak", "Pride and Prejudice", "Thumbelina", "Overboard"];
for (i in movies) {
    if (movies.hasOwnProperty(i)) {
        window.console.log(movies[i]);
    }
} */

//STEP 7
/* var i;
var movies = ["French Kiss", "Serendipity", "Love Actually", "Outbreak", "Pride and Prejudice", "Thumbelina", "Overboard"];
for (i = 0; i < movies.length; i += 1) {
    window.console.log(movies.sort());
} */
// NEED TO FIGURE OUT
/* 
var i;
var movies = ["French Kiss", "Serendipity", "Love Actually", "Outbreak", "Pride and Prejudice", "Thumbelina", "Overboard"];
for (i in movies) {
    window.console.log(movies.sort());
} */

//STEP 8
// NEED TO FIGURE OUT
/*var i;
var movies = ["French Kiss", "Serendipity", "Love Actually", "Outbreak", "Pride and Prejudice", "Thumbelina", "Overboard"];
var leastFavMovies =["Sin City", "Ted", "White Chicks" ];
for (i = 0; i < movies.length; i += 1) {
    for (i = 0; i < leastFavMovies.length; i += 1) {
        window.console.log(movies[i] + "<br>" + leastFavMovies[i]);  
}
} */


//STEP 9
/* var favMovies = ["French Kiss", "Serendipity", "Love Actually", "Outbreak", "Pride and Prejudice", "Thumbelina", "Overboard"];
var leastFavMovies = ["Sin City", "Ted", "White Chicks" ];
var movies = favMovies.concat(leastFavMovies);
window.console.log(movies.sort().reverse()); */

//STEP 10
/* var favMovies = ["French Kiss", "Serendipity", "Love Actually", "Outbreak", "Pride and Prejudice", "Thumbelina", "Overboard"];
var leastFavMovies = ["Sin City", "Ted", "White Chicks" ];
var movies = favMovies.concat(leastFavMovies);
movies = movies.pop();
window.console.log(movies); */

//STEP 11
/* var favMovies = ["French Kiss", "Serendipity", "Love Actually", "Outbreak", "Pride and Prejudice", "Thumbelina", "Overboard"];
var leastFavMovies = ["Sin City", "Ted", "White Chicks" ];
var movies = favMovies.concat(leastFavMovies);
movies = movies.shift();
window.console.log(movies); */

//STEP 12
/* var favMovies = ["French Kiss", "Serendipity", "Love Actually", "Outbreak", "Pride and Prejudice", "Thumbelina", "Overboard"];
var leastFavMovies = ["Sin City", "Ted", "White Chicks" ];
var movies = favMovies.concat(leastFavMovies);
movies.splice(7, 8, "Emma", "Jurassic Park", "Jaws");
window.console.log(movies); */

//STEP 13

//STEP 14

//STEP 15

//STEP 16

//STEP 17

//STEP 18

//STEP 19

//STEP 20