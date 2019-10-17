var nameA=document.getElementById("nameForm");
var email=document.getElementById("emailForm");
var sdt=document.getElementById("sdtForm");
var button=document.getElementById("clickForm");
var nameError=document.getElementById("errorName");
var emailError=document.getElementById("errorEmail");
var errorSdt=document.getElementById("errorSdt");
function check(){
	if(nameA.value==""){
		nameError.innerHTML="* Tên không được để trống";
	}else{
		nameError.innerHTML="";
	}
	if(email.value==""){
		emailError.innerHTML="*Email không được để trống";
	}
	else{
		var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/; 
		if (!filter.test(email.value)) { 
			emailError.innerHTML="*Email không đúng định dạng";
		}else{
			emailError.innerHTML="";
		}
	}
	
	if(sdt.value==""){
		errorSdt.innerHTML="*sdt không được để trống";
	}else{

		var filter=/^([0-0])+([0-9])+$/;
		if (!filter.test(sdt.value)) { 
			errorSdt.innerHTML="*Sdt không đúng định dạng";
		}else{
			if(sdt.value.length<8){
			errorSdt.innerHTML="*Sdt phải lớn hơn 8 ký tự";
			}else{
				errorSdt.innerHTML="";
			}
			
		}
	}
	if(nameError.innerHTML ==""  && emailError.innerHTML=="" && errorSdt.innerHTML==""){
		alert('ĐĂNG KÝ THÀNH CÔNG \n'+"Tên:"+ nameA.value+'\n'+"Email:"+email.value+'\n'+"Phone:"+sdt.value);
	}
}
 // button.addEventListener('click',check);