var oMenu = document.getElementById('menu');
var oClose = document.getElementById('close');
var oSide = document.getElementById('side');
var oPage1 = document.getElementById('page1');
var oPage2 = document.getElementById('page2');
var oPage3 = document.getElementById('page3');
var oPage4 = document.getElementById('page4');
var oPage5 = document.getElementById('page5');
var oPage6 = document.getElementById('page6');
var wHeight = document.getElementById("demo").offsetHeight;
var oTwoPage = document.getElementById('twoimg');
var oXuan = document.getElementById('xuan');
var oDemo1 = document.getElementById('demo1');
var oDemo2 = document.getElementById('demo2');
var oDemo3 = document.getElementById('demo3');
var oDemo4 = document.getElementById('demo4');
var oDemo5 = document.getElementById('demo5');
var oDemo6 = document.getElementById('demo6');


window.onscroll = function(){
    let loc = document.documentElement.scrollTop ||document.body.scrollTop;
    if(loc=wHeight){
            oTwoPage.style.opacity = '.7';
            oTwoPage.style.transform = 'translateX(-27%)';
    }
    if(loc=2*wHeight){
            oXuan.style.opacity = '1';
            oXuan.style.transform = 'translateX(4%)';
    }
    if(loc=11*wHeight/2){
        oDemo1.style.opacity = '1';
        oDemo1.style.transform = 'translateX(0)';
        oDemo4.style.opacity = '1';
        oDemo4.style.transform = 'translateX(0)';
        oDemo3.style.opacity = '1';
        oDemo3.style.transform = 'translateX(0)';
        oDemo6.style.opacity = '1';
        oDemo6.style.transform = 'translateX(0)';
        oDemo2.style.opacity = '1';
        oDemo2.style.transform = 'translateY(0)';
        oDemo5.style.opacity = '1';
        oDemo5.style.transform = 'translateY(0)';
    }


    // function page2img(){
    //     oTwoPage.style.opacity = '0';
    //     oTwoPage.style.transform = 'translateX(37%)';
    // }
}








oPage1.addEventListener('click',function(){
    gotopage(0);
},true);
oPage2.addEventListener('click',function(){
    gotopage(wHeight);
},true);
oPage3.addEventListener('click',function(){
    gotopage(wHeight*2);
},true);
oPage4.addEventListener('click',function(){
    gotopage(wHeight*3);
},true);
oPage5.addEventListener('click',function(){
    gotopage(wHeight*4);
},true);
oPage6.addEventListener('click',function(){
    gotopage(wHeight*5);
},true);
function goTo(where){
    var loc = document.documentElement.scrollTop ||document.body.scrollTop;
    if(loc <= where){
            loc += 10;
            if(loc <= where){
                window.scrollTo(0,loc);
            }else{
                clearInterval(timer);
            }
        }else{
            loc -= 10;
            if(loc >= where){
                window.scrollTo(0,loc);
            }else{
                clearInterval(timer);
            }
        }
    }

function gotopage(h){
    timer = setInterval('goTo("'+h+'")',1);
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
    oSide.style.transform = 'translatex(300px) rotate(180deg)';
},'true');
oClose.addEventListener('click',function(){
    oMenu.style.display = "block";
    oSide.style.transition = 'all 2s ease';
    oSide.style.opacity = '0';
    oSide.style.transform = 'translatex(600px)';
    
})




