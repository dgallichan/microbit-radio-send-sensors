enum RadioMessage {
    message1 = 49434
}
input.onButtonPressed(Button.A, function () {
    sendDelay += -50
    if (sendDelay < 10) {
        sendDelay = 10
    }
})
input.onButtonPressed(Button.B, function () {
    sendDelay += 50
})
let thisMessage = ""
let sendDelay = 0
radio.setGroup(99)
let thisImage = images.createImage(`
    # # # . .
    . # . . .
    . # . . #
    . . . # #
    . . # # #
    `)
sendDelay = 10
thisImage.showImage(0)
basic.forever(function () {
    thisMessage = "#" + control.deviceName() + "," + convertToText(input.acceleration(Dimension.X)) + "," + convertToText(input.acceleration(Dimension.Y)) + "," + convertToText(input.acceleration(Dimension.Z)) + ";" + ""
    radio.sendString(thisMessage)
    led.toggle(4, 0)
    basic.pause(sendDelay)
})
