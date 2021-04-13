$(function(){
    $("#photo").hover(function(){
        $(this).stop().animate({'opacity':'0.5'});
    },function(){
        $(this).stop().animate({'opacity':'1'});
    })
})