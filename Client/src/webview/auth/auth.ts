import * as alt from "alt-client"
import webViews from "../webviews"
import setPageState from "../function";
import langPack from "../../shared/locale/main";

const authPage = webViews.authPage;

/*
    在登录页面的临时登录状态，导出为验证是否登录使用。
 */
export let playerTempVar = {
    logged: false, // 默认为未登录
    setLogged: function(state: boolean){ // 设置登录状态
        this.logged = state;
        if (this.logged) setPageState(authPage, false, false, true);
    }
}

// 显示并聚焦authPage页面，同时启用光标和关闭游戏控制。
alt.onServer('auth:client:show', _showAuthPage);
function _showAuthPage() {
    setPageState(authPage, true, true, false);
}

// 关闭并取消聚焦authPage页面，同时关闭光标和启用游戏控制。
alt.onServer('auth:client:close', _destroyAuthPage);
function _destroyAuthPage() {
    setPageState(authPage, false, false, true);
}

authPage.on('auth:client:tryLogin', _tryLogin);
function _tryLogin(username: string, password: string) {
    alt.emitServer('auth:server:tryLogin', alt.Player.local, username, password);
}

// 接收客户端错误密码事件
alt.onServer('auth:client:wrongAuth', _wrongAuth);
function _wrongAuth() {
    alt.emit('auth:webview:wrongAuth', langPack["zh-CN"].wrong_auth);
}

authPage.on('auth:client:tryRegister', _tryRegister);
function _tryRegister(username: string, password: string, email: string) {
    alt.emitServer('auth:server:tryRegister', alt.Player.local, username, password, email);
}