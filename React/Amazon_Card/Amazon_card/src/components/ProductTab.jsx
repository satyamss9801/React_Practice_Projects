import React, { useState } from 'react';
import Product from './Product';
import Price from './Price';

const ProductTab = ({ productIndex = 0 }) => {
  const titles = [
    "Sample Product 1",
    "Sample Product 2",
    "Sample Product 3"
  ];
  const descriptions = [
    "This is the first product description",
    "This is the second product description",
    "This is the third product description"
  ];
  const prices = [
    99.99,
    149.99,
    199.99
  ];

  const product = {
    title: titles[productIndex],
    description: descriptions[productIndex],
    price: prices[productIndex]
  };

  return (
    <div className="product-tab">
      <Product title={product.title} description={product.description} />
      <Price amount={product.price} />
    </div>
  );
};


export default ProductTab;
