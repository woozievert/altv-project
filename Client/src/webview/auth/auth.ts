import * as alt from "alt-client"
import webViews from "../webviews"
import setPageState from "../function";
import * as logger from "../../log/logger";

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

alt.onServer('auth:client:show', _showAuthPage);
// 显示并聚焦authPage页面，同时启用光标和关闭游戏控制。
function _showAuthPage() {
    setPageState(authPage, true, true, false);
}

authPage.on('auth:client:tryLogin', (username: string, password: string) => {
    alt.emitServer('auth:server:tryLogin', username, password);
});