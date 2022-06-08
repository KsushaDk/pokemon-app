import React, { FC } from 'react';

type TypeDataProps = {
  type: string;
};

export const TypeData: FC<TypeDataProps> = ({ type }) => {
  return (
    <span className={`type_font-style ${type}`} key={type}>
      {type}
    </span>
  );
};
