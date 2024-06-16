$(document).ready(function() {
    $('#loginBtn').click(function(e) {
        e.preventDefault();
        const username = $('#username').val();
        const password = $('#password').val();

        if (username === 'admin' && password === '123456') {
            sessionStorage.setItem('username', username);
            sessionStorage.setItem('loggedIn', 'true'); // 设置登录状态
            alert('登录成功！');
            window.location.href = 'index.html'; // 登录成功后跳转到index.html
        } else {
            alert('用户名或密码错误');
        }
    });

    $('#resetBtn').click(function(e) {
        e.preventDefault();
        $('#username').val('');
        $('#password').val('');
    });
});
