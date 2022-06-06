const enter_btn = document.querySelector('#enter-btn')
const names = document.querySelector('#InputName')
let player_name;
enter_btn.addEventListener('click', (e) => {
    player_name = names.value;
    console.log(player_name);
    if (player_name === '') {
        alert('Please enter your name');
        e.preventDefault();
    }

    else {
        localStorage.setItem(player_name, '0');
    }
})
