import React, { FC, useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { DisplayItem } from './DisplayItem';
import { DisplayBasicData } from './DisplayBasicData';
import { Data, Response } from '../types/types';

type DisplaySectionProps = {
  data: Data;
};

const DisplaySection: FC<DisplaySectionProps> = ({ data }) => {
  const [pokData, setPokData] = useState<any>([]);

  useEffect(() => {
    data.results.forEach((pok) =>
      fetch(pok.url)
        .then((resp) => resp.json())
        .then((result) => {
          setPokData((prevState: any) => [...prevState, result]);
        })
        .catch((error) => {
          console.error(error);
        })
    );
  }, []);

  return (
    <main className="main">
      <Routes>
        <Route
          path="/"
          element={
            <section className="item__data-basic">
              {pokData.map((pok: Response) => (
                <DisplayBasicData pok={pok} key={pok.id} />
              ))}
            </section>
          }
        />
        <Route
          path="/pokemon/:id"
          element={
            <>
              {pokData.map((item: Response) => (
                <DisplayItem data={item} key={item.id} />
              ))}
            </>
          }
        />
      </Routes>
    </main>
  );
};

export default DisplaySection;
