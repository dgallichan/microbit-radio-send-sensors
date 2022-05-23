enum RadioMessage {
    message1 = 49434
}
let thisMessage = ""
basic.showLeds(`
    # # # . .
    . # . . .
    . # . . #
    . . . # #
    . . # # #
    `)
radio.setGroup(99)
basic.forever(function () {
    thisMessage = "#" + control.deviceName() + "," + convertToText(input.acceleration(Dimension.X)) + "," + convertToText(input.acceleration(Dimension.Y)) + "," + convertToText(input.acceleration(Dimension.Z)) + ";" + ""
    radio.sendString(thisMessage)
    led.toggle(4, 0)
    basic.pause(100)
})
