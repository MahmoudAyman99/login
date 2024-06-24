var signName = document.querySelector('#signName');
var signEmail = document.querySelector('#signEmail');
var signPassword = document.querySelector('#signPassword');
var signBtn = document.querySelector('#signBtn');
var errorMessage = document.querySelector('#errorMessage');
var exist = document.querySelector('#exist');
var errorImg = document.querySelector('#errorImg');
var successImg = document.querySelector('#successImg');
var userData = [];

if (!localStorage.getItem('data')){
  localStorage.setItem('data' ,JSON.stringify(userData));
}
else{
  userData =JSON.parse(localStorage.getItem('data'));
}


signBtn.addEventListener('click' , function(){
  if (signName.classList.contains('is-invalid') || signPassword.classList.contains('is-invalid') || signEmail.classList.contains('is-invalid') || signName.value == '' || signEmail.value == '' || signPassword.value == ''){
    successMessage.innerHTML= ''
    successImg.classList.add('d-none');
    errorMessage.innerHTML ='Please enter valid data';
    errorImg.classList.remove('d-none');
  }
  
  else{
    errorMessage.innerHTML ='';
    errorImg.classList.add('d-none');
    successMessage.innerHTML= 'Success'
    successImg.classList.remove('d-none');
    signUp();
  }
  
})
function signUp (){
  var signData ={
    signName : signName.value ,
    signEmail : signEmail.value,
    signPassword : signPassword.value
  }
  for(var user of userData){
    console.log(user)
    if(user.signEmail.toLowerCase() == signEmail.value.toLowerCase()){
      errorMessage.innerHTML = 'email already exists';
      successMessage.innerHTML= ''
      return;
    }
  }
  userData.push(signData);
  localStorage.setItem('data' ,JSON.stringify(userData));
  clear();
}


function clear(){
  signPassword.value = null;
  signEmail.value = null;
  signName.value = null;
}




// Validation to signUp
function validatsignName(){
  var regex1 = /\w{3}$/;
  if (regex1.test(signName.value)){
    
    signName.classList.remove('is-invalid');
  }
  else {
    signName.classList.add('is-invalid');
  }
}
signName.addEventListener("keyup", function()
{
  validatsignName();
})
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