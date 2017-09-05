/**
 * Created by Freed on 2017/8/29.
 * E-mail:flyxz@126.com.
 * GitHub:FreedGo@github.com.
 */
$(function () {
	//1.顶部信息轮播
    $(".focus").slide({
        titCell:"#tip li",
        mainCell:"#pic ul",
        effect:"leftMarquee",
        autoPlay:true,
        interTime:30,
        delayTime:8000
    });
    //2.给第一个元素增加class的on
    var uList = $('.ulList');
    for(var i = 0; i<uList.length;i++){
	    uList.eq(i).children('.t').eq(0).addClass('on');
    }
});
