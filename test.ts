forever(function () {
    brick.clearScreen()
    brick.printValue("eopd", sensors.htEOPD2._readPin1(), 1);
    pause(10)
})