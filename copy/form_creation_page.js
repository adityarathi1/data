var formType = "";
function navigateFormType(pthis) {
	console.log(pthis);
	formType = pthis.querySelector(".card-title").textContent;
	$("#inputForm").removeClass("sno");
	$("#formTypeRow").addClass("sno");
	$(".page-header").text(formType);
}

function createForm(){
	$("#pageRow").load("/"+formType.toLowerCase()+"_page.html");
}