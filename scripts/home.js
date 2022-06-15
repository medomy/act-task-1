import {blurFunction} from "../services/blurFunction.js";
import { validateEmail,validatePassword } from "../services/validation.js";
// aquiring html nodes
const emailInpt = document.getElementById('emailsec');
const passwordInpt = document.getElementById('passwordsec');
const submitForm = document.querySelector('form');
const errorsDivEmail = document.getElementsByClassName('errors-sec')[0];
const errorsDivPassword = document.getElementsByClassName('errors-sec')[1];
const button = document.querySelector('button');
// submit form func
submitForm.addEventListener('submit', (event) => {
    event.preventDefault();
    !validateEmail(emailInpt.value) && !validatePassword(passwordInpt.value) ? alert('something seems to be invalid')
    :console.log(emailInpt.id==='emailsec');

    
})

// validation inputs
emailInpt.addEventListener('blur',(e)=> blurFunction(e,errorsDivEmail,'email is required' , 'email is not valid'));
passwordInpt.addEventListener('blur' ,(e)=> blurFunction(e,errorsDivPassword, 'password is required' , 'password is not valid'));

