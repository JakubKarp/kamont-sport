/*skrypt rolling scroll		
	<script src="https://code.jquery.com/jquery-3.0.0.min.js" integrity="sha256-JmvOoLtYsmqlsWxa7mDSLMwa6dZ9rrIdtrrVYRnDRH0=" crossorigin="anonymous"></script>	

//scrollTo#
 $('amenu').click(function() {
  var href = $(this).attr("href");
     $('html, body').animate({
        scrollTop: $(href).offset().top
     }, 500);
    return false;
});*/









jQuery(document).ready(function($){
/*menu toggle*/
    $('.menu-btn').click(function() {
        $('#ulmenu').toggle();
        
    });
    
/*scroll to section*/    
    $('.amenu').click(function() {
    var href = $(this).attr("href");
     $('html, body').animate({
        scrollTop: $(href).offset().top
     }, 800);
    return false;
});
    
    
/* scroll-up button */    
    // browser window scroll (in pixels) after which the "back to top" link is shown
	var offset = 200,
		//browser window scroll (in pixels) after which the "back to top" link opacity is reduced
		offset_opacity = 1200,
		//duration of the top scrolling animation (in ms)
		scroll_top_duration = 700,
		//grab the "back to top" link
		$back_to_top = $('.cd-top');

	//hide or show the "back to top" link
	$(window).scroll(function(){
		( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
		if( $(this).scrollTop() > offset_opacity ) { 
			$back_to_top.addClass('cd-fade-out');
		}
	});

	//smooth scroll to top
	$back_to_top.on('click', function(event){
		event.preventDefault();
		$('body,html').animate({
			scrollTop: 0 ,
		 	}, scroll_top_duration
		);
	});

});