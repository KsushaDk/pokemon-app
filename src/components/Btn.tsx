import React, { FC } from 'react';

type BtnProps = {
  btnValue: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

export const Btn: FC<BtnProps> = ({ btnValue, onClick }) => (
  <button className="btn" type="button" onClick={onClick}>
    {btnValue}
  </button>
);
