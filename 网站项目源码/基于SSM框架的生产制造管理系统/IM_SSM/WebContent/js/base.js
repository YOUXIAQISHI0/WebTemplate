	function checkNull(obj,vline){
	    //判断输入框是否为空，为空时弹出提示框
	     
	 var v=document.getElementById(obj).value;
	     v=v.replace(/(^\s*)|(\s*$)/g,"");///去除空格的方法
	    // alert(" 输入值为空！"+v.length);
		 if (v.length==0){
		  alert(vline+" 为必填项！");
		  return true;
		 }
	  return false;
	}
	
	function isNum(obj ,vid ){
		 re=new RegExp("[^0-9]");
		 var s;
		 var i_value=document.getElementById(obj).value;
		 if(s=i_value.match(re)){
		  alert("'"+vid+"' 中含有非法字符 '"+s+"'！");
		  return false;
		 }
		return true;
	}