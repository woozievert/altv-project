import * as alt from "alt-client";
import * as native from "natives";

const controlKey = 79;

alt.loadRmlFont("/Client/nametag/microsoft.ttf", "microsoft", false, true);
const document = new alt.RmlDocument("/Client/nametag/index.rml");
const container = document.getElementByID("nametag-container");
const nameTags = new Map();
let tickHandle: number;

alt.on("gameEntityCreate", (entity) => {
    if (container == null) return;

    const rmlElement = document.createElement("button");
    rmlElement.rmlId = entity.id.toString();
    rmlElement.addClass("nametag");
    rmlElement.addClass("hide");

    if (entity instanceof alt.Player) {
        rmlElement.innerRML = `玩家: ${entity.id}号`;
    } else if (entity instanceof alt.Vehicle)
        rmlElement.innerRML = `车辆ID: ${entity.id}`;
    else {
        rmlElement.destroy();
        return;
    }

    nameTags.set(entity, rmlElement);
    container.appendChild(rmlElement);
    rmlElement.on("click", printCoordinates);

    if (tickHandle !== undefined) return;
    tickHandle = alt.everyTick(drawMarkers);
});

alt.on("gameEntityDestroy", (entity) => {
    if (container == null) return;
    const rmlElement = nameTags.get(entity);
    if (rmlElement === undefined) return;
    container.removeChild(rmlElement);
    rmlElement.destroy();
    nameTags.delete(entity);

    if (tickHandle === undefined || nameTags.size > 0) return;
    alt.clearEveryTick(tickHandle);
});

alt.on("keyup", (key) => {
    if (key !== controlKey) return;

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
    const entity = alt.Entity.getByID(parseInt(rmlElement.rmlId));
    if (entity == null) return;
    alt.log("实体坐标", "X", entity.pos.x, "Y", entity.pos.y, "Z", entity.pos.z);
}

function drawMarkers() {
    nameTags.forEach((rmlElement, entity) => {
        let {x, y, z} = entity.pos;
        if (distance2d(new alt.Vector3(entity.pos), alt.Player.local.pos) > 20)
            return;

        if (!native.isSphereVisible(x, y, z, 0.0099999998) || (!native.hasEntityClearLosToEntity(alt.Player.local, entity, 17))) {
            if (!rmlElement.shown) return;

            rmlElement.addClass("hide");
            rmlElement.shown = false;
        } else {
            if (!rmlElement.shown) {
                rmlElement.removeClass("hide");
                rmlElement.shown = true;
            }

            if (entity instanceof alt.Player) {
                let pos = { ...native.getPedBoneCoords(entity.scriptID, 12844, 0, 0, 0) };
                const {x: screenX, y: screenY} = alt.worldToScreen(pos.x, pos.y, pos.z + 0.75);
                rmlElement.style["left"] = `${screenX}px`;
                rmlElement.style["top"] = `${screenY}px`;
            }
            else {
                const {x: screenX, y: screenY} = alt.worldToScreen(x, y, z + 0.75);
                rmlElement.style["left"] = `${screenX}px`;
                rmlElement.style["top"] = `${screenY}px`;
            }
        }
    });
}

function distance2d(vector1: alt.Vector3, vector2: alt.Vector3) {
    return Math.sqrt(Math.pow(vector1.x - vector2.x, 2) + Math.pow(vector1.y - vector2.y, 2));
}