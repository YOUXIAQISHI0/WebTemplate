// 声明变量
// 1、li元素的宽度  $li_width
var $li = $('.slide_items li')
var $li_width = $li.width()
var $ul = $('.slide_items')
// 2、ul dom 
var $ul_dom = $('.slide_items')
// 3、定义移动的初始值  
var go = 0;
// 上一个
// 计算ul的宽度
var ul_width = 0
for(var i = 0; i< $li.length; i++ ){
    ul_width +=$li.eq(i).width()
}
$ul.width(ul_width)
// 定义初始标记
var flag = 0
 $('.button.next').on('click',function(e){
    go_next()
 })

 $('.button.prev').on('click',function(){
    go_prev()
 })
$('.slide_items li').on('click',function(e){
    var index = $(this).index()
    flag = index
    go_next_item(index)
    return false;
 })
 var go_next_length =0

//  向右动画函数
 function go_next(){

    if(flag > $li.length-2) {
        return false
    }
    flag = flag+1  //下标的标记
    go = go + $li_width
    go_next_length =  -go 
    move() //移动函数
    // // 活跃的年份
    onYear(flag)
    content_switch(flag)
 }
 function go_next_item(index) {
    go = $li_width*index
    go_next_length =  -go 
    move() 
    onYear(index)
    content_switch(index)

 }
 //  向右动画函数向左函数动画
 function go_prev(){
    if(flag <= 0) {
        return false
    }
    flag = flag-1   //下标的标记
    go = go - $li_width
    go_next_length = -go
    move() //移动函数
    onYear(flag)
    content_switch(flag)
}
// 移动函数
function move() {
    $ul_dom.stop().animate({
        'left' : go_next_length
    },800,'easeOutCirc')
}
// 活跃的年份
function onYear(index){
    var index
    $('.slide_items li').eq(index).addClass('on').siblings().removeClass('on')
}

function  content_switch(index) {
    $('.slide-content ul').eq(index).fadeIn(800).siblings().hide();
}