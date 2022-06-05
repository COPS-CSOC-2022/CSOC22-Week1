function initiliazeTimer(){
    minuteElement.innerText = "00";
    secondElement.innerText = "00";
    millisecondElement.innerText = "00";
    second = 0;
    millisecond = 0;
    minute = 0;
}

function startDisplayingTimer(){
    clearInterval(interval); 
    interval = setInterval(startTimer, 10); 
};

function pauseDisplayingTimer() { 
    clearInterval(interval); 
};

function stopDisplayingTimer() {
    clearInterval(interval); 
    initiliazeTimer()
}

function startTimer() {
    millisecond++;
    if(millisecond < 9) {
        millisecondElement.innerText = "0" + millisecond;
    }
    if(millisecond > 99) {
        second++;
        secondElement.innerText = "0" + second;
        millisecond = 0;
        millisecondElement.innerText = "0" + millisecond;
    }
    if(second > 60) {
        minute++;
        minuteElement.innerText = "0" + minute;
        second = 0;
        secondElement.innerText = "0" + second;
    }

    if(millisecond > 9) {
        millisecondElement.innerText = millisecond;
    }
    if (second > 9){
        secondElement.innerText = second;
    }
    if (minute > 9){
        minuteElement.innerText = minute;
    }
}
