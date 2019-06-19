
function createaccount()                                    
{ 
    var firstName = document.forms["RegForm"]["firstName"]; 
    var lastName = document.forms["RegForm"]["lastName"];             
    var email = document.forms["RegForm"]["email"];  
    var email1 = document.forms["RegForm"]["email1"];   
    var phone = document.forms["RegForm"]["phone"];  
    var password = document.forms["RegForm"]["password"];  

    if (firstName.value == "")                                  
    { 
        window.alert("Please enter your First Name."); 
        firstName.focus(); 
        return false; 
    } 
   
    if (lastName.value == "")                               
    { 
        window.alert("Please enter your Last Name."); 
        lastName.focus(); 
        return false; 
    } 
    if (email.value == "")                                   
    { 
        window.alert("Please enter a valid e-mail address."); 
        email.focus(); 
        return false; 
    } 
       
    if (email1.value == "")                                   
    { 
        window.alert("Please enter a valid e-mail comfirm address."); 
        email1.focus(); 
        return false; 
    } 
   
    if (email.value.indexOf("@", 0) < 0)                 
    { 
        window.alert("Please enter a valid e-mail address."); 
        email.focus(); 
        return false; 
    } 
   
    if (email.value.indexOf(".", 0) < 0)                 
    { 
        window.alert("Please enter a valid e-mail address."); 
        email.focus(); 
        return false; 
    } 
   
    if (phone.value == "")                           
    { 
        window.alert("Please enter your telephone number."); 
        phone.focus(); 
        return false; 
    } 
   
    if (password.value == "")                        
    { 
        window.alert("Please enter your password"); 
        password.focus(); 
        return false; 
    } 
   
   
   
    return true; 
}


function login()                                    
{            
    var email = document.forms["RegForm"]["email"];  
    var password = document.forms["RegForm"]["password"];  

    if (email.value == "")                                   
    { 
        window.alert("Please enter a valid e-mail address."); 
        email.focus(); 
        return false; 
    } 
       
    if (password.value == "")                        
    { 
        window.alert("Please enter your password"); 
        password.focus(); 
        return false; 
    } 
   
   
   
    return true; 
}
function reset()                                    
{             
    var cpassword = document.forms["RegForm"]["cpassword"];  
    var npassword = document.forms["RegForm"]["npassword"]; 
    var copassword = document.forms["RegForm"]["copassword"]; 
 
    if (cpassword.value == "")                        
    { 
        window.alert("Please enter your current password"); 
        cpassword.focus(); 
        return false; 
    } 
   
    if (npassword.value == "")                                   
    { 
        window.alert("Please enter your new password"); 
        npassword.focus(); 
        return false; 
    } 

    if (copassword.value == "")                                   
    { 
        window.alert("Please  comfirm your password"); 
        copassword.focus(); 
        return false; 
    } 
       

    return true; 
}