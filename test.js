const stringLength = require('./lenght');


//Arrange
const message = {
  lengthIncorrect : 'the length is not correct',
  isNotNumber : 'The output should be the length of the word',
  isNotInRange : 'The output should be "the length is not between 1 and 10"',
  isNotInReverse : 'the string is not in reverse order',
}

//Act
const test1 = stringLength('hello world');
const test2 = stringLength('my house');
const test3 = stringLength('1234567890');
const test4 = stringLength('0');
const test5 = stringLength('');
const test6 = stringLength('Im creating my first test on Microverse program');

//Assert

test(message.lengthIncorrect, () => {
  expect(test1.toBe(11))
});

test(message.lengthIncorrect, () => {
  expect(test2.toBe(8))
});

test(message.isNotNumber, () => {
  expect(test3.toBe(10))
});

test(message.isNotNumber, () => {
  expect(test4.toBe(1))
});

test(message.isNotInRange, () => {
  expect(test5.toBe('the length is not between 1 and 10'))
});

test(message.isNotInRange, () => {
  expect(test6.toBe('the length is not between 1 and 10'))
});
