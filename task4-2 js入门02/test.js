
var aqiData = [
  ["北京", 90],
  ["上海", 50],
  ["福州", 10],
  ["广州", 50],
  ["成都", 90],
  ["西安", 100]
];

//新手写法
/*var elem = function(id) {
	return document.getElementById(id);
}

var validData = [];
for (var i = 0; i < aqiData.length; i++) {
	if(aqiData[i][1]>60){
	  validData.push(aqiData[i]);
	}
}

var temp=0;
for (var i = 0; i < validData.length-1; i++)
  {
  for(var j = i+1; j < validData.length; j++)
    {
	if(validData[i][1] < validData[j][1]){
       temp = validData[i][1];
       validData[i][1] = validData[j][1];
       validData[j][1] = temp;
	}
  }
}
var p = elem("aqi-list");
var chinese = ["一","二","三","四","五","六"];
for (var i = 0; i < validData.length; i++) {
	var list = document.createElement('li');
	list.innerHTML = '第'+chinese[i]+'名:'+validData[i][0]+validData[i][1];
    p.appendChild(list);
}*/

var elem = function(id) {
	return document.getElementById(id);
}

var validData = aqiData.filter(function(t){
	return t[1] > 60;
}).sort(function(a,b){
	return a[1]<b[1];
})

var p = elem("aqi-list");
var chinese = ["一","二","三","四","五","六"];
for (var i = 0; i < validData.length; i++) {
	var list = document.createElement('li');
	list.innerHTML = '第'+chinese[i]+'名:'+validData[i][0]+validData[i][1];
    p.appendChild(list);
}
