import React from 'react';
import ReactMd from '@src/components/react-md';
import demo from './demo.md';

const PageRouter: React.FC = () => {
  return (
    <div style={{ padding: '0 10px', background: '#1e1e1e' }}>
      <ReactMd markdown={demo} />
    </div>
  );
};

export default PageRouter;
