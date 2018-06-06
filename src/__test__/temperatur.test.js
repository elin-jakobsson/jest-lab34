
import {toFahrenheit} from '../temperatur.js';

describe('celcius to Fahrenheit test suit', ()=>{

  test('it is a valid number', ()=>{
    let param = toFahrenheit('300');
    let actual = isNaN(param);
    let expected = false;
    expect(actual).toBe(expected);
  });
  test('a lower value than -273.15 gives NaN',()=>{
    let far = toFahrenheit(-300);
    let actual = isNaN(far);
    let expected = true;
    expect(actual).toBe(expected);
  });
  test('a string gives NaN',()=>{
    let far = toFahrenheit('abc');
    let actual = isNaN(far);
    let expected = true;
    expect(actual).toBe(expected);
  });

  test('Infinity gives NaN',()=>{
    let far = toFahrenheit(Infinity);
    let actual = isNaN(far);
    let expected = true;
    expect(actual).toBe(expected);
  });

  test('undefined gives NaN',()=>{
    let far = toFahrenheit('');
    // console.log(far);
    let actual = isNaN(far);
    let expected = true;
    expect(actual).toBe(expected);
  });
});
