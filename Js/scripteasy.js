const Head = document.querySelector('#heading');
const word = document.querySelector('#word');
const incorrect_place = document.querySelector('#incorrect');
const words = document.querySelector('#word-place');
const alphabet = document.querySelector('#alphabets-place');
const number_of_lives = document.querySelector('#lives_number');
const button_of_hint = document.querySelector('#hint-button')
const URL = 'https://random-word-api.herokuapp.com/word';
const Whole_page = document.getElementById('container')
const streak_content = document.querySelector('#streck-place')
const reset_btn = document.querySelector('#restart_button')
const firstthing = document.querySelector('.head')
const secondthing = document.querySelector('.body')
const thirdthing = document.querySelectorAll('.thirdthing')
const fourththing = document.querySelector('.leg1');
const fifththing = document.querySelector('.leg2');
const timer_content = document.querySelector('#timer-place')
const audio = new Audio("../sound/sound.mp3");
let counting_streak = 0;
let lives;
let letter_found;
let easy_level = 1;
let seconds = 240;
let array_for_hint_button = [];

for (var i = 1; i <= localStorage.length; i++) {

    var the_playing_player = localStorage.key(i);
    if (the_playing_player === "name") {
        var index_of_the_player = i;
    }
}
const name_of_players = localStorage.key(index_of_the_player);
const player_name = localStorage.getItem(name_of_players);
const score_of_player = localStorage.getItem(player_name);








reset_btn.addEventListener('click', () => {
    window.location.href = '../index.html';
})



fetch(URL).then(function (response) {
    return response.json();
}).then(function (Data) {



    if (Data[0].length <= 5 && easy_level === 1) {

        lives = 5;
        number_of_lives.textContent = lives;



        const WORD_IN_CAPITAL = Data[0].toUpperCase();
        const array_of_capital_letter = WORD_IN_CAPITAL.split('');
        const length_of_word = Data[0].length;
        letter_found = length_of_word;




        var char_array = [];


        var timer = setInterval(() => {
            seconds -= 1;
            timer_content.innerHTML = seconds + "s";
            if (seconds === 0) {
                clearInterval(timer);
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
                audio.play();
                alphabet.classList.remove('btn-outline-primary');
                alphabet.classList.add('btn-primary');
                alphabet.classList.add('disabled');


                // find alphabet exist in word at which place
                const alphabet_exist = array_of_capital_letter.indexOf(alphabet.textContent);
                var index = -1;
                var index_array = [];


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
                        clearInterval(timer);
                        Whole_page.classList.add('loose_win')
                        Head.textContent = "You Win";
                        // string to int convertion
                        var score = parseInt(score_of_player);
                        score += 2;
                        localStorage.setItem(player_name, score);
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
                    lives--;
                    if (lives === 4) {
                        firstthing.classList.remove('display');
                    }
                    if (lives === 3) {
                        secondthing.classList.remove('display');
                    }
                    if (lives === 2) {
                        thirdthing.forEach(e => {
                            e.classList.remove('display');
                        })
                    }
                    if (lives === 1) {
                        fourththing.classList.remove('display');
                    }
                    if (lives === 0) {
                        fifththing.classList.remove('display');
                        clearInterval(timer);
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
