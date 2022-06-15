import { blurFunction } from "../services/blurFunction.js";
import { validateEmail,validatePassword,requiredValidate } from "../services/validation.js";
// getting html nodes
const firstNameInpt = document.getElementById('firstNamesec');
const lastNameInpt = document.getElementById('lastNamesec'); 
const emailInpt = document.getElementById('emailsec');
const passwordInpt = document.getElementById('passwordsec');
const submitForm = document.querySelector('form');
const errorsFirstName = document.getElementsByClassName('errors-sec')[0];
const errorsLastName = document.getElementsByClassName('errors-sec')[1];
const errorsDivEmail = document.getElementsByClassName('errors-sec')[2];
const errorsDivPassword = document.getElementsByClassName('errors-sec')[3];
const button = document.querySelector('button');

// form submission

submitForm.addEventListener('submit' , (e)=>{
    e.preventDefault();
    const user = {
        firstName : firstNameInpt.value,
        lastName : lastNameInpt.value,
        password : passwordInpt.value,
        email : emailInpt.value
    }
    !validateEmail(emailInpt.value) && !validatePassword(passwordInpt.value) &&!requiredValidate(firstNameInpt.value) && !requiredValidate(lastNameInpt.value) ? alert('seems that something is wrong'):
    console.log(user);
})

// for blur events on inputs

firstNameInpt.addEventListener('blur' , (e)=>blurFunction(e,errorsFirstName,'first name required' , ''));
lastNameInpt.addEventListener('blur' , (e)=> blurFunction(e,errorsLastName,'last name required' , ''));
emailInpt.addEventListener('blur',(e)=> blurFunction(e,errorsDivEmail,'email is required' , 'email is not valid'));
passwordInpt.addEventListener('blur' ,(e)=> blurFunction(e,errorsDivPassword, 'password is required' , 'password is not valid'));