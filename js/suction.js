$(function() {
	//吸顶条功能
	var top=$(".nav-top").offset().top;
	$(window).on("scroll",function() {
		var scrollTop = $(document).scrollTop();
		if(scrollTop>top) {
			$(".nav-list").css({position: 'fixed',top: 0});
			$(".nav-list").attr('id','nav-list');
			$(".nav-list").children(".nav-header").children('h1').children('img').attr('src','img/pjlogo2.png')
		} else {
			$(".nav-list").css({position: ''});
			$(".nav-list").attr('id','');
			$(".nav-list").children(".nav-header").children('h1').children('img').attr('src','img/pjlogo1.png')
		}
	}) 
})