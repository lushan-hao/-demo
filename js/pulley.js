var i = 0;
var str =
  "首先来一个常规的自我介绍，我叫郝禄山，正在学习前端，对前端比较感兴趣，其实我认为前端不仅仅是简单的编几个页面，js是单线程的操作，因为js有时会对Dom结构进行操作，如果同时对一个元素进行Dom操作，会发生混乱，当然也不是我自己领悟的，哈哈";
window.onload = function typing() {
  //获取div
  var mydiv = document.getElementById("introduce-text");
  mydiv.innerHTML += str.charAt(i);
  i++;
  var id = setTimeout(typing, 100);
  if (i == str.length) {
    clearTimeout(id);
  }
};
var minSize = 5; //最小字体
var oDemo = document.getElementById("demo");
var maxSize = 50; //最大字体
var newOne =500; //生成雪花间隔
var flakColor = "#fff"; //雪花颜色
// console.log(dhight);
// console.log(dw);
// var a = false;
// console.log($(window).scroll());
//  $(window).scroll(function(a){
//     a = true;
//     return(a);
//  })
//  console.log(a);
//  if(a){
//     var dhight = $(document).height(); //定义视图高度
//     var dw = $('#demo').width(); //定义视图宽度
//     console.log(dhight);
//     console.log(dw);
//  }


setInterval(function() {
    var dhight = $(document).height(); //定义视图高度
    var dw = $('#demo').width(); //定义视图宽度
    var flak = $("<div class='xh'></div>")
  .css({ position: "absolute", top: "0px" })
  .html("❉"); //定义一个雪花
  var sizeflak = minSize + Math.random() * maxSize; //产生大小不等的雪花
  var startLeft = Math.random() * dw-25; //雪花生成是随机的left值
  var startopcity = 0.7 + Math.random() * 0.3; //随机透明度
  var endpositionTop = dhight - 150; //雪花停止top的位置
  var endLeft = Math.random() * dw-25; //雪花停止的left位置
//   console.log(endLeft);
//   console.log(endpositionTop);
  var durationfull = 30000 + Math.random() * 30000; //雪花飘落速度不同
  flak
    .clone()
    .appendTo($("body"))
    .css({
        position: 'absolute',
      left: startLeft,
      opacity: startopcity,
      "font-size": sizeflak,
      color: flakColor
    })
    .animate(
      {
        position: 'absolute',
        top: endpositionTop,
        left: endLeft,
        apacity: 0.1,
        "z-index": 999
      },
      durationfull,
      function() {
        $(this).remove();
      }
    );
}, newOne);

// $(function() {
  // $(window).scroll(function(){
  //     setInterval(function(){
  //         var winPos = $(document).scrollTop();
  //         var winHeight =  $(window).height();
  //         var oLunbo = document.getElementById('lunbo');
  //         var olunboH = oLunbo.style.height;
  //         console.log(olunboH);
  //         if(winPos<winHeight && winPos>winHeight/2){
  //         window.scrollTo(0,winHeight);
  //         // console.log(winPos,winHeight);
  //         }else if(winPos>winHeight*3/2 && winPos<2*winHeight){
  //             window.scrollTo(0,2*winHeight);
  //             // console.log(winPos,winHeight);
  //         }else if(winPos>winHeight*5/2 && winPos<(2*winHeight + olunboH)){
  //             window.scrollTo(0,(2*winHeight + olunboH));
  //             // console.log(winPos,winHeight);
  //         }else if(winPos>(winHeight*5/2 + olunboH) && winPos<(3*winHeight + olunboH)){
  //             window.scrollTo(0,(3*winHeight + olunboH));
  //             // console.log(winPos,winHeight);
  //         }else if(winPos>(winHeight*7/2 + olunboH) && winPos<(4*winHeight + olunboH)){
  //             window.scrollTo(0,(4*winHeight + olunboH));
  //             // console.log(winPos,winHeight);
  //         }else if(winPos>(winHeight*9/2 + olunboH) && winPos<(5*winHeight + olunboH)){
  //             window.scrollTo(0,(5*winHeight + olunboH));
  //             // console.log(winPos,winHeight);
  //         }
  //         else if(winPos<winHeight/2){
  //             window.scrollTo(0,0);
  //             // console.log(winPos,winHeight);
  //         }
  //         else if(winPos<winHeight*3/2 && winPos>winHeight){
  //             window.scrollTo(0,winHeight);
  //             // console.log(winPos,winHeight);
  //         }else if(winPos<winHeight*5/2 && winPos>2*winHeight){
  //             window.scrollTo(0,(2*winHeight));
  //             // console.log(winPos,winHeight);
  //         }else if(winPos<(winHeight*5/2 + olunboH) && winPos>(2*winHeight + olunboH)){
  //             window.scrollTo(0,(2*winHeight + olunboH));
  //             // console.log(winPos,winHeight);
  //         }else if(winPos<(winHeight*7/2 + olunboH) && winPos>(3*winHeight + olunboH)){
  //             window.scrollTo(0,(3*winHeight + olunboH));
  //             // console.log(winPos,winHeight);
  //         }else if(winPos<(winHeight*9/2 + olunboH) && winPos>(4*winHeight + oLunbo)){
  //             window.scrollTo(0,(4*winHeight + olunboH));
  //         }
  //  },1000)
// });
// });


$('#music').on('touchstart',function(){ 
    var audio = $('#audio')[0]; 
    audio.pause(); 
    audio.play(); 
})