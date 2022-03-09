function clickFunction() {
    var element = document.getElementById('myinput');
    alert(element.value);
   }
function myLoadFunction() {
    var element = document.getElementById('mybutton');
    element.addEventListener('click', clickFunction);
   }
   document.addEventListener('DOMContentLoaded', myLoadFunction);


   