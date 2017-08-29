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
    //2.中间轮播图
    // $(".fullSlide").slide({ titCell:".hd ul", mainCell:".bd ul", effect:"fold",  autoPlay:true, autoPage:true, trigger:"click" });

})
