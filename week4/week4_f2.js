function clickFunction() {
    var element = document.getElementById('myinput');
    var div = document.getElementById('result');
    div.firstChild.nodeValue = element.value;
   }
   function myLoadFunction() {
    var element = document.getElementById('mybutton');
    element.addEventListener('click', clickFunction);
   }
   document.addEventListener('DOMContentLoaded', myLoadFunction);