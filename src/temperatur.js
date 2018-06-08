
function toFahrenheit(cel=undefined){

  if (isNaN(cel) || isFinite(cel)===false || cel=== '' || cel === null) {
    return NaN;
  }else {
    let num = cel;
    if (typeof num === 'string') {
      num = Number(num);
    }
    if (num >= -273.15) {
      let far = cel * 9/5 + 32;
      return far;
    }else {
      return NaN;
    }
  }
}

export { toFahrenheit };
