const heading = document.querySelector('#heading');
const word = document.querySelector('#word');
const incorrect = document.querySelector('#incorrect');
const word_place = document.querySelector('#word-place');
const aplhabets_place = document.querySelector('#alphabets-place');
const lives_number = document.querySelector('#lives_number');
const hint_button = document.querySelector('#hint-button')
const hint_text = document.querySelector('#hint-statement')
const url_for_word = 'https://random-word-api.herokuapp.com/word';
const page = document.getElementById('container')
const streck_place = document.querySelector('#streck-place')
const restart_game = document.querySelector('#restart_button')
const firstthing = document.querySelector('.head')
const secondthing = document.querySelector('.body')
const thirdthing = document.querySelectorAll('.thirdthing')
const fourththing = document.querySelector('.leg1');
const fifththing = document.querySelector('.leg2');
const timer_place = document.querySelector('#timer-place')
let streck_count = 0;
let lives;
let found_correct_word;
let Hard = 1;
let Easy = 0;
let time = 240;
let hint_arr = [];

console.log(localStorage);
for (var i = 1; i <= localStorage.length; i++) {

    var the_playing_player = localStorage.key(i);
    if (the_playing_player === "name") {
        var index_of_the_player = i;
    }
}
const names = localStorage.key(index_of_the_player);
const the_player = localStorage.getItem(names);
const the_score = localStorage.getItem(the_player);


let easy_btn = document.querySelector('#easy_btn');
let hard_btn = document.querySelector('#hard_btn');







restart_game.addEventListener('click', () => {
    window.location.href = '../html/index.html';
})



fetch(url_for_word).then(function (response) {
    return response.json();
}).then(function (Data) {
    console.log(Data[0]);



    if (Data[0].length <= 5 && Hard === 1) {

        lives = 5;
        lives_number.textContent = lives;



        const capital_word = Data[0].toUpperCase();
        const word_alphabet_array = capital_word.split('');
        const word_length = Data[0].length;
        found_correct_word = word_length;




        var char_array = [];


        var timer = setInterval(() => {
            time -= 1;
            timer_place.innerHTML = time + "s";
            if (time === 0) {
                clearInterval(timer);
                page.classList.add('loose_win')
                word_place.textContent = "";
                word_alphabet_array.forEach(alpha => {
                    word_place.textContent = word_place.textContent + " " + alpha + " ";
                });
                heading.textContent = "Time is up! You Lose";
                page.classList.add('loose_win')
                restart_game.classList.remove('loose_win')
                restart_game.classList.add('click_able')
            }
        }, 1000);




        for (let index = 0; index < word_length; index++) {
            char_array.push('_');
            word_place.textContent = word_place.textContent + '   _  ';
        }




        // display all aplhabets
        for (let index = 0; index < 26; index++) {
            aplhabets_place.innerHTML = aplhabets_place.innerHTML + '<button class="btn btn-outline-primary" id="alphabet">' + String.fromCharCode(65 + index) + '</button>';
        }



        const all_alphabet = document.querySelectorAll('#alphabet');
        // nodelist to array
        all_alphabet.forEach(function (alphabet) {
            alphabet.addEventListener('click', function () {
                alphabet.classList.remove('btn-outline-primary');
                alphabet.classList.add('btn-primary');
                alphabet.classList.add('disabled');


                // find alphabet exist in word at which place
                const alphabet_exist = word_alphabet_array.indexOf(alphabet.textContent);
                var index = -1;
                var index_array = [];


                if (alphabet_exist > -1) {
                    all_alphabet.forEach(e => {
                        if (e.textContent == alphabet.textContent) {
                            e.classList.add('btn-success');
                            e.classList.remove('btn-outline-primary');
                        }
                    });
                    word_alphabet_array.forEach(alphabets => {
                        index++;
                        if (alphabets == alphabet.textContent) {
                            index_array.push(index);
                        }
                    });
                    index = -1;


                    streck_count += index_array.length;
                    streck_place.textContent = streck_count;


                    index_array.forEach(number => {
                        char_array[number] = alphabet.textContent;
                    });


                    word_place.innerHTML = "";

                    char_array.forEach(char => {
                        word_place.textContent = word_place.textContent + " " + char + " ";
                    })


                    found_correct_word -= index_array.length;



                    if (found_correct_word === 0) {
                        clearInterval(timer);
                        page.classList.add('loose_win')
                        restart_game.classList.remove('loose_win')
                        restart_game.classList.add('click_able')
                        heading.textContent = "You Win";
                        // string to int convertion
                        var score = parseInt(the_score);
                        score += 2;
                        localStorage.setItem(the_player, score);
                        setTimeout(() => {
                            window.location.reload();
                        }
                            , 5000);
                    }
                } else {
                    // display in incorrect 
                    streck_count = 0;
                    streck_place.textContent = streck_count;
                    incorrect.textContent = incorrect.textContent + " " + alphabet.textContent;
                    all_alphabet.forEach(e => {
                        if (e.textContent == alphabet.textContent) {
                            e.classList.add('btn-danger');
                            e.classList.remove('btn-outline-primary');
                        }
                    });

                    lives_number.textContent = lives_number.textContent - 1;
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
                        word_place.textContent = "";
                        word_alphabet_array.forEach(alpha => {
                            word_place.textContent = word_place.textContent + " " + alpha + " ";
                        });
                        page.classList.add('loose_win')
                        restart_game.classList.remove('loose_win')
                        restart_game.classList.add('click_able')
                        heading.textContent = "You Lose";
                    }
                }
            })
            hint_button.addEventListener('click', () => {
                hint_button.classList.add('disabled');
                for (let k = 0; k < word_length; k++) {
                    if (char_array[k] == '_') {
                        hint_arr.push(k);
                    }
                }
                all_alphabet.forEach(e => {
                    if (e.textContent == word_alphabet_array[hint_arr[0]]) {
                        e.classList.add('btn-success');
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