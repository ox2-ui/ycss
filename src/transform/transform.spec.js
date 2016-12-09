/* eslint-env mocha */
import addElement from '../../test/utils/add-element';
import { expect } from 'chai';

describe('transform', () => {
  const div = addElement('div');

  it('should set transform rotate 0deg', () => {
    div.className = 'transform:0deg';
    expect(div.computedStyle.transform).to.equal('matrix(1, 0, 0, 1, 0, 0)');
  });

  it('should set transform rotate 90deg', () => {
    div.className = 'transform:90deg';
    expect(div.computedStyle.transform).to.equal('matrix(0, 1, -1, 0, 0, 0)');
  });

  it('should set transform rotate 180deg', () => {
    div.className = 'transform:180deg';
    expect(div.computedStyle.transform).to.equal('matrix(-1, 0, 0, -1, 0, 0)');
  });

  it('should set transform rotate 270deg', () => {
    div.className = 'transform:270deg';
    expect(div.computedStyle.transform).to.equal('matrix(0, -1, 1, 0, 0, 0)');
  });
});


