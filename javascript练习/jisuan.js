function jisuan(){
	var obj1 = document.getElementById("text1").value;
	obj1 = parseFloat(obj1);
	var fh = document.getElementById("fuhao").value;
    var obj2 = document.getElementById("text2").value;
    obj2 = parseFloat(obj2);
    var obj3 = document.getElementById("text3");

    if(fh=="+"){
    	var jieguo = obj1 + obj2;
    }
    else if(fh=="-"){
    	var jieguo = obj1 - obj2;
    }
    else if(fh=="*"){
    	var jieguo = obj1 * obj2;
    }
    else{
    	var jieguo = obj1 / obj2;
    }
    obj3.value = jieguo;
}
 