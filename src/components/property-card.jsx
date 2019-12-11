import React from 'react';
import '../styles/property-card.css';

const PropertyCard = props => {
    return (
    <div className="property-card">
      <div id="picture">
        <img
          id="house"
          src="../images/171-1716279_homes-vector-tiny-house-small-house-clip-art.png.jpeg"
          width="80"
          height="80"
          alt="small house img should be here"
        />
      </div> <br />
      <div className="title">Title: {props.title}</div>
      <br />
      <div className="type">Type: {props.type}</div>
      <br />
      <div className="price">
        £:
        {props.price}
      </div>
      <br />
      <div className="location">
        Location:
        {props.city}
      </div>
      <br />
      <div className="bedrooms">
Bedrooms:
{props.bedrooms}
 </div>
      <br />
      <div className="bathrooms">
Bathrooms:
{props.bathrooms}
 </div>
      <br />
      <div className="contact">
Email:
{props.email}
 </div>
    </div>
  );
};

export default PropertyCard;
