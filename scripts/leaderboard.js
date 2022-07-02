const btn = document.getElementById("return-btn");
btn.addEventListener("click", function () {
    window.location.href = 'index.html';
});


// obtaining key value pairs
var keys = Object.keys(localStorage);
var highScoreArr = Object.values(localStorage);


// // find index which containes
var index = highScoreArr.indexOf(localStorage.name);


// bubble-sorted both keys and score arrays
for (let j = 0; j < highScoreArr.length; j++) {

    for (let k = 0; k < highScoreArr.length; k++) {
        if (k != index && j != index) {
            if (parseInt(highScoreArr[j]) > parseInt(highScoreArr[k])) {
                [highScoreArr[j],highScoreArr[k]]=[highScoreArr[k],highScoreArr[j]];
                [keys[j],keys[k]]=[keys[k],keys[j]]
            }
        }
    }
}

// displaying table 
for (var i = 0; i < highScoreArr.length && i < 11; i++) {

    if(i!=index){
            // creating table entities
            const tr = document.createElement('tr');
            const sNo = document.createElement('th');
            sNo.scope = "row";
            const nameOfPlayer = document.createElement('td');
            const highestScore = document.createElement('td');
    
            sNo.textContent = i+1;
            nameOfPlayer.textContent = keys[i];
            highestScore.textContent = highScoreArr[i];
    
            tr.appendChild(sNo);
            tr.appendChild(nameOfPlayer);
            tr.appendChild(highestScore);
    
            console.log(nameOfPlayer);
            console.log(highestScore);
            document.getElementById('table-body').appendChild(tr);
    } else {
        console.log(keys[i]);
        console.log(highScoreArr[i]);
    }  
    
}