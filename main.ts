pins.servoSetPulse(AnalogPin.P0, 3000)
let angle = 0
basic.forever(function () {
    angle += 3
    pins.servoWritePin(AnalogPin.P0, angle)
    basic.pause(500)
    if (angle > 180) {
        angle = 20
    }
})
