/*
test.js 
for the UVic AI Club website.
Created by the UVic AI Club
Nov 29, 2019
*/

//Creates a new http request for XML document
var txtHttp = new XMLHttpRequest();
txtHttp.onreadystatechange = function() { 
        if (txtHttp.readyState == 4 && txtHttp.status == 200)
            callback(txtHttp.responseText);
    }

txtHttp.open("GET", 'https://uvicaiclub.ca/test/test.xml', true); // true for asynchronous 
//BUG - I dunno why this is here
txtHttp.send(null);


//Prints the object returned
console.log(txtHttp);

//prints the responseText
console.log(txtHttp.responseText);