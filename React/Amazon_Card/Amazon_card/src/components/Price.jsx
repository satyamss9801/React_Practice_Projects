import React from 'react';

const Price = ({ amount }) => {
  return (
    <div className="price">
      <h3>Price: ${amount}</h3>
    </div>
  );
};

export default Price;
