console.table(localStorage);

const btn = document.getElementById("btn");
btn.addEventListener("click", function () {
    console.log(121);
    window.location.href = '../html/index.html';
}
);


// convert localStorage to array
var high_score = Object.values(localStorage);


// get all key names from localStorage
var keys = Object.keys(localStorage);
console.log(high_score);
console.log(keys);
var index = high_score.indexOf(localStorage.name);
console.log(index);


for (let j = 0; j < high_score.length; j++) {

    for (let k = 0; k < high_score.length; k++) {
        if (k != index && j != index) {
            if (parseInt(high_score[j]) > parseInt(high_score[k])) {
                var temp = high_score[j];
                high_score[j] = high_score[k];
                high_score[k] = temp;
                var temp2 = keys[j];
                keys[j] = keys[k];
                keys[k] = temp2;
            }
        }
    }


}




console.log(high_score);
console.log(keys);

// find  INDEX of the name key in localStorage


// display high_score
for (var i = 0; i < high_score.length && i < 11; i++) {

    if (i != index) {
        // display keys and values
        const tr = document.createElement('tr');
        const th = document.createElement('th');
        th.scope = "row";
        const td1 = document.createElement('td');
        const td2 = document.createElement('td');

        th.textContent = i;
        td1.textContent = keys[i];
        td2.textContent = high_score[i];
        tr.appendChild(th);
        tr.appendChild(td1);
        tr.appendChild(td2);
        document.getElementById('highscore').appendChild(tr);
    }
}

