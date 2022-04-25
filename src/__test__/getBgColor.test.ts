import { getBgColor } from '@utils/getBgColor';

describe('GetBgColor:', () => {
  test('should get value: number', () => {
    expect(getBgColor(50)).toBeTruthy();
  });

  test('should return blue if value >= 40 and < 70', () => {
    expect(getBgColor(50)).toBe('rgb(116, 149, 249)');
  });

  test('should return green if value >= 70', () => {
    expect(getBgColor(85)).toBe('#4cc44e');
  });
});
