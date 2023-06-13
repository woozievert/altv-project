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
const regUser = document.querySelector('#regUsernameInput');
const regPassword = document.querySelector('#regPasswordInput');
const verPassword = document.querySelector('#verPasswordInput');
const regEmail = document.querySelector('#regEmailInput');
const registerButton = document.querySelector(".reg-button");
const checkBox = document.querySelector(".save-info");
const newsForm = document.querySelector(".news-form");
const newsImg = document.querySelector(".news-img");
const bigImgDiv = document.querySelector(".big-image-div");
const bigImg = document.querySelector(".big-image");

const locale = document.querySelector("#localeJson").innerHTML;

var html_dev = false;
var current_page = 'login';

