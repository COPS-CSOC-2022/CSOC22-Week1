// console.table(localStorage);
// // convert localStorage to array
// var highscore = Object.values(localStorage);
// // sort array
// highscore.sort(function (a, b) {
//     return b - a;
// }
// );
// // display highscore
// for (var i = 0; i < highscore.length; i++) {
//     document.getElementById("highscore").innerHTML += highscore[i] + "<br>";
// }


// convert localStorage to array
var highscore = Object.values(localStorage);
// sort array
highscore.sort(function (a, b) {
    return b - a;
}
);
