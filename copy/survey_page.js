let arr = [ "Multiple Choice", "Dropdown", "Checkbox", "Matrix/Rating Scale",
		"Star Rating", "Ranking", "Single Textbox", "Slider", "Comment Box",
		"Multiple Textbox", "Matrix of Dropdown menus", "Date/Time" ];

let answerDataArr = [{
	"answer_list_name" : "Agree - Disagree",
	"list" : ["Strongly agree","Agree","Somewhat agree","Neither agree nor disagree","Somewhat disagree","Disagree","Strongly disagree"],
	"max_count": 7
},
{
	"answer_list_name" : "Satisfied - Dissatisfied",
	"list":["Very satisfied","Satisfied","Somewhat satisfied","Neither satisfied nor dissatisfied","Somewhat dissatisfied","Dissatisfied","Very dissatisfied"],
	"max_count" : 7
},
{
	"answer_list_name" : "Yes - No",
	"list":["Yes","No"],
	"max_count" : 2
},
{
	"answer_list_name" : "Likely - Unlikely",
	"list":["Very likely", "Likely","Somewhat likely","Neither likely nor unlikely","Somewhat unlikely","Unlikely","Very unlikely"],
	"max_count" : 7
},
{
	"answer_list_name" : "Familiar - Not familiar",
	"list":["Extremely familiar","Very familiar","Somewhat familiar","Not so familiar","Not at all familiar"],
	"max_count" : 5
},
{
	"answer_list_name" : "Yes - No",
	"list":["Yes","No"],
	"max_count" : 2
}];

function loadQuestionTypeDpdn() {
	
	$("#questionTypeDpdn").parent().children(".dropdown-menu").empty()
	arr.forEach(function(data){
		$("#questionTypeDpdn").parent().children(".dropdown-menu").append('<li><div class="dropdown-item" onclick="selectQuestionType(this);">'+data+'</div></li>')
	})
}

function loadAnswerTypeDpdn () {
	$("#answerTypeDpdn").parent().children(".dropdown-menu").empty()
	answerDataArr.forEach(function(obj){
		let data  = obj["answer_list_name"];
		$("#answerTypeDpdn").parent().children(".dropdown-menu").append('<li><div class="dropdown-item" onclick="selectQuestionType(this);">'+data+'</div></li>')
	})
}


function selectQuestionType(pthis){
	$("#questionTypeDpdn").text(pthis.textContent);
}

$(document).ready(function(){
	loadQuestionTypeDpdn();
	loadAnswerTypeDpdn();
});