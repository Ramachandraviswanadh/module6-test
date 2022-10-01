function resetFields(){

    document.getElementById('first-name').value=''  
    document.getElementById('last-name').value=''  
    document.getElementById('email').value='' 
    document.getElementById('password').value='' 
    document.getElementById('confirm-password').value=''
    document.getElementById('t-and-c').checked=''
    

    document.getElementById('first-name-valid').style.display = 'none';
    document.getElementById('last-name-valid').style.display = 'none';
    document.getElementById('email-valid').style.display = 'none';
    document.getElementById('password-valid').style.display = 'none';
    document.getElementById('confirm-password-valid').style.display = 'none';
    document.getElementById('tnc-valid').style.display = 'none';
}


function validate() {
    let firstName = document.getElementById('first-name').value;    
    let lastName = document.getElementById('last-name').value;  
    let email = document.getElementById('email').value; 
    let password = document.getElementById('password').value; 
    let confirmPassword = document.getElementById('confirm-password').value;
    let tnc= document.getElementById('t-and-c').checked;
 
    // console.log(firstName);
    // console.log(lastName); 
    // console.log(email);
    // console.log(city,zipCode,tnc);
    // console.log(password.length);

    let error=false

    if(firstName.length >= 3 ) {
        document.getElementById('first-name-valid').style.display = 'block';
        document.getElementById('first-name-invalid').style.display = 'none';
    }
    else {
        error=true
        document.getElementById('first-name-invalid').style.display ='block';
        document.getElementById('first-name-valid').style.display = 'none';

    }

    if(lastName.length >= 3) {
        document.getElementById('last-name-valid').style.display = 'block';
        document.getElementById('last-name-invalid').style.display = 'none';
    }
    else {
        error=true
        document.getElementById('last-name-invalid').style.display ='block';
        document.getElementById('last-name-valid').style.display = 'none';

    }


    if(email.includes("@") && email.includes(".") && email.indexOf("@") >0 && email.lastIndexOf(".") >0 && email.substr(email.lastIndexOf(".")+1).length >=2 ){
        document.getElementById('email-valid').style.display = 'block';
        document.getElementById('email-invalid').style.display = 'none';
    }
    else {
        error=true
        document.getElementById('email-invalid').style.display ='block';
        document.getElementById('email-valid').style.display = 'none';

    }

    if(password.length >= 8 && (password.includes("@") || password.includes("#") || password.includes("$") )&& (password.includes("0") || password.includes("1") || password.includes("2") || password.includes("3") || password.includes("4") ) ) {
        document.getElementById('password-valid').style.display = 'block';
        document.getElementById('password-invalid').style.display = 'none';
    }
    else {
        error=true
        document.getElementById('password-invalid').style.display ='block';
        document.getElementById('password-valid').style.display = 'none';


    }
    if(password === confirmPassword && password !='') {
        document.getElementById('confirm-password-valid').style.display = 'block';
        document.getElementById('confirm-password-invalid').style.display = 'none';
    }
    else {
        error=true
        document.getElementById('confirm-password-invalid').style.display ='block';
        document.getElementById('confirm-password-valid').style.display = 'none';
    }

    if(tnc){
        document.getElementById('tnc-invalid').style.display = 'none';
    }
    else {
        error=true
        document.getElementById('tnc-invalid').style.display = 'block';
    }

if(error === false){
    alert('Your details have been saved successfully')
    resetFields()
}

    
}

