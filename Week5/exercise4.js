
// Amend the page so that when the button is clicked, 
// the opacity is set to 1
// – When the page loads the opacity should be set to 0.5
// – When the button is clicked the button should be completely 
// visible as its opacity is set to 1

function myClickFunction(){
    var element = document.getElementById('circle');
    element.firstChild.nodeValue = 'Am clicked';
     element.style.opacity = 1;
   }

function myLoadFunction() {
    var element = document.getElementById('circle');
    element.addEventListener('click', myClickFunction);
    element.style.opacity = 0.5;
   }

   document.addEventListener('DOMContentLoaded', myLoadFunction);
