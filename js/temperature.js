function calculate() {
  var result;
  var original = document.getElementById("original");
  var temp = original.value;
  var regexp = /[-+]?\d*\.?\d+([eE][-+]?\d+)?[cCfF]/;
  
  var m = temp.match(regexp);
  
  if (m) {
    var num = temp.match(/[-+]?\d*\.?\d+([eE][-+]?\d+)?/);
    var type = temp.match(/[cCfF]/);
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
	
	document.getElementById('sol1').style.color = '#0101ff';
    //document.getElementById('sol1').style.fontWeight = 'bold';
	document.getElementById('sol2').style.color = '#0101ff';
	document.getElementById('sol3').style.color = '#0101ff';
	document.getElementById('sol4').style.color = '#0101ff';
	document.getElementById('sol5').style.color = '#0101ff';
	document.getElementById('sol6').style.color = '#0101ff';
	document.getElementById('sol7').style.color = '#0101ff';

	document.getElementById("sol1").innerHTML = "original";
	document.getElementById("sol2").innerHTML = "[-+]?\d*\.?\d+([eE][-+]?\d+)?[cCfF]";
	document.getElementById("sol3").innerHTML = "regexp";
	document.getElementById("sol4").innerHTML = "temp.match(/[-+]?\d*\.?\d+([eE][-+]?\d+)?/)";
	document.getElementById("sol5").innerHTML = "temp.match(/[cCfF]/)";
	document.getElementById("sol6").innerHTML = "result.toFixed(2) + ' Farenheit';";
	document.getElementById("sol7").innerHTML = "result.toFixed(2) + ' Celsius';";
	
}

function erase () {
	
	document.getElementById('sol1').style.color = '#000000';
    //document.getElementById('sol1').style.fontWeight = 'bold';
	document.getElementById('sol2').style.color = '#000000';
	document.getElementById('sol3').style.color = '#000000';
	document.getElementById('sol4').style.color = '#000000';
	document.getElementById('sol5').style.color = '#000000';
	document.getElementById('sol6').style.color = '#000000';
	document.getElementById('sol7').style.color = '#000000';

	document.getElementById("sol1").innerHTML = "...........";
	document.getElementById("sol2").innerHTML = "...........";
	document.getElementById("sol3").innerHTML = "...........";
	document.getElementById("sol4").innerHTML = "...........";
	document.getElementById("sol5").innerHTML = "...........";
	document.getElementById("sol6").innerHTML = "...........";
	document.getElementById("sol7").innerHTML = "...........";
	
}