function addLoadEvent(func){
	var oldonload = window.onload;
	if(typeof window.onload != 'function'){
		window.onload = func;
	}else{
		window.onload = function(){
			oldonload;
			func();
		}
	}
}

function showPic(whichpic)
{
	if(!document.getElementById("placeholder")) return false;
	var source = whichpic.getAttribute("href");//获得图片属性
	var placeholder = document.getElementById("placeholder");//获得占位符
	if(placeholder.nodeName !="IMG") return false;
	placeholder.setAttribute("src",source);//更新占位符
	if(document.getElementById("description")){
	  var text = whichpic.getAttribute("title") ? whichpic.getAttribute("title"):"";
	  var description = document.getElementById("description");
	  if(description.firstChild.nodeType == 3){
	  description.childNodes[0].nodeValue = text; //firstChild等价于childNodes[0]
	  }
	}
	return true;
}

function prepareGallery(){
	if(!document.getElementsByTagName) return false;
	if(!document.getElementById) return false;
	if(!document.getElementById("imagegallery"));
	var gallery = document.getElementById("imagegallery");
	var links = gallery.getElementsByTagName("a");
	for(var i=0;i<links.length;i++){
		links[i].onclick = function(){
			return showPic(this) ? false : true;
		}
	links[i].onkeypress = links[i].onclick;
	}
}

addLoadEvent(prepareGallery);





