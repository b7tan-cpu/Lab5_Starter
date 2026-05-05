// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// isPhoneNumber
test('valid phone 1', () => {
  expect(isPhoneNumber('626-620-7890')).toBe(true);
});

test('valid phone 2', () => {
  expect(isPhoneNumber('911-222-3333')).toBe(true);
});

test('invalid phone 1', () => {
  expect(isPhoneNumber('123413543')).toBe(false);
});

test('invalid phone 2', () => {
  expect(isPhoneNumber('abcadsdas')).toBe(false);
});

// isEmail
test('valid email 1', () => {
  expect(isEmail('test@gmail.com')).toBe(true);
});

test('valid email 2', () => {
  expect(isEmail('a@b.com')).toBe(true);
});

test('invalid email 1', () => {
  expect(isEmail('test.com')).toBe(false);
});

test('invalid email 2', () => {
  expect(isEmail('test@')).toBe(false);
});
// isStrongPassword
test('strong password 1', () => {
  expect(isStrongPassword('Abc123')).toBe(true);
});

test('strong password 2', () => {
  expect(isStrongPassword('Xyz_789')).toBe(true);
});

test('weak password 1', () => {
  expect(isStrongPassword('1abc')).toBe(false);
});

test('weak password 2', () => {
  expect(isStrongPassword('ab')).toBe(false);
});
// isDate
test('valid date 1', () => {
  expect(isDate('09/15/1998')).toBe(true);
});

test('valid date 2', () => {
  expect(isDate('09/10/2015')).toBe(true);
});

test('invalid date 1', () => {
  expect(isDate('abcd')).toBe(false);
});

test('invalid date 2', () => {
  expect(isDate('not/a/date')).toBe(false);
});

// isHexColor
test('valid hex 1', () => {
  expect(isHexColor('#ffffff')).toBe(true);
});

test('valid hex 2', () => {
  expect(isHexColor('#123abc')).toBe(true);
});

test('invalid hex 1', () => {
  expect(isHexColor('666123abc')).toBe(false);
});

test('invalid hex 2', () => {
  expect(isHexColor('#z132465zz')).toBe(false);
});