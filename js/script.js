$(document).ready(function(){
     //sec2 slide
     var b=0;
     $('.sec2_right').click(function(){
         b++;
         if(b>3){
             b=3;
         }
 
         $('.sec2_img_wrap').stop().animate({
             left:-350*b
         },
         );
         
         
     });
     
     $('.sec2_left').click(function(){
         b--;
          if(b<0){
              b=-1;
          }
          
          $('.sec2_img_wrap').stop().animate({
             left:-350*b 
          });
         
    });
});//



$(function(){
    $(".nav>li").mouseenter(function(){
         $(this).children(".sub").stop().slideDown();
     });
     $(".nav>li").mouseleave(function(){
         $(this).children(".sub").stop().slideUp();
     });
 });