import * as alt from "alt-client"
import webView from "../model";
import {createPedEditCamera, setFov, setZPos} from "./camera";

export const creatorPage: webView = new webView('创建角色页面', 'http://resource/Client/webview/character-creator/index.html');

alt.onServer('charCreator:client:show', _showCharCreator);
async function _showCharCreator() {
    createPedEditCamera();
    setFov(50);
    setZPos(0.6);
    // const res = await creatorPage.showWithFocus();
    // if (!res) return;
    // if (!creatorPage.page) return;
    // setTimeout(async function (){
    //     await creatorPage.gameCursor(true);
    //     if (await creatorPage.gameControl(true))
    //     {
    //     }
    // }, 5000);
}