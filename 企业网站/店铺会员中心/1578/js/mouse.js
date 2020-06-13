	
		$(function(){
			
	       function way1(){
         	  $oLi.removeClass("on").eq(i).addClass("on");
         	  $oLi.find(".sub-popup-wrapper").hide();
         	  $oLi.eq(i).find(".sub-popup-wrapper").show();	
         	}
          
          function way2(){
         	  $oLi.removeClass("on");
         	  $oLi.find(".sub-popup-wrapper").hide();
         	}
        var $oLi=$(".select-popup li");
        var timer1;
        var timer2
         $oLi.hover(function(){
         	clearTimeout(timer2);
         	i=$oLi.index($(this));
            timer=setTimeout(way1,300);

         },function(){
         	clearTimeout(timer1);
         	timer2=setTimeout(way2,100);
         	
         });
	})

$(function(){
    var timer = null;
    $(".parter").on('mouseleave',function(){
      var _this = $(this);
      timer = setTimeout(function(){
        _this.find('.select-popup').fadeOut();
        _this.find(".onblurCss").removeClass("slideDown")
      },300);
    });
    $(".parter").on('mouseenter',function(){
      clearTimeout(timer);
    })
    $(".parter").find(".onblurCss").on('click',function() {
        $(".parter").find(".select-popup").fadeIn();
        $(this).addClass("slideDown");
    });
       $(".select-popup a").click(function(){
       	     $(".parter").find(".select-popup").hide().removeClass("slideDown");
       	     $(".parter").find(".onblurCss").removeClass("slideDown")
       	     
       })
})