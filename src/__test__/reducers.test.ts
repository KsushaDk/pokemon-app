import { pokemonsReducers } from '@redux/reducers/pokemonsReducers';

describe('PokemonsRedusers', () => {
  const testInitialState = {
    isLoading: true,
    pokForSearch: '',
    typeForSearch: '',
    searchedPokData: null,
    searchedTypesGroup: [],
    pokUrls: [],
    evoUrls: [],
    pokData: [],
    evoGroup: [],
  };

  test('return the initial state if action is undefined', () => {
    return expect(
      pokemonsReducers(testInitialState, {
        type: '',
        payload: undefined,
      })
    ).toEqual(testInitialState);
  });

  test('return a new state if action type is SET_LOADING', () => {
    return expect(
      pokemonsReducers(testInitialState, {
        type: 'SET_LOADING',
        payload: true,
      })
    ).toEqual({ ...testInitialState, isLoading: true });
  });

  test('return a new state if action type is SET_TYPE_FOR_SEARCH', () => {
    return expect(
      pokemonsReducers(testInitialState, {
        type: 'SET_TYPE_FOR_SEARCH',
        payload: 'ground',
      })
    ).toEqual({ ...testInitialState, typeForSearch: 'ground' });
  });

  test('return a new state if action type is SET_POK_FOR_SEARCH', () => {
    return expect(
      pokemonsReducers(testInitialState, {
        type: 'SET_POK_FOR_SEARCH',
        payload: 'pikachu',
      })
    ).toEqual({ ...testInitialState, pokForSearch: 'pikachu' });
  });
});
