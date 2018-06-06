
function toFahrenheit(cel=undefined){

  if (isNaN(cel) || isFinite(cel)===false || cel=== '') {
    return NaN;
  }else {
    let num = Number(cel);
    if (num >= -273.15) {
      let far = cel * 9/5 + 32;
      return far;
    }else {
      return NaN;
    }
  }
}

export { toFahrenheit };
