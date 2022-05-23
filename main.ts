enum RadioMessage {
    message1 = 49434
}
input.onButtonPressed(Button.A, function () {
    sendDelay += -10
    if (sendDelay < 10) {
        sendDelay = 10
    }
    basic.showNumber(sendDelay)
    thisImage.showImage(0)
})
input.onButtonPressed(Button.B, function () {
    sendDelay += 10
    basic.showNumber(sendDelay)
    thisImage.showImage(0)
})
let thisMessage = ""
let sendDelay = 0
let thisImage: Image = null
radio.setGroup(99)
thisImage = images.createImage(`
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
