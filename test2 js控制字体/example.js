/*function insertParagraph(text){
	var str = "<p>";
	str += text;
	str += "</p>"
	document.write(str);
}*/

/*window.onload = function(){
	var testdiv = document.getElementById("testdiv");
    alert(testdiv.innerHTML);
}*/

/*window.onload = function(){
	var testdiv = document.getElementById("testdiv");
	alert(testdiv.innerHTML);
	testdiv.innerHTML = "<p>I inserted <em>this</em> content.</p>";
}*/

/*window.onload = function(){
	var para = document.createElement("p");
	var testdiv = document.getElementById("testdiv");
	testdiv.appendChild(para);
	var txt = document.createTextNode("hello world");
	para.appendChild(txt);
}*/

/*window.onload = function(){
	var para = document.createElement("p");
	var txt = document.createTextNode("hello world");
	para.appendChild(txt);
	var testdiv = document.getElementById("testdiv");
	testdiv.appendChild(para);
}*/

window.onload = function(){
	var para = document.createElement("p");
	var txt1 = document.createTextNode("This is ");
	para.appendChild(txt1);
	var emphasis = document.createElement("em");
	var txt2 = document.createTextNode("my");
	emphasis.appendChild(txt2);
	para.appendChild(emphasis);
	var txt3 = document.createTextNode(" content.");
	para.appendChild(txt3);
	var testdiv = document.getElementById("testdiv");
	testdiv.appendChild(para);
}