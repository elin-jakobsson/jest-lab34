
function canGetLicense(license, age) {

  const A = 'A';
  const B = 'B';
  const BE = 'BE'
  const C = 'C';
  const D = 'D';

  const validLicences = [A,B,BE,C,D];

  let trueLicence = false;
  let trueNumber = false;

  // kolla om kortet finns
  if (validLicences.includes(license)) {
    trueLicence = true;
  }else {
    throw new Error('The licence is not a valid type of licence');
    return false;
  }

  // kolla att åldern är en riktig siffra
  if (isNaN(age)===false) {
    trueNumber= true;
    if (typeof age === 'string') {
      let age = Number(age);
    }
  }else {
    throw new Error('The age is not a valid number');
    return false;
  }

  // körkort och ålter matchar
  if (trueLicence && trueNumber) {
    if ((license === A || license === D ) && 24 <= age && age <= 120) {
      return true;
    }else if ((license === B || license === BE ) && 18 <= age && age <= 120) {
      return true;
    }else if (license === C && 21 <= age && age <= 120) {
      return true;

    }else if ((license === A || license === D ) && 24 > age) { // Thow error meddelande om du är för ung
      throw new Error('To young for A or D license');
      return false;
    }else if ((license === B || license === BE ) && 18 > age) {
      throw new Error('To young for B or BE license');
      return false;
    }else if ((license === A || license === D ) && 24 > age) {
      throw new Error('To young for C license');
      return false;
    }else { // eller gör gammal
        throw new Error('To old to drive');
        return false;
    }
  }

// ANTECKNINGAR
// high order funktions är bätter att använda sig av att unvika problem, som fel med idex i en for loop. foreach utför samma jobb utan att du behöver skriva så mycket
// jest atumatiserar testerna för oss, och ger oss en rapport på de fel som de kan hitta.
// till toThrow måste man skicka med en arrow funktion för att toThrow ska kunna få tag på error meddelandet. en arrow funktion säger kör den här funktionen när du är redoa att ta emot.
// att testa tidigt gör så att du skriver bättre mer välplanerade funktioner

}

export { canGetLicense };
