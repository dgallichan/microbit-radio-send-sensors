thisMessage = ""
basic.show_leds("""
    # # # . .
        . # . . .
        . # . . #
        . . . # #
        . . # # #
""")
radio.set_group(99)
radio.set_transmit_serial_number(True)

def on_forever():
    global thisMessage
    thisMessage = "" + control.device_name() + "," + convert_to_text(0) + "," + ""
    radio.send_string("")
    basic.pause(100)
basic.forever(on_forever)
