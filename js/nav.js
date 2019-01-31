$('document').ready(function(){
	
	$('body').on('click' , '#inv-nav-main-btn' , function(){
		if($('#inv-nav-main-btn').hasClass('is-active')){
			$('#inv-nav-mask').remove();
			$('#inv-nav-main-btn').removeClass('is-active');
			$('#inv-menu').removeClass('menu-show');
		} else {

			$('body').append('<div id="inv-nav-mask"></div>');
			$('#inv-nav-main-btn').addClass('is-active');
			$('#inv-menu').addClass('menu-show');
		}
	});
	$('body').on('click' , '#inv-nav-mask' , function(){
		$('#inv-nav-mask').remove();
		$('#inv-nav-main-btn').removeClass('is-active');
		$('#inv-menu').removeClass('menu-show');
	});
	
	checkAffix();
	$(window).scroll(checkAffix);
	
});

function checkAffix(){
	if($(window).scrollTop() > 45){
		$('#header').addClass('header-affix');
	} else {
		$('#header').removeClass('header-affix');
	}
}