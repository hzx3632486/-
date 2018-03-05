function moveMessage(){
	if(!document.getElementById) return false;
	if(!document.getElementById("message")) return false;
	var elem = document.getElementById("message");
	var xpos = parseInt(elem.style.left);
	var ypos = parseInt(elem.style.top);
	if(xpos == 800 && ypos == 200){
		return true;
	}
	if(xpos < 800){
		xpos++;
	}
	if(ypos > 800){
		ypos--;
	}
	if(ypos < 200){
		ypos++;
	}
	if(ypos > 200){
		ypos--;
	}
	elem.style.left = xpos + "px";
	elem.style.top = ypos + "px";
	movement = setTimeout("moveMessage()",10);
}