

if (localStorage.getItem('Session')) {
    window.addEventListener('DOMContentLoaded', function () {
        var userName = document.querySelector('#userName');
        userName.innerHTML += JSON.parse(localStorage.getItem('Session'));
    })


}
else {
    window.location.replace('pages/signin.html')
}
window.addEventListener('DOMContentLoaded', function () {
    var logoutBtn = document.getElementById('logoutBtn');
    logoutBtn.addEventListener('click', function () {
        logout();
    })
}
)
function logout() {
    window.location.replace('pages/signin.html')
}
