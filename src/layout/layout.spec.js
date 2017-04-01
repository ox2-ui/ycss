/* eslint-env mocha */
import addElement from '../../test/utils/add-element';
import { expect } from 'chai';

describe('layout', () => {
  const container = addElement('div');
  const div = addElement('div', container);

  container.style.width = '768px';
  container.style.height = '300px';

  it('should set display inline', () => {
    div.className = 'display:inline';
    expect(div.computedStyle.display).to.equal('inline');
  });

  it('should set display block', () => {
    div.className = 'display:block';
    expect(div.computedStyle.display).to.equal('block');
  });

  it('should set display inline-block', () => {
    div.className = 'display:inline-block';
    expect(div.computedStyle.display).to.equal('inline-block');
  });

  it('should set display table', () => {
    div.className = 'display:table';
    expect(div.computedStyle.display).to.equal('table');
  });

  it('should set display table-cell', () => {
    div.className = 'display:table-cell';
    expect(div.computedStyle.display).to.equal('table-cell');
  });

  it('should set overflow hidden', () => {
    div.className = 'overflow:hidden';
    expect(div.computedStyle.overflow).to.equal('hidden');
  });

  it('should set overflow hidden x axis', () => {
    div.className = 'overflow-x:hidden';
    expect(div.computedStyle.overflowX).to.equal('hidden');
  });

  it('should set overflow hidden y axis', () => {
    div.className = 'overflow-y:hidden';
    expect(div.computedStyle.overflowY).to.equal('hidden');
  });

  it('should set overflow scroll', () => {
    div.className = 'overflow:scroll';
    expect(div.computedStyle.overflow).to.equal('scroll');
  });

  it('should set overflow scroll x axis', () => {
    div.className = 'overflow-x:scroll';
    expect(div.computedStyle.overflowX).to.equal('scroll');
  });

  it('should set overflow scroll y axis', () => {
    div.className = 'overflow-y:scroll';
    expect(div.computedStyle.overflowY).to.equal('scroll');
  });

  it('should set overflow auto', () => {
    div.className = 'overflow:auto';
    expect(div.computedStyle.overflow).to.equal('auto');
  });

  it('should set overflow auto x axis', () => {
    div.className = 'overflow-x:auto';
    expect(div.computedStyle.overflowX).to.equal('auto');
  });

  it('should set overflow auto y axis', () => {
    div.className = 'overflow-y:auto';
    expect(div.computedStyle.overflowY).to.equal('auto');
  });

  it('should set overflow visible', () => {
    div.className = 'overflow:visible';
    expect(div.computedStyle.overflow).to.equal('visible');
  });

  it('should set overflow visible x axis', () => {
    div.className = 'overflow-x:visible';
    expect(div.computedStyle.overflowX).to.equal('visible');
  });

  it('should set overflow visible y axis', () => {
    div.className = 'overflow-y:visible';
    expect(div.computedStyle.overflowY).to.equal('visible');
  });

  it('should set float left', () => {
    div.className = 'float:left';
    expect(div.computedStyle.float).to.equal('left');
  });

  it('should set float right', () => {
    div.className = 'float:right';
    expect(div.computedStyle.float).to.equal('right');
  });

  it('should set vertical-align middle', () => {
    div.className = 'vertical-align:middle ';
    expect(div.computedStyle.verticalAlign).to.equal('middle');
  });

  it('should set vertical-align sub', () => {
    div.className = 'vertical-align:sub ';
    expect(div.computedStyle.verticalAlign).to.equal('sub');
  });

  it('should set vertical-align text-bottom', () => {
    div.className = 'vertical-align:text-bottom ';
    expect(div.computedStyle.verticalAlign).to.equal('text-bottom');
  });

  it('should set height 28px', () => {
    div.className = 'h:28';
    expect(div.computedStyle.height).to.equal('28px');
  });

  it('should set height 34px', () => {
    div.className = 'h:34';
    expect(div.computedStyle.height).to.equal('34px');
  });

  it('should set height 44px', () => {
    div.className = 'h:44';
    expect(div.computedStyle.height).to.equal('44px');
  });

  it('should set height 50px', () => {
    div.className = 'h:50';
    expect(div.computedStyle.height).to.equal('50px');
  });

  it('should set width 100%', () => {
    div.className = 'w:100p';
    expect(div.computedStyle.width).to.match(/100\%|768px/);
  });

  it('should set height 100%', () => {
    div.className = 'h:100p';
    expect(div.computedStyle.height).to.match(/100\%|300px/);
  });

  it('should set height auto', () => {
    div.className = 'h:auto';
    expect(div.computedStyle.height).to.equal('0px');
  });

  it('should set max-width 100%', () => {
    div.className = 'max-w:100p';
    expect(div.computedStyle.maxWidth).to.match(/100\%|768px/);
  });

  it('should set max-height 100%', () => {
    div.className = 'max-h:100p';
    expect(div.computedStyle.maxHeight).to.match(/100\%|300px/);
  });

  it('should set min-width 0', () => {
    div.className = 'min-w:0';
    expect(div.computedStyle.minWidth).to.equal('0px');
  });

  it('should set box-sizing border-box', () => {
    div.className = 'box:border-box';
    expect(div.computedStyle.boxSizing).to.equal('border-box');
  });

  it('should set opacity 40%', () => {
    div.className = 'opacity:40';
    expect(div.computedStyle.opacity).to.equal('0.4');
  });

  it('should set opacity 50%', () => {
    div.className = 'opacity:50';
    expect(div.computedStyle.opacity).to.equal('0.5');
  });

  it('should set opacity 75%', () => {
    div.className = 'opacity:75';
    expect(div.computedStyle.opacity).to.equal('0.75');
  });
});

