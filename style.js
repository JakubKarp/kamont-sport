/*skrypt rolling scroll*/		
	<script src="https://code.jquery.com/jquery-3.0.0.min.js" integrity="sha256-JmvOoLtYsmqlsWxa7mDSLMwa6dZ9rrIdtrrVYRnDRH0=" crossorigin="anonymous"></script>	

//scrollTo#
 $('a').click(function() {
  var href = $(this).attr("href");
     $('html, body').animate({
        scrollTop: $(href).offset().top
     }, 500);
    return false;
});