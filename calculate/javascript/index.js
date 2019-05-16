
document.getElementById("btn").onclick=function(){
                   
        var a=parseFloat(document.getElementById('num1').value);
        var b=parseFloat(document.getElementById('num2').value);
        var k=document.getElementById('cal').value;
        console.log(a,b,k);
                switch(k){
                    case "1":
                        document.getElementById('result').value=a+b;
                        break;
                    case "2":
                        document.getElementById('result').value=a-b;
                        break;
                    case "3":
                        document.getElementById('result').value=a*b;
                        break;
                    case "4":
                        if(b==0){
                            alert("除数不能为0");
                            return;
                        }
                        else{
                            document.getElementById('result').value=a/b;
                        }
                        break;
                }
            }