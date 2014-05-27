// Prior to this, the window would be at the same position even when the new view was loaded.
$(function() {
	$('a').on('click', function () {
	 $('body').scrollTop(0);
	});
});