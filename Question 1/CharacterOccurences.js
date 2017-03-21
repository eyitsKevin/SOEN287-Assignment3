
//--------------------------------------------------
// Assignment (3)
// Written by : (40037514) Kevin Luu
//For SOEN 287 Section W - Winter 2017
//--------------------------------------------------

/*
 * Script that inputs several lines of text and a search character that uses
 * String method indexOf() to determine number of occurences of the
 * in the text.
 */

// 3 Global variables

var searchStr;
var ch;
var outResult;

function getAllDomElement() {
    searchStr = document.getElementById("searchStr");
    ch = document.getElementById("characters");
    outResult = document.getElementById("output");

    document.getElementById("searchButton").addEventListener("click", searchOccurences, false);
}

function searchOccurences() {
    var count = 0;
    var chValue = document.getElementById("characters").value;
    var searchStr = document.getElementById("searchString").value;
    var result;


    for (var i=0 ; i< searchStr.length ; i++){
        if(searchStr.toLowerCase().charAt(i) == chValue)
        count++;
    }

    if(count == 0)
        result = document.getElementById("output").innerHTML = "The character ch not found";
    else
        result = document.getElementById("output").innerHTML =  count + " occurence(s) of \'" + chValue + "\' found";

}

window.addEventListener("load", getAllDomElement, false);