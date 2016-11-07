var SerialPort = require('serialport');

SerialPort.list(function (err, ports) {
  ports.forEach(function(port) {
    console.log(port.comName);
  });
});

// var port = new SerialPort('/dev/tty-usbserial1');
//
// port.on('open', function() {
//   port.write('main screen turn on', function(err) {
//     if (err) {
//       return console.log('Error on write: ', err.message);
//     }
//     console.log('message written');
//   });
// });
//
// // open errors will be emitted as an error event
// port.on('error', function(err) {
//   console.log('Error: ', err.message);
// })
