import React from 'react';

const Gradient = ({ children }: { children: string }) => {
  return (
    <b className='text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400'>
      {children}
    </b>
  );
};
export default Gradient;
