window.onload = function () {

    var leftList = document.getElementById('leftList');
    window.onscroll = function () {
	    if (document.body.scrollTop>= leftList.offsetTop ){
            leftList.style.position = 'fixed';
	    }else{
		    leftList.style.position = 'relative';
	    }
	}
}