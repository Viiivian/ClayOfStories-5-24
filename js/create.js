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
            // 註冊成功，建立用戶資料
            const user = userCredential.user;
            user.updateProfile({
                displayName: `${firstName} ${lastName}`
            }).then(() => {
                // 取得用戶名稱
                alert(`親愛的 ${firstName}，恭喜註冊成功!`);
                window.location.href = './login.html';
            }).catch((error) => {
                alert('註冊失敗', error);
            });
        })
        .catch((error) => {
           // 註冊失敗，顯示原因
            if(error.message==="Firebase: The email address is already in use by another account. (auth/email-already-in-use)."){
                alert('註冊失敗: 該信箱已被註冊!');
            }else{
                alert('註冊失敗: 請確實填寫資料!');
            }
            
        });
});