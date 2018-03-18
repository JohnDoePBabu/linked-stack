'use strict';

const {expect} = require('chai');
const Stack = require('../stack'); 

describe('stack', () => {
  it('should push element', () => {
    let newStack = new Stack();
    newStack.push('lower ground');
    newStack.push('ground floor');
    newStack.push('first floor');
    expect(newStack.head.value).to.equal('first floor');
    expect(newStack.head.next.value).to.equal('ground floor');
  });
  
  it('should pop element', () => {
    let newStack = new Stack();
    newStack.push('root');
    newStack.push('trunk');
    newStack.push('top');
    expect(newStack.pop()).to.equal('top');
    expect(newStack.pop()).to.equal('trunk');
    expect(newStack.pop()).to.equal('root');
  });

  it('should not pop if stack is empty', () => {
    let newStack = new Stack();
    expect(newStack.pop()).to.be.null;
  });
});