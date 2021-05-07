let examples1 = [];
let exempleDiv;
let result1, result2;
let rand1, rand2;
let correct;
let level1;
let span;
let modal;

let onloadFunc = function () {
    exempleDiv = document.getElementById("exampleDiv");
    result1 = document.getElementById("result1");
    result2 = document.getElementById("result2");
    modal = document.getElementById("myModal")
    span = document.getElementById("close")
    setTimeout(modalBlock, 3000);
    
    rand1 = randomNumber();
    rand2 = randomNumber();
    examples1 = [rand1 + " + " + rand2];
    innerExemple();
    innerResult();

    result1.addEventListener("click", buttonClick);
    result2.addEventListener("click", buttonClick);
    span.addEventListener("click", modalNone)
}

let innerExemple = function () {
    for (let i = 0; i < examples1.length; i++) {
        exempleDiv.innerText = examples1[i];
    }
}
let innerResult = function () {
    correct = rand1 + rand2;

    result1.innerText = correct;
    result2.innerText = randomNumber();
}
let randomNumber = function () {
    let rand = Math.floor(Math.random() * 100);
    return rand;
}
let buttonClick = function (e){
    if (e.target.innerText == correct){
        e.target.style.backgroundColor = "green"
        createNewExample(e);
        level1++;
    } else {
        createNewExample(e);
        modalBlock();
    }
}

let modalNone = function () {
    modal.style.display = "none";
}
let modalBlock = function (){
    modal.style.display = "block"
}
let createNewExample = function (e){
    rand1 = randomNumber();
    rand2 = randomNumber();
    examples1 = [rand1 + " + " + rand2];
    innerExemple();
    innerResult();
    e.target.style.backgroundColor = "crimson"
}

window.onload = onloadFunc;

