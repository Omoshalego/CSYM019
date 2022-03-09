  
//    Download Topic2-Exercise1.zip and extract it 
//    2) Add a <script> tag to the page so you can run some javascript
//    3) Add an event listener for DOMContentLoaded and a function that 
//   it runs when the page loads
//   4) In the load function you created, add a click event to the 
//   element with the ID `circle` so that when the circle is clicked an 
//   alert box appears and says “The button was pressed”
//    Note: You will need this for the rest of today's exercise
  
function myClickFunction(){
    var element = document.getElementById('circle');
     element.style.backgroundColor = 'green';

 alert('The button was pressed and it is green!');
 
   }

function myLoadFunction() {
    var element = document.getElementById('circle');
   
    element.addEventListener('click', myClickFunction);

   }
   document.addEventListener('DOMContentLoaded', myLoadFunction);



   