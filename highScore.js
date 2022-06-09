console.table(localStorage);
const ul = document.querySelector("#UL");
const ul_1 = document.querySelector("#UL_1");
const name_1 = document.querySelector("#name");
const score_1 = document.querySelector("#score");
const no_1 = document.querySelector("#no");
const bod_1 = document.querySelector("#bod");

var highScoresKeys = Object.keys(localStorage);
var highScores = Object.values(localStorage);
if(highScoresKeys.length > 10){
    var len = 10;
}
else{
    var len = highScoresKeys.length;
}
for (var i = 0; i < len; i++) {
    var index_key = -1;

    var name_2 = highScoresKeys[i];
    var score = highScores[i];
    if(name_2 ==="name"){
         index_key = i;
    }
    if(index_key !==i){
    var tr = document.createElement("tr");
    var td_1 = document.createElement("td");
    var td_2 = document.createElement("td");
    td_1.innerHTML = name_2;
    td_2.innerHTML = score;
    tr.appendChild(td_1);
    tr.appendChild(td_2);
    bod_1.appendChild(tr);
    }
}













