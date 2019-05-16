function clickme() {
	// 获取输入的两个数
	var str1 = document.getElementById("num1");
	var str2 = document.getElementById("num2");
	// 获取输入的符号
	var cal = document.getElementById("cal").value;
	// 将字符串转换为数字
	var istr1 = parseInt(str1.value);
	var istr2 = parseInt(str2.value);
	// 判断转换是否成功
	if (!(isNaN(str1.value)||isNaN(str2.value))) {
		// 根据符号输出结果
		if (cal == '+')
			document.getElementById("num3").value=istr1 + istr2;
		if (cal == '-')
			document.getElementById("num3").value=istr1 - istr2;
		if (cal == '*')
			document.getElementById("num3").value=istr1 * istr2;
		if (cal == '/')
			document.getElementById("num3").value=istr1 / istr2;
	}
	else{
		alert("输入内容格式有误！");
	}




}
