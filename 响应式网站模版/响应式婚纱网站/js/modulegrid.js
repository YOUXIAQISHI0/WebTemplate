function initGridGiant(ModuleID,options){
	options = options || {};
	replaceVideo(ModuleID);
	$(document).ready(function() {
		if(options.isFloat == 1){
			ModuleGridFloat(ModuleID);
		}
		//有视频背景的  要根据视频高度设置分栏高度
		window['initFunc'+ModuleID] = function(){
			var bgVideo = $('#module_'+ModuleID+' .gridBgVideo');
			if(!bgVideo.hasClass('noBgVideo')){
				replaceVideo(ModuleID);
				if(bgVideo.find('.bgVideo').length > 0 && bgVideo.find('.bgVideo').attr('src')){
					//resize 的时候 视频已经加载完成了 所以 进不去canplaythrough事件
					var	videoH = bgVideo.height();
					$('#module_'+ModuleID).css({height: videoH});
					//视频加载完成之后再获取高度
					$('#module_'+ModuleID+' .gridBgVideo video.bgVideo').on('canplaythrough',function(){
						var	videoH = bgVideo.height();
						$('#module_'+ModuleID).css({height: videoH});
						$('#module_'+ModuleID).find('.ModuleGridContainer .ModuleContainer.SubContainer').css({height: videoH});
					})
					
				}else{
					$('#module_'+ModuleID).css({height: 'auto'});
				}
				
			}else{
				$('#module_'+ModuleID).css({height: 'auto'});
			}
		}
		$(window).off('resize.grid'+ModuleID).on('resize.grid'+ModuleID,function(){
			window['initFunc'+ModuleID]();
		});
		window['initFunc'+ModuleID]();
		
	});
}

//替换视频链接 
function replaceVideo(ModuleID){
	if(!$('#module_'+ModuleID+' .gridBgVideo').hasClass('noBgVideo')){
		var winWidth = $(window).width(),
			video = $('#module_'+ModuleID+' .gridBgVideo .bgVideo');
		if(winWidth <= 769){
			//手机端 使用图片背景 替换视频
			if(video.length > 0){
				var	videoSrc = video.attr('vsrc'),
					imageSrc = video.attr('imgsrc');
				$('#module_'+ModuleID+' .ModuleSubContainer').css({
					'background-image': 'url("'+imageSrc+'")',
				});
				video.attr('src','');
				$('#module_'+ModuleID+' .gridBgVideo').hide();
			}
		}else{
			if (video.length > 0 && ((navigator.userAgent.indexOf("Chrome") > -1 && window.navigator.userActivation) || navigator.userAgent.indexOf("Firefox") > -1)) {
				video.prop('muted', 'muted');
			}
			if(!video.attr('src')) video.attr('src', video.attr('vsrc'));
			$('#module_'+ModuleID+' .ModuleSubContainer').css({
					'background-image': 'none',
				});
			$('#module_'+ModuleID+' .gridBgVideo').show();
		}
	}
}
//分栏悬浮的操作
function ModuleGridFloat(ModuleID){
	var grid = $('#module_'+ModuleID);
	if(grid.length > 0){
		// 如果是置底悬浮
		if (grid.find('.GridCanFloatBottom').length > 0) {
			// 当前是产品详情页就不显示悬浮模块
			if ($('#BodyMain1Zone').find('.ModuleProductDetailGiant').length > 0) {
				grid.hide();
				return;
			}
			grid.addClass('GridFloatBottom');
			function initGridFloatBottom() {
				setTimeout(function(){
					if ($('body').find('#GridFloatBottomBox').length < 1) $('body').append('<div id="GridFloatBottomBox"></div>')
					$('#GridFloatBottomBox').css('height', ($('.GridCanFloatBottom').height() > 400 ? 400 : $('.GridCanFloatBottom').height()) +'px');
				}, 500);
			}
			// document任何节点发生变化时触发
			$(document).on('DOMNodeInserted',function(){
				initGridFloatBottom();
			});
			initGridFloatBottom();
			// 窗口加载完后检测是否有底部导航，有的话，重设置底分栏的bottom
			$(window).load(function(){
				if($("#MobileFootNav:visible").length > 0) grid.css("cssText","bottom:" + $("#MobileFootNav:visible").height() + "px!important");
			});
		} else {
			var mainOffsetTop = grid.offset().top;
			var mainHeight = grid.height();
			var winHeight = $(window).height();
			//导航的特殊处理
			var navFloat = $('#module_'+ModuleID+'.GridCanFloat .ModuleNavGiant');
			var navid = '';
			if(navFloat.length > 0){
				navid = navFloat.closest('.ModuleItem');
				navid = navid.attr('id');
			}
			$(document).on('scroll',function(event) {
				//不在页头 或者不能悬浮时
				if($('#HeaderZone #module_'+ModuleID).length < 1 || $('#module_'+ModuleID+' .GridCanFloat').length < 1) return false;
				//悬浮时 如果滚动页面 并且 二级菜单显示 要强制隐藏二级菜单
				if(navid != '') $('#'+navid+'.moduleNavFloatSubMenu').remove();
				var winScrollTop = $(window).scrollTop();
				if(!grid.hasClass('GridFloat') && (winScrollTop > (mainOffsetTop + mainHeight) || winScrollTop <　(mainOffsetTop - winHeight))){
					grid.addClass('GridFloat');
				}else if(grid.hasClass('GridFloat') && winScrollTop <= mainOffsetTop){
					grid.removeClass('GridFloat');
					if(grid.hasClass('StaticModule')){
						grid.css('position','static');
					}
				}

			});
		}
	}
}