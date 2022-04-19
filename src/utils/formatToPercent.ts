export const formatToPercent = (value: number) => {
  if (value >= 100) return '99%';
  return `${value}%`;
};
