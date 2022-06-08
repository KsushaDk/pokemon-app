import React, { FC } from 'react';

import { PokSearchSection } from './PokSearchSection';
import { TypesSearchSection } from './TypesSearchSection';

export const SearchSection: FC = () => {
  return (
    <header className="header">
      <PokSearchSection />

      <TypesSearchSection />
    </header>
  );
};
