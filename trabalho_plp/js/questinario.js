jQuery(document).ready(function($){
    $('.comtrig').on('click',function(){
        $(this).next().animate({'display':'inline'},1000);
    });
});