import React, { FC } from 'react';
import { DisplayList } from './components/DisplayList';
import './style.css';

export const App: FC = () => (
  <div className="app">
    <DisplayList />
  </div>
);
