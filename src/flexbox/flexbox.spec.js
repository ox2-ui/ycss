/* eslint-env mocha */
import addElement from '../../test/utils/add-element';
import { expect } from 'chai';

describe('flexbox', () => {
  const div = addElement('div');

  it('should set display flex', () => {
    div.className = 'display:flex';
    expect(div.computedStyle.display).to.equal('flex');
  });

  it('should set flex-direction to column', () => {
    div.className = 'flex:column';
    expect(div.computedStyle.flexDirection).to.equal('column');
  });

  it('should set flex-direction to column revers', () => {
    div.className = 'flex:column-reverse';
    expect(div.computedStyle.flexDirection).to.equal('column-reverse');
  });

  it('should set flex-direction to row', () => {
    div.className = 'flex:row';
    expect(div.computedStyle.flexDirection).to.equal('row');
  });

  it('should set flex-wrap', () => {
    div.className = 'flex:wrap';
    expect(div.computedStyle.flexWrap).to.equal('wrap');
  });

  it('should set align-items flex-start', () => {
    div.className = 'flex:items-start';
    expect(div.computedStyle.alignItems).to.equal('flex-start');
  });

  it('should set align-items flex-end', () => {
    div.className = 'flex:items-end';
    expect(div.computedStyle.alignItems).to.equal('flex-end');
  });

  it('should set align-items center', () => {
    div.className = 'flex:items-center';
    expect(div.computedStyle.alignItems).to.equal('center');
  });

  it('should set align-items baseline', () => {
    div.className = 'flex:items-baseline';
    expect(div.computedStyle.alignItems).to.equal('baseline');
  });

  it('should set align-items stretch', () => {
    div.className = 'flex:items-stretch';
    expect(div.computedStyle.alignItems).to.equal('stretch');
  });

  it('should set align-self flex-start', () => {
    div.className = 'flex:self-start';
    expect(div.computedStyle.alignSelf).to.equal('flex-start');
  });

  it('should set align-self flex-end', () => {
    div.className = 'flex:self-end';
    expect(div.computedStyle.alignSelf).to.equal('flex-end');
  });

  it('should set align-self center', () => {
    div.className = 'flex:self-center';
    expect(div.computedStyle.alignSelf).to.equal('center');
  });

  it('should set align-self baseline', () => {
    div.className = 'flex:self-baseline';
    expect(div.computedStyle.alignSelf).to.equal('baseline');
  });

  it('should set align-self stretch', () => {
    div.className = 'flex:self-stretch';
    expect(div.computedStyle.alignSelf).to.equal('stretch');
  });

  it('should set justify-content flex-start', () => {
    div.className = 'flex:content-start';
    expect(div.computedStyle.justifyContent).to.equal('flex-start');
  });

  it('should set justify-content flex-end', () => {
    div.className = 'flex:content-end';
    expect(div.computedStyle.justifyContent).to.equal('flex-end');
  });

  it('should set justify-content center', () => {
    div.className = 'flex:content-center';
    expect(div.computedStyle.justifyContent).to.equal('center');
  });

  it('should set justify-content space-between', () => {
    div.className = 'flex:content-between';
    expect(div.computedStyle.justifyContent).to.equal('space-between');
  });

  it('should set justify-content space-around', () => {
    div.className = 'flex:content-around';
    expect(div.computedStyle.justifyContent).to.equal('space-around');
  });

  it('should set align-content flex-start', () => {
    div.className = 'flex:align-start';
    expect(div.computedStyle.alignContent).to.equal('flex-start');
  });

  it('should set align-content flex-end', () => {
    div.className = 'flex:align-end';
    expect(div.computedStyle.alignContent).to.equal('flex-end');
  });

  it('should set align-content center', () => {
    div.className = 'flex:align-center';
    expect(div.computedStyle.alignContent).to.equal('center');
  });

  it('should set align-content space-between', () => {
    div.className = 'flex:align-between';
    expect(div.computedStyle.alignContent).to.equal('space-between');
  });

  it('should set align-content space-around', () => {
    div.className = 'flex:align-around';
    expect(div.computedStyle.alignContent).to.equal('space-around');
  });

  it('should set align-content stretch', () => {
    div.className = 'flex:align-stretch';
    expect(div.computedStyle.alignContent).to.equal('stretch');
  });

  it('should set flex to 1 1 auto', () => {
    div.className = 'flex:auto';
    expect(div.computedStyle.flexGrow).to.equal('1');
    expect(div.computedStyle.flexShrink).to.equal('1');
    expect(div.computedStyle.flexBasis).to.equal('auto');
  });

  it('should set flex to 0 0 auto', () => {
    div.className = 'flex:0-auto';
    expect(div.computedStyle.flexGrow).to.equal('0');
    expect(div.computedStyle.flexShrink).to.equal('0');
    expect(div.computedStyle.flexBasis).to.equal('auto');
  });

  it('should set order 0', () => {
    div.className = 'flex:order-0';
    expect(div.computedStyle.order).to.equal('0');
  });

  it('should set order 1', () => {
    div.className = 'flex:order-1';
    expect(div.computedStyle.order).to.equal('1');
  });

  it('should set order 2', () => {
    div.className = 'flex:order-2';
    expect(div.computedStyle.order).to.equal('2');
  });

  it('should set order 3', () => {
    div.className = 'flex:order-3';
    expect(div.computedStyle.order).to.equal('3');
  });

  it('should set order 99999', () => {
    div.className = 'flex:order-last';
    expect(div.computedStyle.order).to.equal('99999');
  });
});

