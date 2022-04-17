window.onload = makeAjaxRequest;

function makeAjaxRequest() {
      if (window.XMLHttpRequest){

        xhr = new XMLHttpRequest();
      }
    else {

        if(window.ActiveXObject){
            xhr = newActiveXObject("Microsoft.XMLHTTP");
        }
    }

    if(xhr){
       xhr.open("GET","counties.json", true);
       xhr.send();
       console.log("hkjwflwew");
       xhr.onreadystatechange = showContents;
    }
    else{
      document.getElementById("updatemessage").innerHTML = "Could not perform stated Request";

    }
}

function showContents() {
  if(xhr.readyState == 4){
    if(xhr.status == 200){
        let data = JSON.parse(xhr.responseText);
        let txt = "";
        for(let i in data.counties){
            txt += "<tr><td>"+ data.counties[i].name+"</td></tr>";
          //  txt += "<tr><td>"+ data.counties[i].countyID+"</td></tr>";
        }
        document.getElementById("countylist").innerHTML = txt;
       // document.getElementById("countylist1").innerHTML = txt;
    }
    else{
        document.getElementById("updatemessage").innerHTML ="An error occurred: " + xhr.status;
       }

    }
}


