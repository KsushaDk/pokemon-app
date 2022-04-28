import { httpGet } from '@utils/request';

const mockFetch = (global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ test: 1 }),
  })
) as jest.Mock);

beforeEach(() => {
  mockFetch.mockClear();
});

test('get resolve', async () => {
  const data = await httpGet('https://test.com');

  expect(data).not.toBeUndefined();
  expect(mockFetch).toHaveBeenCalledTimes(1);
});

test('get reject', async () => {
  mockFetch.mockImplementationOnce(() => Promise.reject('API is down'));

  const error = await httpGet('https://wrong-test');

  expect(error).toBe('API is down');
  expect(mockFetch).toHaveBeenCalledTimes(1);
});
