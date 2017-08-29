/**
 * Created by Freed on 2017/8/29.
 * E-mail:flyxz@126.com.
 * GitHub:FreedGo@github.com.
 */
$(function () {
	//1.顶部信息轮播
	$(".fullSlide").slide({
		titCell:".hd ul",
		mainCell:".bd ul",
		effect:"leftMarquee",
		autoPlay:true,
		trigger:"click",
		interTime:1000,
		delayTime:3000
	});
})
