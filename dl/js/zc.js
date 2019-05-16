function checkUsername(){
	var username=document.getElementById("username").value;
	var length=username.length;
	
	var usernameSpan=document.getElementById("usernameSpan");
	if(length<8||length>14){
		usernameSpan.innerHTML="<font color='red'>请输入合法用户名</font>"
	}else{
		usernameSpan.innerHTML="<font color='blue'>√</font>"
	}
}
function checkPassword(){
	var passwordd=document.getElementById("password").value;
	var length=passwordd.length;
	var passwordSpan=document.getElementById("passwordSpan");
	if(length<8||length>14){
		passwordSpan.innerHTML="<font color='red'>请输入正确的密码格式</font>"
	}else{
		passwordSpan.innerHTML="<font color='blue'>√</font>"
	}
}
