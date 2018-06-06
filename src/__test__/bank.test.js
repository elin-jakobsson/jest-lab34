
import {bankfunktion,deposit,withdraw,amountValid, accountValid} from '../bank.js';

// infinity
// -value
describe('bank test suit', ()=>{
  // amount
  test('amount is a number', ()=>{
      let actual = amountValid(10); // lägger till kalle värde 160
      expect(actual).toBe(true);
  });
  test('amount is a convertable string', ()=>{
      let actual = amountValid('10') // lägger till kalle värde 170
      expect(actual).toBe(true);
  });
  test('throw if amount is not a valid number', ()=>{
    expect(()=> amountValid('två')).toThrow();
  });

  test('throw if amount is undefined', ()=>{
    expect(()=> amountValid(undefined)).toThrow();
  });

  test('throw if amount is infinity', ()=>{
    expect(()=> amountValid(Infinity)).toThrow();
  });

  test('throw if amount is negative', ()=>{
    expect(()=> amountValid(-2)).toThrow();
  });

  // account
  test('account exist', ()=>{
      let actual = accountValid('kalle'); // lägger till kalle värde 180
      expect(actual).toBe(true);
  });

  test('throw if account do not exist', ()=>{
      expect(()=> accountValid('alice')).toThrow();
  });

  test('throw if account is undefined', ()=>{
      expect(()=> accountValid(undefined)).toThrow();
  });

  test('throw if account is emty string', ()=>{
      expect(()=> accountValid('')).toThrow();
  });

  // deposit
  test('deposit adds to balance',()=>{
    let actual = deposit('greta', 50);
    console.log(actual);
    expect(actual).toBe(1250);
  });

  test('deposit never returns a value less then original balance',()=>{
    let actual = deposit('greta', 50);
    console.log(actual);
    expect(actual).toBeGreaterThan(1200);
  });

  test('throw if amount is negative in deposit', ()=>{
      expect(()=> deposit('greta', -10)).toThrow();
  });


  // withdraw
  test('whitdraw takes away from balance',()=>{
    let actual = withdraw('greta', 50);
    console.log(actual);
    expect(actual).toBe(1250);
  });

  test('whitdraw never returns a value bigger then original balance',()=>{
    let actual = withdraw('greta', 50);
    console.log(actual);
    expect(actual).toBeLessThan(1250);
  });

  test('throw if amount is negative in withdraw', ()=>{
      expect(()=> withdraw('greta', -10)).toThrow();
  });

  test('throw if trying to witdraw more than existing balance', ()=>{
      expect(()=> withdraw('greta', 1400)).toThrow();
  });

  //transfer
  test('sckjdnc', ()=>{

  });


});
