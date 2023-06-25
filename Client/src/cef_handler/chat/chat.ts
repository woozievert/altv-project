import * as alt from "alt-client";
import webViews from "../webviews";

const chatPage = webViews.chatPage;

let chatBuffer: { name: string; text: string; }[] = [];
let chatLoaded: boolean = false;
let chatOpened: boolean = false;

function addMessage(name: string, text: string) {
    if (name) {
        chatPage.emit("chat:webview:addMessage", name, text);
    } else {
        chatPage.emit("chat:webview:addString", text);
    }
}

chatPage.on("chat:webview:loaded", () => {
    // 处理buffer的消息
    for (const msg of chatBuffer) {
        addMessage(msg.name, msg.text);
    }

    chatLoaded = true;
});

chatPage.on("chat:webview:submitMessage", (text) => {
    console.log('收到:' + text);

    alt.emitServer('chat:server:addMessage', text);

    chatOpened = false;
    alt.toggleGameControls(true);
    chatPage.unfocus();
});

// 主要推送消息函数
export function pushMessage(name: any, text: string) {
    if (!chatLoaded) {
        // 稍后处理
        let buffer = { name, text };
        chatBuffer.push(buffer);
    } else {
        addMessage(name, text);
    }
}

// 主要推送消息之单纯一行
export function pushLine(text: string) {
    pushMessage(null, text);
}

alt.onServer("chat:client:addMessage", pushMessage);

alt.on("keyup", (key: alt.KeyCode) => {
    if (chatLoaded) {
        if (!chatOpened && key === 0x54 && alt.gameControlsEnabled()) {
            chatOpened = true;
            chatPage.emit("chat:webview:open", false); // boolean 参数是 是否带斜杠开始
            alt.toggleGameControls(false);
            chatPage.focus();
        } else if (!chatOpened && key === 0xbf && alt.gameControlsEnabled()) {
            chatOpened = true;
            chatPage.emit("chat:webview:open", true);
            alt.toggleGameControls(false);
            chatPage.focus();
        } else if (chatOpened && key == 0x1b) {
            chatOpened = false;
            chatPage.emit("chat:webview:close");
            alt.toggleGameControls(true);
            chatPage.unfocus();
        }
    }
});

pushLine("<b>已连接alt:V项目</b>");
