/* eslint-env mocha */
import addElement from '../../test/utils/add-element';
import { expect } from 'chai';

describe('margin', () => {
  const div = addElement('div');
  const h1 = addElement('h1');

  describe('margin:0', () => {
    it('should set margin 0', () => {
      h1.className = 'margin:0';
      expect(h1.computedStyle.marginTop).to.equal('0px');
    });

    it('should set margin-top 0', () => {
      h1.className = 'margin-t:0';
      expect(h1.computedStyle.marginTop).to.equal('0px');
    });

    it('should set margin-right 0', () => {
      h1.className = 'margin-r:0';
      expect(h1.computedStyle.marginRight).to.equal('0px');
    });

    it('should set margin-bottom 0', () => {
      h1.className = 'margin-b:0';
      expect(h1.computedStyle.marginBottom).to.equal('0px');
    });

    it('should set margin-left 0', () => {
      h1.className = 'margin-l:0';
      expect(h1.computedStyle.marginLeft).to.equal('0px');
    });

    it('should set margin-left and margin-right 0', () => {
      h1.className = 'margin-x:0';
      expect(h1.computedStyle.marginLeft).to.equal('0px');
      expect(h1.computedStyle.marginRight).to.equal('0px');
    });

    it('should set margin-top and margin-bottom 0', () => {
      h1.className = 'margin-y:0';
      expect(h1.computedStyle.marginTop).to.equal('0px');
      expect(h1.computedStyle.marginBottom).to.equal('0px');
    });
  });

  describe('margin:1', () => {
    it('should set margin 1', () => {
      h1.className = 'margin:1';
      expect(h1.computedStyle.marginTop).to.equal('1px');
    });

    it('should set margin-top 1', () => {
      h1.className = 'margin-t:1';
      expect(h1.computedStyle.marginTop).to.equal('1px');
    });

    it('should set margin-right 1', () => {
      h1.className = 'margin-r:1';
      expect(h1.computedStyle.marginRight).to.equal('1px');
    });

    it('should set margin-bottom 1', () => {
      h1.className = 'margin-b:1';
      expect(h1.computedStyle.marginBottom).to.equal('1px');
    });

    it('should set margin-left 1', () => {
      h1.className = 'margin-l:1';
      expect(h1.computedStyle.marginLeft).to.equal('1px');
    });

    it('should set margin-left and margin-right 1', () => {
      h1.className = 'margin-x:1';
      expect(h1.computedStyle.marginLeft).to.equal('1px');
      expect(h1.computedStyle.marginRight).to.equal('1px');
    });

    it('should set margin-top and margin-bottom 1', () => {
      h1.className = 'margin-y:1';
      expect(h1.computedStyle.marginTop).to.equal('1px');
      expect(h1.computedStyle.marginBottom).to.equal('1px');
    });
  });


  describe('margin:5', () => {
    it('should set margin 5px', () => {
      div.className = 'margin:5';
      expect(div.computedStyle.marginTop).to.equal('5px');
    });

    it('should set margin-top 5px', () => {
      div.className = 'margin-t:5';
      expect(div.computedStyle.marginTop).to.equal('5px');
    });

    it('should set margin-right 5px', () => {
      div.className = 'margin-r:5';
      expect(div.computedStyle.marginRight).to.equal('5px');
    });

    it('should set margin-bottom 5px', () => {
      div.className = 'margin-b:5';
      expect(div.computedStyle.marginBottom).to.equal('5px');
    });

    it('should set margin-left 5px', () => {
      div.className = 'margin-l:5';
      expect(div.computedStyle.marginLeft).to.equal('5px');
    });

    it('should set margin-left and margin-right 5px', () => {
      h1.className = 'margin-x:5';
      expect(h1.computedStyle.marginLeft).to.equal('5px');
      expect(h1.computedStyle.marginRight).to.equal('5px');
    });

    it('should set margin-top and margin-bottom 5px', () => {
      h1.className = 'margin-y:5';
      expect(h1.computedStyle.marginTop).to.equal('5px');
      expect(h1.computedStyle.marginBottom).to.equal('5px');
    });
  });

  describe('margin:7', () => {
    it('should set margin 7px', () => {
      div.className = 'margin:7';
      expect(div.computedStyle.marginTop).to.equal('7px');
    });

    it('should set margin-top 7px', () => {
      div.className = 'margin-t:7';
      expect(div.computedStyle.marginTop).to.equal('7px');
    });

    it('should set margin-right 7px', () => {
      div.className = 'margin-r:7';
      expect(div.computedStyle.marginRight).to.equal('7px');
    });

    it('should set margin-bottom 7px', () => {
      div.className = 'margin-b:7';
      expect(div.computedStyle.marginBottom).to.equal('7px');
    });

    it('should set margin-left 7px', () => {
      div.className = 'margin-l:7';
      expect(div.computedStyle.marginLeft).to.equal('7px');
    });

    it('should set margin-left and margin-right 7px', () => {
      h1.className = 'margin-x:7';
      expect(h1.computedStyle.marginLeft).to.equal('7px');
      expect(h1.computedStyle.marginRight).to.equal('7px');
    });

    it('should set margin-top and margin-bottom 7px', () => {
      h1.className = 'margin-y:7';
      expect(h1.computedStyle.marginTop).to.equal('7px');
      expect(h1.computedStyle.marginBottom).to.equal('7px');
    });
  });

  describe('margin:10', () => {
    it('should set margin 10px', () => {
      div.className = 'margin:10';
      expect(div.computedStyle.marginTop).to.equal('10px');
    });

    it('should set margin-top 10px', () => {
      div.className = 'margin-t:10';
      expect(div.computedStyle.marginTop).to.equal('10px');
    });

    it('should set margin-right 10px', () => {
      div.className = 'margin-r:10';
      expect(div.computedStyle.marginRight).to.equal('10px');
    });

    it('should set margin-bottom 10px', () => {
      div.className = 'margin-b:10';
      expect(div.computedStyle.marginBottom).to.equal('10px');
    });

    it('should set margin-left 10px', () => {
      div.className = 'margin-l:10';
      expect(div.computedStyle.marginLeft).to.equal('10px');
    });

    it('should set margin-left and margin-right 10px', () => {
      h1.className = 'margin-x:10';
      expect(h1.computedStyle.marginLeft).to.equal('10px');
      expect(h1.computedStyle.marginRight).to.equal('10px');
    });

    it('should set margin-top and margin-bottom 10px', () => {
      h1.className = 'margin-y:10';
      expect(h1.computedStyle.marginTop).to.equal('10px');
      expect(h1.computedStyle.marginBottom).to.equal('10px');
    });
  });

  describe('margin:20', () => {
    it('should set margin 20px', () => {
      div.className = 'margin:20';
      expect(div.computedStyle.marginTop).to.equal('20px');
    });

    it('should set margin-top 20px', () => {
      div.className = 'margin-t:20';
      expect(div.computedStyle.marginTop).to.equal('20px');
    });

    it('should set margin-right 20px', () => {
      div.className = 'margin-r:20';
      expect(div.computedStyle.marginRight).to.equal('20px');
    });

    it('should set margin-bottom 20px', () => {
      div.className = 'margin-b:20';
      expect(div.computedStyle.marginBottom).to.equal('20px');
    });

    it('should set margin-left 20px', () => {
      div.className = 'margin-l:20';
      expect(div.computedStyle.marginLeft).to.equal('20px');
    });

    it('should set margin-left and margin-right 20px', () => {
      h1.className = 'margin-x:20';
      expect(h1.computedStyle.marginLeft).to.equal('20px');
      expect(h1.computedStyle.marginRight).to.equal('20px');
    });

    it('should set margin-top and margin-bottom 20px', () => {
      h1.className = 'margin-y:20';
      expect(h1.computedStyle.marginTop).to.equal('20px');
      expect(h1.computedStyle.marginBottom).to.equal('20px');
    });
  });

  describe('margin:40', () => {
    it('should set margin 40px', () => {
      div.className = 'margin:40';
      expect(div.computedStyle.marginTop).to.equal('40px');
    });

    it('should set margin-top 40px', () => {
      div.className = 'margin-t:40';
      expect(div.computedStyle.marginTop).to.equal('40px');
    });

    it('should set margin-right 40px', () => {
      div.className = 'margin-r:40';
      expect(div.computedStyle.marginRight).to.equal('40px');
    });

    it('should set margin-bottom 40px', () => {
      div.className = 'margin-b:40';
      expect(div.computedStyle.marginBottom).to.equal('40px');
    });

    it('should set margin-left 40px', () => {
      div.className = 'margin-l:40';
      expect(div.computedStyle.marginLeft).to.equal('40px');
    });

    it('should set margin-left and margin-right 40px', () => {
      h1.className = 'margin-x:40';
      expect(h1.computedStyle.marginLeft).to.equal('40px');
      expect(h1.computedStyle.marginRight).to.equal('40px');
    });

    it('should set margin-top and margin-bottom 40px', () => {
      h1.className = 'margin-y:40';
      expect(h1.computedStyle.marginTop).to.equal('40px');
      expect(h1.computedStyle.marginBottom).to.equal('40px');
    });
  });
});
