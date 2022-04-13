import { Action, EvoUrls, PokUrls } from './actions';

export interface PoksState {
  search: string;
  pokUrls: PokUrls[];
  evoUrls: EvoUrls[];
}

const initialState = {
  search: '',
  pokUrls: [],
  evoUrls: [],
};

export const pokemonsReducers = (
  state: PoksState = initialState,
  action: Action
) => {
  switch (action.type) {
    case 'SET_POK_FOR_SEARCH': {
      return { ...state, search: action.payload };
    }
    case 'SET_POK_URLS': {
      return { ...state, pokUrls: [...action.payload] };
    }
    case 'SET_EVO_URLS': {
      return { ...state, evoUrls: [...action.payload] };
    }
    default:
      return state;
  }
};
