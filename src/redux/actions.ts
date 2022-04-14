import { Evolution, PokInfo } from '../utils/types';

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

export const setPokForSearch = (search: string): Action => ({
  type: 'SET_POK_FOR_SEARCH',
  payload: search,
});

export const setSearchedPokData = (searchedPokData: PokInfo): Action => ({
  type: 'SET_SEARCHED_POK_DATA',
  payload: searchedPokData,
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
