

function loginValid(){
    var e =document.loginform.email.value;
    var p =document.loginform.password.value;   
    
    if(e.indexOf('@')<=0){
        document.getElementById("login_error").innerHTML="Invalid email";
        document.getElementById("login_error").style.color="red";
        return false;
    }
    if(e=='sankey901@solution.com' && p=='mindset' ){
       return true;
    }
    if(e!='sankey901@solution.com'){
        document.getElementById("login_error").innerHTML="Invalid email";
        document.getElementById("login_error").style.color="red";
        return false;
    }
    if(e!='sankey901@solution.com'&& p!='mindset'){
        document.getElementById("login_error").innerHTML="Invalid email";
        document.getElementById("login_error").style.color="red";
        return false;
    }
    if(p=='mindset' ){
        return true;
    }
    if(p!='mindset' ){
        document.getElementById("login_error").innerHTML="Invalid password";
        document.getElementById("login_error").style.color="red";
        return false;
     }
}






