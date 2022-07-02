const enterButton = document.querySelector('#enter-btn')
const leaderboardButton = document.querySelector('#leaderboard-btn')


const inpName = document.querySelector('#input-name')
let playerName;

enterButton.addEventListener('click', function(event) {
    playerName = inpName.value;
    console.log(playerName);
    if (playerName === '') {
        alert('Please enter valid name!!');
        event.preventDefault();
    }
    else {
        localStorage.setItem("name", playerName);
        localStorage.setItem(playerName, '0');
        window.location.href = 'easy.html';
    }
});

leaderboardButton.addEventListener('click', function () {
    window.location.href = 'leaderboard.html';
});
