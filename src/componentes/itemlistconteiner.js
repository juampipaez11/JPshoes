import React from 'react';

const ItemListContainer = ({ greeting }) => {
  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>{greeting}</h2>
      <p style={paragraphStyle}>Esta es una tienda de ventas de zapatillas</p>
    </div>
  );
};

const containerStyle = {
  backgroundColor: '#f0f0f0',
  padding: '20px',
  borderRadius: '8px',
  textAlign: 'center',
};

const headingStyle = {
  fontSize: '24px',
  color: 'blue',
};

const paragraphStyle = {
  fontSize: '16px',
};

export default ItemListContainer;
