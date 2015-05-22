

var clock = function (){
var d = new Date();
	document.getElementById("demo").innerHTML = d.toLocaleTimeString();
	var t = setTimeout(function(){clock()}, 500);
};
