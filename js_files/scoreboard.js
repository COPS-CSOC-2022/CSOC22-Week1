function addEntry(score, time){
    var scoreboard;
    if (localStorage.getItem("scoreboard") === null) {
        scoreboard = [];
    }
    else {
        scoreboard = JSON.parse(localStorage.getItem("scoreboard"));
    }
    var ele  = [score, time, getDate()];
    scoreboard.push(ele);
    scoreboard.sort(
        function(a,b){
            if (a[0]==b[0]) return a[1] < b[1] ? -1 : 1;
            return a[0] < b[0] ? 1 : -1;
        }
    );
    localStorage.setItem("scoreboard", JSON.stringify(scoreboard));
}

function getDate(){
    var currentdate = new Date(); 
    var datetime = currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " @ "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();
    return datetime;
}

function updateScoreboard(){
    var scoreboard;
    var tableElement = document.getElementById("scoreboardDisplay");
    if (localStorage.getItem("scoreboard") === null) {
        tableElement.innerHTML = "<strong> Start playing to get featured here. </strong>";
        return;
    }
    else {
        scoreboard = JSON.parse(localStorage.getItem("scoreboard"));
    }

    var htmlStart= `
    <table class="table table-striped">
    <thead>
        <tr>
        <th scope="col"><center>#</center></th>
        <th scope="col"><center>Score</center></th>
        <th scope="col"><center>Time Taken</center></th>
        <th scope="col"><center>Logged Score at</center></th>
        </tr>
    </thead>
    <tbody>`
    
    var htmlMiddle = "";
    var arrayLength = scoreboard.length;
    for (var i = 0; i < arrayLength; i++) {
        if (scoreboard[i][0] == 0 &&  !displayNullScores) continue;
        var text =  `
        <tr>
            <th scope="row"><center>SERIALNO</center></th>
            <td><center>SCORE</center></td>
            <td><center>TIME</center></td>
            <td><center>WHEN</center></td>
        </tr>
        `;
        var text1 = text.replace("SERIALNO", i+1);
        var text2 = text1.replace("SCORE", scoreboard[i][0]);
        var text3 = text2.replace("TIME", scoreboard[i][1]);
        var text4 = text3.replace("WHEN", scoreboard[i][2]);
        htmlMiddle += text4;
    }

    var htmlEnd = `
        </tbody>
    </table>
    `
    tableElement.innerHTML = '';
    tableElement.innerHTML = htmlStart + htmlMiddle + htmlEnd;
}