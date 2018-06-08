
import {toFahrenheit} from '../2temperature.js';

describe('celcius to Fahrenheit test suit', ()=>{

  test('it is a valid number', ()=>{
    let param = toFahrenheit(300);
    expect(isNaN(param)).toBe(false);
  });

  test('it is a convertable string number', ()=>{
    let param = toFahrenheit('300');
    expect(isNaN(param)).toBe(false);
  });

  test('correct result from a number', ()=>{
    expect(toFahrenheit(5)).toBe(41)
  });

  test('a lower value than -273.15 gives NaN',()=>{
    let actual = toFahrenheit(-273.16);
    expect(actual).toBeNaN();
  });

  test('a string gives NaN',()=>{
    let actual = toFahrenheit('abc');
    expect(actual).toBeNaN();
  });

  test('Infinity gives NaN',()=>{
    let actual = toFahrenheit(Infinity);
    expect(actual).toBeNaN();
  });

  test('emty string gives NaN',()=>{
    let actual = toFahrenheit('');
    expect(actual).toBeNaN();
  });

  test('undefined gives NaN',()=>{
    let actual = toFahrenheit(undefined);
    expect(actual).toBeNaN();
  });

  test('null gives NaN',()=>{
    let actual = toFahrenheit(null);
    expect(actual).toBeNaN();
  });
});
