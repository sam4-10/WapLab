
var counter=0;
var reset=0;
$(function(){

    $("#maze .boundary").mouseover(turnRed);
    $("#end").mouseover(endPoint);
    $("#maze").mouseenter(mazeEnter)
   // $("#maze").mouseout(mazeOut)
    $("#start").mouseover(resetPoint);
  
});

// function mazeOut(){
//     reset=0;
// }

function mazeEnter(){
    reset++;
}



function turnRed(evt) {
    $("#maze .boundary").addClass('youlose');
     counter ++;
}



function endPoint(evt){
    if(counter==0 && reset>0){
        $("#status").text("You won");
    }

    else{
        $("#status").text("You lost");
    }
}


function resetPoint(evt){
    $("#maze .boundary").css('background-color','#eeeeee');
    location.reload();
}

