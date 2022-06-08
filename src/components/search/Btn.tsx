import React, { FC } from 'react';

type BtnProps = {
  btnValue: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

export const Btn: FC<BtnProps> = (props) => {
  const { btnValue, onClick } = props;

  return (
    <button className="btn" type="button" onClick={onClick}>
      {btnValue}
    </button>
  );
};
