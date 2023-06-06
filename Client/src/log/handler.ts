import * as alt from "alt-client"

alt.onServer('log:Console', handleLogConsole);

function handleLogConsole(msg: string) {
    alt.log('[服务端日志] ' + msg);
}