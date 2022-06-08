import { Evolution, PokInfo } from '@utils/types';

export type PokUrls = {
  name: string;
  url: string;
};

export type EvoUrls = {
  url: string;
};

export type Action = {
  type: string;
  payload: any;
};

export type ActionFetch = {
  type: string;
};

export const setLoading = (isLoading: boolean): Action => ({
  type: 'SET_LOADING',
  payload: isLoading,
});

export const setPokForSearch = (pokForSearch: string): Action => ({
  type: 'SET_POK_FOR_SEARCH',
  payload: pokForSearch,
});

export const setSearchedPokData = (searchedPokData: PokInfo): Action => ({
  type: 'SET_SEARCHED_POK_DATA',
  payload: searchedPokData,
});

export const setTypeForSearch = (typeForSearch: string): Action => ({
  type: 'SET_TYPE_FOR_SEARCH',
  payload: typeForSearch,
});

export const setSearchedTypesGroup = (
  searchedTypesGroup: PokInfo[]
): Action => ({
  type: 'SET_SEARCHED_TYPES_GROUP',
  payload: searchedTypesGroup,
});

export const getPokUrls = (): ActionFetch => ({
  type: 'GET_POK_URLS',
});

export const getEvoUrls = (): ActionFetch => ({
  type: 'GET_EVO_URLS',
});

export const setPokUrls = (pokUrls: [PokUrls]): Action => ({
  type: 'SET_POK_URLS',
  payload: pokUrls,
});

export const setEvoUrls = (evoUrls: [EvoUrls]): Action => ({
  type: 'SET_EVO_URLS',
  payload: evoUrls,
});

export const setPokData = (pokData: [PokInfo]): Action => ({
  type: 'SET_POK_DATA',
  payload: pokData,
});

export const setEvoGroup = (evoGroup: [Evolution]): Action => ({
  type: 'SET_EVO_GROUP',
  payload: evoGroup,
});
