document.addEventListener('DOMContentLoaded', (event) => {
    if ('alt' in window) {
        console.log("alt加载完成");
        document.querySelector(".notify").textContent = '密码错误';
        loginButton.addEventListener("click", function() {
            if (loginUser != null && loginPassword != null) {
                alt.emit('auth:client:tryLogin', loginUser.value.toString(), loginPassword.value.toString());
            }
        });
        registerButton.addEventListener("click", function() {
            if (regUser != null && regPassword != null && regEmail != null) {
                if (isValidEmail(regEmail.toString())) return regNotify('输入的邮箱有误！');
                alt.emit('auth:client:tryRegister', regUser.value.toString(), regPassword.value.toString(), regEmail.value.toString());
            }
        });
        alt.on('auth:webview:wrongAuth', loginNotify);
    }
});

function isValidEmail(email) {
    // 邮箱正则表达式
    const emailRegex = /^[A-Za-zd]+([-_.][A-Za-zd]+)*@([A-Za-zd]+[-.])+[A-Za-zd]{2,5}$/;
    return emailRegex.test(email);
}
