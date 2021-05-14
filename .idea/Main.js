let examples1 = [];
let exempleDiv;
let result1, result2;
let rand1, rand2;
let correct;

let level1 = 0;
let level2 = 0;
let level3 = 0;
let level4 = 0;
let level5 = 0;
let levelNumber = 1;
let span, span2;
let modal, myTimer, modal2;
let levelDiv;
let kolečko;
let kolečkoContainer;
let levelContainer;

let onloadFunc = function () {
    exempleDiv = document.getElementById("exampleDiv");
    result1 = document.getElementById("result1");
    result2 = document.getElementById("result2");
    modal = document.getElementById("myModal")
    modal2 = document.getElementById("myModal2")
    span = document.getElementById("close")
    span2 = document.getElementById("close2")
    //myTimer = setTimeout(modalBlock, 10000);
    levelDiv = document.getElementById("levelDiv")
    levelContainer = document.getElementById("levelContainer")
    kolečko = document.getElementById("kolečko")
    kolečkoContainer = document.createElement("div");
    kolečkoContainer.className = "kolečkoContainer";
    levelContainer.appendChild(kolečkoContainer);


    rand1 = randomNumber();
    rand2 = randomNumber();
    examples1 = [rand1 + " + " + rand2];
    innerExemple();
    innerResult();
    numberOfLevel()

    result1.addEventListener("click", buttonClick);
    result2.addEventListener("click", buttonClick);
    span.addEventListener("click", modalNone)
    span2.addEventListener("click", modalNone2)
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

let buttonClick = function (e) {
    if (e.target.innerText == correct) {
        level1++;
        clearInterval(myTimer);
        //myTimer = setInterval(modalBlock, 10000);
        createCircle();
        numberOfLevel()
        createNewExample();
    } else {
        createNewExample(e);
        modalBlock();
    }
}
let createCircle = function () {
    kolečko = document.createElement("div");
    kolečko.className = "kolečko"
    kolečkoContainer.appendChild(kolečko);
}
let numberOfLevel = function () {
    if (level1 >= 0) {
        levelDiv.innerText = "Level " + levelNumber;
    }
    if (level1 == 5) {
        levelNumber++;
        levelDiv.innerText = "Level " + levelNumber;
        kolečkoContainer.remove();
        createKolečkoContainer();
    }
    if (level1 == 10) {
        levelNumber++;
        levelDiv.innerText = "Level " + levelNumber;
        kolečkoContainer.remove();
        createKolečkoContainer();
    }
    if (level1 == 15) {
        levelNumber++;
        levelDiv.innerText = "Level " + levelNumber;
        kolečkoContainer.remove();
        createKolečkoContainer()
    }
    if (level1 == 20) {
        levelNumber++;
        levelDiv.innerText = "Level " + levelNumber;
        kolečkoContainer.remove();
        createKolečkoContainer();
    }
    if (level1 == 25) {
        levelNumber++;
        levelDiv.innerText = "Level " + levelNumber;
        createKolečkoContainer();
        modalBlock2();
    }
}
let modalNone = function () {
    modal.style.display = "none";
}
let modalBlock = function () {
    modal.style.display = "block"
}
let modalNone2 = function () {
    modal2.style.display = "none";
}
let modalBlock2 = function () {
    modal2.style.display = "block"
}
let createNewExample = function (e) {
    rand1 = randomNumber();
    rand2 = randomNumber();
    examples1 = [rand1 + " + " + rand2];
    innerExemple();
    innerResult();
}
let createKolečkoContainer = function () {
    kolečkoContainer = document.createElement("div");
    kolečkoContainer.className = "kolečkoContainer";
    levelContainer.appendChild(kolečkoContainer);
}
window.onload = onloadFunc;

