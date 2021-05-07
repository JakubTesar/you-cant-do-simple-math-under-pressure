let examples1 = [];
let exempleDiv;
let result1, result2;
let rand1, rand2;

let onloadFunc = function () {
    exempleDiv = document.getElementById("exampleDiv");
    result1 = document.getElementById("result1");
    result2 = document.getElementById("result2");

    result1.addEventListener("click", buttonClick);
    result2.addEventListener("click", buttonClick);

    rand1 = randomNumber();
    rand2 = randomNumber();
    examples1 = [rand1 + " + " + rand2];
    innerExemple();
    innerResult();
}

let innerExemple = function () {
    for (let i = 0; i < examples1.length; i++) {
        exempleDiv.innerText = examples1[i];
    }
}

let innerResult = function () {
    let i = Math.floor(Math.random() * 20);
    let j = 0

    if (i === 0){
        j = 20;
    }
    result1.id = "resultRand" + i;
    result2.id = "resultRand" + j;
    resultRand0 = document.getElementById("resultRand" + i);
    resultRand1 = document.getElementById("resultRand" + j);

    let correct = rand1 + rand2;

    resultRand0.innerText = correct;
    resultRand1.innerText = randomNumber();
}

let randomNumber = function () {
    let rand = Math.floor(Math.random() * 16);
    return rand;
}

let buttonClick = function (e){
    e.target.style.backgroundColor = "blue"
    console.log(e.target.innerText);
}




window.onload = onloadFunc;

