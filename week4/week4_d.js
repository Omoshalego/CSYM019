
            // 1) Change DOMContentLoaded to click
            // ● 2) Refresh the page – the <h1> and <p> elements 
            // should start with one value and change when you click 
            // somewhere on the page

function myClickFunction() {
    // var element = document.getElementById('heading');
    // var element = document.getElementById('paragraph');
    // element.firstChild.nodeValue = 'New Heading';
    // element.firstChild.nodeValue = 'New Paragraph';

    var headings = document.getElementById('heading');
    var paragraph = document.getElementById('paragraph');
    headings.firstChild.nodeValue = 'New Heading';
    paragraph.firstChild.nodeValue = 'New Paragraph';
   }
   document.addEventListener('click', myClickFunction);
  