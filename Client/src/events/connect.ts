import * as alt from "alt-client"
import {langPack} from "../shared/locale/langService";
import * as logger from "../log/logger";

alt.onServer('TestClientside', (playerName: string) => {
    const joinMessage = langPack['server.connect'] + playerName;
    logger.info(joinMessage);
});