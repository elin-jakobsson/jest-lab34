
function toFahrenheit (degrees) {

  if(degrees === null || degrees === Number.POSITIVE_INFINITY || isNaN(degrees) || degrees < -273.15 || degrees === ''){
    return NaN;
  }

  return degrees * (9/5) + 32.
}

export {toFahrenheit};
