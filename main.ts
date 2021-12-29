input.onButtonPressed(Button.A, function () {
    wuKong.setServoAngle(wuKong.ServoTypeList._180, wuKong.ServoList.S0, 51)
    wuKong.setMotorSpeed(wuKong.MotorList.M1, 100)
    wuKong.setLightMode(wuKong.LightMode.BREATH)
})
input.onButtonPressed(Button.B, function () {
    wuKong.stopMotor(wuKong.MotorList.M1)
    wuKong.setServoAngle(wuKong.ServoTypeList._180, wuKong.ServoList.S0, 128)
})
basic.forever(function () {
	
})
