$(window).load(function () {
	$('#seo li:nth-of-type(9)').after('<li><a href="#" rel="nofollow" id="show-more">Show More Makes</a></li>');
    $('#seo').append('<li><a href="#" rel="nofollow" id="show-less">Show Less Makes</a></li>')
    $('#seo li:nth-of-type(n+11)').delay(2000).fadeToggle();
    $('#seo2 li:nth-of-type(n+11)').delay(2000).fadeToggle();

    $(document).on('click', '#show-more', function() {
		$('#seo li:nth-of-type(n+11)').fadeToggle();
	})

	$(document).on('click', '#show-less', function() {
		$('#seo li:nth-of-type(n+11)').fadeToggle();
	})
});

