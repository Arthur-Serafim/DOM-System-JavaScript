var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
	return input.value.length;
}

function createListElement(){
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value="";
}

function addListElementAfterClick() {
   if(inputLength() > 0) {
   	createListElement()
   }
}

function addListElementAfterKeypress() {
	  if(inputLength() > 0 && event.which === 13) {
   	createListElement()
   }
}


button.addEventListener("click",addListElementAfterClick);
input.addEventListener("keypress",addListElementAfterKeypress);





































