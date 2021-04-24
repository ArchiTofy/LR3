var a = 0;
var b = 0;
document.getElementById('btn1').addEventListener("click",BTN1)
//var c = a + b;
function BTN1 (c) 
{
    a = document.getElementById('myA').value;
    b = document.getElementById('myB').value;
    /*var c = a + b;
    var c = parseInt(a,10) + parseInt(b,10);
    if(!!c) alert(c);*/
 if (a > b)
 alert (b)
 else
 alert (a)

}
document.getElementById('btn2').addEventListener("click",BTN2)
//var c = a + b;
function BTN2 (c) 
{
    a = document.getElementById('myA').value;
    b = document.getElementById('myB').value;
    /*var c = a + b;
    var c = parseInt(a,10) + parseInt(b,10);
    if(!!c) alert(c);*/

 if (a < b)
 alert (b)
 else
 alert (a)

}
