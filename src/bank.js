

// let kalle = { name: 'Kalle', balance: 150 };
// let greta = { name: 'Greta', balance: 1200 };
var accountDatabase = {
  kalle:{name: 'Kalle', balance: 150 },
  greta: { name: 'Greta', balance: 1200 }
}

function amountValid(amount){
  if (isNaN(amount)) {
    throw new Error('The given amount is not a valid number');
    return false;
  }else if (isFinite(amount)===false) {
    throw new Error('The given amount can not be Infinity');
    return false;
  }else if (amount < 0) {
    throw new Error('The given amount can not be a negative value');
    return false;
  }else {
    return true;
  }
} //amountValid

function accountValid(account){
  if (accountDatabase.hasOwnProperty(account)) {
    return true;
  } else if (account === undefined) {
    throw new Error('The given account returns undefined');
    return false;
  } else if (account === '') {
    throw new Error('The given account is a emty string');
    return false;
  }else {
    throw new Error('The given account is not a valid account');
    return false;
  }
} //accountValid

function deposit(account, amount) {

  let trueAccount = false;
  let trueAmount = false;

  trueAccount= accountValid(account);
  trueAmount= amountValid(amount);

  if (trueAccount && trueAmount) {
    let num = amount;
      if(typeof num === 'string'){
       num = Number(amount)
      }
      if (num > 0) {
        accountDatabase[account].balance += num;
        return true;
      }else {
        throw new Error('you cant add a negative value in deposit');
        return false;
      }
  }else {
    throw new Error('the action to deposit was not succssesfull');
    return false;
  }
} // deposit

function withdraw(account, amount) {
  let trueAccount = false;
  let trueAmount = false;

  trueAccount= accountValid(account);
  trueAmount= amountValid(amount);

  if (trueAccount && trueAmount) {
    let num = amount;
      if(typeof num === 'string'){
       num = Number(amount)
      }
      if (num < 0) {
        throw new Error('you cant withdraw a negative value in withdraw');
        return false;
      }
      if (num > accountDatabase[account].balance) {
        throw new Error('You cant withdraw more than you have on the acount');
        return false;
      } else {
        accountDatabase[account].balance -= num;
        return true;
      }
  }else {
    throw new Error('the action to witdraw was not succssesfull');
    return false;
  }
} // withdraw

function transfer(accountSender, accountReceiver, amount) {
  let trueAccount = false;
  let secondTrueAccount = false;
  let trueAmount = false;

  trueAccount= accountValid(accountSender);
  secondTrueAccount = accountValid(accountReceiver);
  trueAmount= amountValid(amount);

  if (trueAccount && secondTrueAccount && trueAmount) {
    let num = amount;
      if(typeof num === 'string'){
       num = Number(amount)
      }
      if (num < 0) {
        throw new Error('you cant transfer a negative value in transfer');
        return false;
      }
      if (num > accountDatabase[accountSender].balance) {
        throw new Error('You cant transfer more than you have on the account');
        return false;
      } else {
        accountDatabase[accountSender].balance -= num;
        accountDatabase[accountReceiver].balance += num;
         return true;
      }
  }else {
    throw new Error('the action to transfer was not succssesfull');
    return false;
  }

} //transfer

export {deposit,withdraw, transfer,amountValid, accountValid};



// Tänk dig att någon har skrivit ett betalningssystem för en bank. Dessvärre tänkte inte första utvecklaren på att använda TDD,
//  så det finns inga testfall. Din uppgift är att skriva testfall för alla tre funktionerna i koden nedan. Observera att första
//  utvecklaren var en total noob, så det kan finnas buggar i koden. På VG-nivå ska du dessutom skriva klart funktionerna och
//  rätta felen.
//
// Allmänt gäller att om funktionerna anropas med tillåtna värden på sina parametrar så ska de åstadkomma side effects på
// parametrarna. Funktionerna ska inte returnera något.
//
// Men om man försöker ta ut eller överföra mer pengar än det finns på kontot, då ska funktionen kasta ett Error.



// ORGINAL KOD
// let kalle = { name: 'Kalle', balance: 150 };
// let greta = { name: 'Greta', balance: 1200 };
// // exempel på användning:
// deposit(kalle, 200);
// withdraw(kalle, 150);
// transfer(kalle, greta, 400);
//
// function deposit(account, amount) {
// 	account.balance += amount;
// }
// function withdraw(account, amount) {
// 	if( amount <= 0 )
// 		throw new Error('Amount must be a positive number!');
// 	account.balance -= amount;
// }
// function transfer(accountSender, accountReceiver, amount) {
// 	if( (typeof accountReceiver.balance) !== 'number'
//  			|| accountReceiver.balance
// 	throw new Error('');
// accountSender.balance -= amount;
// }
