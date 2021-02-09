import React from 'react';
import ReactMd from '@src/components/react-md';
import readme from '@src/components/react-md/README.md';
import demo from './demo.md';
import style from './style.scss';

const RenderReadme: React.FC = () => {
  return (
    <div className={style.readme}>
      <ReactMd markdown={readme} />
    </div>
  );
};

export default RenderReadme;
