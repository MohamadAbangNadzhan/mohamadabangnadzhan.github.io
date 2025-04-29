function upDate(previewPic) {
 /* In this function you should 
    1) change the url for the background image of the div with the id = "image" 
    to the source file of the preview image
    
    2) Change the text  of the div with the id = "image" 
    to the alt text of the preview image 
    */
    // var src=previewPic.getAttribute("src");
    // var alt=previewPic.getAttribute("alt");
    document.getElementById('image').style.backgroundImage="url('" + previewPic.src + "')";
    document.getElementById('image').innerHTML=previewPic.alt;
}

function unDo() {
  /* In this function you should 
    1) Update the url for the background image of the div with the id = "image" 
    back to the orginal-image.  You can use the css code to see what that original URL was
    
    2) Change the text  of the div with the id = "image" 
    back to the original text.  You can use the html code to see what that original text was
    */   
   document.getElementById('image').style.backgroundImage="none";
   document.getElementById('image').innerHTML="Hover over an image below to display here";
   
}

function onFocus(previewPic) {
  document.getElementById("image").tabIndex = "6";
  document.getElementById("RC18").tabIndex = "0";
  document.getElementById("RC46").tabIndex = "1";
  document.getElementById("RC68").tabIndex = "2";
  document.getElementById("RC77").tabIndex = "3";
  document.getElementById("RC86").tabIndex = "4";
  document.getElementById("RC94").tabIndex = "5";

  document.getElementById('image').style.backgroundImage="url('" + previewPic.src + "')";
  document.getElementById('image').innerHTML=previewPic.alt;
}

function onBlur() {
  document.getElementById("image").tabIndex = "6";
  document.getElementById("RC18").tabIndex = "0";
  document.getElementById("RC46").tabIndex = "1";
  document.getElementById("RC68").tabIndex = "2";
  document.getElementById("RC77").tabIndex = "3";
  document.getElementById("RC86").tabIndex = "4";
  document.getElementById("RC94").tabIndex = "5";

  document.getElementById('image').style.backgroundImage="none";
  document.getElementById('image').innerHTML="Hover over an image below to display here";
}
