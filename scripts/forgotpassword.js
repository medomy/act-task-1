import { blurFunction } from "../services/blurFunction.js";
import { validateEmail} from "../services/validation.js";

const emailInpt = document.getElementById('emailsec');
const submitForm = document.querySelector('form');
const errorDiv = document.querySelector('.errors-sec');
// submition
submitForm.addEventListener('submit' , (e)=>{
    e.preventDefault();
    !validateEmail(emailInpt.value)?alert('oops seems like email is wrong')
    :console.log(emailInpt.value);
})

//validate
emailInpt.addEventListener('blur' , (e)=> blurFunction(e,errorDiv,'required email to send password','email is incorrect'));