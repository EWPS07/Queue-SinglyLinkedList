'use strict';

const Playlist = require('../lib/queue.js');

// TESTS ------------------------------
let playlist = new Playlist();

playlist.enQueue('good');
playlist.enQueue('night');
playlist.enQueue('moon');
playlist.enQueue('good');
playlist.enQueue('night');
playlist.enQueue('great');
playlist.enQueue('green');
playlist.enQueue('room');

console.assert(playlist.deQueue() == 'good', 'Dequeued unexpected value');
console.assert(playlist.deQueue() == 'night', 'Dequeued unexpected value');
console.assert(playlist.deQueue() == 'moon', 'Dequeued unexpected value');

playlist.enQueue('by');
playlist.enQueue('margret');
playlist.enQueue('wise');
playlist.enQueue('brown');

console.assert(playlist.deQueue() == 'good', 'Dequeued unexpected value');
console.assert(playlist.deQueue() == 'night', 'Dequeued unexpected value');
console.assert(playlist.deQueue() == 'great', 'Dequeued unexpected value');
console.assert(playlist.deQueue() == 'green', 'Dequeued unexpected value');
console.assert(playlist.deQueue() == 'room', 'Dequeued unexpected value');

console.assert(playlist.deQueue() == 'by', 'Dequeued unexpected value');
console.assert(playlist.deQueue() == 'margret', 'Dequeued unexpected value');
console.assert(playlist.deQueue() == 'wise', 'Dequeued unexpected value');
console.assert(playlist.deQueue() == 'brown', 'Dequeued unexpected value');

console.log('Hooray! All tests pass!');
