function check(){ 
	//用户名检查 正确格式："[A-Z][a-z]_[0-9]"组成,并且第一个字必须为字母6~16位；
	var  username= document.getElementById('username').value;
	if(!(/^[a-zA-Z]\w{5,15}$/.test(username))){ 
	    alert("用户名有误，请重填");  
	    return false; 
	} 
	//密码检查 正确格式："[A-Z][a-z]_[0-9]"组成,并且第一个字必须为字母6~16位；
	var  password= document.getElementById('password').value;
	if(!(/^[a-zA-Z]\w{5,15}$/.test(password))){ 
	    alert("密码有误，请重填");  
	    return false; 
	} 
	/*电话号码检查 

^1(3|4|5|7|8)\d{9}$

表示以1开头，第二位可能是3/4/5/7/8等的任意一个，在加上后面的\d表示数字[0-9]的9位，总共加起来11位结束*/
    var phone = document.getElementById('phone').value;
    if(!(/^1[34578]\d{9}$/.test(phone))){ 
        alert("手机号码有误，请重填");  
        return false; 
    } 
	//邮箱地址检查 
	var email=document.getElementById("email").value;
	if(!(/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(email))){ 
	    alert("邮箱地址有误，请重填");  
	    return false; 
	} 
	
}