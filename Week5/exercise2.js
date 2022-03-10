// Building on exercise 1, amend the code so that when 
// the button is clicked its background colour is set to blue

function myClickFunction(){
    var element = document.getElementById('circle');
     element.style.backgroundColor = 'blue';
     element.firstChild.nodeValue = 'You click me';
  
 
   }

function myLoadFunction() {
    var element = document.getElementById('circle');
   
    element.addEventListener('click', myClickFunction);

   }
   document.addEventListener('DOMContentLoaded', myLoadFunction);


