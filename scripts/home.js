import {blurFunction} from "../services/blurFunction.js";
import { validateEmail,validatePassword } from "../services/validation.js";
// aquiring html nodes
const emailInpt = document.getElementById('emailsec');
const passwordInpt = document.getElementById('passwordsec');
const submitForm = document.querySelector('form');
const errorsDivEmail = document.getElementsByClassName('errors-sec')[0];
const errorsDivPassword = document.getElementsByClassName('errors-sec')[1];
const button = document.querySelector('button');
// nodes for modal part 
const emailInptModal = document.getElementById('emailsecModal');
const forgotPasswordForm = document.querySelector('.forgot-form');
const errorsDivModal = document.getElementsByClassName('errors-sec')[2];
// submit form func
submitForm.addEventListener('submit', (event) => {
    event.preventDefault();
    !validateEmail(emailInpt.value) && !validatePassword(passwordInpt.value) ? alert('something seems to be invalid')
    :console.log(emailInpt.id==='emailsec');
})

forgotPasswordForm.addEventListener('submit' , (e)=>{
    e.preventDefault();
    // !validateEmail(emailInptModal.value)?alert('oops seems like email is wrong')
    // :console.log(emailInptModal.value);
    console.log(errorsDivModal);

})

// validation inputs
emailInpt.addEventListener('blur',(e)=> blurFunction(e,errorsDivEmail,'email is required' , 'email is not valid'));
passwordInpt.addEventListener('blur' ,(e)=> blurFunction(e,errorsDivPassword, 'password is required' , 'password is not valid'));
emailInptModal.addEventListener('blur' , (e)=> blurFunction(e,errorsDivModal,'a valid email is required' , 'email is not valid'));
