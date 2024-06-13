// 遮眼睛特效
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
    togglePassword.addEventListener('click', function() {
        const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordField.setAttribute('type', type);

        if (type === 'password') {
            togglePassword.setAttribute('src', '../imagesAll/images/eye-off.png'); // Show icon
        } else {
            togglePassword.setAttribute('src', '../imagesAll/images/eye.png'); // Hide icon (replace with the correct path)
        }
    });
});

// 帳號登入
const firebaseConfig = {
    apiKey: "AIzaSyCtpbXYwmNqsx7ffFFhA6I9hYFjDbs6UsI",
    authDomain: "clayofstories.firebaseapp.com",
    projectId: "clayofstories",
    storageBucket: "clayofstories.appspot.com",
    messagingSenderId: "481158061383",
    appId: "1:481158061383:web:fa342f66dfe5e8f4e58062"
};
firebase.initializeApp(firebaseConfig);

const loginButton = document.getElementById('login');

        // 登入事件
        loginButton.addEventListener('click', (e) => {
            e.preventDefault();
            const email = document.getElementById('emailaddress').value;
            const password = document.getElementById('password').value;
            firebase.auth().signInWithEmailAndPassword(email, password)
                .then((userCredential) => {
                    // 登入成功
                    const user = userCredential.user;
                    const displayName = user.displayName || "User";
                    alert(`Dear ${displayName}, Welcome Back!`);
                    window.location.href = './membership.html';
                })
                .catch((error) => {

                    // 登入失敗
                    if(error.message===" Firebase: An internal AuthError has occurred. (auth/internal-error)."){
                        alert('登入失敗: 請確實填寫資料')
                    }else {
                        alert('登入失敗: 密碼錯誤或該信箱尚未註冊');

                    }
                });
        });

