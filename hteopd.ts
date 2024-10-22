namespace sensors {

    //% fixedInstances
    export class HiTechnicEOPD extends internal.AnalogSensor {

        // https://github.com/mindboards/ev3sources-xtended/blob/master/ev3sources/lms2012/lms2012/Linux_AM1808/sys/settings/typedata50.rcf

        constructor(port: number) {
            super(port);
            this.undetectable = true; // This sensor is not detected by EV3, so the values ​​from the port will be read immediately
        }

        _query() {
            if (this.mode == 0) {
                return [this._readPin1()];
            }
            return [0];
        }

        _info() {
            return [this._query()[0].toString()];
        }

        _update(prev: number, curr: number) {
            return this.readValue();
        }
        
        _deviceType() {
            return DAL.DEVICE_TYPE_UNKNOWN;
        }

        // This pin is not used by the NXT
        _readPin6() {
            return 0;
        }

        /**
         * Gets the raw light value.
         */
        //%
        private readValue() {
            return this._readPin1();
        }

    }

    //% whenUsed block="1" weight=95 fixedInstance jres=icons.port1
    export const htEOPD1: HiTechnicEOPD = new HiTechnicEOPD(1);

    //% whenUsed block="2" weight=90 fixedInstance jres=icons.port2
    export const htEOPD2: HiTechnicEOPD = new HiTechnicEOPD(2);

    //% whenUsed block="3" weight=90 fixedInstance jres=icons.port3
    export const htEOPD3: HiTechnicEOPD = new HiTechnicEOPD(3);

    //% whenUsed block="4" weight=90 fixedInstance jres=icons.port4
    export const htEOPD4: HiTechnicEOPD = new HiTechnicEOPD(4);
}
