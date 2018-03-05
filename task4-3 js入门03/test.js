/**
 * getData方法
 * 读取id为source的列表，获取其中城市名字及城市对应的空气质量
 * 返回一个数组，格式见函数中示例
 */
function getData() {
  /*
  data = [
    ["北京", 90],
    ["北京", 90]
    ……
  ]
  */
  var data = [];
  var ul = document.getElementById("source");
  for(var i = 0; i < ul.childElementCount;i++){
  	var li = ul.children[i];
  	var strCity = li.innerHTML.split("空气质量：")[0];
  	var num = Number(li.children[0].innerHTML);
  	data.push([strCity,num]);
  }
  return data;
}

/**
 * sortAqiData
 * 按空气质量对data进行从小到大的排序
 * 返回一个排序后的数组
 */
function sortAqiData(data) {
  data.sort(function(a,b){
  	return a[1]>b[1];
  })
  return data;
}

/**
 * render
 * 将排好序的城市及空气质量指数，输出显示到id位resort的列表中
 * 格式见ul中的注释的部分
 */
function render(data) {
   var ul = document.getElementById("resort");
   var items = "";
   for (var i = 0; i < data.length; i++) {
        var aqiData = data[i];
        items += '<li>第' + (i + 1) + '名' + aqiData[0] + '空气质量：<b>' + aqiData[1] + '</b></li>';
    }
    ul.innerHTML = items;
}

function btnHandle() {
  var aqiData = getData();
  aqiData = sortAqiData(aqiData);
  render(aqiData);
}


function init() {// 在这下面给sort-btn绑定一个点击事件，点击时触发btnHandle函数
   var button = document.getElementById("sort-btn");
   button.onclick = btnHandle;
}

init();
