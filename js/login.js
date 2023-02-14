//step-1:addEventListener with submit button;
document.getElementById('submit-btn').addEventListener('click',function(){
    // console.log('submit btn clicked');
    //step-2:get the email address inside the email field;
    //always remember that to get input field value use .value;
    const emailField=document.getElementById('user-email');
    const email = emailField.value;
    // console.log(email);
    //step-3:get password;
    const passwordField=document.getElementById('user-password');
    const password=passwordField.value;
    // console.log(password);
    if(email === "enahaque79@gmail.com" && password === "enahaque79"){
        console.log('valid user');
    }else{
        console.log('invalid user!!');
    }

});
