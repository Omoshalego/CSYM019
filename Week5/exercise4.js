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
