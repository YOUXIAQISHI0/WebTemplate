function layerShow(showbtn,closebtn,surebtn,showele){
    var layer = '<div id="layer"></div>';
    showbtn.on('click',function(){
        $(document.body).prepend(layer);
        var _left = ($(window).width() - $(showele).width())/2;
        var _top = ($(window).height() - $(showele).height())/2;
        $(showele).css({'position':'fixed','left':_left,'top':_top,'z-index':999999999});
        $(window).on('resize',function(){
            _left = ($(window).width() - $(showele).width())/2;
            _top = ($(window).height() - $(showele).height())/2;
            $(showele).css({'position':'fixed','left':_left,'top':_top});
        });
        $(showele).fadeIn();
    });
    $(closebtn).on('click',function(){
        $("#layer").fadeOut();
        $(showele).fadeOut();
    });
    $(surebtn).on('click',function(){
        $("#layer").fadeOut();
        $(showele).fadeOut();
    });
}