// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2

describe('isPhoneNumber', () =>{
  test('valid phone number with area code (xxx) xxx-xxxx', () =>{
    expect(isPhoneNumber('(123) 456-7890')).toBe(true);
  });

  test('valid phone number without parenthesis xxx-xxx-xxxx', () =>{
    expect(isPhoneNumber('123-456-7890')).toBe(true);
  });

  test('invalid phone number with missing dashes', () =>{
    expect(isPhoneNumber('1234567890')).toBe(false);
  });

  test('invalid phone number with letters', () =>{
    expect(isPhoneNumber('fwe-vfe-wweg')).toBe(false);
  });
});

describe('isEmail', ()=>{
  test('valid email with underscore domain', ()=>{
    expect(isEmail('damian_nieto@ucsd.edu')).toBe(true);
  });

  test('valid email with .com', ()=>{
    expect(isEmail('damian_nieto@ucsd.com')).toBe(true);
  });

  test('invalid email missing @', ()=>{
    expect(isEmail('damian_nietoucsd.com')).toBe(false);
  });

  test('invalid email invalid domain ending', ()=>{
    expect(isEmail('damian_nieto@ucsd.poop')).toBe(false);
  });
});

describe('isPasswordStrong', ()=>{
  test('valid short password', ()=>{
    expect(isStrongPassword('A123')).toBe(true);
  });

  test('valid long password w/ underscore', ()=>{
    expect(isStrongPassword('OpulentOcean_1')).toBe(true);
  });

  test('invalid long password that is too long', ()=>{
    expect(isStrongPassword('OpulentOcean_12345')).toBe(false);
  });

  test('invalid long password with invalid character', ()=>{
    expect(isStrongPassword('bad@char')).toBe(false);
  });
});

describe('isDate', ()=>{

  test('valid 2-digit month and day', ()=>{
    expect(isDate('12/31/2024')).toBe(true);
  });

  
  test('valid 1-digit month and day', ()=>{
    expect(isDate('2/31/2024')).toBe(true);
  });

  test('invalid date with dots', ()=>{
    expect(isDate('2.31.2024')).toBe(false);
  });

  test('invalid date with invalid year format', ()=>{
    expect(isDate('2/31/25')).toBe(false);
  });
});

describe('isHexColor', () =>{
  test('valid 3 digit hex without #', ()=>{
    expect(isHexColor('abc')).toBe(true);
  });

  test('valid 6 digit hex with #', ()=>{
    expect(isHexColor('#123abc')).toBe(true);
  });

  test('invalid 4 digit hex ', ()=>{
    expect(isHexColor('123a')).toBe(false);
  });

  test('invalid characters in hex', ()=>{
    expect(isHexColor('#129ZXP')).toBe(false);
  });
  

});

