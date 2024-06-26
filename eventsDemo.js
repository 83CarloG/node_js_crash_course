import { EventEmitter } from 'events';

const myEmitter = new EventEmitter();

function greetHandler(name) {
    console.log('Hello ' + name);
}

function goodByeHandler(name) {
    console.log('Good Bye ' + name);
}

// Register event listeners
myEmitter.on('greet', greetHandler);
myEmitter.on('goodbye', goodByeHandler);

// Emit events
myEmitter.emit('greet', 'john');
myEmitter.emit('goodbye', 'john');

//Error handling
myEmitter.on('error', (err) => {
    console.log('Error: ' + err);
})

myEmitter.emit('error', new Error('Something went wrong'));