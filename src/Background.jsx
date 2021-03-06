import React from 'react';

const Background = ({ onClick }) => {
  return <div className="backdrop" onClick={onClick}></div>;
};

export default Background;
