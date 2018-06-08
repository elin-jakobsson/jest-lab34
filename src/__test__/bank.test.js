
import {deposit,withdraw,transfer,amountValid, accountValid} from '../bank.js';


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
      let obj = {kalle:{name: 'Kalle', balance: 150 }}
      let actual = accountValid(obj,'kalle'); // lägger till kalle värde 180
      expect(actual).toBe(true);
  });

  test('throw if account do not exist', ()=>{
      let obj = {kalle:{name: 'Kalle', balance: 150 }}
      expect(()=> accountValid(obj,'alice')).toThrow();
  });

  test('throw if account is undefined', ()=>{
      let obj = {kalle:{name: 'Kalle', balance: 150 }}
      expect(()=> accountValid(obj,undefined)).toThrow();
  });

  test('throw if account is emty string', ()=>{
      let obj = {kalle:{name: 'Kalle', balance: 150 }}
      expect(()=> accountValid(obj,'')).toThrow();
  });


  // deposit
  test('deposit succssesfully adds to balance',()=>{
    let obj = {greta:{name: 'Greta', balance: 200 }}
    deposit(obj,'greta', 50);
    expect(obj.greta.balance).toBe(250);
  });

  test('deposit never returns a value less then what was added to balance',()=>{
    let obj = {greta:{name: 'Greta', balance: 200 }}
    deposit(obj,'greta', 50);
    expect(obj.greta.balance).toBeGreaterThan(249);
    expect(obj.greta.balance).toBeGreaterThan(200);
  });

  test('throw if amount is negative in deposit', ()=>{
      let obj = {greta:{name: 'Greta', balance: 200 }}
      expect(()=> deposit(obj,'greta', -10)).toThrow();
  });

  test('throw if deposit is unsuccssesfull because of invalid account',()=>{
    let obj = {greta:{name: 'Greta', balance: 200 }}
    expect(()=> deposit(obj,'lisa', 10)).toThrow();
  });


  // withdraw
  test('whitdraw succssesfully takes away from balance',()=>{
    let obj = {greta:{name: 'Greta', balance: 200 }}
    withdraw(obj,'greta', 50);
    expect(obj.greta.balance).toBe(150);
  });

  test('whitdraw never returns a value bigger than what was whitdrawn from balance',()=>{
    let obj = {greta:{name: 'Greta', balance: 200 }}
    withdraw(obj,'greta', 50);
    expect(obj.greta.balance).toBeLessThan(200);
    expect(obj.greta.balance).toBeLessThan(151);
  });

  test('throw if amount is negative in withdraw', ()=>{
      let obj = {greta:{name: 'Greta', balance: 200 }}
      expect(()=> withdraw(obj,'greta', -10)).toThrow();
  });

  test('throw if trying to witdraw more than existing balance', ()=>{
      let obj = {greta:{name: 'Greta', balance: 200 }}
      expect(()=> withdraw(obj,'greta', 1400)).toThrow();
  });

  test('throw if witdraw is unsuccssesfull because of invalid account',()=>{
    let obj = {greta:{name: 'Greta', balance: 200 }}
    expect(()=> withdraw(obj,'lisa', 10)).toThrow();
  });


 //transfer
 test('transfer was succssesfull',()=>{
   let obj = {kalle:{name: 'Kalle', balance: 150 },greta: { name: 'Greta', balance: 200 }}
   transfer(obj,'greta','kalle',100);
   expect(obj.greta.balance).toBe(100);
   expect(obj.kalle.balance).toBe(250);
 });

 test('throw if trying to transfer more than existing balance on sender account', ()=>{
     let obj = {kalle:{name: 'Kalle', balance: 150 },greta: { name: 'Greta', balance: 200 }};
     expect(()=> transfer(obj,'greta','kalle',250)).toThrow();
 });

 test('throw if amount is negative in withdraw',()=>{
   let obj = {kalle:{name: 'Kalle', balance: 150 },greta: { name: 'Greta', balance: 200 }}
   expect(()=> transfer(obj,'greta','kalle', -10)).toThrow();
 });

 test('throw if transfer is unsuccssesfull because of invalid account',()=>{
   let obj = {kalle:{name: 'Kalle', balance: 150 },greta: { name: 'Greta', balance: 200 }}
   expect(()=> transfer(obj,'lisa','kalle', 10)).toThrow();
 });


});
