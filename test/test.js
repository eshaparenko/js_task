const assert = require('assert');
const  { containsCommonItem } = require('../containsCommonItem')

const arr1 = ['a', 'b', 'c', 'x']
const arr2 = ['z', 'y', 'c']

const arr3 = ['a', 'b', 'c', 'x']
const arr4 = ['y', 'z', 'q']

describe('Contains common', () => {
    it('should return - true', () => {
      assert.equal(containsCommonItem(arr1, arr2), true);
    });

    it('should return - false', () => {
      assert.equal(containsCommonItem(arr3, arr4), false);  
    });

    it('undefined should return - false', () => {
      assert.equal(containsCommonItem(), false);
    });
});