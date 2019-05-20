function count() {
				var a = document.getElementById("num1").value;
				var b = document.getElementById("num2").value;
				//获取第一个输入框的值
				//获取第二个输入框的值
				//获取选择框的值
				var c = document.getElementById("select").value;
				a = parseFloat(a);
				b = parseFloat(b);
				//获取通过下拉框来选择的值来改变加减乘除的运算法则
				//设置结果输入框的值 
				switch(c) {
					case "+":
						document.getElementById("fruit").value = parseInt(a) + parseInt(b);
						break;
					case "-":
						document.getElementById("fruit").value = parseInt(a) - parseInt(b);
						break;
					case "×":
						document.getElementById("fruit").value = parseInt(a) * parseInt(b);
						break;
					case "÷":
						document.getElementById("fruit").value = parseInt(a) / parseInt(b);
						break;
				}
			}