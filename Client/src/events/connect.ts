import * as alt from "alt-client"
import langPack from "../shared/locale/main"
import * as logger from "../log/logger";

alt.onServer('TestClientside', (playerName: string) => {
    const joinMessage = langPack["zh-CN"].join_server(playerName);
    logger.info(joinMessage);
});