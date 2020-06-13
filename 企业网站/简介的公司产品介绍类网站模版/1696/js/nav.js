$(document).ready(function() {
   var b=$(document).height();
   $('.mainWarp').css('minHeight',b);
   //导航
	$(".navimg").click(function () {
		if($(this).attr("class")=="navimg on"){
		  $(this).removeClass('on');
		  $(".navdiv").toggle();
		  document.body.style.overflow = "visible";
		  $('.zhezhao').hide();
		}else{
		  $(this).addClass('on');
		  $(".navdiv").toggle();
		  document.body.style.overflow = "hidden";
		  $('.zhezhao').show();
		}
	})
	
	//二级分类
	$('.typebtn').click(function(){
	  document.body.style.overflow="hidden";
	  $(".zhezhaobox").css("display","block");
   });
   $(".zhezhaobox").click(function(){
	  document.body.style.overflow="scroll";
      $(".zhezhaobox").css("display","none"); 
   });
})


