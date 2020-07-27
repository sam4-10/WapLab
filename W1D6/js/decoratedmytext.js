window.onload= function() {
    "use strict";

    document.getElementById("decoration_button").onclick = function() {
        setInterval(growLarger, 500);
    }

     //increases font size of #input_text by 2pt
     function growLarger() {
        var sizoftext =  document.getElementById("input_text")
        
        sizoftext.style.fontSize = 
            (parseInt(window.getComputedStyle(sizoftext).fontSize) + 2) + "pt";
    }
    
    document.getElementById("decoration_checkbox").onchange = function() {
        let isChecked = document.getElementById("decoration_checkbox").checked;
        if (isChecked) {
            document.body.style.backgroundImage = "url('images/benjamin.jpg')";
            
        } else {
            document.body.style.backgroundImage =  "none";
          
        
    }
    }
     onClickChangeText("pig_latin_button", pigLatin);
     onClickChangeText("malkovich_button", malkovizer);
    //  sets button behavior based on a function that changes text values
    function onClickChangeText(buttonID, changedTo) {
        document.getElementById(buttonID).onclick = function() {
            let userText = document.getElementById("input_text").value;
            let changedText = userText.split(" ").map(word => changedTo(word)).join(" ");
            document.getElementById("input_text").value = changedText;
        } 
    }
    //  converts text to pig latin + does not handle character case
    function pigLatin(string) {
        let firstLetter = string.charAt(0).toLowerCase();
        if (firstLetter === "a" || firstLetter === "e" || firstLetter === "i" || firstLetter === "o" || firstLetter === "u") {
            return string + "-yay";
        } 
        return string.charAt(1) + string.substr(2) + firstLetter + "-ay";
    }
     // // replaces words longer than four letters to "Malkovich"
      function malkovizer(string) {
        if (string.length >= 5) {
            return "Malkovich";
        }
        return string;
        }
   
   
    
   
    
 }