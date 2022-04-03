var f1 = document.getElementById("f1");
var f2 = document.getElementById("f2");
var f3 = document.getElementById("f3");
var f4 = document.getElementById("f4");
var f5 = document.getElementById("f5");
var f6 = document.getElementById("f6");

function visible1(){
    f1.style.display="block";
    f2.style.display="none";
    f3.style.display="none";
    f4.style.display="none";
    f5.style.display="none";
    f6.style.display="none";
    document.getElementById("rem1").style.display="block";
    document.getElementById("v1").style.display="none";
    document.getElementById("q1").style.marginBottom="0px";
}
function remove1(){
    f1.style.display="none";
    document.getElementById("rem1").style.display="none";
    document.getElementById("v1").style.display="block";
    document.getElementById("q1").style.marginBottom="10px";
}
function visible2(){
    f1.style.display="none";
    f2.style.display="block";
    f3.style.display="none";
    f4.style.display="none";
    f5.style.display="none";
    f6.style.display="none";
    document.getElementById("rem2").style.display="block";
    document.getElementById("v2").style.display="none";
    document.getElementById("q2").style.marginBottom="0px";
}
function remove2(){
    f2.style.display="none";
    document.getElementById("rem2").style.display="none";
    document.getElementById("v2").style.display="block";
    document.getElementById("q2").style.marginBottom="10px";
}
function visible3(){
    f1.style.display="none";
    f2.style.display="none";
    f3.style.display="block";
    f4.style.display="none";
    f5.style.display="none";
    f6.style.display="none";
    document.getElementById("rem3").style.display="block";
    document.getElementById("v3").style.display="none";
    document.getElementById("q3").style.marginBottom="0px";
}
function remove3(){
    f3.style.display="none";
    document.getElementById("rem3").style.display="none";
    document.getElementById("v3").style.display="block";
    document.getElementById("q3").style.marginBottom="10px";
}
function visible4(){
    f1.style.display="none";
    f2.style.display="none";
    f3.style.display="none";
    f4.style.display="block";
    f5.style.display="none";
    f6.style.display="none";
    document.getElementById("rem4").style.display="block";
    document.getElementById("v4").style.display="none";
    document.getElementById("q4").style.marginBottom="0px";
}
function remove4(){
    f4.style.display="none";
    document.getElementById("rem4").style.display="none";
    document.getElementById("v4").style.display="block";
    document.getElementById("q4").style.marginBottom="10px";
}
function visible5(){
    f1.style.display="none";
    f2.style.display="none";
    f3.style.display="none";
    f4.style.display="none";
    f5.style.display="block";
    f6.style.display="none";
    document.getElementById("rem5").style.display="block";
    document.getElementById("v5").style.display="none";
    document.getElementById("q5").style.marginBottom="0px";
}
function remove5(){
    f5.style.display="none";
    document.getElementById("rem5").style.display="none";
    document.getElementById("v5").style.display="block";
    document.getElementById("q5").style.marginBottom="10px";
}
function visible6(){
    f1.style.display="none";
    f2.style.display="none";
    f3.style.display="none";
    f4.style.display="none";
    f5.style.display="none";
    f6.style.display="block";
    document.getElementById("rem6").style.display="block";
    document.getElementById("v6").style.display="none";
    document.getElementById("q6").style.marginBottom="0px";
}
function remove6(){
    f6.style.display="none";
    document.getElementById("rem6").style.display="none";
    document.getElementById("v6").style.display="block";
    document.getElementById("q6").style.marginBottom="10px";
}
