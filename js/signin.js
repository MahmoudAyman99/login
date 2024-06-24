var signEmail = document.querySelector('#signEmail');
var signPassword = document.querySelector('#signPassword');
var signBtn = document.querySelector('#signBtn');
var errorMessage = document.querySelector('#errorMessage');
var userData = [];

if (!localStorage.getItem('data')){
  localStorage.setItem('data' ,JSON.stringify(userData));
}
else{
  userData =JSON.parse(localStorage.getItem('data'));
}



signBtn.addEventListener('click' , function(){
  if (signPassword.classList.contains('is-invalid') || signEmail.classList.contains('is-invalid')|| signEmail.value == '' || signPassword.value == ''){
    errorMessage.innerHTML ='Please enter valid data';
  }
  
  else{
    errorMessage.innerHTML ='';
    login();
  }
  
})
function login (){
  var signData ={
    signEmail : signEmail.value,
    signPassword : signPassword.value
  }
  for(var user of userData){
    console.log(user)
    if(user.signEmail.toLowerCase() == signEmail.value.toLowerCase()){
        if(user.signPassword === signPassword.value){
          
            localStorage.setItem('Session',JSON.stringify(user.signName))
            window.location.replace('../index.html')
            return;
        }
        else{
            errorMessage.innerHTML = 'Your password or email is incorrect';
            return;
        }
        
      
    }
  }
  errorMessage.innerHTML = 'You don’t have account you must create one first';
  clear();
}


function clear(){
  signPassword.value = null;
  signEmail.value = null;
}




// Validation to login

function validatsignPassword(){
  var regex1 = /\w{8}$/;
  if (regex1.test(signPassword.value)){
    
    signPassword.classList.remove('is-invalid');
  }
  else {
    signPassword.classList.add('is-invalid');
  }
}
signPassword.addEventListener("keyup", function()
{
  validatsignPassword();
})
function validatsignEmail(){
  var regex1 = /^[a-zA-Z._-]+@[a-zA-Z]+\.[a-zA-Z]{2,}$/;
  if (regex1.test(signEmail.value)){
    
    signEmail.classList.remove('is-invalid');
  }
  else {
    signEmail.classList.add('is-invalid');
  }
}
signEmail.addEventListener("keyup", function()
{
  validatsignEmail();
})

