import * as alt from "alt-client"
import webView from "../model";

const notifyPage = new webView('消息通知', 'http://resource/Client/webview/notify/index.html');

alt.onServer('notify:client:init', init);
async function init(){
    const result = await notifyPage.showWithoutFocus();
    if (!result) return;
    if (!notifyPage.page) return;
}

export async function info(text: string) {
    if (!notifyPage.page) return;
    await notifyPage.emitSync('notify:webview:send', 'info', '提示', text);
}

export async function green(text: string) {
    if (!notifyPage.page) return;
    await notifyPage.emitSync('notify:webview:send', 'good', '信息', text);
}

export async function error(text: string) {
    if (!notifyPage.page) return;
    await notifyPage.emitSync('notify:webview:send', 'error', '错误', text);
}

// 通知系统客户端调用事件，准确来说web用: alt.emit('notify:server:send', 'info', '服务端来的消息，注意查收。');
alt.on('notify:client:send', async (type: string, text: string) => {
    if (type == 'info') await info(text);
    else if (type == 'green') await green(text);
    else if (type == 'error') await error(text);
});

// 通知系统服务端调用事件: player.Emit('notify:server:send', 'info', '服务端来的消息，注意查收。');
alt.onServer('notify:server:send', async (type: string, text: string) => {
    if (type == 'info') await info(text);
    else if (type == 'green') await green(text);
    else if (type == 'error') await error(text);
});