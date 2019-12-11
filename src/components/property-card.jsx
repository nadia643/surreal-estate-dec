import React from 'react';
import '../styles/property-card.css';

const PropertyCard = ({ _id, title, type, price, city, bedrooms, bathrooms, email }) => {
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
      <div className="title">Title: {title}</div>
      <br />
      <div className="type">Type: {type}</div>
      <br />
      <div className="price">£:{price}
      </div>
      <br />
      <div className="location">Location:{city}
      </div>
      <br />
      <div className="bedrooms">Bedrooms: {bedrooms}
      </div>
      <br />
      <div className="bathrooms">Bathrooms:{bathrooms}
       </div>
      <br />
      <div className="contact">Email:{email}
      </div>
    </div>
  );
};

export default PropertyCard;
