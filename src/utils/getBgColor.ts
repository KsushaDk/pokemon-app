export const getBgColor = (value: number) => {
  if (value >= 40 && value < 70) {
    return 'rgb(116, 149, 249)';
  }
  if (value >= 70) {
    return '#4cc44e';
  }
};
