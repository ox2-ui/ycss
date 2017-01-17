/* eslint-env mocha */
import { expect } from 'chai';

describe('position', () => {
  const addElement = el => {
    const $el = document.createElement(el);
    document.body.appendChild($el);
    $el.computedStyle = window.getComputedStyle($el);
    return $el;
  };

  const div = addElement('div');

  it('should set position relative', () => {
    div.className = 'pos:relative';
    expect(div.computedStyle.position).to.equal('relative');
  });

  it('should set position absolute', () => {
    div.className = 'pos:absolute';
    expect(div.computedStyle.position).to.equal('absolute');
  });

  it('should set position fixed', () => {
    div.className = 'pos:fixed';
    expect(div.computedStyle.position).to.equal('fixed');
  });

  it('should set position absolute ', () => {
    div.className = 'pos:absolute';
    expect(div.computedStyle.position).to.equal('absolute');
  });

  it('should set position absolute and all directions to 0', () => {
    div.className = 'pos:absolute-0';
    expect(div.computedStyle.position).to.equal('absolute');
    expect(div.computedStyle.top).to.equal('0px');
    expect(div.computedStyle.right).to.equal('0px');
    expect(div.computedStyle.bottom).to.equal('0px');
    expect(div.computedStyle.left).to.equal('0px');
  });

  it('should set top 0', () => {
    div.className = 'top:0';
    expect(div.computedStyle.top).to.equal('0px');
  });

  it('should set right 0', () => {
    div.className = 'right:0';
    expect(div.computedStyle.right).to.equal('0px');
  });

  it('should set bottom 0', () => {
    div.className = 'bottom:0';
    expect(div.computedStyle.bottom).to.equal('0px');
  });

  it('should set left 0', () => {
    div.className = 'left:0';
    expect(div.computedStyle.left).to.equal('0px');
  });

  it('should set top auto', () => {
    div.className = 'top:auto';
    expect(div.computedStyle.top).to.equal('auto');
  });

  it('should set right auto', () => {
    div.className = 'right:auto';
    expect(div.computedStyle.right).to.equal('auto');
  });

  it('should set bottom auto', () => {
    div.className = 'bottom:auto';
    expect(div.computedStyle.bottom).to.equal('auto');
  });

  it('should set left auto', () => {
    div.className = 'left:auto';
    expect(div.computedStyle.left).to.equal('auto');
  });

  it('should set z-index 1', () => {
    div.className = 'z:1';
    expect(div.computedStyle.zIndex).to.equal('1');
  });

  it('should set z-index 2', () => {
    div.className = 'z:2';
    expect(div.computedStyle.zIndex).to.equal('2');
  });

  it('should set z-index 3', () => {
    div.className = 'z:3';
    expect(div.computedStyle.zIndex).to.equal('3');
  });

  it('should set z-index 4', () => {
    div.className = 'z:4';
    expect(div.computedStyle.zIndex).to.equal('4');
  });
});
