let expect = require('chai').expect;

function sum(arr) {
    let sum = 0;
    for (let num of arr)
        sum += Number(num);
    return sum;
}


describe('Test of function summing an array', function() {
    it('Two positive numbers', function() {
        expect(sum([1, 2])).to.be.equal(3);
    });
    it('Empty array', function() {
        expect(sum([])).to.be.equal(0);
    });
    it('Array of one string', function() {
        expect(sum(['string'])).to.be.equal(NaN);
    });
    it('One negative number', function() {
        expect(sum([-2])).to.be.equal(-2);
    })
});