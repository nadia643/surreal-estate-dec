import React from 'react';
import { Link } from 'react-router-dom';
import PropertyCard from './property-card';
import '../styles/properties.css';

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
    .then(response => this.setState({ properties: response.data }))
    .catch(err => console.error(err));
  }

  componentDidUpdate(prevProps) {
    const { location: { search } } = this.props;

    if (search !== prevProps.location.search) {
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
        {this.state.properties.map(property => (
          <PropertyCard
            key={property._id}
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
