import { blurFunction } from "../services/blurFunction.js";
import { languageHome } from "../services/languageHome.js";
import { validateEmail, validatePassword } from "../services/validation.js";
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
// default language
let language = "English";
// submit form func
submitForm.addEventListener('submit', (event) => {
    event.preventDefault();
    !validateEmail(emailInpt.value) && !validatePassword(passwordInpt.value) ? alert('something seems to be invalid')
        : console.log(emailInpt.id === 'emailsec');
})

forgotPasswordForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // !validateEmail(emailInptModal.value)?alert('oops seems like email is wrong')
    // :console.log(emailInptModal.value);
    console.log(errorsDivModal);

})

// language change effects 
document.querySelectorAll('.change-language').forEach((link) => {
    link.addEventListener('click', () => {
        document.querySelector('.active-link').classList.remove('active-link');
        console.log('clicked')
        link.classList.add('active-link');
        const attribute = link.getAttribute('language');
        document.querySelector('html').dir = attribute === 'Arabic' ? 'rtl' : 'ltr';
        language = attribute;
        document.querySelector('.login-wrap h2').textContent =language==="Arabic" ? languageHome.Arabic.title : languageHome.English.title;
        document.querySelector('.login-wrap p').textContent = language==='Arabic' ? languageHome.Arabic.paragraph : languageHome.English.paragraph;
        document.querySelector('.email-label').textContent = language==='Arabic' ? languageHome.Arabic.emailTitle : languageHome.English.emailTitle;
        document.querySelector('.password-label').textContent = language === 'Arabic' ? languageHome.Arabic.passwordTitle : languageHome.English.passwordTitle;
        document.querySelector('.login-wrap .btn-primary').textContent = language === 'Arabic' ? languageHome.Arabic.btnTitle : languageHome.English.btnTitle;
        document.querySelector('.login-wrap .form-check-label p').textContent = language === 'Arabic' ? languageHome.Arabic.checkBoxTitle : languageHome.English.checkBoxTitle;
        document.querySelector('.login-wrap .btn-light').textContent = language === 'Arabic' ? languageHome.Arabic.forgotPasswordTitle : languageHome.English.forgotPasswordTitle;
        document.querySelector('.login-wrap .sign-up-link').textContent = language === 'Arabic' ? languageHome.Arabic.RegisterationTitle : languageHome.English.RegisterationTitle;
        document.querySelector('.modal h5').textContent = language === 'Arabic' ? languageHome.Arabic.forgotPasswordTitle : languageHome.English.forgotPasswordTitle;
        document.querySelector('.modal h4').textContent = language === 'Arabic' ? languageHome.Arabic.modalTitle : languageHome.English.modalTitle;
        document.querySelector('.modal input').textContent = language === 'Arabic' ? languageHome.Arabic.modalEmail : languageHome.English.modalEmail;
        document.querySelector('.modal button').textContent = language === 'Arabic' ? languageHome.Arabic.modalBtn : languageHome.English.modalBtn;
    })
})



// validation inputs
emailInpt.addEventListener('blur', (e) => blurFunction(e, errorsDivEmail, language==='Arabic' ? languageHome.Arabic.emailRequiredValidation : languageHome.English.emailRequiredValidation, language === 'Arabic' ? languageHome.Arabic.emailPatternValidation : languageHome.English.emailPatternValidation));
passwordInpt.addEventListener('blur', (e) => blurFunction(e, errorsDivPassword, language==='Arabic' ? languageHome.Arabic.passwordRequiredValidation : languageHome.English.passwordRequiredValidation, language === 'Arabic' ? languageHome.Arabic.passwordPatternValidation : languageHome.English.passwordPatternValidation));
emailInptModal.addEventListener('blur', (e) => blurFunction(e, errorsDivModal, language==='Arabic' ? languageHome.Arabic.emailRequiredValidation : languageHome.English.emailRequiredValidation, language === 'Arabic' ? languageHome.Arabic.emailPatternValidation : languageHome.English.emailPatternValidation));
