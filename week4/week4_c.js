
function myLoadFunction() {
    var headings = document.getElementById('heading');
    var paragraph = document.getElementById('paragraph');
    heading.firstChild.nodeValue = 'New Heading';
    paragraph.firstChild.nodeValue = 'New Paragraph';
   }
   document.addEventListener('DOMContentLoaded', myLoadFunction);
  