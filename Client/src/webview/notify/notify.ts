import * as alt from "alt-client"
import webViews from "../webviews";

const notifyPage = webViews.notifyPage;

export function info(text: string) {
    alt.emit('notify:webview:send', 'info', '提示', text);
}

export function green(text: string) {
    alt.emit('notify:webview:send', 'good', '信息', text);
}

export function error(text: string) {
    alt.emit('notify:webview:send', 'error', '错误', text);
}

// 通知系统客户端调用事件，准确来说web用: alt.emit('notify:server:send', 'info', '服务端来的消息，注意查收。');
alt.on('notify:client:send', (type: string, text: string) => {
    if (type == 'info') info(text);
    else if (type == 'green') green(text);
    else if (type == 'error') error(text);
});

// 通知系统服务端调用事件: player.Emit('notify:server:send', 'info', '服务端来的消息，注意查收。');
alt.onServer('notify:server:send', (type: string, text: string) => {
    if (type == 'info') info(text);
    else if (type == 'green') green(text);
    else if (type == 'error') error(text);
});