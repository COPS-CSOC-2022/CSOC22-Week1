function showHint() {
    let dashes = document.getElementsByClassName("dashes");
    for (var index = 0; index < dashes.length; index++) {
        // console.log(dashes[index].innerHTML);
        if (dashes[index].innerHTML == "_") {
            animateHint(index);
            return;
        }
    }
}

function animateHint(index) {
    let dashes = document.getElementsByClassName("dashes");
    let charArray = chosenWord.split("");

    var dashElement = dashes[index];
    var char = charArray[index];
    dashElement.innerHTML = char;
    dashElement.classList.add("elementToFadeInAndOut");
    dashElement.addEventListener("animationend", function () {
        dashElement.innerHTML = "_";
        dashElement.classList.remove("elementToFadeInAndOut");
    });
    decrementScore(hintCost);
}


function subtractOnAnimate(toSub) {
    var ele = document.getElementById("subtraction");
    ele.innerHTML = "-" + toSub;
    ele.classList.add("animating");
    var listener = ele.addEventListener("animationend", function () {
        ele.classList.remove("animating");
    })
    ele.removeEventListener("animationend", listener);
}

function decrementScore(toSub) {
    ele = document.getElementById("points");
    endNum = score - toSub;
    subtractOnAnimate(toSub);
    animateRecSub(score, ele, endNum + 1);
    score -= toSub;
}

function animateRecSub(i, ele, endNum) {
    if (Number(ele.innerHTML) >= endNum) {
        ele.innerHTML = i;
        setTimeout(function () {
            animateRecSub(i - 1, ele, endNum);
        }, pointsSpeed);
    }
}
