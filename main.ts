let baldetombado = 0
let balde = 1.4
let areafunil = 98.52
HackbitOLEDDisplay.init(128, 64)
HackbitOLEDDisplay.clear()
HackbitOLEDDisplay.writeStringNewLine("hack:bit")
HackbitOLEDDisplay.writeStringNewLine("Estacao Metereologica")
basic.forever(function () {
    hackbit.queryData(
    hackbit.DHTtype.DHT11,
    DigitalPin.P13,
    true,
    false,
    true
    )
})
basic.forever(function () {
    if (hackbit.readDataSuccessful()) {
        HackbitOLEDDisplay.clear()
        HackbitOLEDDisplay.writeStringNewLine("hack:bit")
        HackbitOLEDDisplay.writeStringNewLine("Estacao Metereologica")
        HackbitOLEDDisplay.writeString("Umid.:")
        HackbitOLEDDisplay.writeNumNewLine(hackbit.readData(hackbit.dataType.humidity))
        HackbitOLEDDisplay.writeString("Temp.: ")
        HackbitOLEDDisplay.writeNumNewLine(hackbit.getTemperatureDecimal())
        HackbitOLEDDisplay.writeString("Press:")
        HackbitOLEDDisplay.writeNumNewLine(hackbit.getPressureDecimal())
        HackbitOLEDDisplay.writeString("Altit:")
        HackbitOLEDDisplay.writeNumNewLine(hackbit.getAltitudeDecimal(101325))
        HackbitOLEDDisplay.writeString("Altur:")
        HackbitOLEDDisplay.writeNumNewLine(Math.round(hackbit.getAltitudeDecimal(101325) - 599))
        HackbitOLEDDisplay.writeString("Precipitacao:")
        HackbitOLEDDisplay.writeNum(hackbit.roundwithprecision(balde * baldetombado / areafunil, 2))
        HackbitOLEDDisplay.writeString(" mm")
        basic.pause(5000)
    }
})
basic.forever(function () {
    if (pins.analogReadPin(AnalogPin.P1) < 10) {
        baldetombado += 1
        basic.pause(40)
    }
})
