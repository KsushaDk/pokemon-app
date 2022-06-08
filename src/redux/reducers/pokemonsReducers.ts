import { PokInfo, Evolution } from '@utils/types';
import { Action, EvoUrls, PokUrls } from '../actions/actions';

export interface IPoksState {
  isLoading: boolean;
  pokForSearch: string;
  typeForSearch: string;
  searchedPokData: PokInfo | null;
  searchedTypesGroup: PokInfo[];
  pokUrls: PokUrls[];
  evoUrls: EvoUrls[];
  pokData: PokInfo[];
  evoGroup: Evolution[];
}

const initialState = {
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

export const pokemonsReducers = (
  state: IPoksState = initialState,
  action: Action
) => {
  switch (action.type) {
    case 'SET_LOADING': {
      return { ...state, isLoading: action.payload };
    }
    case 'SET_POK_FOR_SEARCH': {
      return { ...state, pokForSearch: action.payload };
    }
    case 'SET_TYPE_FOR_SEARCH': {
      return { ...state, typeForSearch: action.payload };
    }
    case 'SET_SEARCHED_POK_DATA': {
      return { ...state, searchedPokData: action.payload };
    }
    case 'SET_SEARCHED_TYPES_GROUP': {
      return {
        ...state,
        searchedTypesGroup: [...action.payload],
      };
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
