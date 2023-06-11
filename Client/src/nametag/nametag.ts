import * as alt from "alt-client";
import * as native from "natives";
// ---------------- Script ----------------

let drawDistance = 20;

alt.loadRmlFont("/Client/nametag/microsoft.ttf", "microsoft", false, true);
const document = new alt.RmlDocument("/Client/nametag/index.rml");
const container = document.getElementByID("nametag-container");
const nameTags = new Map();
let tickHandle: number = -1;

alt.on("gameEntityCreate", (entity) => {
    const rmlElement = document.createElement("button");
    rmlElement.rmlId = entity.id.toString();
    rmlElement.addClass("nametag");
    rmlElement.addClass("hide");

    if (entity instanceof alt.Player) {
        rmlElement.innerRML = `测试${rmlElement.rmlId}号`;
    }
    else {
        rmlElement.destroy();
        return;
    }

    nameTags.set(entity, rmlElement);
    // @ts-ignore
    container.appendChild(rmlElement);
    rmlElement.on("click", printCoordinates);
    if (tickHandle !== -1) return;
    tickHandle = alt.everyTick(drawMarkers);
});

alt.on("gameEntityDestroy", (entity) => {
    const rmlElement = nameTags.get(entity);
    if (rmlElement === undefined) return;
    // @ts-ignore
    container.removeChild(rmlElement);
    rmlElement.destroy();
    nameTags.delete(entity);

    if (tickHandle === undefined || nameTags.size > 0) return;
    alt.clearEveryTick(tickHandle);
    tickHandle = -1;
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

// function drawMarkers() {
//     nameTags.forEach((rmlElement) => {
//         for (let i = 0, n = alt.Player.all.length; i < n; i++)
//         {
//             console.log('test drawMarkers');
//
//             let player = alt.Player.all[i];
//             if (!player.valid)
//                 continue;
//             if (player.scriptID === alt.Player.local.scriptID)
//                 continue;
//             const name = player.getSyncedMeta('playerName');
//             if (!name)
//                 continue;
//             let dist = distance2d(player.pos, alt.Player.local.pos);
//             if (dist > drawDistance)
//                 continue;
//
//             const nativePos: alt.IVector3 = { ...native.getPedBoneCoords(player.scriptID, 12844, 0, 0, 0) };
//             let pos = nativePos;
//
//             console.log('test drawMarkers sucess');
//
//             if (!native.isSphereVisible(pos.x, pos.y, pos.z, 0.0099999998)) {
//                 if (!rmlElement.shown) return;
//
//                 rmlElement.addClass("hide");
//                 rmlElement.shown = false;
//             } else {
//                 if (!rmlElement.shown) {
//                     rmlElement.removeClass("hide");
//                     rmlElement.shown = true;
//                 }
//
//                 const {x: screenX, y: screenY} = alt.worldToScreen(pos.x, pos.y, pos.z + 0.75);
//                 rmlElement.style["left"] = `${screenX}px`;
//                 rmlElement.style["top"] = `${screenY}px`;
//             }
//         }
//     });
// }

function drawMarkers() {
    nameTags.forEach((rmlElement, entity) => {
        const {x, y, z} = entity.pos;

        if (!entity.valid) return;

        // if (entity.scriptID === alt.Player.local.scriptID) return;

        const name = entity.getSyncedMeta('playerName');
        if (!name) return;

        let dist = distance2d(new alt.Vector3(x, y, z), alt.Player.local.pos);
        if (dist > drawDistance) return;

        if (!native.isSphereVisible(x, y, z, 0.0099999998)) {
            if (!rmlElement.shown) return;
            rmlElement.addClass("hide");
            rmlElement.shown = false;
        } else {
            if (!rmlElement.shown) {
                rmlElement.removeClass("hide");
                rmlElement.shown = true;
            }

            const {x: screenX, y: screenY} = alt.worldToScreen(x, y, z + 0.75);
            rmlElement.style["left"] = `${screenX}px`;
            rmlElement.style["top"] = `${screenY}px`;

            const fontSizeModificator = Math.min(entity.pos.distanceTo(alt.Player.local.pos) / 100, 1);
            const fontSize = (1 - fontSizeModificator) * 50;
            rmlElement.style["font-size"] = `${fontSize}dp`;
        }
    });
}

function distance2d(vector1: alt.Vector3, vector2: alt.Vector3) {
    return Math.sqrt(Math.pow(vector1.x - vector2.x, 2) + Math.pow(vector1.y - vector2.y, 2));
}
