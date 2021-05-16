let examples1 = [];
let exempleDiv, result1, result2, rand1, rand2, correct,span, span2,modal, myTimer, modal2, levelDiv, kolecko, koleckoContainer, levelContainer;
let time = 8000;
let level1 = 0;
let level2 = 0;
let level3 = 0;
let level4 = 0;
let level5 = 0;
let levelNumber = 1;


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
    kolecko = document.getElementById("kolečko")
    koleckoContainer = document.createElement("div");
    koleckoContainer.className = "kolečkoContainer";
    levelContainer.appendChild(koleckoContainer);


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
    let rand = Math.floor(Math.random() * 5);
    correct = rand1 + rand2;


    if (rand < 2) {
        result2.innerText = correct;
        result1.innerText = randomNumber();
    }

    if (rand > 2) {
        result1.innerText = correct;
        result2.innerText = randomNumber();
    }
}
let randomNumber = function () {
    let rand = Math.floor(Math.random() * 100);
    return rand;
}
let buttonClick = function (e) {
    if (e.target.innerText == correct) {
        level1++;
        createCircle();
        numberOfLevel()
        createNewExample();
    } else {
        createNewExample(e);
        modalBlock();
    }
}
let createCircle = function () {
    kolecko = document.createElement("div");
    kolecko.className = "kolečko"
    koleckoContainer.appendChild(kolecko);
}
let timeControl = function (){
    time = time - 1000;
    clearInterval(myTimer);
    myTimer = setInterval(modalBlock, time);
}
let numberOfLevel = function () {

    if (level1 >= 0) {
        clearInterval(myTimer);
        myTimer = setInterval(modalBlock, time);
        levelDiv.innerText = "Level " + levelNumber;
    }
    if (level1 == 5) {
        timeControl();
        levelNumber++;
        levelDiv.innerText = "Level " + levelNumber;
        koleckoContainer.remove();
        createKoleckoContainer();
    }
    if (level1 == 10) {
        timeControl();
        levelNumber++;
        levelDiv.innerText = "Level " + levelNumber;
        koleckoContainer.remove();
        createKoleckoContainer();
    }
    if (level1 == 15) {
        timeControl();
        levelNumber++;
        levelDiv.innerText = "Level " + levelNumber;
        koleckoContainer.remove();
        createKoleckoContainer()
    }
    if (level1 == 20) {
        timeControl();
        levelNumber++;
        levelDiv.innerText = "Level " + levelNumber;
        koleckoContainer.remove();
        createKoleckoContainer();
    }
    if (level1 == 25) {
        timeControl();
        levelNumber++;
        levelDiv.innerText = "Level " + levelNumber;
        createKoleckoContainer();
        modalBlock2();
    }
}
let modalNone = function () {
    modal.style.display = "none";
}
let modalBlock = function () {
    modal.style.display = "block"
    clearInterval(myTimer);
    myTimer = setInterval(modalBlock, time);
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
let createKoleckoContainer = function () {
    koleckoContainer = document.createElement("div");
    koleckoContainer.className = "kolečkoContainer";
    levelContainer.appendChild(koleckoContainer);
}


window.onload = onloadFunc;

