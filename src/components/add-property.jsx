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
    event.preventDefault();
    console.log(this.state.fields);
    // this.setState({
    //   alertMessage: '',
    //   isSuccess: false,
    //   isError: false,
    // });
    axios
      .post('http://localhost:3000/api/v1/PropertyListing', {
        title: this.state.fields.title,
        type: this.state.fields.type,
        city: this.state.fields.city,
        bedrooms: this.state.fields.bedrooms,
        bathrooms: this.state.fields.bathrooms,
        price: this.state.fields.price,
        email: this.state.fields.email,
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
    this.setState({
      fields: {
        ...this.state.fields,
        [event.target.name]: event.target.value,
      },
    });
  };

  render() {
    return (
      <div>
        {this.state.isSuccess && <Alert message={this.state.alertMessage} success />}
        {this.state.isError && <Alert message={this.state.alertMessage} />}
        <div className="WholeForm">
          <div className="type">
            <select name="type" value={this.state.fields.type} onChange={this.handleFieldChange}>
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
            <select name="city" value={this.state.fields.city} onChange={this.handleFieldChange}>
              <option value="Manchester">Manchester</option>
              <option value="Leeds">Leeds</option>
              <option value="Sheffield">Sheffield</option>
              <option value="Liverpool">Liverpool</option>
            </select>
          </div>
          <div className="bedrooms">
            {' '}
            <input
              name="bedrooms"
              value={this.state.fields.bedrooms}
              onChange={this.handleFieldChange}
              placeholder="Bedrooms"
            />            {' '}
          </div>
          <div className="bathrooms">
            {' '}
            <input
              name="bathrooms"
              value={this.state.fields.bathrooms}
              onChange={this.handleFieldChange}
              placeholder="Bathrooms"
            />            {' '}
          </div>
          <div className="price">
            {' '}
            <input
              name="price"
              value={this.state.fields.price}
              onChange={this.handleFieldChange}
              placeholder="Price"
            />
            <div className="email">
              <input
                name="email"
                placeholder="Email Address"
                value={this.state.fields.email}
                onChange={this.handleFieldChange}
              />
            </div>            {' '}
          </div>
        </div>
        <div className="AddProperty">
          <form onSubmit={this.handleAddProperty}>
            <input name="title" value={this.state.fields.title} onChange={this.handleFieldChange} />
            <div className="button">
              <button type="submit">Add</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
export default AddProperty;
