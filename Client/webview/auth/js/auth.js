let who_in_window = 'alt';

const localesData = loadLocales().catch(error => {
    console.error('加载 json 失败:', error);
});

document.addEventListener('DOMContentLoaded', async (event) => {
    if (html_dev) who_in_window = 'html_dev';
    if (`${who_in_window}` in window) {
        const locales = await localesData;
        initLocales().catch(error => {
            console.error('初始化语言失败:', error);
        });

        console.log(`${who_in_window}加载完成`);

        loginNotify('');
        regNotify('');

        loginInputType.addEventListener("click", function () {
            if (loginPassword.type === "password") loginPassword.type = "text";
            else loginPassword.type = "password";
        });

        regInputType.addEventListener("click", function () {
            if (regPassword.type === "password") regPassword.type = "text";
            else regPassword.type = "password";
        });

        verInputType.addEventListener("click", function () {
            if (verPassword.type === "password") verPassword.type = "text";
            else verPassword.type = "password";
        });

        toggleReg.addEventListener("click", function () {
            if (current_page === 'login') {
                current_page = 'register';

                hideElement(loginForm);
                displayElement(registerForm);
                formTitle.textContent = "注册窗口";
                toggleLogin.textContent = "返回登录";
            }
        });

        toggleLogin.addEventListener("click", function () {
            if (current_page === 'register') {
                current_page = 'login';

                displayElement(loginForm);
                hideElement(registerForm);
                formTitle.textContent = "登录窗口";
                toggleReg.textContent = "创建一个账号";
            }
        });

        loginButton.addEventListener("click", function () {
            if (loginUser.value.toString() != null && loginPassword.value.toString() != null) {
                alt.emit('auth:client:tryLogin', loginUser.value.toString(), loginPassword.value.toString());
            }
        });

        await hideElement(regEmailType);
        regEmail.addEventListener("keyup", function () {
            if (regEmail.value.toString() === '') hideElement(regEmailType);
            else displayElement(regEmailType);

            if (!isValidEmail(regEmail.value.toString())) {
                displayElement(regEmailType);
                regNotify('邮箱格式有误！');
            } else {
                regNotify('');
                hideElement(regEmailType);
            }
        });

        regUser.addEventListener("keyup", function () {
            if (!isValidUsername(regUser.value.toString())) regNotify('用户名有误(4-16字符,可含字母，数字，下划线，减号)');
            else regNotify('');
        });

        verPassword.addEventListener("keyup", function () {
            if (!isValidPassword(verPassword.value.toString())) regNotify('密码有误(6-20字符,包含至少1个大、小写字母、数字)');
            else {
                if (verPassword.value.toString() !== regPassword.value.toString()) {
                    regNotify('两次密码不一致！');
                } else regNotify('');
            }
        });

        registerButton.addEventListener("click", function () {
            if (regUser.value.toString() != null && regPassword.value.toString() != null && regEmail.value.toString() != null) {
                if (!isValidUsername(regUser.value.toString())) return regNotify('用户名有误(4-16字符,可含字母，数字，下划线，减号)');
                else if (!isValidPassword(regPassword.value.toString())) return regNotify('密码有误(6-20字符,包含至少1个大、小写字母、数字)');
                else if (!isValidEmail(regEmail.value.toString())) return regNotify('邮箱格式有误！');
                alt.emit('auth:client:tryRegister', regUser.value.toString(), regPassword.value.toString(), regEmail.value.toString());
            }
        });

        newsImg.addEventListener('click', function () {
            hideElement(loginForm);
            hideElement(registerForm);
            hideElement(newsForm);
            bigImg.setAttribute("src", newsImg.src);
            displayElement(bigImgDiv);
        });

        bigImg.addEventListener('click', function () {
            if (current_page === 'login') displayElement(loginForm);
            else displayElement(registerForm);
            displayElement(newsForm);
            bigImg.setAttribute("src", '');
            hideElement(bigImgDiv);
        });

        checkBox.addEventListener("change", function () {
            if (this.checked) {
                if (loginUser.value.toString() != null && loginPassword.value.toString() != null) {
                    alt.emit('auth:client:saveLocalAuth', loginUser.value.toString(), loginPassword.value.toString());
                }
            } else alt.emit('auth:client:deleteLocalAuth');
        });

        async function initLocales() {
            formTitle.textContent = locales['login.text.title'];
            placeUser.textContent = locales['login.place.user'];
            placePass.textContent = locales['login.place.pass'];
            savePass.textContent = locales['login.input.save_pass'];
            loginButton.value = locales['login.button.submit'];
            otherLogin.textContent = locales['login.text.other'];
            noAccount.textContent = locales['login.text.no_account'];
            toggleReg.textContent = locales['login.link.register'];
            loginForgetPass.textContent = locales['login.link.forget_pass'];

            setTimeout(finishBuild, _getRandomTick());
        }

        alt.on('auth:webview:getLocalAuth', _getLocalAuth);
        alt.on('auth:webview:wrongAuth', loginNotify);
        alt.on('auth:webview:alreadyExist', regNotify);
        alt.on('auth:webview:finishReg', regNotify);
    }
});

function _getRandomTick() {
    const min = 3;
    const max = 7.5;
    const decimalOptions = [0, 0.5];

    const randomNumber = Math.random() * (max - min) + min;
    const decimalPart = decimalOptions[Math.floor(Math.random() * decimalOptions.length)];

    return (Math.floor(randomNumber) + decimalPart) * 1000;
}

async function displayElement(element) {
    element.classList.remove('hidden');
    element.visibility = '';
}

async function hideElement(element) {
    element.classList.add('hidden');
}

async function finishBuild() {
    await hideElement(loader);
    await displayElement(copyright);
    await displayElement(loginForm);
    await displayElement(newsDiv);
}

async function loadLocales() {
    const response = await fetch('../../../locales/zh_hans.json');
    return await response.json();
}

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

function _getLocalAuth(username, password) {
    loginUser.value = username;
    loginPassword.value = password;
    checkBox.checked = true;
}