function validation(){
    var firstname=document.form1.firstname.value;
    var firstname1=document.form1.firstname;
    var phonenumber=document.form1.phonenumber.value;
    var email=document.form1.email.value;
    var password=document.form1.password.value;
    var confirmpassword=document.form1.confirmpassword.value;
    var regex=/[A-Z]/;
    var regexuser=/AWB/;
    var regexphone=/^[6-9][0-9]{9}$/
    var regexemail=/^([a-z 0-9\.-]+)@([a-z0-9-]+).([a-z]+)?$/
    var regexpassword=/^((?=.*[A-Z])(?=.*[a-z])(?=.*[@#!%&$])(?=.*\d).{6,20})$/
    if(firstname==""){
        alert("Please Enter Name");
    }
    if(!regex.test(firstname)){
        alert("please enter valid firstname");
        return false;
    }
    else{
        alert("Valid Name")
    }
    if(phonenumber==""){
        alert(" Please Enter MobileNumber");
    }
    if(!regexphone.test(phonenumber)){
        alert("please enter correct format")
        return false;
    }
    else{
        alert("Correct MobileNumber")
    }
    if(email==""){
        alert("Please Enter Email");
    }
    if(!regexemail.test(email)){
        alert("Please Enter Valid Format of Email");
        return false;
    }
    else{
        alert("Valid Email");
    }
    if(password.length<6){
        alert("Password must contain 6 characters");
    }
    if(!regexpassword.test(password)){
        alert("plaese enter valid password must contain upper case lower case numbers special characters");
        return false
    }
    else{
        alert("vaild passsword")
    }
    if(confirmpassword==password){
        alert("valid password")
    }
    else{
        alert("password not matched")
    }


}
   
   
    
