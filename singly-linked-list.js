'use strict';
module.exports = SinglyLinkedList;

// node constructor
function Node(val) {
  this.val = val;
  this.next = null;
}

function SinglyLinkedList(arr) {
  this.head = null;

  if (Array.isArray(arr)) {
    arr.forEach( val => {
      return this.prepend(val);
    });
  }
}

SinglyLinkedList.prototype.prepend = function(val) {
  let node = new Node(val);

  if (!this.head) {
    this.head = node;
    return node.val;
  }

  node.next = this.head;
  this.head = node;
  return node.val;
};

SinglyLinkedList.prototype.append = function(val) {
  let node = new Node(val);

  if (!this.head) {
    this.head = node;
    this.tail = node;
    return;
  }

  this.tail.next = node;
  this.tail = node;
  return;
};
