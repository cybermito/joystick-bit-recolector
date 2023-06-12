radio.setGroup(10)
joystickbit.initJoystickBit()
let controlX = joystickbit.getRockerValue(joystickbit.rockerType.X)
let controlY = joystickbit.getRockerValue(joystickbit.rockerType.Y)
joystickbit.Vibration_Motor(200)
basic.showIcon(IconNames.TShirt)
basic.forever(function () {
    controlX = joystickbit.getRockerValue(joystickbit.rockerType.X)
    controlY = joystickbit.getRockerValue(joystickbit.rockerType.Y)
    if (joystickbit.getButton(joystickbit.JoystickBitPin.P13)) {
        basic.showString("D")
        radio.sendString("up")
    } else if (joystickbit.getButton(joystickbit.JoystickBitPin.P14)) {
        basic.showString("E")
        radio.sendString("down")
    } else if (joystickbit.getButton(joystickbit.JoystickBitPin.P12)) {
        basic.showString("C")
        radio.sendString("center")
    } else {
        if (controlY > 550 && (controlX > 400 && controlX < 600)) {
            basic.showArrow(ArrowNames.North)
            radio.sendValue("F", controlY)
        } else if (controlY < 450 && (controlX > 400 && controlX < 600)) {
            basic.showArrow(ArrowNames.South)
            radio.sendValue("B", controlY)
        } else if (controlX < 450 && (controlY > 400 && controlY < 600)) {
            basic.showArrow(ArrowNames.East)
            radio.sendValue("L", controlX)
        } else if (controlX > 550 && (controlY > 400 && controlY < 600)) {
            basic.showArrow(ArrowNames.West)
            radio.sendValue("R", controlX)
        } else {
            basic.showNumber(0)
            radio.sendString("stop")
        }
    }
})
