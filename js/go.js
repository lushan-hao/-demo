$(document).ready(function(){
	var element = $('#list a');
	var offset = 0; 
	var stepping = 0.03;
	var $list = $('#list');
	for (var i = element.length - 1; i >= 0; i--){
		element[i].horn = i * Math.PI * 2 / element.length;
		console.log(element[i].horn)
	}	
	
	
	setInterval(render, 200);
	
	function render(){
		for (var i = element.length - 1; i >= 0; i--){
			var horn = element[i].horn + offset;
			x = 120 + Math.sin(horn) * 30;               //弧度
			y = 45 + Math.cos(horn) * 40;               //高度
			size = Math.round(40 - Math.sin(horn) * 40);       //字体
			var elementCenter = $(element[i]).width() / 2;         //宽度
			// console.log(elementCenter);
			var leftValue = (($list.width()/2) * x / 100 - elementCenter) + "px"  //放置中心
			// console.log(size);
			$(element[i]).css("fontSize", size + "pt");
			$(element[i]).css("opacity",size/100);
			$(element[i]).css("zIndex" ,size);
			$(element[i]).css("left" ,leftValue);
			$(element[i]).css("top", y + "%");
		}
		// console.log(offset);
		offset += stepping;
	}
	
});