export const toUpperCaseFunc = (str: string) => {
  if (!str) return str;

  if (str === 'hp') {
    return str[0].toUpperCase() + str[1].toUpperCase();
  }
  return str[0].toUpperCase() + str.slice(1);
};
