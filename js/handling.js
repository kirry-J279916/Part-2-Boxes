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

}


function blueInsideRedBoxRelocated() {

}


function redRightOfBlueBox() {

}


function blueRightOfRedBox() {

}


function blueUnderRedBox() {

}


function blueInsideRedBox() {
    blueBoxIn.style.top;
}


function init(){
    // 'use strict';

    let BlueInRedButton = document.getElementById('btn1');
    BlueInRedButton.addEventListener("submit", blueInsideRedBox);


// All event listeners here


}


window.onload = init;