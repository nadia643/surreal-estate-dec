import React from 'react';
import Alert from './alert';
import '../styles/add-property.css';

const axios = require('axios').default;

class AddProperty extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {
        title: '',
        type: 'Flat',
        city: 'Manchester',
        bedrooms: '',
        bathrooms: '',
        price: '',
        email: '',
      },
      alertMessage: '',
      isSuccess: false,
      isError: false,
    };
  }

  handleAddProperty = event => {
    const {
      fields: { title, type, city, bedrooms, bathrooms, price, email },
    } = this.state;
    event.preventDefault();
    console.log(this.state.fields);

    this.setState({
      alertMessage: '',
      isSuccess: false,
      isError: false,
    });
    axios
      .post('http://localhost:3000/api/v1/PropertyListing', {
        title,
        type,
        city,
        bedrooms,
        bathrooms,
        price,
        email,
      })

      .then(() =>
        this.setState({
          isSuccess: true,
          alertMessage: 'Property added.',
        }),
      )
      .catch(() => {
        this.setState({
          alertMessage: 'Server error. Please try again later.',
          isError: true,
        });
      });
  };

  handleFieldChange = event => {
    const { fields } = this.state;
    this.setState({
      fields: {
        ...fields,
        [event.target.name]: event.target.value,
      },
    });
  };

  render() {
    const {
      fields: { title, type, city, bedrooms, bathrooms, price, email },
    } = this.state;
    const { isSuccess, isError, alertMessage } = this.state;
    return (
      <div className="AddProperty">
      <h2> Add Property Page </h2>
          {isSuccess && <Alert message={alertMessage} success />}
          {isError && <Alert message={alertMessage} />}
          <form onSubmit={this.handleAddProperty}>
          <input name="title" value={title} onChange={this.handleFieldChange} placeholder="Title" />
          <div className="WholeForm">
            <div className="type">
              <select name="type" value={type} onChange={this.handleFieldChange}>
                <option value="Flat">Flat</option>
                <option value="Detached">Detached</option>
                <option value="Semi-detached">Semi-detached</option>
                <option value="Terraced">Terraced</option>
                <option value="End-of-terrace">End of Terrace</option>
                <option value="Cottage">Cottage</option>
                <option value="Bungalow">Bungalow</option>
              </select>
            </div>
            <div className="city">
              <select name="city" value={city} onChange={this.handleFieldChange}>
                <option value="Manchester">Manchester</option>
                <option value="Leeds">Leeds</option>
                <option value="Sheffield">Sheffield</option>
                <option value="Liverpool">Liverpool</option>
                <option value="London">London</option>
              </select>
            </div>
            <div className="bedrooms">
              <input
                name="bedrooms"
                value={bedrooms}
                onChange={this.handleFieldChange}
                placeholder="Bedrooms"
              />
            </div>
            <div className="bathrooms">
              <input
                name="bathrooms"
                value={bathrooms}
                onChange={this.handleFieldChange}
                placeholder="Bathrooms"
              />
            </div>
            <div className="price">
              <input
                name="price"
                value={price}
                onChange={this.handleFieldChange}
                placeholder="Price"
              />
              <div className="email">
                <input
                  name="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={this.handleFieldChange}
                />
              </div>
            </div>
          </div>
          <div className="button">
            <button type="submit">Add Property</button>
          </div>
        </form>
      </div>
    );
  }
}
export default AddProperty;
