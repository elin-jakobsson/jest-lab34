

let kalle = { name: 'Kalle', balance: 150 };
let greta = { name: 'Greta', balance: 1200 };
// exempel på användning:


function deposit(account, amount) {
	if(account.hasOwnProperty('name')){
			if( typeof account.name !== 'string' || account.name === ""){
			throw new Error(`${account.name} account.name must be a string`)
		}
	} else {
		throw new Error(`${account} missing key "name"`)
	}
	if(account.hasOwnProperty('balance')){
			if( typeof account.balance !== 'number' || account.balance === null || account.balance === NaN){
			throw new Error(`${account.balance} account.balance must be a number`)
		}
	} else {
		throw new Error(`${account} missing key "number"`)
	}

	if(typeof amount !== 'number' || amount === NaN ){
		throw new Error(`${amount} amount must be a key number`)
	}

	account.balance += amount;
}


function withdraw(account, amount) {
	if(account.hasOwnProperty('name')){
			if( typeof account.name !== 'string' || account.name === ""){
			throw new Error(`${account.name} account.name must be a string`)
		}
	} else {
		throw new Error(`${account} missing key "name"`)
	}
	if(account.hasOwnProperty('balance')){
			if( typeof account.balance !== 'number' || account.balance === null || account.balance === NaN){
			throw new Error(`${account.balance} account.balance must be a number`)
		}
	} else {
		throw new Error(`${account} missing key "number"`)
	}

	if(typeof amount !== 'number' || amount === NaN ){
		throw new Error(`${amount} amount must be a key number`)
	}

	if( amount <= 0 )
		throw new Error('Amount must be a positive number!');

	account.balance -= amount;
}

function transfer(accountSender, accountReceiver, amount) {
	if(accountSender.hasOwnProperty('name')){
			if( typeof accountSender.name !== 'string' || accountSender.name === ""){
			throw new Error(`${accountSender.name} account.name must be a string`)
		}
	} else {
		throw new Error(`${account} missing key "name"`)
	}
	if(accountSender.hasOwnProperty('balance')){
			if( typeof accountSender.balance !== 'number' || accountSender.balance === null || accountSender.balance === NaN){
			throw new Error(`${accountSender.balance} account.balance must be a number`)
		}
	} else {
		throw new Error(`${account} missing key "number"`)
	}

	if(accountReceiver.hasOwnProperty('name')){
			if( typeof accountReceiver.name !== 'string' || accountReceiver.name === ""){
			throw new Error(`${accountReceiver.name} account.name must be a string`)
		}
	} else {
		throw new Error(`${account} missing key "name"`)
	}
	if(accountReceiver.hasOwnProperty('balance')){
			if( typeof accountReceiver.balance !== 'number' || accountReceiver.balance === null || accountReceiver.balance === NaN){
			throw new Error(`${accountReceiver.balance} account.balance must be a number`)
		}
	} else {
		throw new Error(`${account} missing key "number"`)
	}

	if(typeof amount !== 'number' || amount === NaN ){
		throw new Error(`${amount} amount must be a key number`)
	}

	if( amount <= 0 )
		throw new Error('Amount must be a positive number!');

	if( accountSender.balance - amount < 0 )
		throw new Error('Sender have not that kind of money :)');

  accountSender.balance -= amount;
  accountReceiver.balance += amount;
}

// deposit(kalle, 200);
// withdraw(kalle, 150);
// transfer(kalle, greta, 400);

export {deposit, withdraw, transfer};
