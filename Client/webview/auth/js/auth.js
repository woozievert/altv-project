let langPack = undefined;

let localUsername = undefined;
let localPassword = undefined;

document.addEventListener('DOMContentLoaded', (event) => {
    if ('alt' in window) {
        console.log("alt加载完成");

        loginNotify('');
        regNotify('');

        if (localUsername != null && localPassword != null) {
            loginUser.value = localUsername;
            loginPassword.value = localPassword;
        }

        loginButton.addEventListener("click", function() {
            if (loginUser.value.toString() != null && loginPassword.value.toString() != null) {
                alt.emit('auth:client:tryLogin', loginUser.value.toString(), loginPassword.value.toString());
            }
        });

        registerButton.addEventListener("click", function() {
            if (regUser.value.toString() != null && regPassword.value.toString() != null && regEmail.value.toString() != null) {
                if (!isValidUsername(regUser.value.toString())) return regNotify('用户名有误(4-16字符,可含字母，数字，下划线，减号)');
                else if (!isValidPassword(regPassword.value.toString())) return regNotify('密码有误(6-20字符,包含至少1个大、小写字母、数字)');
                else if (!isValidEmail(regEmail.value.toString())) return regNotify('邮箱格式有误！');
                alt.emit('auth:client:tryRegister', regUser.value.toString(), regPassword.value.toString(), regEmail.value.toString());
            }
        });

        checkBox.addEventListener("change", function () {
            if (this.checked) {
                if (loginUser.value.toString() != null && loginPassword.value.toString() != null) {
                    alt.emit('auth:client:saveLocalAuth', loginUser.value.toString(), loginPassword.value.toString());
                }
            } else {
                alt.emit('auth:client:deleteLocalAuth');
            }
        });

        // alt.on('auth:webview:importLangPack', importLangPack);
        // function importLangPack(data) {
        //     console.log('已加载')
        //     langPack = data;
        //     console.log(langPack);
        // }

        alt.on('auth:webview:getLocalAuth', _getLocalAuth);
        function _getLocalAuth(username, password) {
            localUsername = username;
            localPassword = password;
        }

        alt.on('auth:webview:wrongAuth', loginNotify);
        alt.on('auth:webview:alreadyExist', regNotify);
        alt.on('auth:webview:finishReg', regNotify);
    }
});

function isValidEmail(email) {
    // 邮箱正则表达式
    const emailRegex = /^[A-Za-zd]+([-_.][A-Za-zd]+)*@([A-Za-zd]+[-.])+[A-Za-zd]{2,5}$/;
    return emailRegex.test(email);
}

function isValidUsername(username) {
    const usernameRegex = /^[a-zA-Z0-9_-]{4,16}$/;
    return usernameRegex.test(username);
}

function isValidPassword(password) {
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
    return passwordRegex.test(password);
}