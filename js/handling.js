// JavaScript Assessment 1: Task 2 - Event Handling

//No need for globals here


function resetBoxes() {
    let greenBox = document.getElementById("green");
    let redBox = document.getElementById("red");
    let blueBoxIn = document.getElementById("blueIn");
    let blueBoxBottom = document.getElementById("blueBottom");


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

    console.log("greenAroundBlueAndRedBoxes ran");
}


function blueInsideRedBoxRelocated() {

    console.log("blueInsideRedBoxRelocated ran");
}


function redRightOfBlueBox() {

    console.log("redRightOfBlueBox ran");
}


function blueRightOfRedBox() {

    console.log("blueRightOfRedBox ran");
}


function blueUnderRedBox() {

    console.log("blueUnderRedBox ran");
}


function blueInsideRedBox() {
    // blueBoxIn.style.top;

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