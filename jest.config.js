/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: [
    'C:/Users/gladn/OneDrive/Рабочий стол/pokemon-app/src/__test__/config/importJestDOM.ts',
  ],
  moduleNameMapper: {
    '@components/(.*)': [
      'C:/Users/gladn/OneDrive/Рабочий стол/pokemon-app/src/components/$1',
    ],
    '@pages/(.*)': [
      'C:/Users/gladn/OneDrive/Рабочий стол/pokemon-app/src/pages/$1',
    ],
    '@utils/(.*)': [
      'C:/Users/gladn/OneDrive/Рабочий стол/pokemon-app/src/utils/$1',
    ],
    '@redux/(.*)': [
      'C:/Users/gladn/OneDrive/Рабочий стол/pokemon-app/src/redux/$1',
    ],
    '\\.(css|less|sass|scss)$':
      'C:/Users/gladn/OneDrive/Рабочий стол/pokemon-app/src/__test__/__mocks__/styleMock.js',
    '\\.(gif|ttf|eot|svg)$':
      'C:/Users/gladn/OneDrive/Рабочий стол/pokemon-app/src/__test__/__mocks__/fileMock.js',
  },
};
