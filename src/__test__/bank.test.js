import {deposit, withdraw, transfer } from '../bank.js';


describe('test of bank system deposit ', ()=>{

  test('check if amount is added with sideeffect',()=>{
    let kalle = {
      name: "kalle",
      balance: 1200
    }
    let amount = 1000;
    let expectValue = {...kalle, balance: kalle.balance + amount }
    deposit(kalle, amount);
    expect(kalle).toEqual(expectValue);
  })

  test('throw if account dosent contain key of name', ()=> {
    let kalle = {
        balance: 1200
      }
    let amount = 1000;
    expect( ()=>{deposit(kalle, amount)}).toThrowError(Error);
  })

  test('throw if account.name is not a valid string', ()=> {
    let kalle = {
        balance: 1200
    }
    let amount = 1000;
    expect( ()=>{deposit()}).toThrowError(Error);
    expect( ()=>{deposit( null , amount)}).toThrowError(Error);
    expect( ()=>{deposit( [] , amount)}).toThrowError(Error);
    expect( ()=>{deposit( {name: "", balance: 1200}, amount)}).toThrowError(Error);
    expect( ()=>{deposit( {name: {}, balance: 1200}, amount)}).toThrowError(Error);
    expect( ()=>{deposit( {name: null, balance: 1200}, amount)}).toThrowError(Error);
    expect( ()=>{deposit( {name: undefined, balance: 1200}, amount)}).toThrowError(Error);
  })

  test('check if account.balance is not empty or is not a number', ()=> {
    let kalle = {
        balance: 1200
    }
    let amount = 1000;
    expect( ()=>{deposit( {name: "kalle", balance: ""  }, amount)} ).toThrowError(Error);
     expect( ()=>{deposit( {name: "kalle", balance: {} }, amount)} ).toThrowError(Error);
    expect( ()=>{deposit( {name: "kalle", balance: null }, amount)} ).toThrowError(Error);
    expect( ()=>{deposit( {name: "kalle", balance: undefined }, amount)} ).toThrowError(Error);
  })

  test('check if amount is a number and not NaN', ()=> {

    let amount = 1000;
    expect( ()=>{deposit( {name: "kalle", balance: 1200 }, "" )} ).toThrowError(Error);
    expect( ()=>{deposit( {name: "kalle", balance: 1200 }, [] )} ).toThrowError(Error);
    expect( ()=>{deposit( {name: "kalle", balance: 1200 }, undefined )} ).toThrowError(Error);
    expect( ()=>{deposit( {name: "kalle", balance: 1200 }, null )} ).toThrowError(Error);
  })

})



describe('test of bank system withdraw ', ()=>{
  test('check if amount is added with sideeffect',()=>{
    let kalle = {
      name: "kalle",
      balance: 1200
    }

    let amount = 1000;
    let expectValue = {...kalle, balance: kalle.balance - amount }
    withdraw(kalle, amount);
    expect(kalle).toEqual(expectValue);
  })

  test('check if account dosent contain key of name', ()=> {
    let kalle = {
        balance: 1200
      }
    let amount = 1000;
    expect( ()=>{withdraw(kalle, amount)}).toThrowError(Error);
  })

  test('check if account.name is not a empty string or is string', ()=> {
    let kalle = {
        balance: 1200
    }
    let amount = 1000;
    expect( ()=>{withdraw( null , amount)}).toThrowError(Error);
    expect( ()=>{withdraw( [] , amount)}).toThrowError(Error);
    expect( ()=>{withdraw( {name: "", balance: 1200}, amount)}).toThrowError(Error);
    expect( ()=>{withdraw( {name: {}, balance: 1200}, amount)}).toThrowError(Error);
    expect( ()=>{withdraw( {name: null, balance: 1200}, amount)}).toThrowError(Error);
    expect( ()=>{withdraw( {name: undefined, balance: 1200}, amount)}).toThrowError(Error);
  })

  test('check if account.balance is not a empty or is not a number', ()=> {
    let kalle = {
        balance: 1200
    }
    let amount = 1000;
    expect( ()=>{withdraw( {name: "kalle", balance: "" }, amount)} ).toThrowError(Error);
    expect( ()=>{withdraw( {name: "kalle", balance: {} }, amount)} ).toThrowError(Error);
    expect( ()=>{withdraw( {name: "kalle", balance: null }, amount)} ).toThrowError(Error);
    expect( ()=>{withdraw( {name: "kalle", balance: undefined }, amount)} ).toThrowError(Error);
  })

  test('check if amount is a number and not NaN', ()=> {

    let amount = 1000;
    expect( ()=>{withdraw( {name: "kalle", balance: 1200 }, "" )} ).toThrowError(Error);
    expect( ()=>{withdraw( {name: "kalle", balance: 1200 }, [] )} ).toThrowError(Error);
    expect( ()=>{withdraw( {name: "kalle", balance: 1200 }, undefined )} ).toThrowError(Error);
    expect( ()=>{withdraw( {name: "kalle", balance: 1200 }, null )} ).toThrowError(Error);
  });

  test('throw if trying to witdraw more than existing balance', ()=>{
    expect(()=> {withdraw({name: "kalle", balance: 1200 },1300 )}).toThrow();
});

  test('throw if amount is negative in withdraw', ()=>{

      expect(()=> {withdraw({name: "kalle", balance: 1200 },-10 )}).toThrow();
  });

})

describe('test of bank system transfer ', ()=>{
  test('check if amount is transferd from and to',()=>{
    let kalle = {
      name: "kalle",
      balance: 1200
    }
    let bert = {
      name: "bert",
      balance: 1000
    }
    let amount = 1000;

    let expectFromValue = {...kalle, balance: kalle.balance - amount }
    let expectToValue = {...bert, balance: bert.balance + amount }
    transfer(kalle,bert, amount);
    expect(kalle).toEqual(expectFromValue);
    expect(bert).toEqual(expectToValue);

  })

  test('check if amount is avavible ',()=>{
    let kalle = {
      name: "kalle",
      balance: 1200
    }
    let bert = {
      name: "bert",
      balance: 1000
    }
    let amount = 1201;
    let amount2 = 1200;
    expect( () => transfer(kalle,bert, amount) ).toThrowError(Error);

    transfer(kalle,bert, amount2);

    expect(kalle).toEqual({name:"kalle", balance: 0});
    expect(bert).toEqual({name:"bert", balance: 2200});
  })

  test('check if account dosent contain key of name', ()=> {
    let kalle = {
        balance: 1200
      }
    let bert = {
      name: "bert",
      balance: 1000
    }
    let amount = 1000;
    expect( ()=>{transfer(kalle, bert , amount)}).toThrowError(Error);
  })

  test('check if account.name is not a empty string or is string', ()=> {
    let kalle = {
        balance: 1200
    }
    let bert = {
      name: "bert",
      balance: 1000
    }
    let amount = 1000;
    expect( ()=>{transfer( null , amount)}).toThrowError(Error);
    expect( ()=>{transfer( [] , amount)}).toThrowError(Error);
    expect( ()=>{transfer( {name: "", balance: 1200},bert , amount)}).toThrowError(Error);
    expect( ()=>{transfer( {name: {}, balance: 1200},bert , amount)}).toThrowError(Error);
    expect( ()=>{transfer( {name: null, balance: 1200},bert , amount)}).toThrowError(Error);
    expect( ()=>{transfer( {name: undefined, balance: 1200},bert , amount)}).toThrowError(Error);
  })

  test('check if account.balance is not a empty or is not a number', ()=> {
    let kalle = {
        balance: 1200
    }
    let bert = {
      name: "bert",
      balance: 1000
    }
    let amount = 1000;
    expect( ()=>{transfer( {name: "kalle", balance: "" },bert , amount)} ).toThrowError(Error);
    expect( ()=>{transfer( {name: "kalle", balance: {} },bert , amount)} ).toThrowError(Error);
    expect( ()=>{transfer( {name: "kalle", balance: null },bert , amount)} ).toThrowError(Error);
    expect( ()=>{transfer( {name: "kalle", balance: undefined },bert , amount)} ).toThrowError(Error);
  })

  test('check if amount is a number and not NaN', ()=> {
    let bert = {
      name: "bert",
      balance: 1000
    }
    let amount = 1000;
    expect( ()=>{transfer( {name: "kalle", balance: 1200 },bert, "" )} ).toThrowError(Error);
    expect( ()=>{transfer( {name: "kalle", balance: 1200 },bert, [] )} ).toThrowError(Error);
    expect( ()=>{transfer( {name: "kalle", balance: 1200 },bert, undefined )} ).toThrowError(Error);
    expect( ()=>{transfer( {name: "kalle", balance: 1200 },bert, null )} ).toThrowError(Error);
  });

  test('throw if amount is negative in transfer', ()=>{
    let bert = {
      name: "bert",
      balance: 1000
    }
      expect(()=> {transfer( {name: "kalle", balance: 1200 },bert, -100 )}  ).toThrow();
  });

})
