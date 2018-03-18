'use strict';

const Link = require('../link');
class Stack {
  constructor() {
    this.head = null;
  }

  push(value) {
    let newLink = new Link(value, this.head); // ignoring dependency injection 
    this.head = newLink;
  }

  pop() {
    if (this.head) {
      let poppedLink = this.head;
      this.head = this.head.next;
      return poppedLink.value;
    } 
    return null;
  }
}

module.exports = Stack;