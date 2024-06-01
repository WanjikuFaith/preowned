import React from 'react';
import './ProductCard.css';

const ProductCard = ({ image, title, description, price }) => {
  return (
    <div className="product-card">
      <img src={image} alt={title} className="product-image" />
      <div className="product-details">
        <h2 className="product-title">{title}</h2>
        <p className="product-description">{description}</p>
        <p className="product-price">Ksh. {price}</p>
        <button className="shop-now-button">Shop Now</button>
      </div>
    </div>
  );
};

export default ProductCard;
