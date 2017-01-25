'use strict';

const Queue = require('./queue.js');

module.exports = Tree;

function Tree(val) {
  this.val = val;
  this.children = [];
};

Tree.prototype.addChild = function(val) {
  this.children.push(new Tree(val));
};

Tree.prototype.traverseLog = function() {
  var output = [];
  let queue = new Queue();
  queue.enQueue(this);

  while(queue.head) {
    let current = queue.deQueue();
    output.push(current.val);
    console.log(current.val);

    current.children.forEach((child) => {
      queue.enQueue(child);
    });
  };
  console.log(output);
  return output;
};

const myTree = new Tree('A');

// myTree.addChild('B');
// myTree.addChild('C');
// myTree.children[0].addChild('D');
// myTree.children[0].addChild('E');
// myTree.children[0].children[0].addChild('F');
// myTree.children[0].children[1].addChild('G');
// myTree.traverseLog();
