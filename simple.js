const rpio = require('rpio');

const high = rpio.HIGH;
const low = rpio.LOW;
const input = rpio.INPUT;
const output = rpio.OUTPUT;

const write = rpio.write;
const close = rpio.close;

const pin = 11;

const getReading = (pin) => rpio.read(pin) ? 'high' : 'low';
const logPin = (pin) => console.log(`Pin ${pin} is currently ${getReading(pin)}!`);

// init
rpio.open(pin, output, low);
logPin(pin);

function blink(pin, resolve) {
  write(pin, high);
  setTimeout(() => {
    write(pin, low);
    setTimeout(() => {
      resolve();
    }, 2000);
  }, 2000);
}

const promiseToBlink = (pin) => new Promise((resolve) => blink(pin, resolve));

promiseToBlink(pin).then(() => close(pin));
