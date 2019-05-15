function count() {
	var a = document.getElementById("num1").value;
	var b = document.getElementById("num2").value;
	var c = document.getElementById("select").value;

	a = parseFloat(a);
	b = parseFloat(b);

	switch(c) {
		case "+":
			document.getElementById("result").value = parseInt(a) + parseInt(b);
			break;
		case "-":
			document.getElementById("result").value = parseInt(a) - parseInt(b);
			break;
		case "*":
			document.getElementById("result").value = parseInt(a) * parseInt(b);
			break;
		case "/":
			if(num2!=0){document.getElementById("result").value = parseInt(a) / parseInt(b);}
			else{alert("除数不为0!");} 
			break;
	}
}
