/**
 * Created by Freed on 2017/9/5.
 * E-mail:flyxz@126.com.
 * GitHub:FreedGo@github.com.
 */
window.onload = function () {
	var t = document.querySelector(".footerWrap"),
	    o = document.getElementById("rightList"),
	    s = t.offsetTop,
	    l = document.querySelector(".header").offsetHeight + document.querySelector("#headTips").offsetHeight,
	    i = o.offsetTop,
	    n = o.offsetHeight;
	window.onscroll = function () {
		var t = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;;
		t + n > s ? (o.style.position = "absolute", o.style.bottom = "0px", o.style.top = "") : t >= l ? (o.style.position = "absolute", o.style.top = t - l + "px", o.style.bottom = "") : (o.style.position = "absolute", o.style.top = "0px")
	}
};

$(function(){
	//1.顶部信息轮播
	$(".focus").slide({
		titCell:"#tip li",
		mainCell:"#pic ul",
		effect:"leftMarquee",
		autoPlay:true,
		interTime:30,
		delayTime:8000
	});
})
