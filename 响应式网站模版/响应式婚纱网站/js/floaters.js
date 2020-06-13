var floaters_delta = 0.15
var floaters_collection;
var floaters_timer = null;
var floaters_timer2 = null;
if(typeof(floaters) == 'undefined'){
	function floaters() {
		this.items = [];
		this.addItem = function(id,x,y,content) {
			if($('#'+id).length > 0){
				m = $('#'+id);m.css({'position':'absolute','z-index':'4001','left':(typeof(x)=='string'?eval(x):x)+'px','top':(typeof(y)=='string'?eval(y):y)+'px'});
				this.replace(m[0]);
			}
			else $("body").append('<DIV id='+id+' style="Z-INDEX: 4001; POSITION: absolute;width:80px; height:30px;left:'+(typeof(x)=='string'?eval(x):x)+'px;top:'+(typeof(y)=='string'?eval(y):y)+'px">'+content+'</DIV>');
			var found = false;
			for(var i in this.items){
				if($(this.items[i].object).attr('id') == id){
					this.items[i].x = x; this.items[i].y = y; found = true;break;
				}
			}
			if(!found){
				var newItem = {};
				newItem.object = document.getElementById(id);
				newItem.x = x;
				newItem.y = y;
				this.items[this.items.length] = newItem;
			}
		}
		this.play = function() {
			if(this.floaters_timer2 != null){ alert('floaters play2 与 play 冲突');return;}
			floaters_collection = this.items;
			if(this.floaters_timer == null) this.floaters_timer = setInterval('floaters_play()',20);
		}
		
		this.remove = function(id){
			var newitems = [];
			for(var i in this.items){
				if($(this.items[i].object).attr('id') != id){
					newitems.push(this.items[i]);
				}
			}
			this.items = newitems;
			floaters_collection = this.items;
		}

		this.replace = function(obj){
			for(var i in this.items){
				if($(this.items[i].object).attr('id') == $(obj).attr('id')){
					this.items[i].object = obj;
				}
			}
		}

		// 新的用这个
		this.addItem2 = function(options,action) {
			if(action == 'remove'){
				this.remove(options.floaterID);
				return;
			}
			if($('#'+options.floaterID).length > 0){
				m = $('#'+options.floaterID);m.css({'position':'absolute','z-index':'4001','left':options.distance_from_page_x+'px','top':options.distance_from_page_y+'px'});
				this.replace(m[0]);
			}
			else $("body").append('<div id='+options.floaterID+' style="z-index: 4001; position: absolute;width:auto; height:auto;left:' + options.distance_from_page_x + 'px;top:' + options.distance_from_page_y + 'px;">'+options.content+'</div>');
			var found = false;
			for(var i in this.items){
				if($(this.items[i].object).attr('id') == options.floaterID){
					for(var key in options){
						this.items[i][key] = options[key];
					}
					found = true;break;
				}
			}
			if(!found){
				var newItem = options || {};
				newItem.object = document.getElementById(options.floaterID);
				this.items[this.items.length] = newItem
			}
			return $('#' + options.floaterID);
		}
		this.play2 = function() {
			if(this.floaters_timer != null){ alert('floaters play 与 play2 冲突');return;}
			floaters_collection = this.items
			if(this.floaters_timer2 == null) this.floaters_timer2 = setInterval('floaters_play2()',20);
		}
		this.stop = function(){
			clearInterval(floaters_timer);
			clearInterval(floaters_timer2);
		}
	}
	 
	function floaters_play() {
		for(var i = 0;i < floaters_collection.length;i++) {
			var followObj   = floaters_collection[i].object;
			if($(followObj).attr("float-disabled") == "true") continue;
			var followObj_x = (typeof(floaters_collection[i].x) == 'string' ? eval(floaters_collection[i].x):floaters_collection[i].x);
			var followObj_y = (typeof(floaters_collection[i].y) == 'string' ? eval(floaters_collection[i].y):floaters_collection[i].y);
	 
		    // 用了某些DOCTYPE 后 ie document.body.scrollTop,document.body.scrollLeft 始终为0，所以这里兼容一下
			var scrollLeft = document.body.scrollLeft;
			if (scrollLeft == 0 && document.documentElement.scrollLeft > 0) {
			    scrollLeft = document.documentElement.scrollLeft;
			}

			var scrollTop = document.body.scrollTop;
			if (scrollTop == 0 && document.documentElement.scrollTop > 0) {
			    scrollTop = document.documentElement.scrollTop;
			}

			if (followObj.offsetLeft != (scrollLeft + followObj_x)) {
			    var dx = (scrollLeft + followObj_x - followObj.offsetLeft) * floaters_delta;
				dx = (dx > 0 ? 1 : -1) * Math.ceil(Math.abs(dx));
				followObj.style.left = followObj.offsetLeft + dx + "px";
			}
	 
			if (followObj.offsetTop != (scrollTop + followObj_y)) {
			    var dy = (scrollTop + followObj_y - followObj.offsetTop) * floaters_delta;
				dy = (dy > 0 ? 1 : -1) * Math.ceil(Math.abs(dy));
				followObj.style.top = followObj.offsetTop + dy + "px";
			}
			//followObj.style.display	= '';
		}
	}
	
	// 浮动层滚动效果增强版，浮动框必须为绝对定位，并且是body必须是子级
	function floaters_play2(){
		//处理在线客服的
		for(var i = 0;i < floaters_collection.length;i++) {
			if($(floaters_collection[i].object).attr('id') == 'IMPanel'){
				if((SiteType == 1 && $(window).width() < 993) || typeof frames['pageframe'] != 'undefined'){
					floaters_collection[i].object.style.display = 'none';
					return;
				}else floaters_collection[i].object.style.display = 'block';
			}
		}
		
		var defaults = {
			floaterID: 0,
			content: '',
			xFloat: 'left', // left, right, null, 表示选择距视窗左还是距右计算，null表示不计算
			yFloat: 'top', // top, bottom, null, 表示选择距视窗上还是距下计算，null表示不计算
			// 下面这四个值大于等于0，根据xFloat和yFloat来选择性传
			distanceFromPageTop: 0,
			distanceFromPageBottom: 0,
			distanceFromPageLeft: 0,
			distanceFromPageRight: 0
		};
		
		for(var i = 0;i < floaters_collection.length;i++) {
			options = $.extend(true, defaults, floaters_collection[i]);
			var followObj   = floaters_collection[i].object;
			if($(followObj).attr("float-disabled") == "true") continue; //float-disabled是在拖动浮动模块(/scripts/jQPlugins/YouDraggable.js)的地方设置的，是为了避免在拖动中模块浮动
			var curLeft = $(followObj).offset().left;
			var targetLeft = 0;
			if(options.xFloat == 'left'){
				targetLeft = $(window).scrollLeft() + options.distanceFromPageLeft;
			}else if(options.xFloat == 'right'){
				targetLeft = $(window).scrollLeft() + $(window).width() - $(followObj).outerWidth() - options.distanceFromPageRight;
			}else{
				targetLeft = curLeft;
			}
			var scrollDistanceX = (targetLeft - curLeft) * floaters_delta;
		
			var curTop = $(followObj).offset().top;
			var targetTop = 0;
			if(options.yFloat == 'top'){
				targetTop = $(window).scrollTop() + options.distanceFromPageTop;
			}else if(options.yFloat == 'bottom'){
				targetTop = $(window).scrollTop() + $(window).height() - $(followObj).outerHeight() - options.distanceFromPageBottom;
			}else{
				targetTop = curTop;
			}
			var scrollDistanceY = (targetTop - curTop) * floaters_delta;
				
			$(followObj).css({
				'left': curLeft + scrollDistanceX,
				'top': curTop + scrollDistanceY
			});
		}
	}	
}
	
// 创建在线客服浮动框
function createOnlineService(options){
	var onlineim = new floaters();
	$('head').append('<link href="/share/onlineServiceStyle.css" type="text/css" rel="stylesheet"/ >');
	var floaterID = 'IMPanel';
	if(options.style == 20){
		var floaterElem = null;
		if(options.location == "1") { // 靠右浮动
			floaterElem = onlineim.addItem2({
				floaterID: floaterID,
				content: options.content,
				xFloat: 'right',
				yFloat: 'top',
				distanceFromPageTop: 100,
				'distanceFromPageRight':0
			});
			floaterElem.children().addClass('right');
			floaterElem.css({'left': $(window).width() - 228, 'top': 100});
		}
		else{  // 靠左浮动
			floaterElem = onlineim.addItem2({
				floaterID: floaterID,
				content: options.content,
				xFloat: 'left',
				yFloat: 'top',
				distanceFromPageTop: 100,
				'distanceFromPageLeft':0
			});
			floaterElem.children().addClass('left');
			floaterElem.css({'left': 0,'top': 100});
		}
		
		floaterElem.find('.online-service-toggle-btn').off().on('click', function(){
			var state = $(this).attr('state') || 0; // 0: 显示主体 , 1:隐藏主体 
			var location = floaterElem.children().hasClass('left') ? 'left' : 'right';
			if(location == 'left'){
				if(state == 1){
					$(this).attr('state', 0);
					var self = this;
					floaterElem.children().removeClass('out');
					floaterElem.find('.online-service-header').show();
					floaterElem.find('.online-service-content').show();
					$(self).css("left","209px");
					floaterElem.stop().animate({'left': 0}, function(){
						$(self).removeClass('right').addClass('left');
						floaterElem.attr("float-disabled",'false');
					});
				}else{
					$(this).attr('state', 1);
					var self = this;
					floaterElem.find('.online-service-toggle-btn').css('top', floaterElem.outerHeight() / 2);
					floaterElem.attr("float-disabled",'true');
					floaterElem.stop().animate({'left': -floaterElem.outerWidth()}, function(){
						floaterElem.children().addClass('out');
						$(self).removeClass('left').addClass('right');
						floaterElem.find('.online-service-header').hide();
						floaterElem.find('.online-service-content').hide();
						$(self).css("left","0px");
						floaterElem.attr("float-disabled",'false');
					});
				}
			}else{
				if(state == 1){
					$(this).attr('state', 0);
					var self = this;
					floaterElem.children().removeClass('out');
					floaterElem.stop().animate({'left': $(window).width() - floaterElem.outerWidth()}, function(){
						$(self).removeClass('left').addClass('right');
					});
				}else{
					$(this).attr('state', 1);
					var self = this;
					floaterElem.find('.online-service-toggle-btn').css('top', floaterElem.outerHeight() / 2);
					floaterElem.stop().animate({'left': $(window).width() - (parseFloat($(self).css('border-left-width')) || 0)}, function(){
						floaterElem.children().addClass('out');
						$(self).removeClass('right').addClass('left');
					});
				}
			}
		});
		floaterElem.find('.online-service-header-close').off().on('click', function(){
			floaterElem.find('.online-service-toggle-btn').click();
		});
		onlineim.play2();
	}
	else if(options.style == 21){
		var floaterElem = null;
		if(options.location == "1") { // 靠右浮动
			floaterElem = onlineim.addItem2({
				floaterID: floaterID,
				content: options.content,
				xFloat: 'right',
				yFloat: 'top',
				distanceFromPageTop: 100,
				distanceFromPageRight: 20
			});
			floaterElem.children().addClass('right');
			floaterElem.css({'left': $(window).width() - 228 - 50, 'top': 100});
		}
		else{  // 靠左浮动
			floaterElem = onlineim.addItem2({
				floaterID: floaterID,
				content: options.content,
				xFloat: 'left',
				yFloat: 'top',
				distanceFromPageTop: 100,
				distanceFromPageLeft: 20
			});
			floaterElem.children().addClass('left');
			floaterElem.css({'left': 20,'top': 100});
		}

		floaterElem.find('.online-service-header-close').off().on('click', function(){
			floaterElem.remove();
		});
		onlineim.play2();
	}
	else if(options.style == 22 || options.style == 23){
		var floaterElem = $(options.content).attr('id', floaterID).appendTo('body');
		var location = options.location;
		if(location == '1'){
			floaterElem.addClass('right');
		}else{
			floaterElem.addClass('left');
		}
		
		floaterElem.find('.online-service-btn').off('mouseenter').on('mouseenter', function(){
			if(typeof onlineService2Timeout != 'undefined'){
				clearTimeout(onlineService2Timeout);
			}
			var targetPanel = $(this).attr('target');
			floaterElem.find('.online-service-content').show();
			floaterElem.find('.online-service-content').children().not('[about=' + targetPanel + ']').hide();
			floaterElem.find('.online-service-content').children('[about=' + targetPanel + ']').show();
		});
		floaterElem.find('.online-service-content').off('mouseenter').on('mouseenter', function(){
			if(typeof onlineService2Timeout != 'undefined'){
				clearTimeout(onlineService2Timeout);
			}
		});
		floaterElem.find('.online-service-btn, .online-service-content').off('mouseleave').on('mouseleave', function(){
			onlineService2Timeout = setTimeout(function(){
				floaterElem.find('.online-service-content').hide();
			}, 300);
		});
		if(SiteType == "1" && $(window).width() < 993) floaterElem.css('display','none');
		$(window).resize(function(){
			if(SiteType == "1" && $(window).width() < 993) floaterElem.css('display','none');
			else floaterElem.css('display','block');
		});
		setInterval(function(){
			if(typeof frames['pageframe'] != 'undefined') floaterElem.css('display','none'); //保证编辑框架下不显示
		},5);
	}
}