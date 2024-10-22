forever(function () {
    brick.clearScreen()
    brick.printValue("nls1", sensors.nxtLight1.light(NXTLightIntensityMode.ReflectedRaw), 1)
    brick.printValue("eopd2", sensors.htEOPD2._readPin1(), 2)
    brick.printValue("nls4", sensors.nxtLight4.light(NXTLightIntensityMode.Reflected), 3)
    pause(10)
})
