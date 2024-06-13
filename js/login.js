document.addEventListener('DOMContentLoaded', function() {
    const passwordField = document.getElementById('password');
    const togglePassword = document.getElementById('toggle-password');
    const leftHand = document.getElementById('lefthand');
    const rightHand = document.getElementById('righthand');

    passwordField.addEventListener('focus', () => {
        leftHand.classList.add('rotate');
        rightHand.classList.add('rotate-right');
    });

    passwordField.addEventListener('blur', () => {
        leftHand.classList.remove('rotate');
        rightHand.classList.remove('rotate-right');
    });

    // togglePassword.addEventListener('click', function() {
    //     const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
    //     passwordField.setAttribute('type', type);

    //     if (type === 'password') {
    //         togglePassword.setAttribute('src', '../imagesAll/images/eye-off.png');
    //         togglePassword.setAttribute('src', '../imagesAll/images/eye.png'); 
    //     }
    // });
});
