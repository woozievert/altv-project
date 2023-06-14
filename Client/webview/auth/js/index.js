const loginInputType = document.querySelector(".login-password-btn");
const regInputType = document.querySelector(".reg-password-btn");
const regEmailType = document.querySelector(".reg-email-btn");
const verInputType = document.querySelector(".ver-password-btn");
const loginUser = document.querySelector('#usernameInput');
const loginPassword = document.querySelector('#passwordInput');
const loginButton = document.querySelector('.login-button');
const toggleReg = document.querySelector("#toggle-reg"); // 切换至注册
const toggleLogin = document.querySelector("#toggle-login"); // 切换至登录
const loginForm = document.querySelector("#login-form"); // 登录窗口
const registerForm = document.querySelector("#reg-form"); // 注册窗口
const formTitle = document.querySelector("#form-title"); // 窗口标题
const placeUser = document.querySelector("#form-username"); // 用户名 placeholder
const placePass = document.querySelector("#form-password"); // 密码 placeholder
const savePass = document.querySelector("#save-password"); // 记住密码
const otherLogin = document.querySelector("#other-login"); // 其他方式登录
const noAccount = document.querySelector("#no-account"); // 还没有账号？
const loginForgetPass = document.querySelector("#login-forget-pass"); // 还没有账号？
const regUser = document.querySelector('#regUsernameInput');
const regPassword = document.querySelector('#regPasswordInput');
const verPassword = document.querySelector('#verPasswordInput');
const regEmail = document.querySelector('#regEmailInput');
const registerButton = document.querySelector(".reg-button");
const checkBox = document.querySelector(".save-info");
const newsDiv = document.querySelector(".news-div");
const newsForm = document.querySelector(".news-form");
const newsImg = document.querySelector(".news-img");
const bigImgDiv = document.querySelector(".big-image-div");
const bigImg = document.querySelector(".big-image");

const loader = document.querySelector('.loader');
const copyright = document.querySelector('.copyright');

var html_dev = true;
var current_page = 'login';

