// JavaScript Assessment 1: Task 2 - Event Handling

//No need for globals here


function resetBoxes() {
    let greenBox = document.getElementById("green");
    let redBox = document.getElementById("red");
    let blueBoxIn = document.getElementById("blueIn");
    let blueBoxBottom = document.getElementById("blueBottom");

    greenBox.style.background = "transparent";
    blueBoxBottom.style.display = "none";
    blueBoxIn.style.display = "none";

    greenBox.style.left = "0px";
    greenBox.style.top = "0px";
    redBox.style.left = "0px";
    redBox.style.top = "0px";
    blueBoxIn.style.left = "0px";
    blueBoxIn.style.top = "0px";
    blueBoxBottom.style.left = "0px";
    blueBoxBottom.style.top = "0px";
}


function greenAroundBlueAndRedBoxes() {
    resetBoxes();
    let greenBox = document.getElementById("green");
    let blueBoxIn = document.getElementById("blueIn");

    greenBox.style.width = "100%";
    greenBox.style.height = "620px";  //margins = 20px
    greenBox.style.background = "green";
    blueBoxIn.style.display = "block";
    blueBoxIn.style.top = "10px";
    blueBoxIn.style.left = "10px";

    console.log("greenAroundBlueAndRedBoxes ran");
}


function blueInsideRedBoxRelocated() {
    resetBoxes();

    let blueBoxRelocated = document.getElementById("blueIn");
    blueBoxRelocated.style.display = "block"
    blueBoxRelocated.style.left = "";  //clear left reset px
    blueBoxRelocated.style.top = "20px";
    blueBoxRelocated.style.right = "45px";

    console.log("blueInsideRedBoxRelocated ran");
}


function redRightOfBlueBox() {
    resetBoxes();
    let blueBox = document.getElementById("blueBottom");
    blueBox.style.display = "block"

    let redBoxRight = document.getElementById("red");
    redBoxRight.style.display = "block"
    redBoxRight.style.left = "320px";  //margins = 20px

    console.log("redRightOfBlueBox ran");
}


function blueRightOfRedBox() {
    resetBoxes();

    let blueBoxRight = document.getElementById("blueBottom");
    blueBoxRight.style.display = "block"
    blueBoxRight.style.left = "620px";  //margins = 20px

    console.log("blueRightOfRedBox ran");
}


function blueUnderRedBox() {
    resetBoxes();

    let blueBoxBottom = document.getElementById("blueBottom");
    blueBoxBottom.style.display = "block"
    blueBoxBottom.style.top = "620px";  //margins = 20px

    console.log("blueUnderRedBox ran");
}


function blueInsideRedBox() {
    resetBoxes();

    let blueBoxIn = document.getElementById("blueIn");
    blueBoxIn.style.display = "block"
    blueBoxIn.style.top = "10px";
    blueBoxIn.style.left = "10px";

    console.log("blueInsideRedBox ran");
}


function init(){
    // 'use strict';

    let blueInRedButton = document.getElementById('btn1');
    let blueUnderRedButton = document.getElementById('btn2');
    let blueRightOfRedButton = document.getElementById('btn3');
    let redRightOfBlueButton = document.getElementById('btn4');
    let blueInsideRedBoxMovedButton = document.getElementById('btn5');
    let greenAroundBlueRedButton = document.getElementById('btn6');

    // All event listeners here
    blueInRedButton.addEventListener("click", blueInsideRedBox);
    blueUnderRedButton.addEventListener("click", blueUnderRedBox);
    blueRightOfRedButton.addEventListener("click", blueRightOfRedBox);
    redRightOfBlueButton.addEventListener("click", redRightOfBlueBox);
    blueInsideRedBoxMovedButton.addEventListener("click", blueInsideRedBoxRelocated);
    greenAroundBlueRedButton.addEventListener("click", greenAroundBlueAndRedBoxes);
}


window.onload = init;