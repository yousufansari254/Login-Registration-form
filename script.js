const warapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup')
const iconClose = document.querySelector('.icon-close')
registerLink.addEventListener('click', ()=> {
    warapper.classList.add('active');
});
loginLink.addEventListener('click', ()=> {
    warapper.classList.remove('active');
});
btnPopup.addEventListener('click', ()=> {
    warapper.classList.add('active-popup');
});
iconClose.addCloseEventListener('click', ()=> {
    warapper.classList.remove('active-popup');
});