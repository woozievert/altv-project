import * as alt from "alt-client"
import * as native from "natives"
import langPack from "../shared/locale/main";

alt.on('playerConnect', onClientConnect);

function onClientConnect(player: alt.Player) {
    player.spawn(813, -279, 66);

    alt.log('test');
    const joinMessage = langPack["zh-CN"].join_server(player.name);
    alt.log(joinMessage);
    console.log(joinMessage);
}