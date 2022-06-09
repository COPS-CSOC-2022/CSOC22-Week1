// grabbing all elements 
const enter_btn = document.querySelector('#enter-btn')
const highscore_btn = document.querySelector('#highscore-btn')


// redirecting to highscore page
highscore_btn.addEventListener('click', function () {
    window.location.href = './html/Highscore.html';
}
);


// see condition and login person 
const names = document.querySelector('#InputName')
let player_name;
enter_btn.addEventListener('click', (e) => {
    player_name = names.value;
    console.log(player_name);
    if (player_name === '' || player_name === "name") {
        alert('Please enter your name or change the name to something else');
        e.preventDefault();
    }
    else {
        localStorage.setItem("name", player_name);
        localStorage.setItem(player_name, '0');
        window.location.href = './html/hard.html';
    }
})
