// JavaScript Document
//获取元素
		var oWrap =document.getElementsByClassName("wrap")[0];
		var aBanner =oWrap.getElementsByClassName("banner");
		var oBtn =document.getElementsByClassName("btn")[0];
		var aSpan=oBtn.getElementsByTagName("span");
		var num=0;
	//初始化
		aBanner[0].style.opacity="1";
		aSpan[0].className="on";
	//点击按钮		
		for(var i=0;i<aSpan.length;i++)
		{
			aSpan[i].index=i;
			aSpan[i].onclick=function(){
				num =this.index;
				for(var j=0;j<aSpan.length;j++)
				{
					aBanner[j].style.opacity=0;
					aSpan[j].className="";
				}
				aBanner[num].style.opacity="1";
				this.className="on";
				}	
	    }
		setInterval (function(){
			num++;
			num%=aBanner.length;
			for(var j=0;j<aSpan.length;j++)
				{
					aBanner[j].style.opacity=0;
					aSpan[j].className="";
				}
				aBanner[num].style.opacity="1";
				aSpan[num].className="on";
		},3000)