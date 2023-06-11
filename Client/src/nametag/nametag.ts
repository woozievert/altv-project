import * as alt from "alt-client";
import * as native from "natives";
// ---------------- Script ----------------

let drawDistance = 20;

alt.loadRmlFont("/Client/nametag/microsoft.ttf", "microsoft", false, true);
const document = new alt.RmlDocument("/Client/nametag/index.rml");
const container = document.getElementByID("nametag-container");
const nameTags = new Map();
let tickHandle: number;

alt.onServer("nametag:client:setup", (playerID: number, playerName: string) => {
    const rmlElement = document.createElement("button");
    rmlElement.rmlId = playerID.toString();
    rmlElement.innerRML = playerName;
    rmlElement.addClass("nametag");
    rmlElement.addClass("hide");

    let player: alt.Player | null = alt.Player.getByID(playerID);
    if (!player) return;
    if (!player.valid) return;
    nameTags.set(player, rmlElement);
    // @ts-ignore
    container.appendChild(rmlElement);
    rmlElement.on("click", printCoordinates);
    if (tickHandle !== undefined) return;
    tickHandle = alt.everyTick(() => {
        drawMarkers(player);
    });
});

alt.onServer("nametag:client:disconnect", (playerID: number) => {
    let player = alt.Player.getByID(playerID);
    const rmlElement = nameTags.get(player);
    if (rmlElement === undefined) return;

    // @ts-ignore
    container.removeChild(rmlElement);
    rmlElement.destroy();

    if (tickHandle === undefined || nameTags.size > 0) return;
    alt.clearEveryTick(tickHandle);
});

alt.on("keyup", (key) => {
    console.log('keyup');
    if (key !== 46) return;
    console.log('keyup E');
    const currentState = alt.rmlControlsEnabled();
    if (currentState) {
        alt.toggleGameControls(true);
        alt.showCursor(false);
        alt.toggleRmlControls(false);
    } else {
        alt.toggleGameControls(false);
        alt.showCursor(true);
        alt.toggleRmlControls(true);
    }
});

function printCoordinates(rmlElement: alt.RmlElement) {
    const player = alt.Player.getByID(parseInt(rmlElement.rmlId));
    // @ts-ignore
    alt.log("Player Position", "X", player.pos.x, "Y", player.pos.y, "Z", player.pos.z);
}

function drawMarkers(player: alt.Player | null) {
    if (player == null) return;

    const nativePos: alt.IVector3 = { ...native.getPedBoneCoords(player.scriptID, 12844, 0, 0, 0) };
    let pos = nativePos;

    nameTags.forEach((rmlElement, player) => {
        if (!player.valid) return;
        // if (player.scriptID === alt.Player.local.scriptID) return;
        const name = player.getSyncedMeta('playerName');
        if (!name) return;
        let dist = distance2d(player.pos, alt.Player.local.pos);
        if (dist > drawDistance) return;

        if (!native.isSphereVisible(pos.x, pos.y, pos.z, 0.0099999998)) {
            if (!rmlElement.shown) return;

            rmlElement.addClass("hide");
            rmlElement.shown = false;
        } else {
            if (!rmlElement.shown) {
                rmlElement.removeClass("hide");
                rmlElement.shown = true;
            }

            const {x: screenX, y: screenY} = alt.worldToScreen(pos.x, pos.y, pos.z + 0.75);
            rmlElement.style["left"] = `${screenX}px`;
            rmlElement.style["top"] = `${screenY}px`;
        }
    });
}

function distance2d(vector1: alt.Vector3, vector2: alt.Vector3) {
    return Math.sqrt(Math.pow(vector1.x - vector2.x, 2) + Math.pow(vector1.y - vector2.y, 2));
}
