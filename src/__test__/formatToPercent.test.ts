import { formatToPercent } from '@utils/formatToPercent';

describe('FormatToPercent:', () => {
  test('should receive truthe value', () => {
    expect(formatToPercent(23)).toBeTruthy();
  });

  test('should return value in %', () => {
    expect(formatToPercent(42)).toBe('42%');
  });

  test('should return 99% if value >= 100', () => {
    expect(formatToPercent(123)).toBe('99%');
  });
});
