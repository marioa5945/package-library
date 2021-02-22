import React from 'react';
import { ReactMD } from '@packages';
import readme from '@packages/react-md/README.md';

const RenderReadme: React.FC = () => {
  return (
    <div className={'readme'}>
      <ReactMD markdown={readme} />
    </div>
  );
};

export default RenderReadme;
