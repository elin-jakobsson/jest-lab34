const A = "A";
const B  = "B";
const BE = "BE"
const C = "C";
const D = "D";

let canGetLicense = (license, age) => {
  if(typeof age === "string")
    age = age - 0;


  if(!license || !age){
    throw new Error('missing parameters or parameters is not defined')
  } else if ( typeof license !== 'string') {
    throw new Error('input parameter license is wrong!')
  } else if ( typeof age !== 'number') {
    throw new Error('input parameter age is wrong!')
  }

  if(age > 120){
    throw new Error('input parameter age is to high, max 120, To old to drive')
  }

  let driverObj = {
    A : ()=> age>=24,
    B : ()=> age>=18,
    BE : ()=> age>=18,
    C : ()=> age>=21,
    D : ()=> age>=24
  }
  license = license.toUpperCase();
  if(license in driverObj){
    return driverObj[license]()
  } else {
    throw new Error('license is not avavible')
  }
}


export { canGetLicense };
