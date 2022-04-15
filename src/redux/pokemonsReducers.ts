import { PokInfo, Evolution } from '../utils/types';
import { Action, EvoUrls, PokUrls } from './actions';

export interface IPoksState {
  isLoading: boolean;
  search: string;
  searchedPokData: PokInfo | null;
  pokUrls: PokUrls[];
  evoUrls: EvoUrls[];
  pokData: PokInfo[];
  evoGroup: Evolution[];
}

const initialState = {
  isLoading: true,
  search: '',
  searchedPokData: null,
  pokUrls: [],
  evoUrls: [],
  pokData: [],
  evoGroup: [],
};

export const pokemonsReducers = (
  state: IPoksState = initialState,
  action: Action
) => {
  switch (action.type) {
    case 'SET_LOADING': {
      return { ...state, isLoading: action.payload };
    }
    case 'SET_POK_FOR_SEARCH': {
      return { ...state, search: action.payload };
    }
    case 'SET_SEARCHED_POK_DATA': {
      return { ...state, searchedPokData: action.payload };
    }
    case 'SET_POK_URLS': {
      return { ...state, pokUrls: [...action.payload] };
    }
    case 'SET_EVO_URLS': {
      return { ...state, evoUrls: [...action.payload] };
    }
    case 'SET_POK_DATA': {
      return { ...state, pokData: [...state.pokData, action.payload] };
    }
    case 'SET_EVO_GROUP': {
      return { ...state, evoGroup: [...state.evoGroup, action.payload] };
    }
    default:
      return state;
  }
};
