import * as alt from "alt-client"
import webViews from "../webviews"
import setPageState from "../function";

const authPage = webViews.authPage;
const localUsername = alt.LocalStorage.get('username');
const localPassword = alt.LocalStorage.get('password');

/*
    在登录页面的临时登录状态，导出为验证是否登录使用。
*/
export let playerTempVar = {
    logged: false, // 默认为未登录
    setLogged: function(state: boolean) { this.logged = state; }
}

// 显示并聚焦authPage页面，同时启用光标和关闭游戏控制。
alt.onServer('auth:client:show', _showAuthPage);
function _showAuthPage() {
    setPageState(authPage, true, true, false);
    if (localUsername != null && localPassword != null) {
        authPage.emit('auth:webview:getLocalAuth', localUsername, localPassword);
    }
}

// 关闭并取消聚焦authPage页面，同时关闭光标和启用游戏控制。
alt.onServer('auth:client:close', _destroyAuthPage);
function _destroyAuthPage(finishLogin: boolean = false) {
    if (finishLogin) setPageState(authPage, false, false, true);
    playerTempVar.setLogged(true);
    //todo 需要添加一个参数，用以验证是否是登录完成，但暂时是给予了登录状态。并且更换名称为finishLogin
}

authPage.on('auth:client:tryLogin', _tryLogin);
function _tryLogin(username: string, password: string) {
    console.log('_tryLogin:' + username + " - " + password)
    alt.emitServer('auth:server:tryLogin', username, password);
}

authPage.on('auth:client:saveLocalAuth', _saveLocalAuth);
function _saveLocalAuth(username: string, password: string) {
    alt.LocalStorage.set("username", username); // 设置本地存储键值
    alt.LocalStorage.set("password", password);
    alt.LocalStorage.save(); // 保存本地存储
}

authPage.on('auth:client:deleteLocalAuth', _deleteLocalAuth);
function _deleteLocalAuth() {
    alt.LocalStorage.delete("username"); // 设置本地存储键值
    alt.LocalStorage.delete("password");
    alt.LocalStorage.save(); // 保存本地存储
}

// 接收客户端错误密码事件
alt.onServer('auth:client:wrongAuth', _wrongAuth);
function _wrongAuth() {
    // alt.emit('auth:webview:wrongAuth', langPack["zh-CN"].wrong_auth);
}

authPage.on('auth:client:tryRegister', _tryRegister);
function _tryRegister(username: string, password: string, email: string) {
    alt.emitServer('auth:server:tryRegister', alt.Player.local, username, password, email);
}

alt.onServer('auth:client:alreadyExist', _alreadyExist);
function _alreadyExist() {
    // alt.emit('auth:webview:alreadyExist', langPack["zh-CN"].already_exist);
}

alt.onServer('auth:client:finishReg', _finishReg);
function _finishReg() {
    // alt.emit('auth:webview:finishReg', langPack["zh-CN"].finish_reg);
}