const stringLength = require('./findLength');
const reverseString = require('./reverseString');
const arr = require('./calculator')


//Arrange
const message = {
  lengthIncorrect : 'the length is not correct',
  approvedMessage : 'Your Required string passes the test',
  stringReverse : 'your string has been reverse',
}

//Act
const test1 = stringLength('hello world');
const test2 = stringLength('my house');
const test3 = reverseString('hello');


//Assert

test(message.lengthIncorrect, () => {
  expect(test1).toBe('Length is not between 1 and 10 characters')
});

test(message.approvedMessage, () => {
  expect(test2).toBe(8);
});

test(message.stringReverse, () => {
  expect(test3).toBe('olleh');
});



describe('Calculator', () => {

  test('sum(5, 5)', () => {

    const addend1 = 5;

    const addend2 = 5;

    const expectedSum = 10;

    expect(arr.sum(addend1, addend2)).toBe(expectedSum);

  });
  test('difference(5, 5)', () => {

    const minuend = 5;

    const subtrahend = 5;

    const expectedSum = 0;

    expect(arr.difference(minuend, subtrahend)).toBe(expectedSum);

  });

  test('product(5, 5)', () => {

    const minuend = 5;

    const subtrahend = 5;

    const expectedSum = 25;

    expect(arr.product(minuend, subtrahend)).toBe(expectedSum);

  });
  test('divide(25, 5)', () => {

    const minuend = 25;

    const subtrahend = 5;

    const expectedSum = 5;

    expect(arr.divide(minuend, subtrahend)).toBe(expectedSum);

  });
});
