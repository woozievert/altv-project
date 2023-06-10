import * as alt from "alt-client";
import * as native from "natives";
// ---------------- Script ----------------

alt.loadRmlFont("/Client/nametag/Microsoft Yahei.ttf", "Microsoft Yahei", false, true);
const document = new alt.RmlDocument("/Client/nametag/index.rml");
const container = document.getElementByID("nametag-container");
const nameTags = new Map();
let tickHandle: number = -1;

alt.on("gameEntityCreate", (entity) => {
    console.log('test:gameEntityCreate');
    const rmlElement = document.createElement("button");
    rmlElement.rmlId = entity.id.toString();
    rmlElement.addClass("nametag");
    rmlElement.addClass("hide");

    if (entity instanceof alt.Player) {
        rmlElement.innerRML = `测试${entity.id}号`;
        console.log(`测试${entity.id}号`);
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
    const entity = alt.Entity.getByID(parseInt(rmlElement.rmlId));
    // @ts-ignore
    alt.log("Entity Position", "X", entity.pos.x, "Y", entity.pos.y, "Z", entity.pos.z);
}

function drawMarkers() {
    nameTags.forEach((rmlElement, entity) => {
        const {x, y, z} = entity.pos;

        if (!native.isSphereVisible(x, y, z, 0.0099999998)) {
            if (!rmlElement.shown) return;

            rmlElement.addClass("hide");
            rmlElement.shown = false;
        } else {
            if (!rmlElement.shown) {
                rmlElement.removeClass("hide");
                rmlElement.shown = true;
            }

            const {x: screenX, y: screenY} = alt.worldToScreen(x, y, z + 2);
            rmlElement.style["left"] = `${screenX}px`;
            rmlElement.style["top"] = `${screenY}px`;
        }
    });
}
