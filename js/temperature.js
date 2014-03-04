function calculate() {
  var result;
  var original = document.getElementById("original");
  var temp = original.value;
  var regexp = /([-+]?\d+(?:\.\d*)?(?:[eE][-+]?\d+)?)\s*([fFcC])/;

  var m = temp.match(regexp);
  
  if (m) {
    var num = temp.match(m[1]);
    var type = temp.match(m[2]);
    num = parseFloat(num);
    if (type == 'c' || type == 'C') {
      result = (num * 9/5)+32;
      result = result.toFixed(2) + ' Farenheit'; // Para que sólo aparezca un decimal
    }
    else {
      result = (num - 32)*5/9;
      result = result.toFixed(2) + ' Celsius'; // Para que sólo aparezca un decimal
    }
    converted.innerHTML = result;
  }
  else {
    converted.innerHTML = "ERROR! Try something like '-4.2C' instead";
  }
}

function stuff () {

	$("span.gap").css("background-color","#9A2EFE");
	$("span.gap").css("color","white");

	$('#sol1').text("original");
	$('#sol2').text("([-+]?\d+(?:\.\d*)?(?:[eE][-+]?\d+)?)\s*([fFcC])");
	$('#sol3').text("regexp");
	$('#sol4').text("temp.match(m[1])");
	$('#sol5').text("temp.match(m[2])");
	$('#sol6').text("result.toFixed(2) + ' Farenheit';");
	$('#sol7').text("result.toFixed(2) + ' Celsius';");
}

function erase () {
	$("span.gap").css("color","black");
	$("span.gap").css("background-color","#D6B64C");
	$("span.gap").text('_______');	
}

window.onload = function() {
	erase();
};