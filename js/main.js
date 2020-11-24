$(document).ready(function () {
 $(".do-nicescrol").niceScroll({
	autohidemode: false, 
 });
 $(".san_pham_da_xem_2 .write").click(function(e){
	 $(".bgpopup").show();
	 $(".popup").show();
 })
 $(".popup .close_popup").click(function(e){
	$(".bgpopup").hide();
	$(".popup").hide();
 })
 $(".bgpopup").click(function(e){
	$(".bgpopup").hide();
	$(".popup").hide();
 })
})