const rpio = require('rpio');
const pin = 11;
rpio.open(pin, rpio.OUTPUT, rpio.LOW);
rpio.close(pin);
