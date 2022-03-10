
// Add the the following code to your javascript file
// ● 2) Make sure you have the console open and press some keys on the 
// keyboard
// ● You should see different numbers appearing
// ● 3) Try the same key multiple times. Each key on the keyboard will produce a 
// different number!

function myKeyDown(event) {
    console.log(event.keyCode);
   }
   document.addEventListener('keydown', myKeyDown);
   