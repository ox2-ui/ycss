/* eslint-env mocha */
import addElement from '../../test/utils/add-element';
import { expect } from 'chai';

describe('transition', () => {
  const div = addElement('div');

  it('should set transition duration 300ms', () => {
    div.className = 'transition:300ms';
    expect(div.computedStyle.transitionDuration).to.equal('0.3s');
  });

  it('should set transition duration 400ms', () => {
    div.className = 'transition:400ms';
    expect(div.computedStyle.transitionDuration).to.equal('0.4s');
  });

  it('should set transition duration 500ms', () => {
    div.className = 'transition:500ms';
    expect(div.computedStyle.transitionDuration).to.equal('0.5s');
  });

  it('should set transition property opacity', () => {
    div.className = 'transition:opacity';
    expect(div.computedStyle.transitionProperty).to.equal('opacity');
  });

  it('should set transition property transform', () => {
    div.className = 'transition:transform';
    expect(div.computedStyle.transitionProperty).to.equal('transform');
  });

  it('should set transition function ease', () => {
    div.className = 'transition:ease';
    expect(div.computedStyle.transitionTimingFunction).to.equal('ease');
  });

  it('should set transition function ease-in', () => {
    div.className = 'transition:ease-in';
    expect(div.computedStyle.transitionTimingFunction).to.equal('ease-in');
  });

  it('should set transition function ease-out', () => {
    div.className = 'transition:ease-out';
    expect(div.computedStyle.transitionTimingFunction).to.equal('ease-out');
  });

  it('should set transition function ease-in-out', () => {
    div.className = 'transition:ease-in-out';
    expect(div.computedStyle.transitionTimingFunction).to.equal('ease-in-out');
  });

  it('should set transition function easeOutQuint', () => {
    div.className = 'transition:easeOutQuint';
    expect(div.computedStyle.transitionTimingFunction).to.equal('cubic-bezier(0.23, 1, 0.32, 1)');
  });

  it('should set transition function easeInOutBack', () => {
    div.className = 'transition:easeInOutBack';
    expect(div.computedStyle.transitionTimingFunction).to.equal('cubic-bezier(0.175, 0.885, 0.32, 1.275)');
  });

  it('should set transition function easeOutQuad', () => {
    div.className = 'transition:easeOutQuad';
    expect(div.computedStyle.transitionTimingFunction).to.equal('cubic-bezier(0.25, 0.46, 0.45, 0.94)');
  });

  it('should set transition function easeOutCubic', () => {
    div.className = 'transition:easeOutCubic';
    expect(div.computedStyle.transitionTimingFunction).to.equal('cubic-bezier(0.215, 0.61, 0.355, 1)');
  });
});

