import React from 'react';

const Container = ({ children }) => {
  console.log('Children prop:', children);

  return (
    <div>
      {children}
    </div>
  );
};

export default Container;