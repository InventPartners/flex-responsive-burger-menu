$('document').ready(function(){
	
	$('body').on('click' , '#inv-nav-main-btn' , function(){
		if($('#inv-nav-main-btn').hasClass('is-active')){
			$('#inv-nav-mask').remove();
			$('#inv-nav-main-btn').removeClass('is-active');
			$('#inv-menu').removeClass('menu-show');
		} else {
			
			$('<div id="inv-nav-mask"></div>').click(function() {
				$('#inv-nav-mask').remove();
				$('#inv-nav-main-btn').removeClass('is-active');
				$('#inv-menu').removeClass('menu-show');
			}).appendTo($('body'));			
			
			$('#inv-nav-main-btn').addClass('is-active');
			$('#inv-menu').addClass('menu-show');
		}
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
