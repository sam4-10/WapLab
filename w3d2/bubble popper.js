$(function(){
 
    "use strict";
    let timerId=null;


 
    $('#start').click(showCircle);
 
    function showCircle(){
 
        let width=$('#width').val();
 
        let num=$('#number').val();
 
        $('.circle').show().css({"height":width,"width":width,"top":"3px","left":"50%"});
 
        let count=parseInt(num);
 
        for(let i=0; i < count;i++){
            var $newCircle = $('<div>').appendTo('body');
            $newCircle.addClass("circle");
            let multicolrs="rgb("+Math.floor(Math.random() * 255)+","+Math.floor(Math.random() * 255)+","+Math.floor(Math.random() * 255) +")";
            $newCircle.css("background-color",multicolrs);
            $newCircle.click(hide);
            $newCircle.mouseenter(changeOpacity);
            $newCircle.mouseleave(resetOpacity);
        }
 
        //$(body).append($('<div class="circle"></div>'));


 
        timerId=setInterval(grow,$('#rate').val());
    }
    function grow(){
        let growAmt=parseInt($('#growAmt').val());
        let circle=$('.circle');
        let newDiameter=parseInt(circle.height())+growAmt+"px";
        $(circle).css("width",newDiameter);
        $(circle).css("height",newDiameter);
        
 
    }
 
    function hide(){
        $(this).css("visibility","hidden");
 
    }
 
    function changeOpacity() {
 
        timerForOpacity=setInterval((evt)=>{
            let currentOpacity=parseFloat($(this).css("opacity"));

        let next=currentOpacity-0.1;
   
        $(this).css("opacity",next);
 
    } ,200);
 }
 
    function resetOpacity(){
        let t1=timerForOpacity;
 
        clearInterval(t1);
        $(this).css("opacity","1");
    }

    // $(".circle").hover(function(){
    //     $(this).css("background-color", "pink");
    //   });


 
});