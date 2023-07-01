import * as alt from "alt-client"
import langPack from "../../shared/locale/langService";
import * as notify from "../notify/main";
import webView from "../model";
import {Vector3} from "alt-shared";

export const authPage: webView = new webView('登录注册页面', 'http://resource/Client/webview/auth/index.html');

const localUsername = alt.LocalStorage.get('username');
const localPassword = alt.LocalStorage.get('password');

const infoNotify = notify.green; // 简写
/*
    在登录页面的临时登录状态，导出为验证是否登录使用。
*/

export let playerTempVar = {
    logged: false, // 默认为未登录
    setLogged: async function (state: boolean) {
        this.logged = state;
        await infoNotify(langPack('login.success'));
    }
}

// 显示并聚焦authPage页面，同时启用光标和关闭游戏控制。
alt.onServer('auth:client:show', _showAuthPage);
async function _showAuthPage() {
    const result = await authPage.showWithFocus();
    if (!result) return;
    if (!authPage.page) return;
    const markerTest = new alt.Marker(alt.MarkerType.MarkerNum1, new alt.Vector3(alt.Player.local.pos), alt.RGBA.red);
    setTimeout(async function (){
        await authPage.gameCursor(true);
        if (await authPage.gameControl(true))
        {
            console.log('control:' + alt.gameControlsEnabled());
            if (localUsername != null && localPassword != null) {
                await authPage.emitSync('auth:webview:getLocalAuth', localUsername, localPassword);
            }
            await authPage.on('auth:client:tryLogin', _tryLogin);
            await authPage.on('auth:client:saveLocalAuth', _saveLocalAuth);
            await authPage.on('auth:client:deleteLocalAuth', _deleteLocalAuth);
            await authPage.on('auth:client:tryRegister', _tryRegister);
        }
    }, 5000);
}

async function _tryLogin(username: string, password: string) {
    alt.emitServer('auth:server:tryLogin', username, password);
}

async function _tryRegister(username: string, password: string, email: string) {
    alt.emitServer('auth:server:tryRegister', username, password, email);
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
        await authPage.emitSync('auth:webview:clearForm');
        if (await authPage.destroy(true)) {
            console.log('control:' + alt.gameControlsEnabled());
        }
    }
    await playerTempVar.setLogged(true);
}

// 接收客户端错误密码事件
alt.onServer('auth:client:wrongAuth', _wrongAuth);
async function _wrongAuth() {
    if (!authPage.page) return;
    await authPage.emitSync('auth:webview:wrongAuth', langPack('login.error.wrong_pass'));
}

alt.onServer('auth:client:alreadyExist', _alreadyExist);
async function _alreadyExist() {
    if (!authPage.page) return;
    await authPage.emitSync('auth:webview:alreadyExist', langPack('reg.already_exist'));
}

alt.onServer('auth:client:finishReg', _finishReg);
async function _finishReg() {
    if (!authPage.page) return;
    await authPage.emitSync('auth:webview:finishReg', langPack('reg.finish'));
}