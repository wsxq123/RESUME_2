//單位換算器
const unitConverter = (
  targetUnitType: string,
  currentUnit: number,
  currentUnitType: string
) => {
  //   console.log('Into unitConverter');
  if (currentUnitType === 'ml' && targetUnitType === 'l') {
    return currentUnit / 1000;
  }
  if (currentUnitType === 'l' && targetUnitType === 'ml') {
    return currentUnit * 1000;
  }
  if (currentUnitType === 'kg' && targetUnitType === 'g') {
    return currentUnit * 1000;
  }
  if (currentUnitType === 'g' && targetUnitType === 'kg') {
    return currentUnit / 1000;
  }
  if (currentUnitType === 'lb' && targetUnitType === 'oz') {
    return currentUnit * 16;
  }
  if (currentUnitType === 'oz' && targetUnitType === 'lb') {
    return currentUnit / 16;
  }
  if (currentUnitType === 'kg' && targetUnitType === 'lb') {
    return currentUnit * 2.20462;
  }
  if (currentUnitType === 'lb' && targetUnitType === 'kg') {
    return currentUnit / 2.20462;
  }
  if (currentUnitType === 'kg' && targetUnitType === 'oz') {
    return currentUnit * 35.274;
  }
  if (currentUnitType === 'oz' && targetUnitType === 'kg') {
    return currentUnit / 35.274;
  }
  if (currentUnitType === 'g' && targetUnitType === 'oz') {
    return currentUnit * 0.035274;
  }
  if (currentUnitType === 'oz' && targetUnitType === 'g') {
    return currentUnit / 0.035274;
  }
  if (currentUnitType === 'lb' && targetUnitType === 'g') {
    return currentUnit * 453.592;
  }
  if (currentUnitType === 'g' && targetUnitType === 'lb') {
    return currentUnit / 453.592;
  }
  console.log('currentUnit: ' + currentUnit);
  return currentUnit;
};

export default unitConverter;
