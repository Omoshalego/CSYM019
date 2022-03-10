

function myClickFunction(event){
    
    var keyPressed = event.keyCode;

    var element = document.getElementById('circle');
    var elementB = document.getElementById('circleB');
   
    
    element.style.opacity = 1;
    var positionTop = parseInt(element.offsetTop);
    var positionLeft =  parseInt(element.offsetLeft);

   
    elementB.style.opacity = 1;
    var positionTopB = parseInt(elementB.offsetTop);
    var positionLeftB = parseInt(elementB.offsetLeft);

    
 if (keyPressed == 37) {
    elementB.style.left = positionLeftB +10 + 'px';
    element.style.left = positionLeft - 10 + 'px';
    elementB.firstChild.nodeValue = 'Right';
    element.firstChild.nodeValue = 'Main Left';
    }

  else if (keyPressed == 39) {
        elementB.style.left = positionLeftB -10 + 'px';
        element.style.left = positionLeft + 10 + 'px';
        elementB.firstChild.nodeValue = 'Left';
        element.firstChild.nodeValue = 'Main Right';
        }

  else if (keyPressed == 38) {
    elementB.style.top = positionTopB +10 + 'px';
    element.style.top = positionTop - 10 + 'px';
    elementB.firstChild.nodeValue = 'Bottom';
    element.firstChild.nodeValue = 'Main Up';
    }


 else if (keyPressed == 40) {
    elementB.style.top = positionTopB -10 + 'px';
    element.style.top = positionTop + 10 + 'px';

    elementB.firstChild.nodeValue = 'Up';
    element.firstChild.nodeValue = 'Main Down';
    }
   }

function myLoadFunction() {
    document.addEventListener('keydown', myClickFunction);   
       
   }

   document.addEventListener('DOMContentLoaded', myLoadFunction);