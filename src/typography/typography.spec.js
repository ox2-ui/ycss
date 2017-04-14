/* eslint-env mocha */
import addElement from '../../test/utils/add-element';
import { expect } from 'chai';

describe('typography', () => {
  const container = addElement('div');
  const h1 = addElement('h1', container);
  const p = addElement('p', container);
  const ul = addElement('ul', container);
  const a = addElement('a', container);

  container.style.width = '768px';
  container.style.fontFamily = 'Helvetica';
  container.style.fontSize = '32px';

  it('should set font-weight thin', () => {
    p.className = 'text:thin';
    expect(p.computedStyle.fontWeight).to.equal('100');
  });

  it('should set font-weight light', () => {
    p.className = 'text:light';
    expect(p.computedStyle.fontWeight).to.equal('300');
  });

  it('should set font-weight regular', () => {
    h1.className = 'text:regular';
    expect(h1.computedStyle.fontWeight).to.equal('400');
  });

  it('should set font-weight medium', () => {
    h1.className = 'text:medium';
    expect(h1.computedStyle.fontWeight).to.equal('500');
  });

  it('should set font-weight bold', () => {
    p.className = 'text:bold';
    expect(p.computedStyle.fontWeight).to.equal('700');
  });

  it('should set font-weight black', () => {
    p.className = 'text:black';
    expect(p.computedStyle.fontWeight).to.equal('900');
  });

  it('should set font-style italic', () => {
    h1.className = 'text:italic';
    expect(h1.computedStyle.fontStyle).to.equal('italic');
  });

  it('should set uppercase and add tracking', () => {
    h1.className = 'text:caps';
    expect(h1.computedStyle.textTransform).to.equal('uppercase');
    expect(h1.computedStyle.letterSpacing).to.not.equal('normal');
  });

  it('should set uppercase', () => {
    h1.className = 'text:uppercase';
    expect(h1.computedStyle.textTransform).to.equal('uppercase');
  });

  it('should left align text', () => {
    h1.className = 'text:left';
    expect(h1.computedStyle.textAlign).to.equal('left');
  });

  it('should center align text', () => {
    h1.className = 'text:center';
    expect(h1.computedStyle.textAlign).to.equal('center');
  });

  it('should right align text', () => {
    h1.className = 'text:right';
    expect(h1.computedStyle.textAlign).to.equal('right');
  });

  it('should justify text', () => {
    h1.className = 'text:justify';
    expect(h1.computedStyle.textAlign).to.equal('justify');
  });

  it('should set white-space nowrap', () => {
    h1.className = 'text:nowrap';
    expect(h1.computedStyle.whiteSpace).to.equal('nowrap');
  });

  it('should set word-wrap break-word', () => {
    h1.className = 'text:break-word';
    expect(h1.computedStyle.wordWrap).to.equal('break-word');
  });

  it('should truncate text', () => {
    h1.className = 'text:truncate';
    expect(h1.computedStyle.maxWidth).to.equal('100%');
    expect(h1.computedStyle.overflow).to.equal('hidden');
    expect(h1.computedStyle.textOverflow).to.equal('ellipsis');
    expect(h1.computedStyle.whiteSpace).to.equal('nowrap');
    expect(h1.computedStyle.wordWrap).to.equal('break-word');
  });

  it('should set line-height 1', () => {
    h1.className = 'text:line-1';
    expect(h1.computedStyle.lineHeight).to.equal('64px');
  });

  it('should set line-height 1.125', () => {
    h1.className = 'text:line-2';
    expect(h1.computedStyle.lineHeight).to.equal('72px');
  });

  it('should set line-height 1.25', () => {
    h1.className = 'text:line-3';
    expect(h1.computedStyle.lineHeight).to.equal('80px');
  });

  it('should set line-height 1.5', () => {
    h1.className = 'text:line-4';
    expect(h1.computedStyle.lineHeight).to.equal('96px');
  });

  it('should set list-style none', () => {
    ul.className = 'text:list-none';
    expect(ul.computedStyle.listStyle).to.match(/none|^$/);
  });

  it('should set text-decoration underline', () => {
    h1.className = 'text:underline';
    expect(h1.computedStyle.textDecoration).to.equal('underline');
  });

  it('should set text-decoration none', () => {
    a.className = 'text:none';
    expect(a.computedStyle.textDecoration).to.equal('none');
  });

  it('should set font-family inherit', () => {
    p.className = 'font\:inherit';
    expect(p.computedStyle.fontFamily).to.equal('Helvetica');
  });

  it('should set font-family Roboto', () => {
    p.className = 'font\:roboto';
    expect(p.computedStyle.fontFamily).to.equal('Roboto');
  });

  it('should set font-family Roboto Condensed', () => {
    p.className = 'font\:roboto-condensed';
    expect(p.computedStyle.fontFamily).to.equal('Roboto Condensed');
  });

  it('should set font-size inherit', () => {
    p.className = 'text:inherit';
    expect(p.computedStyle.fontSize).to.equal('32px');
  });

  it('should set cursor text', () => {
    p.className = 'cursor:text';
    expect(p.computedStyle.cursor).to.equal('text');
  });

  it('should set cursor default', () => {
    p.className = 'cursor:default';
    expect(p.computedStyle.cursor).to.equal('default');
  });

  it('should set cursor pointer', () => {
    p.className = 'cursor:pointer';
    expect(p.computedStyle.cursor).to.equal('pointer');
  });
});

describe('type-scale', () => {
  const p = addElement('p');

  it('should set h1 font-size', () => {
    p.className = 'text:h1';
    expect(p.computedStyle.fontSize).to.equal('32px');
  });

  it('should set h2 font-size', () => {
    p.className = 'text:h2';
    expect(p.computedStyle.fontSize).to.equal('24px');
  });

  it('should set h3 font-size', () => {
    p.className = 'text:h3';
    expect(p.computedStyle.fontSize).to.equal('20px');
  });

  it('should set h4 font-size', () => {
    p.className = 'text:h4';
    expect(p.computedStyle.fontSize).to.equal('16px');
  });

  it('should set h5 font-size', () => {
    p.className = 'text:h5';
    expect(p.computedStyle.fontSize).to.equal('14px');
  });

  it('should set h6 font-size', () => {
    p.className = 'text:h6';
    expect(p.computedStyle.fontSize).to.equal('12px');
  });
});

