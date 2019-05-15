function checkPhone(){ 
    var phonenumber = document.getElementById('phonenumber').value;
    if(!(/^1(3|4|5|7|8)\d{9}$/.test(phonenumber))){ 
        alert("手机号码有误，请重填");  
        return false; 
    } 
}