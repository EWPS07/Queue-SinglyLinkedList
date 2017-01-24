'use strict';

const Queue = require('./singly-linked-list.js');

Queue.prototype.enQueue = function(node) {
  this.append(node);
  return;
};

Queue.prototype.deQueue = function() {
  let node = this.head;
  this.head = this.head.next;
  node.next = null;
  return node;
};

const playlist = new Queue();
playlist.enQueue('STRING');
console.log(playlist);
playlist.enQueue('NUMBER');
console.log(playlist);
playlist.enQueue('BOOLEAN');
console.log(playlist);
playlist.enQueue('OBJECT');
console.log(playlist);
playlist.enQueue('ARRAY');
console.log(playlist);

playlist.deQueue();
console.log(playlist);
playlist.deQueue();
console.log(playlist);
playlist.deQueue();
console.log(playlist);
playlist.deQueue();
console.log(playlist);
playlist.deQueue();
console.log(playlist);
