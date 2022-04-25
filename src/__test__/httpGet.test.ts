import { httpGet } from '@utils/request';

const mockMyFunction = (global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ test: 1 }),
  })
) as jest.Mock);

beforeEach(() => {
  mockMyFunction.mockClear();
});

test('get resolve', async () => {
  const data = await httpGet('https://test.com');

  expect(data).not.toBeUndefined();
  expect(mockMyFunction).toHaveBeenCalledTimes(1);
});

test('get reject', async () => {
  mockMyFunction.mockImplementationOnce(() => Promise.reject('API is down'));

  const error = await httpGet('https://wrong-test');

  expect(error).toBe('API is down');
  expect(mockMyFunction).toHaveBeenCalledTimes(1);
});
