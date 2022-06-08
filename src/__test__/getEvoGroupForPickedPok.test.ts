import { getEvoGroupForPickedPok } from '@utils/getEvoGroupForPickedPok';
import { PokInfoTest } from '@utils/types';
import { fakePokData, falsyPokData, group, groupResult } from './constants';

const pok: PokInfoTest = fakePokData;
const falsyPok: PokInfoTest = falsyPokData;

describe('GetEvoGroupForPickedPok:', () => {
  test('should return object', () => {
    expect(getEvoGroupForPickedPok(group, pok)).toEqual(groupResult);
  });

  test('should return false if no congruences', () => {
    expect(getEvoGroupForPickedPok(group, falsyPok)).toBeFalsy();
  });
});
