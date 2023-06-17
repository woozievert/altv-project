/*
    所有 webview 集合
*/

import alt from "alt-client";

const webViews = {
    authPage: new alt.WebView('http://resource/Client/webview/auth/index.html'),
    notifyPage: new alt.WebView('http://resource/Client/webview/notify/index.html')
}
export default webViews;