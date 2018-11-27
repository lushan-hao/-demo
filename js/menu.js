var oMenu = document.getElementById('menu');
var oClose = document.getElementById('close');
var oSide = document.getElementById('side');
var oDemo
var oPage1 = document.getElementById('page1');
var oPage2 = document.getElementById('page2');
var oPage3 = document.getElementById('page3');
var oPage4 = document.getElementById('page4');
var oPage5 = document.getElementById('page5');
var oPage6 = document.getElementById('page6');
var wHeight = document.getElementById("demo").offsetHeight;
oPage1.addEventListener('click',function(){
    gotopage(wHeight);
},true);
oPage2.addEventListener('click',function(){
    gotopage(wHeight*2);
},true);
oPage3.addEventListener('click',function(){
    gotopage(wHeight*3);
},true);
oPage4.addEventListener('click',function(){
    gotopage(wHeight*4);
},true);
oPage5.addEventListener('click',function(){
    gotopage(wHeight*5);
},true);
oPage6.addEventListener('click',function(){
    gotopage(wHeight*6);
},true);
function goTo(a){
    console.log(a, typeof a);
}

function gotopage(h){
    // setInterval(goTo(h), 1000);
    // timertiao = setInterval("goTo('" + h + "')", 1);
    timer = setInterval('goTo("'+h+'")');
}

// var oLunbo = document.getElementById('lunbo');
// var odemo = document.getElementById('demo');
// window.onload = function(){
//     var lHeight = $(window).height();
//     oLunbo.style.height = lHeight + 'px';
//     odemo.style.height = lHeight + 'px';
//     console.log(lHeight);
//     console.log(oLunbo.style.height);
//     console.log(odemo.style.height);
// };
oMenu.addEventListener('click',function(){
    oMenu.style.display = "none";
    oSide.style.transition = 'all 1s linear';
    oSide.style.opacity = '.7';
    oSide.style.transform = 'translatex(300px)';
},'true');
oClose.addEventListener('click',function(){
    oMenu.style.display = "block";
    oSide.style.transition = 'all 2s ease';
    oSide.style.opacity = '0';
    oSide.style.transform = 'translatex(600px)';
    
})