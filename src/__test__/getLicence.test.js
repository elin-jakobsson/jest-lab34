
import {canGetLicense} from '../getLicence.js';

describe('getLicence test suit ', ()=>{

  test('throw if licence not valid', ()=>{
    expect(()=> canGetLicense('abc',22)).toThrow();
  });

  test('throw if age not valid', ()=>{
    expect(()=> canGetLicense('A','tolv')).toThrow();
  });

  test('throw if to young for license A', ()=>{
    expect(()=> canGetLicense('A',23)).toThrow();
  });
  test('throw if to young for license B', ()=>{
    expect(()=> canGetLicense('B',17)).toThrow();
  });
  test('throw if to young for license BE', ()=>{
    expect(()=> canGetLicense('BE',17)).toThrow();
  });
  test('throw if to young for license C', ()=>{
    expect(()=> canGetLicense('C',20)).toThrow();
  });
  test('throw if to young for license D', ()=>{
    expect(()=> canGetLicense('D',23)).toThrow();
  });

  test('throw if to old for license', ()=>{
    expect(()=> canGetLicense('B',121)).toThrow();
  });
  test('the oldest age is possible', ()=>{
    expect(canGetLicense('B',120)).toBe(true);
  });

  test('old enough for A and D', ()=>{
    let actual = canGetLicense('A',24);
    expect(actual).toBe(true);
  });

  test('old enough for B and BE', ()=>{
    let actual = canGetLicense('B',18);
    expect(actual).toBe(true);
  });

  test('old enough for C', ()=>{
    let actual = canGetLicense('C',21);
    expect(actual).toBe(true);
  });
});
