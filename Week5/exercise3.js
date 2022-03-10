
// Amend exercise 2 so that in the load event, the 
// circle's opacity is set to 0.5

function myClickFunction(){
    var element = document.getElementById('circle');
      element.style.backgroundColor = 'blue';
     element.firstChild.nodeValue = 'Am clicked';
    
 
   }

function myLoadFunction() {
    var element = document.getElementById('circle');
    element.style.opacity = 0.5;
    element.addEventListener('click', myClickFunction);

   }
   document.addEventListener('DOMContentLoaded', myLoadFunction);
