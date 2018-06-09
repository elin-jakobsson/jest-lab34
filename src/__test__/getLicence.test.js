
import {canGetLicense } from '../drivinglicense.js';

describe('getLicence test suit ', ()=>{

  test('throw if licence not valid', ()=>{
    expect(()=> canGetLicense('abc',22)).toThrow();
  });

  test('throw if licence undefined', ()=>{
    expect(()=> canGetLicense(undefined,22)).toThrow();
  });

  test('throw if licence null', ()=>{
    expect(()=> canGetLicense(null,22)).toThrow();
  });

  test('throw if licence is emty string', ()=>{
    expect(()=> canGetLicense('',22)).toThrow();
  });

  test('throw if licence is object or list', ()=>{
    expect(()=> canGetLicense({name:'lisa', age:45},22)).toThrow();
  });

  test('throw if licence is NaN', ()=>{
    expect(()=> canGetLicense(NaN,22)).toThrow();
  });

  test('throw if age not valid', ()=>{
    expect(()=> canGetLicense('B','tolv')).toThrow();
  });

  test('throw if age undefined', ()=>{
    expect(()=> canGetLicense('B',undefined)).toThrow();
  });

  test('throw if age null', ()=>{
    expect(()=> canGetLicense('B',null)).toThrow();
  });

  test('throw if age is emty string', ()=>{
    expect(()=> canGetLicense('A','')).toThrow();
  });

  test('throw if age is object or list', ()=>{
    expect(()=> canGetLicense('A',{name:'lisa', age:45})).toThrow();
  });

  test('throw if age is NaN', ()=>{
    expect(()=> canGetLicense('B',NaN)).toThrow();
  });

  test('throw if age not valid', ()=>{
    expect(()=> canGetLicense('A','tolv')).toThrow();
  });



  test('false if to young for license A', ()=>{
    expect(canGetLicense('A',23)).toBe(false);
  });

  test('false if to young for license B', ()=>{
    expect(canGetLicense('B',17)).toBe(false);
  });

  test('false if to young for license BE', ()=>{
    expect(canGetLicense('BE',17)).toBe(false);
  });

  test('false if to young for license C', ()=>{
    expect(canGetLicense('C',20)).toBe(false);
  });

  test('false if to young for license D', ()=>{
    expect(canGetLicense('D',23)).toBe(false);
  });

  test('throw if to old for license', ()=>{
    expect(()=>canGetLicense('B',121)).toThrow();
  });
  test('the oldest age is possible', ()=>{
    expect(canGetLicense('B',120)).toBe(true);
  });

  test('old enough for A', ()=>{
    let actual = canGetLicense('A',24);
    expect(actual).toBe(true);
  });

  test('old enough for B', ()=>{
    let actual = canGetLicense('B',18);
    expect(actual).toBe(true);
  });

  test('old enough for BE', ()=>{
    expect(canGetLicense('BE',18)).toBe(true);
  });

  test('old enough for C', ()=>{
    let actual = canGetLicense('C',21);
    expect(actual).toBe(true);
  });

  test('old enough for D', ()=>{
    let actual = canGetLicense('D',24);
    expect(actual).toBe(true);
  });
});
