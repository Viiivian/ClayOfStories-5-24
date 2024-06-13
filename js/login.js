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
                    const user = userCredential.user;
                    const displayName = user.displayName || "User";
                    alert(`Dear ${displayName}, Welcome Back!`);
                    window.location.href = './membership.html';
                })
                .catch((error) => {
                    alert('登入失敗: 您的帳號密碼有誤，請再確認!');
                });
        });

