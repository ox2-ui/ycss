/* eslint-env mocha */
import addElement from '../../test/utils/add-element';
import { expect } from 'chai';

describe('color', () => {
  const div = addElement('div');
  div.style.color = 'red';
  div.style.backgroundColor = 'red';
  div.style.border = '1px dotted red';

  it('should set background color to transparent', () => {
    div.className = 'color:transparent';
    expect(div.computedStyle.backgroundColor).to.equal('transparent');
  });

  it('should set text color to transparent', () => {
    div.className = 'text-color:transparent';
    expect(div.computedStyle.color).to.equal('transparent');
  });

  it('should set border color to transparent', () => {
    div.className = 'border-color:transparent';
    expect(div.computedStyle.borderTopColor).to.equal('transparent');
    expect(div.computedStyle.borderRightColor).to.equal('transparent');
    expect(div.computedStyle.borderBottomColor).to.equal('transparent');
    expect(div.computedStyle.borderLeftColor).to.equal('transparent');
  });
});

