export const roundedToFixed = (float = 0, divider = 1, digits = 1) => {
  const numberToFix = float / divider;
  const rounder = Math.pow(10, digits);
  const rounded = (Math.round(numberToFix * rounder) / rounder).toFixed(digits);
  return rounded;
};

export const generateColor = (value) => {
  let color;
  if (value < 50) {
    color = 'red';
  } else if (value >= 50 && value < 70) {
    color = 'orange';
  } else if (value >= 70 && value < 80) {
    color = 'green';
  } else if (value >= 80) {
    color = 'blue';
  } else {
    color = 'default';
  }
  return color;
};
