'use strict'

let submitbuttn = document.getElementById("submitbutton");

submitbuttn.onclick = function(){
    let user = {};
    user.codepatient = document.getElementById("codepatient").value ;
    user.age = document.getElementById("age").value ;
    user.sex = document.getElementById("sex").value ;
    user.lat = document.getElementById("lat").value ;
    user.csp1 = document.getElementById("csp1").value ;
    user.csp2 = document.getElementById("csp2").value ;
    console.log("user", user)
}