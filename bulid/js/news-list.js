window.onload=function(){
    isMobile = false;

    if(!isMobile) {
        var fixedEl = $("#scroll-fixed");
        var fixedEl2 = $("#nav-fix");

        //fixedBlock(fixedEl, "auto",368,20);
        fixedBlock(fixedEl2, "auto",870,-10);
    }
}
$(function(){
    var width = $('#nav').outerWidth();
    var totalW=0,lastIndex=0,moreNavString='';
    $('#nav').find('li').each(function(){
        var itemw=$(this).find('a').outerWidth();
            totalW+=itemw;
            if(totalW>width&&lastIndex==0){
                lastIndex=$(this).index();
                var that = $(this).prev();
                
                moreNavString='<li>'+$(this).prev().html()+'</li>';
                that.html('<a>更多</a>');
                that.append('<ul class="sub"></ul>').addClass('dropdown').attr('id','nav_more_menu');
            }
            if(lastIndex){
                moreNavString+='<li>'+$(this).html()+'</li>';
                $(this).remove();
            }
           
    });
    $('#nav_more_menu .sub').html(moreNavString);
    $('#top_head').attr('style','overflow:inherit');
  
    navbarActive();
    scrollTop();

    if(!$('.pagenation').find('a').length){
        $('.pagenation').hide();
    }

});
    function navbarActive(){
        var navclassid=$('body').data('classid');
        if(navclassid){
            $('#nav').find('a[data-classid="'+navclassid+'"]').addClass('on');
        }
    }

    function scrollTop(){
        var e = $("#rocket-to-top"),
        t = $(document).scrollTop(),
        n,
        r,
        i = !0;
        $(window).scroll(function() {
            var t = $(document).scrollTop();
            t == 0 ? e.css("background-position") == "0px 0px" ? e.fadeOut("slow") : i && (i = !1, $(".level-2").css("opacity", 1), e.delay(100).animate({
                marginTop: "-1000px"
            },
            "normal",
            function() {
                e.css({
                    "margin-top": "-125px",
                    display: "none"
                });
                
                i = !0
            })) : e.fadeIn("slow")
        }),
        e.hover(function() {
            $(".level-2").stop(!0).animate({
                opacity: 1
            })
        },
        function() {
            $(".level-2").stop(!0).animate({
                opacity: 0
            })
        }),
        $(".level-3").click(function() {
            function t() {
                var t = e.css("background-position");
                if (e.css("display") == "none" || i == 0) {
                    clearInterval(n),
                    e.css("background-position", "0px 0px");
                    return
                }
                switch (t){
                case "0px 0px":
                    e.css("background-position", "-298px 0px");
                    break;
                case "-298px 0px":
                    e.css("background-position", "-447px 0px");
                    break;
                case "-447px 0px":
                    e.css("background-position", "-596px 0px");
                    break;
                case "-596px 0px":
                    e.css("background-position", "-745px 0px");
                    break;
                case "-745px 0px":
                    e.css("background-position", "-298px 0px");
                }
            }
            if (!i) return;
            n = setInterval(t, 50),
            $("html,body").animate({scrollTop: 0},"slow");
        });        
    }
    function fixedBlock(el,top,bottom,offset){
        var el1=0;
   
        if(el.length){
            el1=el=el[0];

            var m=typeof offset =="undefined"?0:offset;
            var b=typeof bottom =="undefined"?0:Number(bottom);
            var fixedTop=-m+"px";
            var start=top=="auto"?getElementTop(el):top;
            var height=el.offsetHeight-m;
        
        }
        var el2 = document.getElementById("scroll-fixed"),top2='auto',bottom2=888,offset2=20;

        if(!el1){
            bottom2=368;
        }

        if($('#info_list').length)offset2=0;
        var m2=typeof offset2 =="undefined"?0:offset2;
        var b2=typeof bottom2 =="undefined"?0:Number(bottom2);
        var fixedTop2=-m2+"px";
        var start2=top2=="auto"?getElementTop(el2):top2;
        var height2=el2.offsetHeight-m2;

        window.onscroll=function(){
 
           if(el1)main(el1);
            main2(el2);
        };
        if(el1)main(el1);
        main(el2);

        function main(ell){
        var scrollH=getScrollHeight();
        var scrollT=getScrollTop();

            if(scrollT-m>start){
                ell.style.position="fixed";
                ell.style.height=(document.documentElement.clientHeight-30)+'px';
                if(scrollT+height+b>scrollH){
                    ell.style.top=scrollH-(scrollT+height+b+m)+"px";
                }else{
                    ell.style.top=fixedTop;
                }
            }else{
                ell.style.position="relative";
                ell.style.top=0;
            }
        }

        function main2(ell){
            var scrollH=getScrollHeight();
            var scrollT=getScrollTop();
            if(scrollT-m2>start2){
                ell.style.position="fixed";
                if(scrollT+height2+b2>scrollH){
                    ell.style.top=scrollH-(scrollT+height2+b2+m2)+"px";
                }else{

                    ell.style.top=fixedTop2;
                }
            }else{
                ell.style.position="relative";
                ell.style.top=0;
            }
        }


        function getElementTop(element){
            var actualTop = element.offsetTop;
            var current = element.offsetParent;
            while (current !== null){
                actualTop += current.offsetTop;
                current = current.offsetParent;
            }
            return actualTop;
        }

        function getScrollTop()
        {
            var scrollTop=0;
            if(document.documentElement&&document.documentElement.scrollTop)
            {
                scrollTop=document.documentElement.scrollTop;
            }
            else if(document.body)
            {
                scrollTop=document.body.scrollTop;
            }
            return scrollTop;
        }

        function getScrollHeight(){
            var scrollHeight = 0, bodyScrollHeight = 0, documentScrollHeight = 0;
            if(document.body){
                bodyScrollHeight = document.body.scrollHeight;
            }
            if(document.documentElement){
                documentScrollHeight = document.documentElement.scrollHeight;
            }
            scrollHeight = (bodyScrollHeight - documentScrollHeight > 0) ? bodyScrollHeight : documentScrollHeight;
            return scrollHeight;
        }



    }