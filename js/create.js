const firebaseConfig = {
    apiKey: "AIzaSyCtpbXYwmNqsx7ffFFhA6I9hYFjDbs6UsI",
    authDomain: "clayofstories.firebaseapp.com",
    projectId: "clayofstories",
    storageBucket: "clayofstories.appspot.com",
    messagingSenderId: "481158061383",
    appId: "1:481158061383:web:fa342f66dfe5e8f4e58062"
};
firebase.initializeApp(firebaseConfig);

const register = document.getElementById('register');
// 註冊事件
register.addEventListener('click', (e) => {
    e.preventDefault();
    const firstName = document.getElementById('firstname').value;
    const lastName = document.getElementById('lastname').value;
    const email = document.getElementById('emailaddress').value;
    const password = document.getElementById('password').value;
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // 獲取新創建的用戶
            const user = userCredential.user;
            // 更新名稱
            user.updateProfile({
                displayName: `${firstName} ${lastName}`
            }).then(() => {
                alert(`親愛的 ${firstName}，恭喜註冊成功!`);
                window.location.href = './login.html';
            }).catch((error) => {
                alert('註冊失敗', error);
            });
        })
        .catch((error) => {
            // 註冊失敗
            alert('註冊失敗: ' + error.message);
        });
});