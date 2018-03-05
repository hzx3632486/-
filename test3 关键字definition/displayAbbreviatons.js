function displayAbbreviatons(){
	if(!document.getElementsByTagName) return false;
	if(!document.createElement) return false;
	if(!document.createTextNode) return false;//浏览器测试
	var abbreviations = document.getElementsByTagName("abbr");//获得缩略语
	if(abbreviations.length < 1) return false;
	var defs = new Array();
	for(var i=0;i<abbreviations.length;i++){//遍历获得的缩略语
	    var current_abbr = abbreviations[i];
		var definition = current_abbr.getAttribute("title");
		var key = current_abbr.lastChild.nodeValue;
		defs[key] = definition;
		/*defs[abbreviations[i].lastChild.nodeValue] = abbreviations[i].getAttribute("title");*/
	}
	var dlist = document.createElement("dl");//创建列表
	for(key in defs){//遍历定义
		var definition = defs[key];
		var dtitle = document.createElement("dt");//创建标题
		var dtitle_text = document.createTextNode(key);
		dtitle.appendChild(dtitle_text);
		var ddesc = document.createElement("dd");//创建描述
		var ddesc_text = document.createTextNode(definition);
		ddesc.appendChild(ddesc_text);
		dlist.appendChild(dtitle);//添加到定义列表
		dlist.appendChild(ddesc);
	}
	if(dlist.childNodes.length < 1) return false;
	var header = document.createElement("h2");//创建标题
	var header_text = document.createTextNode("definition");
	header.appendChild(header_text);
	document.body.appendChild(header);//把标题添加到页面主体
	document.body.appendChild(dlist);//把定义列表添加到页面主体
}
addLoadEvent(displayAbbreviatons);

