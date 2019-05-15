function clickme(){
	
	 var one = document.all.one.value;

   　　　　var two= document.all.two.value;

   　　　　var s=document.all.suanfa.value;

   　　　　var z;

  　　　　 switch(s){

   　　　　 case "+":                     
                  z=parseFloat(one)+parseFloat(two);break;

    　　　　case "-":

　　　　　　　　　　z=parseFloat(one)-parseFloat(two);break;

   　　　　 case"*":
                   z=parseFloat(one)*parseFloat(two);break;

    　　　　case"%":
                   z=parseFloat(one)%parseFloat(two);break;

}

   　　　　　　document.getElementById("result").value=z;

 

  　　　　　　
   }

