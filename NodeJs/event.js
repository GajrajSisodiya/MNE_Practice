const events = require('events');
const eventEmitter = new events.EventEmitter();

const ringbell = function () {
   console.log("Ring ring ring");
   eventEmitter.emit('bellrings', 'Welcme')

}
eventEmitter.on('doorbell',ringbell)
eventEmitter.on('bellrings', function(message){
    console.log(message);
})
eventEmitter.emit('doorbell');

