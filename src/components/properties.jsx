import React from 'react';
import PropertyCard from './property-card';

const axios = require('axios').default;

class Properties extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      properties: [],
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:3000/api/v1/PropertyListing')
      .then(({ data }) => this.setState({ properties: data }));
  }

  render() {
    return (
      <div className="Properties">
        {this.state.properties.map(property => (
          <PropertyCard
            key={property.id}
            price={property.price}
            title={property.title}
            bathrooms={property.bathrooms}
            bedrooms={property.bedrooms}
            type={property.type}
            email={property.email}
            city={property.city}
            />
            ))}
      </div>
    );
  }
}
export default Properties;
