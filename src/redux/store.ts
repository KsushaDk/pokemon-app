import { createStore } from 'redux';

import { pokemonsReducers } from './pokemonsReducers';

export const store = createStore(pokemonsReducers);
