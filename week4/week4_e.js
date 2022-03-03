

        //  Make it so that when the h1 is clicked, the contents of the h1 element is update 
        //  (and not the contents of the paragraph)
        //  2) Make it so that when the p element is clicked, the contents of the p element is 
        //  update (and not the contents of the h1)
        //  3) Test out other event types to see how they work:
        //  ● mouseenter
        //  ● mouseleave
        //  4) Multiple event listeners can be applied to the same element, amend the program 
        //  so that the text is changed when you mouse over the element and it reverts to the 
        //  original text when the mouse exits the elemen

function myClickFunction() {
    var element = document.getElementById('heading');
    element.firstChild.nodeValue = 'New Heading';
   }
   function myLoadFunction() {
    var element = document.getElementById('heading');
    element.addEventListener('click', myClickFunction);
   }
   document.addEventListener('DOMContentLoaded', myLoadFunction);
   

   function myClickFunction2() {
    
     var element = document.getElementById('paragraph');
     element.firstChild.nodeValue = 'New paragraph text';
   }
   function myLoadFunction2() {
    var element = document.getElementById('paragraph');
    element.addEventListener('click', myClickFunction2);
   }
   document.addEventListener('DOMContentLoaded', myLoadFunction2);