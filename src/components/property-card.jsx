import React from 'react';
import '../styles/property-card';

const PropertyCard = props => {
  return (
    <div className="property-card">
      <div className="title">{props.title}</div>
    </div>
  );
};

export default PropertyCard;
