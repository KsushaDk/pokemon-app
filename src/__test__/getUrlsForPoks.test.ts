import { getUrlsForPoks } from '@utils/getUrlsForPoks';
import {
  allFakeUrls,
  fakeGroupResult,
  fakeUrls,
  groupResult,
} from './constants';

describe('GetUrlsForPoks:', () => {
  test('should return undefined if name doesnt exist', () => {
    expect(getUrlsForPoks(fakeGroupResult)).toEqual(fakeUrls);
  });

  test('should return object', () => {
    expect(getUrlsForPoks(groupResult)).toEqual(allFakeUrls);
  });
});
