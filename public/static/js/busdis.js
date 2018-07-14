$(function(){
	// 搜索弹出层
	$('.address').click(function(){
		$('.active').removeClass('active')
		$(this).addClass('active')
		$('.filter-wrapper').removeClass('hidden')
	})
	
	// 关闭弹出层
	$('.close').click(function(){
		$('.filter-wrapper').addClass('hidden')
	})
})