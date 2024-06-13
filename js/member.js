const firebaseConfig = {
    apiKey: "AIzaSyCtpbXYwmNqsx7ffFFhA6I9hYFjDbs6UsI",
    authDomain: "clayofstories.firebaseapp.com",
    projectId: "clayofstories",
    storageBucket: "clayofstories.appspot.com",
    messagingSenderId: "481158061383",
    appId: "1:481158061383:web:fa342f66dfe5e8f4e58062"
};
firebase.initializeApp(firebaseConfig);

const logoutBtn = document.getElementById('log-out');

logoutBtn.addEventListener('click', () => {
    firebase.auth().signOut().then(() => {
        alert('您已成功登出');
        window.location.href = './login.html';
    }).catch((error) => {
        alert('登出失败: ' + error.message);
    });
});