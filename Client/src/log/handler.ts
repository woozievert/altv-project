import * as alt from "alt-client"
import * as logger from "./logger";

alt.onServer('client:Console', handleLogConsole);

function handleLogConsole(msg: string) {
    logger.info('[服务端日志] ' + msg);
}