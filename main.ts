basic.pause(2000)
let vRot = 50
let fAVA = 100
basic.showIcon(IconNames.Heart)
basic.pause(500)
music.playTone(262, music.beat(BeatFraction.Whole))
basic.forever(function () {
    if (maqueen.Ultrasonic(PingUnit.Centimeters) >= 5) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, fAVA)
    } else {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, vRot)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, vRot)
        music.playTone(262, music.beat(BeatFraction.Quarter))
    }
    basic.pause(100)
})
