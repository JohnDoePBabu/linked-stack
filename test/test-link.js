'use strict';

const {expect} = require('chai');
const Link = require('../link');

describe('node', () => {
  it('should create a link', () => {
    let head = new Link('first');
    expect(head.value).to.equal('first')
    expect(head.next).to.be.not.ok;
  });

  it('should connect to another link', () => {
    let first = new Link('first');
    let second = new Link('second', first);
    expect(second.next.value).to.eql('first');
  })
});