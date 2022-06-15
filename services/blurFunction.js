import { requiredValidate, validateEmail, validatePassword } from "./validation.js";
export function blurFunction(event,node,requiredText , validateText , ...text){
    node.innerHTML = "";
    const errorP = document.createElement('p');
    errorP.classList.add('text-danger');
    errorP.innerText = '';
    // for email input
    if(event.target.id === 'emailsec'){
        errorP.innerHTML= !requiredValidate(event.target.value)? requiredText
        : !validateEmail(event.target.value)? validateText 
        : '';
        node.append(errorP); 
    }
    // for password input
    else if(event.target.id === 'passwordsec'){
        errorP.innerHTML= !requiredValidate(event.target.value)? requiredText
        : !validatePassword(event.target.value)? validateText 
        : '';
        node.append(errorP); 

    }
    // for first and last name

    else if(event.target.id === 'firstNamesec' || event.target.id === 'lastNamesec'){
        errorP.innerText= !requiredValidate(event.target.value)? requiredText 
        : '';
        node.append(errorP); 
    }
    
    

} 