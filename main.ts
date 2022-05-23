let thisMessage = ""
basic.showLeds(`
    # # # . .
    . # . . .
    . # . . #
    . . . # #
    . . # # #
    `)
radio.setGroup(99)
radio.setTransmitSerialNumber(true)
basic.forever(function () {
    thisMessage = "" + control.deviceName() + "," + convertToText(input.acceleration(Dimension.X)) + "," + convertToText(input.acceleration(Dimension.Y)) + "," + convertToText(input.acceleration(Dimension.Z))
    radio.sendString(thisMessage)
    led.toggle(4, 0)
    basic.pause(100)
})
