/**
 * Created by Freed on 2017/9/1.
 * E-mail:flyxz@126.com.
 * GitHub:FreedGo@github.com.
 */
window.onload = function () {
	var boxPage = document.getElementById('boxPage');
	var leftList = document.getElementById('leftList');
	var rightList = document.getElementById('rightList');
	var stopTop = boxPage.offsetTop;//取消固定定位的高度
    var headOffsetTop = document.querySelector('.header').offsetHeight+document.querySelector('#headTips').offsetHeight;
    var rightOffsetTop = rightList.offsetTop;
    var leftListHeight = leftList.offsetHeight;
    var rightListHeight = rightList.offsetHeight;
	window.onscroll = function () {
		// 固定滚动
		var dbScroll = document.body.scrollTop;
        if (dbScroll+leftListHeight>stopTop){
            leftList.style.position = 'absolute';
            leftList.style.bottom = '0px';
            leftList.style.top = '';
        }else if (dbScroll>= headOffsetTop ){
            leftList.style.position = 'fixed';
            leftList.style.top = '0px';
        }else{
            leftList.style.position = 'absolute';
            leftList.style.top = '0px';
	    };
        if (dbScroll+rightListHeight>stopTop){
            rightList.style.position = 'absolute';
            rightList.style.bottom = '0px';
            rightList.style.top = '';
        }else if (dbScroll>= headOffsetTop ){
            rightList.style.position = 'absolute';
            rightList.style.top = dbScroll-headOffsetTop+'px';
            rightList.style.bottom = '';
        }else{
            rightList.style.position = 'absolute';
            rightList.style.top = '0px';

        }

    }
};