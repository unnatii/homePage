
function newElement(){
var element=document.createElement("li");
var value=document.getElementById("myInput").value;
var list=document.createTextNode(value);
element.appendChild(list);
if(value==='')
{
 alert("empty!");
}
else{
document.getElementById("myList").appendChild(element);
}
document.getElementById("myInput").value = "";

 var span = document.createElement("span");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  var ele=element.appendChild(span);
  

var close = document.getElementsByClassName("close");
var i;
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
 

}

function newNote(){
var element=document.createElement("li");
var value=document.getElementById("Input").value;
var list=document.createTextNode(value);
element.appendChild(list);
if(value==='')
{
 alert("empty!");
}
else{
document.getElementById("mynote").appendChild(element);
}
document.getElementById("Input").value = "";

 var span = document.createElement("span");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  var ele=element.appendChild(span);
  

var close = document.getElementsByClassName("close");
var i;
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
 

}
 
var myVar = setInterval(function(){ myTimer() }, 1000);

function myTimer() {
    var d = new Date();
    var t = d.toLocaleTimeString();
    document.getElementById("clock").innerHTML = t;
}

  


