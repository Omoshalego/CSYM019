

// Change the load event so that the button starts with an opacity of 1 (completely visible). 
// Hint: you will need to set the initial value when the page loads or it won’t work.
// ● 2) Change the click event so that when the button is clicked, it starts a timer using 
// setInterval with an interval of 1 second

function myClickFunction(){
    var element = document.getElementById('circle');
    element.firstChild.nodeValue = 'Am clicked';
    var circleOpacity = parseFloat(element.style.opacity);
   // element.style.opacity = circleOpacity - 0.01;
    element.style.opacity = circleOpacity + 0.01;
    //setInterval(myClickFunction, 1000);
    setInterval(myClickFunction, 10000);
   }

function myLoadFunction() {
    var element = document.getElementById('circle');
    element.addEventListener('click', myClickFunction);   
    //element.style.opacity = 1;
    element.style.opacity = 0.2;
   }

   document.addEventListener('DOMContentLoaded', myLoadFunction);