$(document).ready(function(){
    showImg();
});
function showImg(){
    $('.img').click(function(){
        $('.bg').fadeIn(500);
        $('header').fadeOut(500);
    });
    $('#close').click(function(){
        $('.bg').fadeOut(500);
        $('header').fadeIn(500);
    });
}
