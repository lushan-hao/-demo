
var ins = 0;
var str ="Hello Everyone 欢迎来到我的个人网站 我叫郝禄山";

  window.onload = function typing() {
  var mydiv = document.getElementById("home-middle");
  mydiv.innerHTML += str.charAt(ins);
  ins++;
  var id = setTimeout(typing, 100);
  if (ins == str.length) {
    clearTimeout(id);
  }
};

//首先来一个常规的自我介绍，我叫郝禄山，正在学习前端，对前端比较感兴趣，其实我认为前端不仅仅是简单的编几个页面，js是单线程的操作，因为js有时会对Dom结构进行操作，如果同时对一个元素进行Dom操作，会发生混乱，当然也不是我自己领悟的，哈哈

    function slider(ele, option) {
        this.default = {
            curDisplay: 0,
            autoPlay: false,
            interval: 3000
        }
        this.opts = $.extend({}, this.default, option);
        this.wrap = ele;
        this.curDisplay = this.opts.curDisplay;
        this.autoPlay = this.opts.autoPlay;
        this.nowIndex = this.opts.curDisplay;
        this.interval = this.opts.interval;
        this.timer = null;
        this.$img = this.wrap.find('img');
        this.imgLen = this.$img.length;
        this.switch = true;
        this.init();
    }
    slider.prototype.init = function () {
        var self = this;
        self.initalCarousel();
        self.bindEvent();
    };
    slider.prototype.initalCarousel = function () {
        var self = this;
        var hLen = Math.floor(self.imgLen / 2);
        var lNum, rNum;
        for (var i = 0; i < hLen; i++) {
            lNum = self.curDisplay - i - 1;
            self.$img.eq(lNum).css({
                transform: 'translateX(' + (-150 * (i + 1)) + 'px) translateZ(' + (200 - i * 100) + 'px) rotateY(30deg)'
            })
            rNum = self.curDisplay + i + 1;
            if (rNum > self.imgLen - 1) {
                rNum -= this.imgLen;
            }
            self.$img.eq(rNum).css({
                transform: 'translateX(' + (150 * (i + 1)) + 'px) translateZ(' + (200 - i * 100) + 'px) rotateY(-30deg)'
            });
            this.$img.removeClass('on');
        }
        self.$img.eq(self.curDisplay).css({
            transform: 'translateZ(300px)'
        }).addClass('on');
        this.wrap.on('transitionend', function () {
            self.switch = true;
        })
    };
    slider.prototype.bindEvent = function () {
        var self = this;
        self.$img.on('click', function (e) {
            if (self.switch && !$(this).hasClass('on')) {
                self.switch = false;
                self.nowIndex = $(this).index();
                self.moving(self.nowIndex);
            }
        }).hover(function () {
            clearInterval(self.timer);
        }, function () {
            self.timer = setInterval(function () {
                self.play();
            }, self.interval);
        });
        this.timer = setInterval(function () {
            self.play();
        }, this.interval);
    }
    slider.prototype.play = function () {
        if (this.autoPlay) {
            if (this.nowIndex == this.imgLen - 1) {
                this.nowIndex = 0;
            } else {
                this.nowIndex++;
            }
            this.moving(this.nowIndex);
        }
    };
    slider.prototype.moving = function (index) {
        this.curDisplay = index;
        this.initalCarousel();
    }
    $.fn.extend({
        slider: function (options) {
            new slider(this, options);
        }
    })

$('#wrap').slider({ curDisplay: 0, autoPlay: true, interval: 3000 });


























var minSize = 5; //最小字体
var oDemo = document.getElementById("demo");
var maxSize = 50; //最大字体
var newOne =500; //生成雪花间隔
var flakColor = "#fff"; //雪花颜色
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
        "z-index": 999,
      },
      durationfull,
      function() {
        $(this).remove();
      }
    );
}, newOne);



$('#music').on('touchstart',function(){ 
    var audio = $('#audio')[0]; 
    audio.pause(); 
    audio.play(); 
})
