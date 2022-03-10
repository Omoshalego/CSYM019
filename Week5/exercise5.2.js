
// Change the code so that clicking on the circle makes it become 
// more and more transparent. If you click enough times it should 
// become invisible.

function myClickFunction(){
    var element = document.getElementById('circle');
    element.firstChild.nodeValue = 'Am clicked';
    var circleOpacity = parseFloat(element.style.opacity);
    element.style.opacity = circleOpacity - 0.1;
   }

function myLoadFunction() {
    var element = document.getElementById('circle');
    element.addEventListener('click', myClickFunction);
    element.style.opacity = 1;
   }

   document.addEventListener('DOMContentLoaded', myLoadFunction);