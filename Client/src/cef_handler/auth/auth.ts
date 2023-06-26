import * as alt from "alt-client"
import langPack from "../../shared/locale/langService";
import * as notify from "../notify/notify";
import webView from "../model";

const authPage: webView = new webView('登录注册页面', 'http://resource/Client/webview/auth/index.html', true, true, true);

const localUsername = alt.LocalStorage.get('username');
const localPassword = alt.LocalStorage.get('password');

const infoNotify = notify.green; // 简写
/*
    在登录页面的临时登录状态，导出为验证是否登录使用。
*/

export let playerTempVar = {
    logged: false, // 默认为未登录
    setLogged: function(state: boolean) {
        this.logged = state;
        infoNotify(langPack('login.success'));
    }
}

// 显示并聚焦authPage页面，同时启用光标和关闭游戏控制。
alt.onServer('auth:client:show', _showAuthPage);
async function _showAuthPage() {
    const result = await authPage.show();
    if (!result) return;
    if (!authPage.page) return;
    if (localUsername != null && localPassword != null) {
        authPage.page.emit('auth:webview:getLocalAuth', localUsername, localPassword);
    }
    authPage.page.on('auth:client:tryLogin', _tryLogin);
    authPage.page.on('auth:client:saveLocalAuth', _saveLocalAuth);
    authPage.page.on('auth:client:deleteLocalAuth', _deleteLocalAuth);
    authPage.page.on('auth:client:tryRegister', _tryRegister);
}

function _tryLogin(username: string, password: string) {
    console.log('_tryLogin:' + username + " - " + password)
    alt.emitServer('auth:server:tryLogin', username, password);
}

function _saveLocalAuth(username: string, password: string) {
    alt.LocalStorage.set("username", username); // 设置本地存储键值
    alt.LocalStorage.set("password", password);
    alt.LocalStorage.save(); // 保存本地存储
}

function _deleteLocalAuth() {
    alt.LocalStorage.delete("username"); // 设置本地存储键值
    alt.LocalStorage.delete("password");
    alt.LocalStorage.save(); // 保存本地存储
}

alt.onServer('auth:client:close', _destroyAuthPage);
async function _destroyAuthPage(finishLogin: boolean = false) {
    if (!authPage.page) return;
    if (finishLogin) {
        authPage.page.emit('auth:webview:clearForm');
        await authPage.destroy(true);
    }
    playerTempVar.setLogged(true);
}

// 接收客户端错误密码事件
alt.onServer('auth:client:wrongAuth', _wrongAuth);
function _wrongAuth() {
    if (!authPage.page) return;
    authPage.page.emit('auth:webview:wrongAuth', langPack('login.error.wrong_pass'));
}

function _tryRegister(username: string, password: string, email: string) {
    alt.emitServer('auth:server:tryRegister', username, password, email);
}

alt.onServer('auth:client:alreadyExist', _alreadyExist);
function _alreadyExist() {
    if (!authPage.page) return;
    authPage.page.emit('auth:webview:alreadyExist', langPack('reg.already_exist'));
}

alt.onServer('auth:client:finishReg', _finishReg);
function _finishReg() {
    if (!authPage.page) return;
    authPage.page.emit('auth:webview:finishReg', langPack('reg.finish'));
}