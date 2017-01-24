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
