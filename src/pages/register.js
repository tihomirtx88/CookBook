
import * as api from '../api.js';
import { updateAuth, saveUser } from '../auth.js';


const registerSection = document.querySelector('.register');
const registerForm = registerSection.querySelector(`form`);

registerForm.addEventListener(`submit`, (ev) => {
    ev.preventDefault();
    let formData = new FormData(ev.currentTarget);
    const email = formData.get(`email`);
    const password = formData.get(`password`);
    const repassword = formData.get(`rePass`);

    api.register(email, password, repassword)
        .then(user => {
            saveUser(user);
            updateAuth();
            alert('successfuly register');
        });
});

export function renderRegister() {
    registerSection.style.display = 'block';

}