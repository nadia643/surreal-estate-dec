import React from 'react';
import '../styles/property-card.css';

const PropertyCard = props => {
  const { type, price } = props;
  return (
    <div className="property-card">
      <span id="title">{props.title}</span>
      <div id="picture">
        <img
          id="house"
          src="../images/171-1716279_homes-vector-tiny-house-small-house-clip-art.png.jpeg"
          width="80"
          height="80"
          alt="small house img should be here"
        />
      </div>
      <span>{type}</span>
      <br />
      <span>
        £:
        {price}
      </span>
      <br />
      <span>
        Location:
        {props.city}
      </span>
      <br />
      <span>
Bedrooms:
{' '}
{props.bedrooms}
{' '}
 </span>
      <br />
      <span>
Bathrooms:
{' '}
{props.bathrooms}
{' '}
 </span>
      <br />
      <span>
Contact:
{' '}
{props.email}
{' '}
 </span>
    </div>
  );
};

export default PropertyCard;
