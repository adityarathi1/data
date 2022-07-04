$(document).ready(function(){
	setScroller();
	//navigatePage(document.getElementById("form_creation"));
	$('#pageRow').load('/survey'+'_page.html'); 
});


function navigatePage (pthis) {
	let id = pthis.id;
	$("#optionTabs .active").removeClass("active");
	$("#"+id).addClass("active");
	$('#pageRow').load('/'+id+'_page.html'); 
}

function setScroller(){
	let navbar = $("#optionTabs");
    let objDistance = navbar.offset().top;
    $(window).scroll(function() {
        var myDistance = $(window).scrollTop();
        if (myDistance > objDistance){
            navbar.addClass('fixed-top');
        }
        if (objDistance > myDistance){
            navbar.removeClass('fixed-top');
        }
    });
}