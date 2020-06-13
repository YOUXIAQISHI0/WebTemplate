/*等待遮罩*/
function loadings() {
    if ($("#div_loadingImg").length == 0) {
        $("body").append("<div id='div_loadingImg'  style='position:fixed;top:0;left:0;z-index:9999;background:rgba(255,255,255,0);width:100%;height:100vh'></div>");
        $("#div_loadingImg").append("<img src='img/jdt.gif'  style='position:absolute;left:50%;top:50%;width:50px;height:50px;margin-left:-25px;margin-top:-25px'/>");
    }
}

function loadings_success() {
    if ($("#div_loadingImg").length != 0) {
        $("#div_loadingImg").empty();
        $("#div_loadingImg").remove();
    }
}

//获取url参数
function GetRequest() { 
	var url = location.search; //获取url中"?"符后的字串 
	var theRequest = new Object(); 
	if (url.indexOf("?") != -1) { 
		var str = url.substr(1); 
		strs = str.split("&"); 
		for(var i = 0; i < strs.length; i ++) { 
			theRequest[strs[i].split("=")[0]]=unescape(strs[i].split("=")[1]); 
		} 
	} 
	return theRequest; 
} 
var getWhere = GetRequest();
//格式化时间戳
function formatDate(timestamp){ 
	var now = new Date(timestamp*1000);
    var year=now.getFullYear();     
    var month=checkTime(now.getMonth()+1);     
    var date=checkTime(now.getDate());     
    var hour=checkTime(now.getHours());     
    var minute=checkTime(now.getMinutes());     
    var second=checkTime(now.getSeconds());     
    return year+"-"+month+"-"+date+"   "+hour+":"+minute+":"+second;     
} 
function formatDateNoYear(timestamp){ 
	var now = new Date(timestamp*1000);
    var year=now.getFullYear();     
    var month=checkTime(now.getMonth()+1);     
    var date=checkTime(now.getDate());     
    var hour=checkTime(now.getHours());     
    var minute=checkTime(now.getMinutes());     
    var second=checkTime(now.getSeconds());     
    return month+"-"+date+"   "+hour+":"+minute+":"+second;     
} 

function formatDateyrsf(timestamp){ 
	var now = new Date(timestamp*1000);  
    var month=checkTime(now.getMonth()+1);     
    var date=checkTime(now.getDate());     
    var hour=checkTime(now.getHours());     
    var minute=checkTime(now.getMinutes());        
    return month+"-"+date+"   "+hour+":"+minute;     
} 

function hms(secs){     
    var hour=checkTime(Math.floor(secs/3600));     
    var minute=checkTime(Math.floor(secs/60%60));     
    var second=checkTime(secs%60);     
    if(secs/3600<1){
       return ""+minute+":"+second;     	
    }else{
       return ""+hour+":"+minute+":"+second;     
    } 
} 



function checkTime(i){
	if(i<10){
		i="0" + i;
	}
	return i;
}



//自定义
/*获取数据*/

	/*
	* action 接口名称
	* post_data 发送数据
	* callback 回调函数
	*/
	function gdata(action_name,post_data,callback,async){
		if(!action_name) return false;
		async = async ? false : true;
		var url = '/api.php/Index/'+action_name+'/from/ajax';
		console.log('请求接口：'+url);
		console.log('请求参数：');
		console.log(post_data);
		$.ajax({
			url: url,
			type:'post',
			dataType: "json",
			data: post_data,
			async:async,
			success: callback,
			beforeSend:function(){
				loadings()
			},
			complete:function(){
				loadings_success()
			}
		});
	}
	
	
	//跳转
	function reloadUrl(url){
		if(url=='reload'){
			setTimeout('window.location.reload();',100);
		}else{
			setTimeout('window.location.href = "'+url+'";',100);
		}
	}
	//提示
	function alert_my(info,status){
		if(!info){
			return false;
		}
		if (status) {
			zz({"info":info,"txt1":"确定","txt2":"关闭"})
		} else {			
			zz({"info":info,"txt1":"确定","txt2":"关闭"})
		}
		return false;
	}


	//验证数据
	function checkdata(data){
		console.log(data);
		/*提示信息*/
		if(data.retErr){
			//alert_my(data.retErr,data.retInt);
		}
		/*跳转页面&& window.location.pathname.indexOf("login")<0*/ 
		
		if(data.retUrl && window.location.pathname.indexOf("converence")<0){
			reloadUrl(data.retUrl);
			return false;
		}
		/*返回结果*/
		if(data.retInt!='1' && window.location.pathname.indexOf("login")<0 && data.retErr!="loginerr"){
			alert_my(data.retErr,data.retInt);
			return false;
		}
		return true;
	}
	
 
	
	
 
   function toUrl(data){
		 var str = JSON.stringify(data);
		 if(str.indexOf("http")<0){
		 	 str = str.replace(/\"Public/g,'"http://dj.ibei360.cn/Public/');
		 }
		 data = JSON.parse(str);
		 return data;
	}



	//跳转链接
	function cnewurl(file){
		var url = window.location.href;
		var index = url.lastIndexOf('/');
		var http_url = url.substr(0,index+1);
		url = http_url+file;
		//console.log(url);
		window.location.href = url;
	}


	//获取本地用户信息
	function userinfo(){
		var str = localStorage.userInfo;
		if(!str){
			return false;
		}
		return JSON.parse(str);
	}
	//获取系统信息
	function sysinfo(){
		var str = localStorage.sysInfo;
		if(!str){
			return false;
		}
		return JSON.parse(str);
	}

	//获取系统信息
//	function basefunc(){
//		//获取系统信息
//		getData('sysinfo',{},function(data){
//			if(data.retInt){
//				$('title').html(data.retRes.title);
//				var str = JSON.stringify(data.retRes);
//				localStorage.sysInfo = str;
//				
//			}else{
//				localStorage.sysInfo = '';
//			}
//			
//		},false);
//
//		if(cuurl()){
//			//获取用户信息
//			getData('userinfo',{},function(data){
//				if(data.retInt){
//					var str = JSON.stringify(data.retRes);
//					localStorage.userInfo = str;
//				}else{
//					localStorage.userInfo = '';
//					window.location.href = 'login.html';
//				}
//				
//			},false);
//		}
//	}

//	basefunc();
   	
	
function zz(data,url1,url2){
	var sb=document.createElement("div");
	sb.className="zz";
	var html = '<div class="window_info"><div class="info_detail"><p>'+data.info+'</p></div>';
	html += '<div class="btns">';
	var call1 = '';
	if(url1){
		call1 = ' onclick="cnewurl(\''+url1+'\')" ';
	}
	html += '<a href="javascript:;" '+call1+'>'+data.txt1+'</a>';
	var call2 = '';
	if(url2){
		call2 = ' onclick="cnewurl(\''+url2+'\')" ';
	}
	html += '<a href="javascript:;" '+call2+'>'+data.txt2+'</a>';
	
	html += '</div></div>';
	sb.innerHTML= html;
    document.getElementsByTagName("body")[0].appendChild(sb);
    $(".zz .btns a").click(function(){
    	$(".zz").remove()
    })
};


function zz0(data,url1,url2){
	var sb=document.createElement("div");
	sb.className="zz0";
	var html = '<div class="window_info"><div class="info_detail"><p>'+data.info+'</p></div>';
	html += '<div class="btns">';
	var call1 = '';
	if(url1){
		call1 = ' onclick="cnewurl(\''+url1+'\')" ';
	}
	html += '<a href="javascript:;" '+call1+'>'+data.txt1+'</a>';
	var call2 = '';
	if(url2){
		call2 = ' onclick="cnewurl(\''+url2+'\')" ';
	}
	html += '<a href="javascript:;" '+call2+'>'+data.txt2+'</a>';
	
	html += '</div></div>';
	sb.innerHTML= html;
    document.getElementsByTagName("body")[0].appendChild(sb);
//  $(".zz0 .btns a").click(function(){
//  	$(".zz0").remove()
//  })
};


function zz2(data,url1,url2){
	var sb=document.createElement("div");
	sb.className="zz2";
	var html = '<div class="window_info"><div class="info_detail"><p>'+data.info+'</p></div>';
	html += '<div class="btns">';
	var call1 = '';
	if(url1){
		call1 = ' onclick="cnewurl(\''+url1+'\')" ';
	}
	html += '<a href="javascript:;" '+call1+'>'+data.txt1+'</a>';
	var call2 = '';
	if(url2){
		call2 = ' onclick="cnewurl(\''+url2+'\')" ';
	}
	html += '<a href="javascript:;" '+call2+'>'+data.txt2+'</a>';
	
	html += '</div></div>';
	sb.innerHTML= html;
    document.getElementsByTagName("body")[0].appendChild(sb);
    $(".zz2 .btns a").click(function(){
    	$(".zz2").remove()
    })
};

function zz3(data,url1,url2){
	var sb=document.createElement("div");
	sb.className="zz3";
	var html = '<div class="window_info"><div class="info_detail"><p>'+data.info+'</p></div>';
	html += '<div class="btns">';
	var call1 = '';
	if(url1){
		call1 = ' onclick="cnewurl(\''+url1+'\')" ';
	}
	html += '<a href="javascript:;" '+call1+'>'+data.txt1+'</a>';
	var call2 = '';
	if(url2){
		call2 = ' onclick="cnewurl(\''+url2+'\')" ';
	}
	html += '<a href="javascript:;" '+call2+'>'+data.txt2+'</a>';
	
	html += '</div></div>';
	sb.innerHTML= html;
    document.getElementsByTagName("body")[0].appendChild(sb);
    $(".zz3 .btns a").click(function(){
    	$(".zz3").remove()
    })
};




/*获取系统信息*/
//	gdata('sysinfo',{},function(data){
//		if(checkdata(data)){
//			console.log(data.retRes.title);
//		}
//	});
// 
//  var info=null;
//	var post_data = {};
//	gdata('userinfo',post_data,function(data){
//		if(checkdata(data)){
//			info=data
//		}
//	});

//  gdata('wxinfo',{},function(data){
//		if(checkdata(data)){
//				
//		}
//	});


