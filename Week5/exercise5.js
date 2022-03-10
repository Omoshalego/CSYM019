
// Change the code for the click event to this
// ● Each time you click on the circle it should get slightly less 
// transparent until it becomes completely opaque

function myClickFunction(){
    var element = document.getElementById('circle');
    element.firstChild.nodeValue = 'Am clicked';
    var circleOpacity = parseFloat(element.style.opacity);
    element.style.opacity = circleOpacity + 0.1;
   }

function myLoadFunction() {
    var element = document.getElementById('circle');
    element.addEventListener('click', myClickFunction);
    element.style.opacity = 0.2;
   }

   document.addEventListener('DOMContentLoaded', myLoadFunction);