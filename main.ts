let yalt = 0
let xalt = 0
let yneu = 0
let xneu = 0
huskylens.initI2c()
huskylens.initMode(protocolAlgorithm.ALGORITHM_OBJECT_TRACKING)
huskylens.writeName(1, "Ball")
/**
 * Huskylens 320x240
 * 
 * LED-Matrix 5x5
 */
/**
 * Links LEDReihe 0,1
 * 
 * Mitte LEDReihe 2
 * 
 * Rechts LEDReihe 3,4
 */
basic.forever(function () {
    huskylens.request()
    if (huskylens.isLearned(1)) {
        xneu = huskylens.readeBox(1, Content1.xCenter)
        yneu = huskylens.readeBox(1, Content1.yCenter)
        if (xneu > 0) {
            xneu = pins.map(
            xneu,
            0,
            320,
            0,
            5
            )
            yneu = pins.map(
            yneu,
            0,
            240,
            0,
            5
            )
            led.unplot(xalt, yalt)
            led.plot(xneu, yneu)
            xalt = xneu
            yalt = yneu
        } else {
            led.unplot(xalt, yalt)
        }
    }
})
