import React, { useState } from 'react';
import ProductOptions from '../Product/ProductOptions';
import './BrandTile.css';

const BrandTile = ({ brand, themeColor }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = ['PCA', 'Card', 'Loan', 'Mortgage'];

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  return (
    <div className="brand-tile" style={{ borderColor: themeColor, backgroundColor: themeColor + '22' }}>
      <img src={brand.logo} alt={`${brand.name} logo`} className="brand-logo" />
      <h2>{brand.name}</h2>
      <div className="products">
        {products.map((product) => (
          <button key={product} onClick={() => handleProductClick(product)} className="product-button">
            {product}
          </button>
        ))}
      </div>
      {selectedProduct && (
        <ProductOptions
          product={selectedProduct}
          brand={brand.name}
          themeColor={themeColor}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
  );
};

export default BrandTile;
