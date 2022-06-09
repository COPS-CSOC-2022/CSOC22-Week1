// grabbing and declaring variable
const Head = document.querySelector('#heading');
const word = document.querySelector('#word');
const incorrect_place = document.querySelector('#incorrect');
const alphabet = document.querySelector('#alphabets-place');
const number_of_lives = document.querySelector('#lives_number');
const button_of_hint = document.querySelector('#hint-button')
const URL = 'https://random-word-api.herokuapp.com/word';
const Whole_page = document.getElementById('container')
const streak_content = document.querySelector('#streck-place')
const reset_btn = document.querySelector('#restart_button')
const timer_content = document.querySelector('#timer-place')
const head = document.querySelector('.head')
const body_arms = document.querySelectorAll('.secondthing')
const words = document.querySelector('#word-place');
const legs = document.querySelectorAll('.thirdthing')
const audio = new Audio("../sound/sound.mp3");
let counting_streak = 0;
let life;
let letter_found;
let hard_level = 1;
let seconds = 120;
let array_for_hint_button = [];
var playing_player_index;

// getting player name and its score to change
for (var i = 1; i <= localStorage.length; i++) {
    var the_playing_player = localStorage.key(i);
    if (the_playing_player === "name") {
        playing_player_index = i;
    }
}
const name_of_players = localStorage.key(playing_player_index);
const player_name = localStorage.getItem(name_of_players);
const score_of_player = localStorage.getItem(player_name);




// restart button event
reset_btn.addEventListener('click', () => {
    window.location.href = '../index.html';
})



// getting data from API
fetch(URL).then(function (response) {
    return response.json();
}).then(function (Data) {

    // checking hard_level condition of word
    if (Data[0].length > 5 && hard_level === 1) {
        life = 3;
        const WORD_IN_CAPITAL = Data[0].toUpperCase();
        const array_of_capital_letter = WORD_IN_CAPITAL.split('');
        number_of_lives.textContent = life;
        const length_of_word = Data[0].length;
        var char_array = [];
        letter_found = length_of_word;

        // timer
        var countdown = setInterval(() => {
            seconds -= 1;
            timer_content.innerHTML = seconds + "s";
            if (seconds === 0) {
                clearInterval(countdown);
                Whole_page.classList.add('loose_win')
                words.textContent = "";
                array_of_capital_letter.forEach(alpha => {
                    words.textContent = words.textContent + " " + alpha + " ";
                });
                Head.textContent = "Time is up! You Lose";
                Whole_page.classList.add('loose_win')
                reset_btn.classList.remove('loose_win')
                reset_btn.classList.add('click_able')
            }
        }, 1000);



        // dash for word
        for (let index = 0; index < length_of_word; index++) {
            char_array.push('_');
            words.textContent = words.textContent + '   _  ';
        }




        // display all aplhabets
        for (let index = 0; index < 26; index++) {
            alphabet.innerHTML = alphabet.innerHTML + '<button class="btn btn-outline-primary alphabet" id="alphabet">' + String.fromCharCode(65 + index) + '</button>';
        }





        const all_alphabet = document.querySelectorAll('#alphabet');
        // nodelist to array
        all_alphabet.forEach(function (alphabet) {

            alphabet.addEventListener('click', function () {
                // seeing click on word
                audio.play();
                alphabet.classList.remove('btn-outline-primary');
                alphabet.classList.add('btn-primary');
                alphabet.classList.add('disabled');
                // find alphabet exist in word at which place
                const alphabet_exist = array_of_capital_letter.indexOf(alphabet.textContent);
                var index = -1;
                var index_array = [];
                // if alphabet exist see in word
                if (alphabet_exist > -1) {
                    all_alphabet.forEach(e => {
                        if (e.textContent == alphabet.textContent) {
                            e.classList.add('btn-success');
                            e.classList.remove('btn-outline-primary');
                        }
                    });
                    array_of_capital_letter.forEach(alphabets => {
                        index++;
                        if (alphabets == alphabet.textContent) {
                            index_array.push(index);
                        }
                    });
                    index = -1;
                    counting_streak += index_array.length;
                    streak_content.textContent = counting_streak;
                    index_array.forEach(number => {
                        char_array[number] = alphabet.textContent;
                    });


                    words.innerHTML = "";

                    char_array.forEach(char => {
                        words.textContent = words.textContent + " " + char + " ";
                    })


                    letter_found -= index_array.length;



                    if (letter_found === 0) {
                        clearInterval(countdown);
                        Whole_page.classList.add('loose_win');
                        Head.textContent = "You Win";
                        // string to int convertion
                        var score = parseInt(score_of_player);
                        score += 3;
                        localStorage.setItem(player_name, score);
                        // location reload after 5 seconds
                        setTimeout(() => {
                            window.location.reload();
                        }
                            , 3000);

                    }
                } else {
                    // display in incorrect_place
                    counting_streak = 0;
                    streak_content.textContent = counting_streak;
                    incorrect_place.textContent = incorrect_place.textContent + " " + alphabet.textContent;
                    all_alphabet.forEach(e => {
                        if (e.textContent == alphabet.textContent) {
                            e.classList.add('btn-danger');
                            e.classList.remove('btn-outline-primary');
                        }
                    });

                    number_of_lives.textContent = number_of_lives.textContent - 1;
                    life--;
                    if (life === 2) {
                        head.classList.remove('display')
                    }
                    if (life === 1) {
                        body_arms.forEach(thing => {
                            thing.classList.remove('display')
                        });

                    }
                    if (life === 0) {
                        legs.forEach(thing => {
                            thing.classList.remove('display')
                        });
                        clearInterval(countdown);
                        words.textContent = "";
                        array_of_capital_letter.forEach(alpha => {
                            words.textContent = words.textContent + " " + alpha + " ";
                        });
                        Whole_page.classList.add('loose_win')
                        reset_btn.classList.remove('loose_win')
                        reset_btn.classList.add('click_able')
                        Head.textContent = "You Lose";
                    }
                }
            })
            button_of_hint.addEventListener('click', () => {
                button_of_hint.classList.add('disabled');
                for (let k = 0; k < length_of_word; k++) {
                    if (char_array[k] == '_') {
                        array_for_hint_button.push(k);
                    }
                }
                all_alphabet.forEach(e => {
                    if (e.textContent == array_of_capital_letter[array_for_hint_button[0]]) {
                        e.classList.remove('alphabet');
                        e.classList.add('alphabet-hint');
                        e.classList.remove('btn-outline-primary');
                    }
                });
            }
            )
        })

    }
    else {
        location.reload();
    }

})
