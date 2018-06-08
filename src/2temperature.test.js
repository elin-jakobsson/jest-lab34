import {toFahrenheit} from './2temperature.js';

//https://github.com/jest-community/jest-extended#tobenan bra info sida


describe('test av omvandling av temperatu', () => {

  test('correct result from a number', ()=>{
    expect(toFahrenheit(5)).toBe(41)
  })

  test('below -273.15 return NaN', ()=>{
    expect(toFahrenheit(-273.16)).toBeNaN();
  })

  test('test of string "kalle" to be NaN', ()=>{
    expect(toFahrenheit('kalle')).toBeNaN();
  })

  test('test infinity to be NaN', ()=>{
    expect(toFahrenheit(Number.POSITIVE_INFINITY)).toBeNaN();
  })

  test('test null to be NaN', ()=>{
    expect(toFahrenheit(null)).toBeNaN();
  })

  test('test undefined to be NaN', ()=>{
    expect(toFahrenheit()).toBeNaN();
  })



})
