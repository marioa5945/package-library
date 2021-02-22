import React from 'react';
import { ReactMD } from '@packages';
import readme from '@packages/import-lodash-loader/README.md';

const RenderReadme: React.FC = () => {
  return (
    <div className={'readme'}>
      <ReactMD markdown={readme} />
    </div>
  );
};

const DemoPage: React.FC = () => {
  const obj = {
    a: {
      b: '1',
    },
  };

  console.log(_.get(obj, 'a.b'));

  return <RenderReadme />;
};

export default DemoPage;
