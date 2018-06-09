

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
			if( isNaN(account.balance) || account.balance === null || (isFinite(account.balance)===false) || account.balance === ""){
			throw new Error(`${account.balance} account.balance must be a number`)
		}
	} else {
		throw new Error(`${account} missing key "number"`)
	}

	if( isNaN(amount) || amount === null || (isFinite(amount)===false) || amount === "" || (typeof amount === 'object')){
		throw new Error(`${amount} amount must be a valid number`)
	}

	if (amount < 0) {
		throw new Error('you cant deposit a negative value in deposit');
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
			if( isNaN(account.balance) || account.balance === null || (isFinite(account.balance)===false) || account.balance === ""){
			throw new Error(`${account.balance} account.balance must be a number`)
		}
	} else {
		throw new Error(`${account} missing key "number"`)
	}

	if( isNaN(amount) || amount === null || (isFinite(amount)===false) || amount === "" || (typeof amount === 'object')){
		throw new Error(`${amount} amount must be a valid number`)
	}

	if (amount < 0) {
		throw new Error('you cant withdraw a negative value in withdraw');
	}

	if (amount > account.balance){
		throw new Error('You cant withdraw more than you have on the acount');
	}

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
		if( isNaN(accountSender.balance) || accountSender.balance === null || (isFinite(accountSender.balance)===false) || accountSender.balance === ""){
			throw new Error(`${accountSender.balance} account.balance must be a number`)
		}
	} else {
		throw new Error(`${account} missing key "balance"`)
	}

	if(accountReceiver.hasOwnProperty('name')){
		if( typeof accountReceiver.name !== 'string' || accountReceiver.name === ""){
			throw new Error(`${accountReceiver.name} account.name must be a string`)
		}
	} else {
		throw new Error(`${account} missing key "name"`)
	}
	if(accountReceiver.hasOwnProperty('balance')){
		if( isNaN(accountReceiver.balance) || accountReceiver.balance === null || (isFinite(accountReceiver.balance)===false) || accountReceiver.balance === ""){
			throw new Error(`${accountReceiver.balance} account.balance must be a number`)
		}
	} else {
		throw new Error(`${account} missing key "balance"`)
	}

	if( isNaN(amount) || amount === null || (isFinite(amount)===false) || amount === "" || (typeof amount === 'object')){
		throw new Error(`${amount} amount must be a valid number`)
	}

	if( amount <= 0 )
		throw new Error('Amount must be a positive number!');


	if( accountSender.balance < amount )
		throw new Error('Sender have not that kind of money :)');

  accountSender.balance -= amount;
  accountReceiver.balance += amount;
}


export {deposit, withdraw, transfer};
