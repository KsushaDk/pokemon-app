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

export const setPokUrls = (pokUrls: [PokUrls]): Action => ({
  type: 'SET_POK_URLS',
  payload: pokUrls,
});

export const setEvoUrls = (evoUrls: [EvoUrls]): Action => ({
  type: 'SET_EVO_URLS',
  payload: evoUrls,
});
