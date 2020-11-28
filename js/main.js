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
 $(".dichvukemtheo .box").click(function(e){
	 $(this).toggleClass("active");
 })
 $(".thongtinxuathoadon .box").click(function(e){
	$(this).toggleClass("active");
})
$(".ghichudonhang .box").click(function(e){
	$(this).toggleClass("active");
})
$(".diachinhanhang .boxship2 .style a").click(function(e){
	$(".bgpopup").show();
	$(".addaddress").show();
})
$(".addaddress .close_popup").click(function(e){
 $(".bgpopup").hide();
 $(".addaddress").hide();
})
$(".bgpopup").click(function(e){
 $(".bgpopup").hide();
 $(".addaddress").hide();
})
$(".choose").click(function(e){
	$(this).parent().toggleClass("active");
})
$(".chinhsua").click(function(e){
	$(".bgpopup").show();
	$(".editaddress").show();
})
$(".editaddress .close_popup").click(function(e){
 $(".bgpopup").hide();
 $(".editaddress").hide();
})
$(".bgpopup").click(function(e){
 $(".bgpopup").hide();
 $(".editaddress").hide();
})
$(".thong_tin_tai_khoan .box").click(function(e){
	$(this).toggleClass("active");
})
$(".themsodienthoai").click(function(e){
	$(".sodienthoai2").css("display","flex");
	$(".themsodienthoai").hide();
	$(".sodienthoai").css("margin-bottom","15px");
})
})