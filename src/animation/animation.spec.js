/* eslint-env mocha */
import addElement from '../../test/utils/add-element';
import { expect } from 'chai';

describe('animation', () => {
  const div = addElement('div');

  it('should set animation duration 1s', () => {
    div.className = 'animation:1s';
    expect(div.computedStyle.animationDuration).to.equal('1s');
  });

  it('should set animation duration 2s', () => {
    div.className = 'animation:2s';
    expect(div.computedStyle.animationDuration).to.equal('2s');
  });

  it('should set animation iteration infinite', () => {
    div.className = 'animation:infinite';
    expect(div.computedStyle.animationIterationCount).to.equal('infinite');
  });

  it('should set animation function ease', () => {
    div.className = 'animation:ease';
    expect(div.computedStyle.animationTimingFunction).to.equal('ease');
  });

  it('should set animation function ease-in', () => {
    div.className = 'animation:ease-in';
    expect(div.computedStyle.animationTimingFunction).to.equal('ease-in');
  });

  it('should set animation function ease-out', () => {
    div.className = 'animation:ease-out';
    expect(div.computedStyle.animationTimingFunction).to.equal('ease-out');
  });

  it('should set animation function ease-in-out', () => {
    div.className = 'animation:ease-in-out';
    expect(div.computedStyle.animationTimingFunction).to.equal('ease-in-out');
  });

  it('should set animation name tada', () => {
    div.className = 'animation:tada';
    expect(div.computedStyle.animationName).to.equal('tada');
  });

  it('should set animation name pulse', () => {
    div.className = 'animation:pulse';
    expect(div.computedStyle.animationName).to.equal('pulse');
  });

  it('should set animation name fadeIn', () => {
    div.className = 'animation:fadeIn';
    expect(div.computedStyle.animationName).to.equal('fadeIn');
  });

  it('should set animation name fadeOut', () => {
    div.className = 'animation:fadeOut';
    expect(div.computedStyle.animationName).to.equal('fadeOut');
  });

  it('should set animation name fadeInOut', () => {
    div.className = 'animation:fadeInOut';
    expect(div.computedStyle.animationName).to.equal('fadeInOut');
  });

  it('should set animation name flash', () => {
    div.className = 'animation:flash';
    expect(div.computedStyle.animationName).to.equal('flash');
  });

  it('should set animation name fadeInOpen', () => {
    div.className = 'animation:fadeInOpen';
    expect(div.computedStyle.animationName).to.equal('fadeIn');
  });

  it('should set animation name fadeInClose', () => {
    div.className = 'animation:fadeInClose';
    expect(div.computedStyle.animationName).to.equal('fadeOut');
  });

  it('should set animation name zoomInOpen', () => {
    div.className = 'animation:zoomInOpen';
    expect(div.computedStyle.animationName).to.equal('zoomInOpen');
  });

  it('should set animation name zoomInClose', () => {
    div.className = 'animation:zoomInClose';
    expect(div.computedStyle.animationName).to.equal('zoomInClose');
  });

  it('should set animation name slideFromTopOpen', () => {
    div.className = 'animation:slideFromTopOpen';
    expect(div.computedStyle.animationName).to.equal('slideFromTopOpen');
  });

  it('should set animation name slideFromTopClose', () => {
    div.className = 'animation:slideFromTopClose';
    expect(div.computedStyle.animationName).to.equal('slideFromTopClose');
  });
});

