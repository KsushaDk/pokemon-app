import { toUpperCaseFunc } from '@utils/toUpperCaseFunc';

describe('ToUpperCaseGunc:', () => {
  test('should get truthy value', () => {
    expect(toUpperCaseFunc('pikachu')).toBeTruthy();
  });

  test('should return the first letter in upper case', () => {
    expect(toUpperCaseFunc('pikachu')).toBe('Pikachu');
  });

  test('should return HP when receive hp', () => {
    expect(toUpperCaseFunc('hp')).toBe('HP');
  });
});
