
function toFahrenheit (degrees) {
  let highestSequreNumber = 9007199254740991;

  if(degrees === null || degrees === Number.POSITIVE_INFINITY || isNaN(degrees - 0) || degrees < -273.15){
    return NaN;
  }
  if( (degrees * (9/5)+32) > highestSequreNumber )
    return NaN;


  return degrees * (9/5) + 32.
}

export {toFahrenheit};
