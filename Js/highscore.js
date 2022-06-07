console.table(localStorage);

const btn = document.getElementById("btn");
btn.addEventListener("click", function () {
    console.log(121);
    window.location.href = '../html/index.html';
}
);


// convert localStorage to array
var highscore = Object.values(localStorage);


// get all key names from localStorage
var keys = Object.keys(localStorage);
console.log(highscore);
console.log(keys);
var index = highscore.indexOf(localStorage.name);
console.log(index);


for (let j = 0; j < highscore.length; j++) {

    for (let k = 0; k < highscore.length; k++) {
        if (k != index && j != index) {
            if (highscore[j] > highscore[k]) {
                var temp = highscore[j];
                highscore[j] = highscore[k];
                highscore[k] = temp;
                var temp2 = keys[j];
                keys[j] = keys[k];
                keys[k] = temp2;
            }
        }
    }


}




console.log(highscore);
console.log(keys);

// find  INDEX of the name key in localStorage














// display highscore
for (var i = 0; i < highscore.length && i < 11; i++) {

    if (i != index) {
        // display keys and values
        const tr = document.createElement('tr');
        const th = document.createElement('th');
        th.scope = "row";
        const td1 = document.createElement('td');
        const td2 = document.createElement('td');

        th.textContent = i;
        td1.textContent = keys[i];
        td2.textContent = highscore[i];
        tr.appendChild(th);
        tr.appendChild(td1);
        tr.appendChild(td2);
        document.getElementById('highscore').appendChild(tr);
    }
}

