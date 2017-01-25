'use strict';

const Tree = require('../lib/tree.js');

let tree = new Tree('A');

tree.addChild('B');
tree.addChild('C');

tree.children[0].addChild('D');
tree.children[0].addChild('E');

tree.children[1].addChild('F');
tree.children[1].addChild('G');

tree.children[0].children[0].addChild('H');
tree.children[0].children[1].addChild('I');

tree.children[1].children[0].addChild('J');
tree.children[1].children[1].addChild('K');

let output = tree.traverseLog();

console.assert(output[0] == 'A', 'Something went wrong');
console.assert(output[1] === 'B', 'Something went wrong');
console.assert(output[2] == 'C', 'Something went wrong');
console.assert(output[3] == 'D', 'Something went wrong');
console.assert(output[4] === 'E', 'Something went wrong');
console.assert(output[5] == 'F', 'Something went wrong');
console.assert(output[6] == 'G', 'Something went wrong');
console.assert(output[7] === 'H', 'Something went wrong');
console.assert(output[8] == 'I', 'Something went wrong');
console.assert(output[9] == 'J', 'Something went wrong');
console.assert(output[10] === 'K', 'Something went wrong');

console.log('Everything passed!, YAY!!!!');
