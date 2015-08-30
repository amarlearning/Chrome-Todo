$(document).ready(function(){
   
    $('button').click(function(){
        
        var toAdd = $('input[name=checkListItem]').val();
        $(".list").append('<li class="item">' + toAdd + '&nbsp;&nbsp;<i lcass=".item" class="fa fa-times"></i></li>');
        });
         $(document).on('click','.item',function(){
             
             $(this).remove();
           
             });

         $('input').focus(function(){

         	$(this).addClass('orange');
         });

         
    });