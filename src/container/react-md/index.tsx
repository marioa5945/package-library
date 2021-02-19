import React from 'react';
import { ReactMD } from '@packages';
import readme from '@packages/react-md/README.md';
import style from './style.scss';

const RenderReadme: React.FC = () => {
  return (
    <div className={style.readme}>
      <ReactMD markdown={readme} />
    </div>
  );
};

export default RenderReadme;
