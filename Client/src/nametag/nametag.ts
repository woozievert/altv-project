import * as alt from "alt-client";
import * as native from "natives";
import {TextLabel} from "alt-client";
// ---------------- Script ----------------

alt.loadRmlFont("/Client/nametag/microsoft.ttf", "microsoft", false, true);
const document = new alt.RmlDocument("/Client/nametag/index.rml");
const container = document.getElementByID("nametag-container");
const nameTags = new Map();
let tickHandle: number = -1;
alt.on("spawned", () => {
    const rmlElement = document.createElement("button");
    rmlElement.rmlId = alt.Player.local.id.toString();
    rmlElement.addClass("nametag");
    rmlElement.addClass("hide");
    rmlElement.innerRML = `测试${alt.Player.local.id}号`;
    console.log(`测试${alt.Player.local.id}号`);

    nameTags.set(alt.Player.local, rmlElement);
    // @ts-ignore
    container.appendChild(rmlElement);
    rmlElement.on("click", printCoordinates);

    if (tickHandle !== -1) return;
    tickHandle = alt.everyTick(drawMarkers);
});

alt.on("disconnect", () => {
    const rmlElement = nameTags.get(alt.Player.local);
    if (rmlElement === undefined) return;
    // @ts-ignore
    container.removeChild(rmlElement);
    rmlElement.destroy();

    if (tickHandle === -1 || nameTags.size > 0) return;
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

function drawMarkers() {
    nameTags.forEach((rmlElement, player) => {
        const {x, y, z} = player.pos;

        if (!native.isSphereVisible(x, y, z, 0.0099999998)) {
            if (!rmlElement.shown) return;

            rmlElement.addClass("hide");
            rmlElement.shown = false;
        } else {
            if (!rmlElement.shown) {
                rmlElement.removeClass("hide");
                rmlElement.shown = true;
            }

            const {x: screenX, y: screenY} = alt.worldToScreen(x, y, z + 0.5);
            rmlElement.style["left"] = `${screenX}px`;
            rmlElement.style["top"] = `${screenY}px`;
        }
    });
}
