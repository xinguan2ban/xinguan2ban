function regcheck(){
	
	var phonenumber=document.getElementById("phonenumber").value;
	var phonenumbers=document.getElementById("phonenumber").value.toString();
	if(isNaN(phonenumber)){
		alert("输入的电话号码不是数字");
		window.location.href="index.html";
	}
	if(phonenumbers.length!=11){
		alert("电话号码不是11位");
		window.location.href="index.html";
	}
	
	
	
	
	
}