
// step 1 :add click event handler with the submit button 
document.getElementById('btn-submit').addEventListener('click',function(){
//  console.log('submit button clicked');
    //steps 2: get the email address inside the email input field
    const emailField = document.getElementById('user-email');
    const email =emailField.value;
    // step3: get password
    // 3.a: set id on the html element
    // 3.b: get the element
    // 3.c:get the value from the element
 const passwordField = document.getElementById('user-pass');
 const password= passwordField.value; 
//  console.log(email, password);
// donot varify email password on the clint side
// step4: verify email and password
 if(email==='amit@gmail.com' && password ==='secret'){
    window.location.href='bank.html';
     console.log('valid user') 
 }
     
     else{
    console.log('invalid user please enter your privet email and password');
 }
})