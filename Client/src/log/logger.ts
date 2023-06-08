import * as alt from "alt-client"

export function info(msg: string) {
    alt.log('~g~' + msg)
}

export function warn(msg: string) {
    alt.log('~y~' + msg)
}

export function debug(msg: string) {
    alt.log('~y~' + msg)
}

export function error(msg: string) {
    alt.log('~lr~' + msg)
}