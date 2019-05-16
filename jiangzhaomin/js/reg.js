function regcheck(){
	
	var phonenumber=document.getElementById("phonenumber").value;
	var phonenumbers=document.getElementById("phonenumber").value.toString();
	if(isNaN(phonenumber)){
		alert("输入的电话号不是纯数字!");
		window.location.href="index.html";
	}
	if(phonenumbers.length!=11){
		alert("电话号码位数不对1");
		window.location.href="index.html";
	}
	
	
	
	
	
}