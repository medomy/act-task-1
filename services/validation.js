// required fields
export const requiredValidate = (input)=>{
    return input?true : false;
}
// Email pattern
export const validateEmail = (inputEmail)=>{
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return emailRegex.test(inputEmail);
}
// username pattern
export const validateUsername = (inputUserName)=>{
    const userNameRegex = /[^A-Za-z0-9]+/;
    return userNameRegex.test(inputUserName);
}
// password pattern
export const validatePassword = (inputPass)=>{
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return passwordRegex.test(inputPass);
}