import * as alt from "alt-client"
import * as logger from "../log/logger";
import DEV_MODE from "../config";

/*
    设置网页状态(可显示，关闭/操作光标，游戏控制)
*/
export default function setPageState(page: alt.WebView, state: boolean, cursor: boolean, control: boolean) {
    if (DEV_MODE) {
        const debug_msg = 'page: ' + page + ' - state -> ' + state + ' cursor -> ' + cursor + ' control -> ' + control;
        logger.debug(debug_msg);
    }
    setPageFocus(page, state); // 聚焦/摧毁页面
    alt.showCursor(state); // 页面显示鼠标光标(state);
    alt.toggleGameControls(state); // 页面时游戏控制(state);
}

function setPageFocus(page: alt.WebView, state: boolean) {
    if (DEV_MODE) {
        const debug_msg = 'page: ' + page + ' - focus_state -> ' + state;
        logger.debug(debug_msg);
    }
    if (state) page.focus();
    else destroyPage(page); // 销毁 'webview' 页面
}

function destroyPage(page: alt.WebView) {
    if (DEV_MODE) {
        const debug_msg = 'page: ' + page + ' has destroyed';
        logger.debug(debug_msg);
    }
    page.unfocus();
    page.destroy();
}