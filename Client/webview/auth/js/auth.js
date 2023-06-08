document.addEventListener('DOMContentLoaded', (event) => {
    if ('alt' in window) {
        console.log("alt加载完成");
        loginButton.addEventListener("click", function() {
            if (loginUser != null && loginPassword != null) {
                alt.emit('auth:client:tryLogin', loginUser.value.toString(), loginPassword.value.toString());
                console.log("发送登录请求");
            }
        });
    }
});