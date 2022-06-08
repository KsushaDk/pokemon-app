import React, { FC } from 'react';
import { useDispatch } from 'react-redux';

import { setPokForSearch, setTypeForSearch } from '@redux/actions/actions';

type DatalistProps = {
  datainfo: string[];
  id: string;
};

export const Datalist: FC<DatalistProps> = ({ datainfo, id }) => {
  const dispatch = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (id === 'type') {
      dispatch(setTypeForSearch(e.target.options[e.target.selectedIndex].text));
    } else {
      dispatch(setPokForSearch(e.target.options[e.target.selectedIndex].text));
    }
  };

  return (
    <select className="select" id={id} onChange={handleChange}>
      {datainfo.map((item) => (
        <option value={item} key={item}>
          {item}
        </option>
      ))}
    </select>
  );
};
