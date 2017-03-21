//--------------------------------------------------
// Assignment (3) - Question 2
// Written by : (40037514) Kevin Luu
//For SOEN 287 Section W - Winter 2017
//--------------------------------------------------


var counter = 0;
var dom;

function getElementBtnIncrement(){
    counter = document.getElementById("incrementButton");

    document.addEventListener("click", increment, false);
}

function increment(){
    counter++;
    dom = document.getElementById("output").innerHTML = counter;
}

window.addEventListener("load", getElementBtnIncrement, false);


