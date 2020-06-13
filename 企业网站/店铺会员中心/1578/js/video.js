//播放视频
$(function(){
	var oVideo=document.getElementById("ymVideo");
      var myVideo = oVideo.getElementsByTagName('video')[0]
      var myClose = oVideo.getElementsByTagName('a')[0]

      myClose.onclick=function(){
          if(myVideo.pause){
              myVideo.pause();
              oVideo.style.display="none";
          }else{
              oVideo.parentNode.removeChild(oVideo);
          }
     }
})