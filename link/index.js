'use strict';

class Link {
  constructor (value, next) {
    this.value = value;
    this.next = next || null;
  }
}

module.exports = Link;