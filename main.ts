enum RadioMessage {
    message1 = 49434
}
input.onButtonPressed(Button.A, function () {
    sendDelay += -50
    if (sendDelay < 10) {
        sendDelay = 10
    }
})
input.onButtonPressed(Button.AB, function () {
    trackMode += 1
    if (trackMode > 1) {
        trackMode = 0
    }
    for (let index = 0; index <= 4; index++) {
        led.unplot(index, 4)
    }
    led.plot(trackMode, 4)
})
input.onButtonPressed(Button.B, function () {
    sendDelay += 50
})
let thisMessage = ""
let trackMode = 0
let sendDelay = 0
radio.setGroup(99)
let thisImage = images.createImage(`
    # # # . .
    . # . . .
    . # . . #
    . . . # #
    . . . . .
    `)
sendDelay = 10
thisImage.showImage(0)
trackMode = 0
basic.forever(function () {
    if (trackMode == 0) {
        thisMessage = "#" + control.deviceName() + "," + convertToText(input.acceleration(Dimension.X)) + "," + convertToText(input.acceleration(Dimension.Y)) + "," + convertToText(input.acceleration(Dimension.Z)) + ";" + ""
    } else {
        thisMessage = "#" + control.deviceName() + "," + convertToText(input.rotation(Rotation.Pitch)) + "," + convertToText(input.rotation(Rotation.Roll)) + "," + convertToText(50) + ";" + ""
    }
    radio.sendString(thisMessage)
    led.toggle(4, 0)
    basic.pause(sendDelay)
})
