/**
 * Created by Freed on 2017/9/1.
 * E-mail:flyxz@126.com.
 * GitHub:FreedGo@github.com.
 */
window.onload = function () {

	var leftList = document.getElementById('leftList');
	window.onscroll = function () {
	    if (document.body.scrollTop>= leftList.offsetTop ){
	       leftList.style.position = 'fixed';
	    }else{
		    leftList.style.position = 'relative';
	    }
	}
};