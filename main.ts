let acceleration = 0
basic.showLeds(`
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    `)
basic.forever(function () {
    acceleration = input.acceleration(Dimension.Y)
    acceleration = Math.abs(acceleration)
    acceleration = acceleration / 4
    led.setBrightness(acceleration)
})
