function validateForm() {
    const usernameinp = document.getElementsByName('username')[0];
    const passwordinp = document.getElementsByName('password')[0];    
    
    let messages = [];
    
    const username = usernameinp.value.trim();
    const password = passwordinp.value.trim();

    if(username === "") {
        alert('Username is Required and cannot be blank');
        return false;
    }

    if(password === "") {
        alert('Password is Required and cannot be blank');
        return false;
    }

    // if(messages.length < 5) {
    //     console.log("Validation failed:", messages);
    //     return false;
    // } check

    return true;
}

function validateRegForm(){
    const usernameinp = document.getElementsByName('username')[0];
    const passwordinp = document.getElementsByName('password')[0];
    const emailinp = document.getElementsByName('email')[0];
    const conpasswordinp = document.getElementsByName('conpassword')[0];

    let messages = [];

    const username = usernameinp.value.trim();
    const password = passwordinp.value.trim();
    const email = emailinp.value.trim();
    const conpassword = conpasswordinp.value.trim();

    if(username === "") {
        alert('Username is Required and cannot be blank');
        return false;
    }
    if(username.length < 5 || username.length > 15) {
        alert('Username must be between 5-15 characters');
        return false;
    }     
    if(email === "") {
        alert('Email is Required and cannot be blank');
        return false;
    }   
    if(!email.endsWith("@binus.ac.id")) {
        alert('Email must end with "@binus.ac.id"');
        return false;
    }
    if(password === ""){
        alert('Password is Required and cannot be blank');
        return false;
    }
    if(password.length < 5 || password.length > 30) {
        alert('Password must be between 5-30 characters');
        return false;
    }
    if (!password.match(/[a-z]/) || !password.match(/[A-Z]/) || !password.match(/[0-9]/)) {
        alert('Password must contain both upper and lowercase letters and at least one number');
        return false;
    }
    if(conpassword === "") {
        alert('Confirm Password is Required and cannot be blank');
        return false;
    }
    if(password !== conpassword) {
        alert('Passwords do not match');
        return false;
    }

    return true;
}
