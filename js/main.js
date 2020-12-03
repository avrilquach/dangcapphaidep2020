$(document).ready(function () {
	var banner = $('.main-banner');
	banner.owlCarousel({
		items: 1,
		nav: true,
		autoplay: true
	});
	var timkiem = $('.timkiemnhieunhat');
	timkiem.owlCarousel({
		nav: true,
		autoplay: true,
		autoWidth:true,
		item: 6,
	});
	var video = $(".videomoinhat .content");
	video.owlCarousel({
		center: true,
    items:2,
		loop:true,
		nav: true,
		autoplay: true,
	});
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
$(".show-data a").click(function(e){
	$(".hide-data").show();
	$(".show-data").hide();
})
})