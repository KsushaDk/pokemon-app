import React, { FC } from 'react';

export const DisplayStats: FC = () => (
  <section className="item__stats">
    <h2>Base stats</h2>
    <dl className="dl-lined">
      <dt>HP</dt>
      <dd>
        <span>33</span>
        <input
          type="range"
          name="HP"
          min="1"
          max="10"
          step="1"
          value="5"
          readOnly
        />
      </dd>

      <dt>Attack</dt>
      <dd>
        <span>55</span>
        <input
          type="range"
          name="attack"
          min="1"
          max="10"
          step="1"
          value="5"
          readOnly
        />
      </dd>

      <dt>Defence</dt>
      <dd>
        <span>40</span>
        <input
          type="range"
          name="defence"
          min="1"
          max="10"
          step="1"
          value="5"
          readOnly
        />
      </dd>

      <dt>Sp. Atk</dt>
      <dd>
        <span>50</span>
        <input
          type="range"
          name="sp.atk"
          min="1"
          max="10"
          step="1"
          value="5"
          readOnly
        />
      </dd>

      <dt>Sp. Def</dt>
      <dd>
        <span>50</span>
        <input
          type="range"
          name="sp.def"
          min="1"
          max="10"
          step="1"
          value="5"
          readOnly
        />
      </dd>

      <dt>Speed</dt>
      <dd>
        <span>90</span>
        <input
          type="range"
          name="speed"
          min="1"
          max="10"
          step="1"
          value="5"
          readOnly
        />
      </dd>
    </dl>
  </section>
);
