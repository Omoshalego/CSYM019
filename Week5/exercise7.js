

// Make it so when the button is clicked on, it moves 10 px to 
// the left
// ● 2) Change the event listener from click to keydown on the 
// document ( document.addEventListener('keydown', 
// functionName) )
// ● 3) When a key is pressed, move the button 10px to the left
// ● 4) Each time you press a key it should move further and further 
// left, moving 10px each time

function myClickFunction(){
    var element = document.getElementById('circle');
    var elementB = document.getElementById('circleB');

    element.firstChild.nodeValue = 'Key pressed';
    element.style.opacity = 1;
    var positionTop = element.offsetTop;
    var positionLeft = element.offsetLeft;

    elementB.firstChild.nodeValue = 'Key pressed';
    elementB.style.opacity = 1;
    var positionTopB = elementB.offsetTop;
    var positionLeftB = elementB.offsetLeft;

    elementB.style.left = positionLeftB +10 + 'px';
    element.style.left = positionLeft - 10 + 'px';
   }

function myLoadFunction() {
    document.addEventListener('keydown', myClickFunction);   
       
   }

   document.addEventListener('DOMContentLoaded', myLoadFunction);