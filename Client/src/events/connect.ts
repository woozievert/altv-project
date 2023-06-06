import * as alt from "alt-client"
import * as native from "natives"
import langPack from "../shared/locale/main";

alt.on('playerConnect', onClientConnect);

function onClientConnect() {
    const joinMessage = langPack["zh-CN"].join_server('大哥');
    alt.log(joinMessage);
    console.log(joinMessage);
}