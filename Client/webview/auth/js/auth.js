document.addEventListener('DOMContentLoaded', (event) => {
    if ('alt' in window) {
        console.log("alt加载完成");
        document.querySelector(".notify").textContent = '密码错误';
        loginButton.addEventListener("click", function() {
            if (loginUser != null && loginPassword != null) {
                alt.emit('auth:client:tryLogin', loginUser.value.toString(), loginPassword.value.toString());
                console.log("发送登录请求");
            }
        });
        alt.on('auth:webview:wrongAuth', _wrongAuth);
        function _wrongAuth() {
            document.querySelector(".notify").textContent = '输入的密码有误！';
        }
    }
});