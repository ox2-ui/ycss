/* eslint-env mocha */
import addElement from '../../test/utils/add-element';
import { expect } from 'chai';

describe('padding', () => {
  const div = addElement('div');
  const h1 = addElement('h1');
  const ul = addElement('ul');

  describe('padding:0', () => {
    it('should set padding 0', () => {
      ul.className = 'padding:0';
      expect(h1.computedStyle.paddingTop).to.equal('0px');
      expect(h1.computedStyle.paddingRight).to.equal('0px');
      expect(h1.computedStyle.paddingBottom).to.equal('0px');
      expect(h1.computedStyle.paddingLeft).to.equal('0px');
    });

    it('should set padding-top 0', () => {
      ul.className = 'padding-t:0';
      expect(h1.computedStyle.paddingTop).to.equal('0px');
    });

    it('should set padding-right 0', () => {
      ul.className = 'padding-r:0';
      expect(h1.computedStyle.paddingRight).to.equal('0px');
    });

    it('should set padding-bottom 0', () => {
      ul.className = 'padding-b:0';
      expect(h1.computedStyle.paddingBottom).to.equal('0px');
    });

    it('should set padding-left 0', () => {
      ul.className = 'padding-l:0';
      expect(h1.computedStyle.paddingLeft).to.equal('0px');
    });

    it('should set padding-left and padding-right 0', () => {
      ul.className = 'padding-x:0';
      expect(h1.computedStyle.paddingLeft).to.equal('0px');
      expect(h1.computedStyle.paddingRight).to.equal('0px');
    });

    it('should set padding-top and padding-bottom 0', () => {
      ul.className = 'padding-y:0';
      expect(h1.computedStyle.paddingTop).to.equal('0px');
      expect(h1.computedStyle.paddingBottom).to.equal('0px');
    });
  });

  describe('padding:5', () => {
    it('should set padding 5px', () => {
      div.className = 'padding:5';
      expect(div.computedStyle.paddingTop).to.equal('5px');
      expect(div.computedStyle.paddingRight).to.equal('5px');
      expect(div.computedStyle.paddingBottom).to.equal('5px');
      expect(div.computedStyle.paddingLeft).to.equal('5px');
    });

    it('should set padding-top 5px', () => {
      div.className = 'padding-t:5';
      expect(div.computedStyle.paddingTop).to.equal('5px');
    });

    it('should set padding-right 5px', () => {
      div.className = 'padding-r:5';
      expect(div.computedStyle.paddingRight).to.equal('5px');
    });

    it('should set padding-bottom 5px', () => {
      div.className = 'padding-b:5';
      expect(div.computedStyle.paddingBottom).to.equal('5px');
    });

    it('should set padding-left 5px', () => {
      div.className = 'padding-l:5';
      expect(div.computedStyle.paddingLeft).to.equal('5px');
    });

    it('should set padding-left and padding-right 5px', () => {
      div.className = 'padding-x:5';
      expect(div.computedStyle.paddingLeft).to.equal('5px');
      expect(div.computedStyle.paddingRight).to.equal('5px');
    });

    it('should set padding-top and padding-bottom 5px', () => {
      div.className = 'padding-y:5';
      expect(div.computedStyle.paddingTop).to.equal('5px');
      expect(div.computedStyle.paddingBottom).to.equal('5px');
    });
  });

  describe('padding:7', () => {
    it('should set padding 7px', () => {
      div.className = 'padding:7';
      expect(div.computedStyle.paddingTop).to.equal('7px');
    });

    it('should set padding-top 7px', () => {
      div.className = 'padding-t:7';
      expect(div.computedStyle.paddingTop).to.equal('7px');
    });

    it('should set padding-right 7px', () => {
      div.className = 'padding-r:7';
      expect(div.computedStyle.paddingRight).to.equal('7px');
    });

    it('should set padding-bottom 7px', () => {
      div.className = 'padding-b:7';
      expect(div.computedStyle.paddingBottom).to.equal('7px');
    });

    it('should set padding-left 7px', () => {
      div.className = 'padding-l:7';
      expect(div.computedStyle.paddingLeft).to.equal('7px');
    });

    it('should set padding-left and padding-right 7px', () => {
      div.className = 'padding-x:7';
      expect(div.computedStyle.paddingLeft).to.equal('7px');
      expect(div.computedStyle.paddingRight).to.equal('7px');
    });

    it('should set padding-top and padding-bottom 7px', () => {
      div.className = 'padding-y:7';
      expect(div.computedStyle.paddingTop).to.equal('7px');
      expect(div.computedStyle.paddingBottom).to.equal('7px');
    });
  });

  describe('padding:10', () => {
    it('should set padding 10px', () => {
      div.className = 'padding:10';
      expect(div.computedStyle.paddingTop).to.equal('10px');
    });

    it('should set padding-top 10px', () => {
      div.className = 'padding-t:10';
      expect(div.computedStyle.paddingTop).to.equal('10px');
    });

    it('should set padding-right 10px', () => {
      div.className = 'padding-r:10';
      expect(div.computedStyle.paddingRight).to.equal('10px');
    });

    it('should set padding-bottom 10px', () => {
      div.className = 'padding-b:10';
      expect(div.computedStyle.paddingBottom).to.equal('10px');
    });

    it('should set padding-left 10px', () => {
      div.className = 'padding-l:10';
      expect(div.computedStyle.paddingLeft).to.equal('10px');
    });

    it('should set padding-left and padding-right 10px', () => {
      div.className = 'padding-x:10';
      expect(div.computedStyle.paddingLeft).to.equal('10px');
      expect(div.computedStyle.paddingRight).to.equal('10px');
    });

    it('should set padding-top and padding-bottom 10px', () => {
      div.className = 'padding-y:10';
      expect(div.computedStyle.paddingTop).to.equal('10px');
      expect(div.computedStyle.paddingBottom).to.equal('10px');
    });
  });

  describe('padding:10', () => {
    it('should set padding 10px', () => {
      div.className = 'padding:10';
      expect(div.computedStyle.paddingTop).to.equal('10px');
    });

    it('should set padding-top 10px', () => {
      div.className = 'padding-t:10';
      expect(div.computedStyle.paddingTop).to.equal('10px');
    });

    it('should set padding-right 10px', () => {
      div.className = 'padding-r:10';
      expect(div.computedStyle.paddingRight).to.equal('10px');
    });

    it('should set padding-bottom 10px', () => {
      div.className = 'padding-b:10';
      expect(div.computedStyle.paddingBottom).to.equal('10px');
    });

    it('should set padding-left 10px', () => {
      div.className = 'padding-l:10';
      expect(div.computedStyle.paddingLeft).to.equal('10px');
    });

    it('should set padding-left and padding-right 10px', () => {
      div.className = 'padding-x:10';
      expect(div.computedStyle.paddingLeft).to.equal('10px');
      expect(div.computedStyle.paddingRight).to.equal('10px');
    });

    it('should set padding-top and padding-bottom 10px', () => {
      div.className = 'padding-y:10';
      expect(div.computedStyle.paddingTop).to.equal('10px');
      expect(div.computedStyle.paddingBottom).to.equal('10px');
    });
  });

  describe('padding:20', () => {
    it('should set padding 20px', () => {
      div.className = 'padding:20';
      expect(div.computedStyle.paddingTop).to.equal('20px');
    });

    it('should set padding-top 20px', () => {
      div.className = 'padding-t:20';
      expect(div.computedStyle.paddingTop).to.equal('20px');
    });

    it('should set padding-right 20px', () => {
      div.className = 'padding-r:20';
      expect(div.computedStyle.paddingRight).to.equal('20px');
    });

    it('should set padding-bottom 20px', () => {
      div.className = 'padding-b:20';
      expect(div.computedStyle.paddingBottom).to.equal('20px');
    });

    it('should set padding-left 20px', () => {
      div.className = 'padding-l:20';
      expect(div.computedStyle.paddingLeft).to.equal('20px');
    });

    it('should set padding-left and padding-right 20px', () => {
      div.className = 'padding-x:20';
      expect(div.computedStyle.paddingLeft).to.equal('20px');
      expect(div.computedStyle.paddingRight).to.equal('20px');
    });

    it('should set padding-top and padding-bottom 20px', () => {
      div.className = 'padding-y:20';
      expect(div.computedStyle.paddingTop).to.equal('20px');
      expect(div.computedStyle.paddingBottom).to.equal('20px');
    });
  });

  describe('padding:40', () => {
    it('should set padding 40px', () => {
      div.className = 'padding:40';
      expect(div.computedStyle.paddingTop).to.equal('40px');
    });

    it('should set padding-top 40px', () => {
      div.className = 'padding-t:40';
      expect(div.computedStyle.paddingTop).to.equal('40px');
    });

    it('should set padding-right 40px', () => {
      div.className = 'padding-r:40';
      expect(div.computedStyle.paddingRight).to.equal('40px');
    });

    it('should set padding-bottom 40px', () => {
      div.className = 'padding-b:40';
      expect(div.computedStyle.paddingBottom).to.equal('40px');
    });

    it('should set padding-left 40px', () => {
      div.className = 'padding-l:40';
      expect(div.computedStyle.paddingLeft).to.equal('40px');
    });

    it('should set padding-left and padding-right 40px', () => {
      div.className = 'padding-x:40';
      expect(div.computedStyle.paddingLeft).to.equal('40px');
      expect(div.computedStyle.paddingRight).to.equal('40px');
    });

    it('should set padding-top and padding-bottom 40px', () => {
      div.className = 'padding-y:40';
      expect(div.computedStyle.paddingTop).to.equal('40px');
      expect(div.computedStyle.paddingBottom).to.equal('40px');
    });
  });
});
