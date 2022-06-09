
// return btn
const btn = document.getElementById("btn");
btn.addEventListener("click", function () {
    window.location.href = '../html/index.html';
}
);


// convert localStorage to array and get all key names from localStorage
var high_score = Object.values(localStorage);
var keys = Object.keys(localStorage);

// find index of name key which is not to print
var index = high_score.indexOf(localStorage.name);


// sorted both keys and score
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

// display high_score in page
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

