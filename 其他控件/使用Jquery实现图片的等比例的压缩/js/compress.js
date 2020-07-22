

var bili = 0.4;//压缩后的图片尺寸,0.7就是70%
var quality = 0.4;//压缩后图片的质量,数字越小图片越模糊


$(function () {
    $("#file").on('change',function () {
        //文件改变时,获取文件,并转化为base64字符串
        var file = this.files[0]
        var ready = new FileReader()
        ready.readAsDataURL(file);
        ready.onload = function (e) {
            var base64Img = e.target.result;
            // console.log(base64Img)
            $("#pre").attr("src",base64Img)
            compress(base64Img)//执行压缩
        }
    })
})

function compress(base64Img) {
    var img = new Image();//创建一个空白图片对象
    img.src = base64Img;//图片对象添加图片地址
    img.onload = function () {//图片地址加载完后执行操作
        var newWidth = img.width*bili;//压缩后图片的宽度
        var newHeight = img.height*bili;//压缩后图片的高度

        //开始画压缩图
        var canvas = document.createElement("canvas");
        var ctx = canvas.getContext("2d");
        canvas.width = newWidth;//压缩图的宽度
        canvas.height = newHeight;//压缩图的高度
        ctx.drawImage(img,0,0,newWidth,newHeight);
        var newBase64 = canvas.toDataURL("image/jpeg",quality);

        //压缩后预览
        $("#next").attr("src",newBase64);

        //添加压缩后属性
        $("#compressFile").val(newBase64);

    }
}
