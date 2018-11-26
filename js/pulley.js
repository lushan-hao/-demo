$(function(){
    // $(window).scroll(function(){
        setInterval(function(){
            var winPos = $(document).scrollTop();
            var winHeight =  $(window).height();  
            var oLunbo = document.getElementById('lunbo'); 
            var olunboH = oLunbo.style.height;
            console.log(olunboH);
            if(winPos<winHeight && winPos>winHeight/2){
            window.scrollTo(0,winHeight);
            // console.log(winPos,winHeight);
            }else if(winPos>winHeight*3/2 && winPos<2*winHeight){
                window.scrollTo(0,2*winHeight);
                // console.log(winPos,winHeight);
            }else if(winPos>winHeight*5/2 && winPos<(2*winHeight + olunboH)){
                window.scrollTo(0,(2*winHeight + olunboH));
                // console.log(winPos,winHeight);
            }else if(winPos>(winHeight*5/2 + olunboH) && winPos<(3*winHeight + olunboH)){
                window.scrollTo(0,(3*winHeight + olunboH));
                // console.log(winPos,winHeight);
            }else if(winPos>(winHeight*7/2 + olunboH) && winPos<(4*winHeight + olunboH)){
                window.scrollTo(0,(4*winHeight + olunboH));
                // console.log(winPos,winHeight);
            }else if(winPos>(winHeight*9/2 + olunboH) && winPos<(5*winHeight + olunboH)){
                window.scrollTo(0,(5*winHeight + olunboH));
                // console.log(winPos,winHeight);
            }

            else if(winPos<winHeight/2){
                window.scrollTo(0,0);
                // console.log(winPos,winHeight);
            }
            else if(winPos<winHeight*3/2 && winPos>winHeight){
                window.scrollTo(0,winHeight);
                // console.log(winPos,winHeight);
            }else if(winPos<winHeight*5/2 && winPos>2*winHeight){
                window.scrollTo(0,(2*winHeight));
                // console.log(winPos,winHeight);
            }else if(winPos<(winHeight*5/2 + olunboH) && winPos>(2*winHeight + olunboH)){
                window.scrollTo(0,(2*winHeight + olunboH));
                // console.log(winPos,winHeight);
            }else if(winPos<(winHeight*7/2 + olunboH) && winPos>(3*winHeight + olunboH)){
                window.scrollTo(0,(3*winHeight + olunboH));
                // console.log(winPos,winHeight);
            }else if(winPos<(winHeight*9/2 + olunboH) && winPos>(4*winHeight + oLunbo)){
                window.scrollTo(0,(4*winHeight + olunboH));
            }
     },1000)
});
// });