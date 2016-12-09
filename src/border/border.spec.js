/* eslint-env mocha */
import addElement from '../../test/utils/add-element';
import { expect } from 'chai';

describe('border', () => {
  const div = addElement('div');
  const inputOutlined = addElement('input');
  const input = addElement('input');

  div.style.width = '32px';
  div.style.height = '32px';
  inputOutlined.style.outline = '1px dotted red';

  it('should apply border', () => {
    div.className = 'border:all';
    expect(div.computedStyle.borderTopStyle).to.equal('solid');
    expect(div.computedStyle.borderRightStyle).to.equal('solid');
    expect(div.computedStyle.borderBottomStyle).to.equal('solid');
    expect(div.computedStyle.borderLeftStyle).to.equal('solid');
  });

  it('should apply dashed border', () => {
    div.className = 'border:dashed';
    expect(div.computedStyle.borderTopStyle).to.equal('dashed');
    expect(div.computedStyle.borderRightStyle).to.equal('dashed');
    expect(div.computedStyle.borderBottomStyle).to.equal('dashed');
    expect(div.computedStyle.borderLeftStyle).to.equal('dashed');
  });

  it('should apply dotted border', () => {
    div.className = 'border:dotted';
    expect(div.computedStyle.borderTopStyle).to.equal('dotted');
    expect(div.computedStyle.borderRightStyle).to.equal('dotted');
    expect(div.computedStyle.borderBottomStyle).to.equal('dotted');
    expect(div.computedStyle.borderLeftStyle).to.equal('dotted');
  });

  it('should apply border width', () => {
    div.className = 'border:all';
    expect(div.computedStyle.borderTopWidth).to.equal('1px');
    expect(div.computedStyle.borderRightWidth).to.equal('1px');
    expect(div.computedStyle.borderBottomWidth).to.equal('1px');
    expect(div.computedStyle.borderLeftWidth).to.equal('1px');
  });

  it('should apply border width of 2px', () => {
    input.className = 'border:2';
    expect(input.computedStyle.borderTopWidth).to.equal('2px');
    expect(input.computedStyle.borderRightWidth).to.equal('2px');
    expect(input.computedStyle.borderBottomWidth).to.equal('2px');
    expect(input.computedStyle.borderLeftWidth).to.equal('2px');
  });

  it('should apply border width of 3px', () => {
    input.className = 'border:3';
    expect(input.computedStyle.borderTopWidth).to.equal('3px');
    expect(input.computedStyle.borderRightWidth).to.equal('3px');
    expect(input.computedStyle.borderBottomWidth).to.equal('3px');
    expect(input.computedStyle.borderLeftWidth).to.equal('3px');
  });

  it('should apply border width of 4px', () => {
    input.className = 'border:4';
    expect(input.computedStyle.borderTopWidth).to.equal('4px');
    expect(input.computedStyle.borderRightWidth).to.equal('4px');
    expect(input.computedStyle.borderBottomWidth).to.equal('4px');
    expect(input.computedStyle.borderLeftWidth).to.equal('4px');
  });

  it('should apply border width of 5px', () => {
    input.className = 'border:5';
    expect(input.computedStyle.borderTopWidth).to.equal('5px');
    expect(input.computedStyle.borderRightWidth).to.equal('5px');
    expect(input.computedStyle.borderBottomWidth).to.equal('5px');
    expect(input.computedStyle.borderLeftWidth).to.equal('5px');
  });

  it('should remove all borders except bottom', () => {
    input.className = 'border:none border:bottom';
    expect(input.computedStyle.borderTopWidth).to.equal('0px');
    expect(input.computedStyle.borderRightWidth).to.equal('0px');
    expect(input.computedStyle.borderLeftWidth).to.equal('0px');
    expect(input.computedStyle.borderBottomWidth).to.equal('1px');
    expect(input.computedStyle.borderBottomStyle).to.equal('solid');
  });

  it('should apply border top styles', () => {
    div.className = 'border:top';
    expect(div.computedStyle.borderTopWidth).to.equal('1px');
    expect(div.computedStyle.borderTopStyle).to.equal('solid');
  });

  it('should apply border right styles', () => {
    div.className = 'border:right';
    expect(div.computedStyle.borderRightWidth).to.equal('1px');
    expect(div.computedStyle.borderRightStyle).to.equal('solid');
  });

  it('should apply border bottom styles', () => {
    div.className = 'border:bottom';
    expect(div.computedStyle.borderBottomWidth).to.equal('1px');
    expect(div.computedStyle.borderBottomStyle).to.equal('solid');
  });

  it('should apply border left styles', () => {
    div.className = 'border:left';
    expect(div.computedStyle.borderLeftWidth).to.equal('1px');
    expect(div.computedStyle.borderLeftStyle).to.equal('solid');
  });

  it('should remove border styles', () => {
    input.className = 'border:none';
    expect(input.computedStyle.borderTopWidth).to.match(/0px|^$/);
  });

  it('should apply border radius', () => {
    div.className = 'border:rounded';
    expect(div.computedStyle.borderTopRightRadius).to.equal('3px');
  });

  it('should apply circular border radius', () => {
    div.className = 'border:circle';
    expect(div.computedStyle.borderTopRightRadius).to.match(/16px|50\%/);
  });

  it('should apply directional border radii', () => {
    div.className = 'border:rounded-top';
    expect(div.computedStyle.borderTopRightRadius).to.equal('3px');
    expect(div.computedStyle.borderTopLeftRadius).to.equal('3px');
    expect(div.computedStyle.borderBottomRightRadius).to.equal('0px');
    expect(div.computedStyle.borderBottomLeftRadius).to.equal('0px');
  });

  it('should remove border bottom styles', () => {
    input.className = 'border:bottom-none';
    expect(input.computedStyle.borderBottomWidth).to.match(/0px|^$/);
  });

  it('should remove outline', () => {
    inputOutlined.className = 'outline:none';
    expect(inputOutlined.computedStyle.outlineWidth).to.equal('0px');
  });
});
