//返回顶部 && 到达底部
var $backToTop=$('<div class="backToTop">返回顶部</div>');
var $toBottom=$('<div class="toBottom">到底部</div>');
$('body').append($backToTop);
$('body').append($toBottom);
var st = $(document).scrollTop(), winh = $(window).height(),dh = $(document).height();
$backToTopFun = function() { 
    var st = $(document).scrollTop(), winh = $(window).height(),dh = $(document).height();
    (st > 0)? $('.backToTop,.toBottom').show() : $('.backToTop,.toBottom').hide();
    if(st >= dh - winh){$('.toBottom').hide()}
};
$(window).bind("scroll",$backToTopFun);
$('.backToTop').click(function() {
    $("html, body").animate({scrollTop:0}, 500);
});
$('.toBottom').click(function() {
    $("html, body").animate({scrollTop:(dh-winh)}, 500);
});

$(function(){
    var $side_toggle = $('#side_toggle'),$aside = $('#aside');
    if($side_toggle.is(':visible')){
        $aside.addClass('hide_sty');
    }
    $side_toggle.toggle(function(){
        $aside.attr('class','show_sty');
        $(this).html('&gt;');
    },function(){
        $aside.attr('class','hide_sty');
        $(this).html('&lt;')
    })
    var $toggle_mnu = $('#toggle_mnu'),$nav = $('.nav');
    if($nav.is(':hidden')){
        $toggle_mnu.show();
    }
    $toggle_mnu.toggle(function(){
        $nav.show();
    },function(){
        $nav.hide();
    });
})