$(document).ready(function() {
//$("#contact").click(function() {
//	$('html, body').animate({
//    scrollTop: ($("#contact_footer").first().offset().top)
//},500);
	//var new_position = $(".footer").position;
	//$(window).scrollTo(new_position.left,new_position.bottom);
	//return false;/
//});


//$("#contact_footer").click(function(){
	//$("#panel").slideDown("slow");
//});

$("#contact_footer").click(function(){
	$("#panel").toggle();
	$('html, body').animate({
		scrollTop: $(document).height()},
		1400,
		"swing"
	)
});

$(".submit").click(function(){
	alert("Thank you, your information has been processed!")
});

});
