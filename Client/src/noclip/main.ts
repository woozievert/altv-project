import alt from 'alt-client';
import native from 'natives';

const player = alt.Player.local;
let arrayNum = 4
let noClipState = false;
let inCarState = false
let noClipEntity: number;
let rotation = 0

const noClipSpeed = [0, 0.125, 0.25, 0.5, 1, 1.5, 2, 4, 0]

function arrayNumPlus() {
    ++arrayNum
    if (arrayNum == 8) arrayNum = 1
}

function arrayNumMinus() {
    ++arrayNum
    if (arrayNum == 0) arrayNum = 7
}

alt.everyTick(() => {
    if (!noClipState) {
        rotation = native.getEntityRotation(player.scriptID, 2).z;
    }

    if (noClipState) {
        let selectedSpeed
        let xOff = 0.0
        let yOff = 0.0
        let zOff = 0.0
        native.disableControlAction(0, 32, true); // w
        native.disableControlAction(0, 33, true); // s
        native.disableControlAction(0, 34, true); // a
        native.disableControlAction(0, 35, true); // d
        native.disableControlAction(0, 22, true); // space
        native.disableControlAction(0, 21, true); // shift
        native.disableControlAction(0, 268, true); // MoveUP
        native.disableControlAction(0, 269, true); // MoveDown
        native.disableControlAction(0, 266, true); // MoveLeft
        native.disableControlAction(0, 267, true); // MoveRight
        native.disableControlAction(0, 31, true); // MoveUD
        native.disableControlAction(0, 30, true); // MoveLR
        native.disableControlAction(0, 44, true); // Cover Q
        native.disableControlAction(0, 85, true); // RadioWheel Q
        native.disableControlAction(0, 86, true); // Horn E
        native.disableControlAction(0, 74, true); // HeadLight
        selectedSpeed = noClipSpeed[arrayNum]
        if (native.updateOnscreenKeyboard() !== 0 && alt.isGameFocused()) {
            if (native.isDisabledControlPressed(0, 44)) rotation += 5
            if (native.isDisabledControlPressed(0, 86)) rotation -= 5
            if (native.isDisabledControlPressed(0, 32)) yOff = 1 * selectedSpeed
            if (native.isDisabledControlPressed(0, 33)) yOff = -1 * selectedSpeed
            if (native.isDisabledControlPressed(0, 34)) xOff = -1 * selectedSpeed
            if (native.isDisabledControlPressed(0, 35)) xOff = 1 * selectedSpeed
            if (native.isDisabledControlPressed(0, 22)) zOff = 1 * selectedSpeed
            if (native.isDisabledControlPressed(0, 21)) zOff = -1 * selectedSpeed
        }
        if (inCarState) {
            if(!player.vehicle) {
                native.freezeEntityPosition(noClipEntity, false)
                native.setEntityCollision(noClipEntity, true, true)
                native.setVehicleGravity(noClipEntity, true)
                noClipState = false
            }
        }
        let newPosition
        newPosition = native.getOffsetFromEntityInWorldCoords(noClipEntity, xOff, yOff, zOff)
        native.setEntityRotation(noClipEntity, 0, 0, rotation, 0, false);
        native.setEntityCoordsNoOffset(noClipEntity, newPosition.x, newPosition.y, newPosition.z, true, true, true);
    }
})

alt.on('keyup', (key) => {
    if(key == 33) { // PageUp
        arrayNumPlus();
    }
    else if (key == 34) { // pageDown
        arrayNumMinus();
    }
})

alt.onServer('noclip:client:toggle', startNoClip);
function startNoClip() {
    noClipState = !noClipState
    if (player.vehicle) {
        noClipEntity = player.vehicle.scriptID
        inCarState = true
    } else {
        noClipEntity = player.scriptID
        inCarState = false
    }

    if (noClipState) {
        if (player.vehicle) native.setVehicleGravity(noClipEntity, false)
        native.setEntityInvincible(noClipEntity, true);
        native.freezeEntityPosition(noClipEntity, true)
        native.setEntityCollision(noClipEntity, false, false)
    } else {
        native.freezeEntityPosition(noClipEntity, false)
        native.setEntityInvincible(noClipEntity, false);
        native.setEntityCollision(noClipEntity, true, true)
        if (player.vehicle) {
            native.setVehicleGravity(noClipEntity, true)
            native.setVehicleForwardSpeed(noClipEntity, 0.0)
            native.setVehicleForwardSpeed(noClipEntity, -0.01)
        }
    }
}