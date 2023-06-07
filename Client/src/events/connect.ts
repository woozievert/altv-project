import * as alt from "alt-client"
import * as native from "natives"
import langPack from "../shared/locale/main";

alt.on('playerConnect', onClientConnect);

alt.onServer('TestClientside', (playerName: string) => {
    const joinMessage = langPack["zh-CN"].join_server(playerName);
    alt.log(joinMessage);
});

function onClientConnect(player: alt.Player) {
    alt.log('test');
    const joinMessage = langPack["zh-CN"].join_server(player.name);
    alt.log(joinMessage);
    console.log(joinMessage);
}