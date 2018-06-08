import {canGetLicense } from '../2drivinglicense.js';

const A = "A";
const B  = "B";
const BE = "BE"
const C = "C";
const D = "D";
let x;


describe('Test av funktion för körkort, returnerar en bool alternativt en throw', () => {

  test('33år och A skall retunera true', () => {
    expect(canGetLicense(A,33)).toBe(true);
  });

  test('saknar inparameter för ålder', () => {
    expect( ()=>{canGetLicense(B)}).toThrowError(Error);
  });

  test('för hög ålder', () => {
    expect( ()=>{canGetLicense(B,121)}).toThrowError(Error);
  });

  test('inparameter null', () => {
    expect( ()=>{canGetLicense(null,35)}).toThrowError(Error);
  });

  test('inparameter null och undefined', () => {

    expect( ()=>{canGetLicense(x, null)}).toThrowError(Error);
  });

  test('drivinglicense type A and age 24. returns true', () => {
    expect(canGetLicense(A, 24)).toBe(true);
  });

  test('drivinglicense type A and age 23. returns false', () => {
    expect(canGetLicense(A, 23)).toBe(false);
  });

  test('drivinglicense type f and age 35. Expect throw error', () => {
    expect( ()=>{canGetLicense("f",35)}).toThrowError(Error);
  });

  test('drivinglicense type string smal letter a and age 35. returns true', () => {
    expect(canGetLicense("a",35)).toBe(true);
  });

  test('drivinglicense wrong type', () => {
    expect( ()=>{canGetLicense(3,33)}).toThrowError(Error);
  });

  test('age wrong type', () => {
    expect( ()=>{canGetLicense(A,"hello")}).toThrowError(Error);
  });

  test('license is a object, wrong type', () => {
    expect( ()=>{canGetLicense({name:"hello"},35)}).toThrowError(Error);
  });
});
