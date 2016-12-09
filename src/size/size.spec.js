/* eslint-env mocha */
import addElement from '../../test/utils/add-element';
import { expect } from 'chai';

describe('size', () => {
  const p = addElement('p');

  it('should set size 7', () => {
    p.className = 'size:7';
    expect(p.computedStyle.fontSize).to.equal('7px');
  });

  it('should set size 8', () => {
    p.className = 'size:8';
    expect(p.computedStyle.fontSize).to.equal('8px');
  });

  it('should set size 9', () => {
    p.className = 'size:9';
    expect(p.computedStyle.fontSize).to.equal('9px');
  });

  it('should set size 10', () => {
    p.className = 'size:10';
    expect(p.computedStyle.fontSize).to.equal('10px');
  });

  it('should set size 11', () => {
    p.className = 'size:11';
    expect(p.computedStyle.fontSize).to.equal('11px');
  });

  it('should set size 12', () => {
    p.className = 'size:12';
    expect(p.computedStyle.fontSize).to.equal('12px');
  });

  it('should set size 13', () => {
    p.className = 'size:13';
    expect(p.computedStyle.fontSize).to.equal('13px');
  });

  it('should set size 14', () => {
    p.className = 'size:14';
    expect(p.computedStyle.fontSize).to.equal('14px');
  });

  it('should set size 15', () => {
    p.className = 'size:15';
    expect(p.computedStyle.fontSize).to.equal('15px');
  });

  it('should set size 16', () => {
    p.className = 'size:16';
    expect(p.computedStyle.fontSize).to.equal('16px');
  });

  it('should set size 17', () => {
    p.className = 'size:17';
    expect(p.computedStyle.fontSize).to.equal('17px');
  });

  it('should set size 18', () => {
    p.className = 'size:18';
    expect(p.computedStyle.fontSize).to.equal('18px');
  });

  it('should set size 19', () => {
    p.className = 'size:19';
    expect(p.computedStyle.fontSize).to.equal('19px');
  });

  it('should set size 20', () => {
    p.className = 'size:20';
    expect(p.computedStyle.fontSize).to.equal('20px');
  });

  it('should set size 21', () => {
    p.className = 'size:21';
    expect(p.computedStyle.fontSize).to.equal('21px');
  });

  it('should set size 22', () => {
    p.className = 'size:22';
    expect(p.computedStyle.fontSize).to.equal('22px');
  });

  it('should set size 23', () => {
    p.className = 'size:23';
    expect(p.computedStyle.fontSize).to.equal('23px');
  });

  it('should set size 24', () => {
    p.className = 'size:24';
    expect(p.computedStyle.fontSize).to.equal('24px');
  });

  it('should set size 25', () => {
    p.className = 'size:25';
    expect(p.computedStyle.fontSize).to.equal('25px');
  });

  it('should set size 30', () => {
    p.className = 'size:30';
    expect(p.computedStyle.fontSize).to.equal('30px');
  });

  it('should set size 35', () => {
    p.className = 'size:35';
    expect(p.computedStyle.fontSize).to.equal('35px');
  });

  it('should set size 40', () => {
    p.className = 'size:40';
    expect(p.computedStyle.fontSize).to.equal('40px');
  });

  it('should set line-height 100%', () => {
    p.className = 'size:10 line-h:100p';
    expect(p.computedStyle.lineHeight).to.equal('10px');
  });

  it('should set line-height 105%', () => {
    p.className = 'size:10 line-h:105p';
    expect(p.computedStyle.lineHeight).to.equal('10.5px');
  });

  it('should set line-height 110%', () => {
    p.className = 'size:10 line-h:110p';
    expect(p.computedStyle.lineHeight).to.equal('11px');
  });

  it('should set line-height 115%', () => {
    p.className = 'size:10 line-h:115p';
    expect(p.computedStyle.lineHeight).to.equal('11.5px');
  });

  it('should set line-height 120%', () => {
    p.className = 'size:10 line-h:120p';
    expect(p.computedStyle.lineHeight).to.equal('12px');
  });

  it('should set line-height 125%', () => {
    p.className = 'size:10 line-h:125p';
    expect(p.computedStyle.lineHeight).to.equal('12.5px');
  });

  it('should set line-height 130%', () => {
    p.className = 'size:10 line-h:130p';
    expect(p.computedStyle.lineHeight).to.equal('13px');
  });
});

