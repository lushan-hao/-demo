var oMenu = document.getElementById('menu');
var oClose = document.getElementById('close');
var oSide = document.getElementById('side');
var oHeader = document.getElementById('header');
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