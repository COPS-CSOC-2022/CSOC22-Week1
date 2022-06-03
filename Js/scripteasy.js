const heading = document.querySelector('#heading');
const word = document.querySelector('#word');
const incorrect = document.querySelector('#incorrect');
const word_place = document.querySelector('#word-place');
const aplhabets_place = document.querySelector('#alphabets-place');
const lives_number = document.querySelector('#lives_number');
const hint_button = document.querySelector('#hint-button')
const hint_text = document.querySelector('#hint-statement')
const url_for_word = 'https://random-words-api.vercel.app/word';
const page = document.getElementById('container')
const streck_place = document.querySelector('#streck-place')
const restart_game = document.querySelector('#restart_button')
const timer_place = document.querySelector('#timer-place')
var streck_count = 0;
var lives;
var found_correct_word;
var Hard = 0;
var Easy = 1;
var time = 300;
var easy_btn = document.querySelector('#easy_btn');
var hard_btn = document.querySelector('#hard_btn');

restart_game.addEventListener('click', () => {
    location.reload();
})

fetch(url_for_word).then(function (response) {
    return response.json();
}).then(function (Data) {
    console.log(Data[0]);
    var timer = setInterval(() => {
        time -= 1;
        timer_place.innerHTML = time + "s";
        if (time == 0) {
            clearInterval(timer);
            page.classList.add('loose_win')
            alert('Time is up! You loose')
            location.reload();
        }
    }, 1000);
    if (Data[0].word.length <= 5 && Easy === 1) {
        hint_button.addEventListener('click', () => {
            hint_text.textContent = Data[0].definition;
            hint_button.classList.add('disabled');
        })

        word.innerHTML = Data[0].word;
        lives = 5;
        lives_number.textContent = lives;
        const capital_word = Data[0].word.toUpperCase();
        const word_alphabet_array = capital_word.split('');
        console.log(word_alphabet_array);
        const word_length = Data[0].word.length;
        found_correct_word = word_length;
        console.log(word_length);
        var char_array = [];
        for (let index = 0; index < word_length; index++) {
            char_array.push('_');
            word_place.textContent = word_place.textContent + '   _  ';
        }
        // display all aplhabets
        for (let index = 0; index < 26; index++) {
            aplhabets_place.innerHTML = aplhabets_place.innerHTML + '<button class="btn btn-primary" id="alphabet">' + String.fromCharCode(65 + index) + '</button>';
        }
        const all_alphabet = document.querySelectorAll('#alphabet');
        // nodelist to array
        all_alphabet.forEach(function (alphabet) {
            alphabet.addEventListener('click', function () {
                alphabet.classList.add('disabled');
                const clicked_alphbet = alphabet.textContent;
                // find alphabet exist in word at which place
                const alphabet_exist = word_alphabet_array.indexOf(alphabet.textContent);
                var index = -1;
                var index_array = [];
                if (alphabet_exist > -1) {
                    word_alphabet_array.forEach(alphabets => {
                        index++;
                        if (alphabets == alphabet.textContent) {
                            console.log(index);
                            index_array.push(index);
                        }
                    });
                    index = -1;
                    console.log(index_array);
                    console.log(char_array);
                    streck_count += index_array.length;
                    streck_place.textContent = streck_count;
                    index_array.forEach(number => {
                        char_array[number] = clicked_alphbet;
                    });
                    word_place.innerHTML = "";
                    char_array.forEach(char => {
                        word_place.textContent = word_place.textContent + " " + char + " ";
                    })
                    found_correct_word -= index_array.length;
                    if (found_correct_word === 0) {
                        page.classList.add('loose_win')
                        restart_game.classList.remove('loose_win')
                        restart_game.classList.add('click_able')
                        heading.textContent = "You Win";
                    }
                } else {
                    // display in incorrect 
                    streck_count = 0;
                    streck_place.textContent = streck_count;
                    incorrect.textContent = incorrect.textContent + " " + clicked_alphbet;
                    lives_number.textContent = lives_number.textContent - 1;
                    lives--;
                    if (lives === 0) {
                        page.classList.add('loose_win')
                        restart_game.classList.remove('loose_win')
                        restart_game.classList.add('click_able')
                        heading.textContent = "You Loose";
                    }
                }
            })
        })
    }
    else {
        location.reload();
    }

})