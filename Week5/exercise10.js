
var timer = 0;
function myClickFunction(event){
  
    var keyPressed = event.keyCode;
    clearInterval(timer);

     
    if (keyPressed == 37) {
        timer = setInterval(keyLeft, 100);
       
        }
    
      else if (keyPressed == 39) {
        timer = setInterval(keyRight, 100);
            }
    
      else if (keyPressed == 38) {
        timer = setInterval(keyUp, 100);
        }
    
    
     else if (keyPressed == 40) {
        timer = setInterval(keyDown, 100);
        }

}
 //if (keyPressed == 37) {
     function keyLeft(){
    var element = document.getElementById('circle');
    var elementB = document.getElementById('circleB');
    
    
    element.style.opacity = 1;
    var positionLeft =  parseInt(element.offsetLeft);
    elementB.style.opacity = 1;
    var positionLeftB = parseInt(elementB.offsetLeft);
    
    elementB.style.left = positionLeftB +10 + 'px';
    element.style.left = positionLeft - 10 + 'px';
    elementB.firstChild.nodeValue = 'Move Right';
    element.firstChild.nodeValue = 'Main Left';
    }

  //else if (keyPressed == 39) {
    function keyRight(){
        var element = document.getElementById('circle');
        var elementB = document.getElementById('circleB');
           
        element.style.opacity = 1;
        var positionLeft =  parseInt(element.offsetLeft);     
        elementB.style.opacity = 1;
      
        var positionLeftB = parseInt(elementB.offsetLeft);
        elementB.style.left = positionLeftB -10 + 'px';
        element.style.left = positionLeft + 10 + 'px';

        elementB.firstChild.nodeValue = 'Move Left';
        element.firstChild.nodeValue = 'Main Right';
        }

  //else if (keyPressed == 38) {
    function keyUp(){
 
    var element = document.getElementById('circle');
    var elementB = document.getElementById('circleB');
   
    
    element.style.opacity = 1;
    var positionTop = parseInt(element.offsetTop);
    var positionTopB = parseInt(elementB.offsetTop);
    elementB.style.opacity = 1;

    elementB.style.top= positionTopB +10 + 'px';
    element.style.top = positionTop - 10 + 'px';

    elementB.firstChild.nodeValue = 'Bottom';
    element.firstChild.nodeValue = 'Main Up';
    }

 //else if (keyPressed == 40) {
    function keyDown(){
        var element = document.getElementById('circle');
        var elementB = document.getElementById('circleB');
       
        
        element.style.opacity = 1;
        var positionTop = parseInt(element.offsetTop);
        var positionLeft =  parseInt(element.offsetLeft);
    
       
        elementB.style.opacity = 1;
        var positionTopB = parseInt(elementB.offsetTop);
        var positionLeftB = parseInt(elementB.offsetLeft);
    elementB.style.top = positionTopB -10 + 'px';
    element.style.top = positionTop + 10 + 'px';

    elementB.firstChild.nodeValue = 'Move Up';
    element.firstChild.nodeValue = 'Main Down';
    }
   

function myLoadFunction() {
    document.addEventListener('keydown', myClickFunction);   
       
   }

   document.addEventListener('DOMContentLoaded', myLoadFunction);