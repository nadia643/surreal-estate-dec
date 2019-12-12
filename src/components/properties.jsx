import React from 'react';
import { Link } from 'react-router-dom';
import PropertyCard from './property-card';
import '../styles/properties.css';
import '../styles/property-card.css';

const axios = require('axios').default;

class Properties extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      properties: [],
      error: false,
    };
  }

  componentDidMount() {
    axios.get('http://localhost:3000/api/v1/PropertyListing')
      .then(({ data: properties }) => this.setState({ properties }))
      .catch(err => console.error(err));
  }

  componentDidUpdate(prevProps) {
    const { search } = this.props.location;
    
    if (prevProps.location.search !== search) {
    axios.get(`http://localhost:3000/api/v1/PropertyListing${search}`)
      .then(({ data: properties }) => this.setState({ properties }))
      .catch(err => console.error(err));
  }
}


  render() {
    return (
      <div className="Properties">
        <div id="sidebar">
          <h2> Filter By:</h2>
          <Link to={'/?query={"city": "Manchester"}'}>Manchester</Link>
          <br />
          <Link to={'/?query={"city": "Leeds"}'}>Leeds</Link>
          <br />
          <Link to={'/?query={"city": "Sheffield"}'}>Sheffield</Link>
          <br />
          <Link to={'/?query={"city": "Liverpool"}'}>Liverpool</Link>
        </div>
        <div class="main"> 
        {this.state.properties.map(property => (
        <div key={property._id} className="property">
          <PropertyCard
            key={property._id}
            title={property.title}
            type={property.type}
            price={property.price}
            city={property.city}
            bedrooms={property.bedrooms}
            bathrooms={property.bathrooms}
            email={property.email}
          />
          </div>
        ))}
        </div>
      </div>
    );
  }
}
export default Properties;
